from flask import Flask, request, jsonify
import os
import pandas as pd
import pickle
from flask_cors import CORS
import logging
import numpy as np
import base64
import cv2
from deepface import DeepFace
from flask import jsonify

app = Flask(__name__)
CORS(app)


CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
CORS(app, resources={r"/FacialRecognition": {"origins": "http://localhost:3000"}})
CORS(app, resources={r"/chatPage": {"origins": "http://localhost:3000"}})

@app.route('/')
def home():
   return "CORS enabled"



logging.basicConfig(level=logging.DEBUG)

MODEL_DIR = r'C:\Users\Hp\PycharmProjects\emotionanalyzer\models'
TFIDF_PICKLE = os.path.join(MODEL_DIR, 'tfidf_vectorizer.pkl')
MODEL_PICKLE = os.path.join(MODEL_DIR, 'logistic_model.pkl')
RECOMMENDATION_FILE = os.path.join(MODEL_DIR, 'recommendations.csv')

with open(TFIDF_PICKLE, 'rb') as file:
   tfidf = pickle.load(file)


with open(MODEL_PICKLE, 'rb') as file:
   model = pickle.load(file)

recommendations_df = pd.read_csv(RECOMMENDATION_FILE)

def get_recommendations(emotion):
   emotion = emotion.lower()

   emotion_map = {
       'happy': 'happiness',
       'sad': 'sadness',
       'angry': 'anger',
       'fear': 'worry',
       'disgust': 'hate',
       'surprise': 'surprise',
       'neutral': 'neutral'
   }



   normalized_emotion = emotion_map.get(emotion, emotion)



   recommendations = recommendations_df[recommendations_df['emotion'] == normalized_emotion]['recommendation'].tolist()


   if not recommendations:
       return ['neutral']
   return (recommendations)




@app.route('/chatPage', methods=['POST'])


def analyze_text():
   data = request.json
   logging.debug(f"Received text from frontend: {data}")


   if not data or 'text' not in data:
       return jsonify({"error": "Invalid input, 'text' key missing"}), 400


   text = data['text']
   if not text.strip():
       return jsonify({"error": "Input text cannot be empty"}), 400



   vectorized_text = tfidf.transform([text])
   predicted_emotion = model.predict(vectorized_text)[0]



   recommendations = get_recommendations(predicted_emotion)


   logging.debug(f"Predicted emotion: {predicted_emotion}")
   logging.debug(f"Recommendations: {recommendations}")


   return jsonify({"emotion": predicted_emotion, "recommendations": recommendations})






@app.route('/FacialRecognition', methods=['POST'])
def facial_recognition():
   try:
       # Get the base64-encoded image data from the request
       image_data = request.json.get('image')
       if not image_data:
           return jsonify({"error": "No image data provided"}), 400



       img_data = base64.b64decode(image_data)
       nparr = np.frombuffer(img_data, np.uint8)
       frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)


       if frame is None:
           return jsonify({"error": "Failed to decode the image"}), 400



       analysis = DeepFace.analyze(img_path=frame, actions=['emotion'], enforce_detection=False)


       if isinstance(analysis, list):
           analysis = analysis[0]


       primary_emotion = analysis['dominant_emotion']



       recommendations = get_recommendations(primary_emotion)


       return jsonify({
           "emotion": primary_emotion,
           "recommendations": recommendations
       }), 200


   except Exception as e:
       logging.error(f"Unexpected error during emotion analysis: {e}")
       return jsonify({"error": "Internal server error occurred."}), 500


if __name__ == '__main__':
   app.run(port=5000, debug=True)


