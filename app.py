from flask import Flask, request, jsonify
import os
import pandas as pd
from deepface import DeepFace
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Paths to models and dataset
MODEL_DIR = r'C:\Users\Hp\PycharmProjects\emotionanalyzer\models'
CSV_FILE = os.path.join(MODEL_DIR, 'tweet_emotions.csv')  # Path to dataset for text analysis
RECOMMENDATION_FILE = os.path.join(MODEL_DIR, 'recommendations.csv')  # Path to recommendation CSV

# Load dataset and recommendations CSV
data = pd.read_csv(CSV_FILE)
recommendations_df = pd.read_csv(RECOMMENDATION_FILE)

# Load the pre-trained text models (TF-IDF vectorizer and Logistic Regression)
# Assuming you have the vectorizer and model already in memory from your previous training
tfidf = TfidfVectorizer(max_features=5000)
model = LogisticRegression()






# Function to get recommendations based on emotion
def get_recommendations(emotion):
    recommendations = recommendations_df[recommendations_df['emotion'] == emotion]['recommendation'].tolist()
    if not recommendations:
        return ['Stay positive!']  # Default if no recommendation found
    return recommendations


# Facial emotion analysis logic
def analyze_face(image_path):
    try:
        # Analyze the uploaded image for emotion using DeepFace
        analysis = DeepFace.analyze(img_path=image_path, actions=['emotion'], enforce_detection=False)
        if isinstance(analysis, list):
            analysis = analysis[0]
        primary_emotion = analysis['dominant_emotion']
        return primary_emotion
    except Exception as e:
        print(f"Error analyzing face: {e}")
        return None


# Route for text-based sentiment analysis
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/analyze-text', methods=['POST'])
def analyze_text():
    # Parse JSON from request
    data = request.json
    if not data or 'text' not in data:
        return jsonify({"error": "Invalid input, 'text' key missing"}), 400

    text = data['text']
    if not text.strip():
        return jsonify({"error": "Input text cannot be empty"}), 400

    # Dummy response for testing
    return jsonify({"message": f"Received: {text}"})



# Route for facial emotion analysis
@app.route('/analyze-face', methods=['POST'])
def analyze_face_route():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    image_path = os.path.join(MODEL_DIR, 'uploaded_image.jpg')
    file.save(image_path)

    # Get the detected emotion from facial analysis
    detected_emotion = analyze_face(image_path)

    # If facial analysis fails, return recommendations based on text only
    if detected_emotion:
        recommendations = get_recommendations(detected_emotion)
    else:
        # Fallback to text-based recommendations
        recommendations = get_recommendations('neutral')  # Default to neutral recommendations

    # Clean up saved image
    os.remove(image_path)

    return jsonify({'recommendations': recommendations})


# Start the Flask app
if __name__ == '__main__':
    app.run(debug=True)
