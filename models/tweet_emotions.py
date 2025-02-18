import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
import re
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report
import pickle


data = pd.read_csv('tweet_emotions.csv')


def clean_tweet(text):
    text = text.lower()
    text = re.sub(r'http\S+|www\S+|https\S+', '', text, flags=re.MULTILINE)
    text = re.sub(r'@\w+', '', text)
    text = re.sub(r'#', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text


data['Cleaned_Content'] = data['content'].apply(clean_tweet)


tfidf = TfidfVectorizer(max_features=5000)
X_tfidf = tfidf.fit_transform(data['Cleaned_Content'])


with open('tfidf_vectorizer.pkl', 'wb') as file:
    pickle.dump(tfidf, file)


X_train, X_test, y_train, y_test = train_test_split(X_tfidf, data['sentiment'], test_size=0.2, random_state=42)


model = LogisticRegression()
model.fit(X_train, y_train)


with open('logistic_model.pkl', 'wb') as file:
    pickle.dump(model, file)


y_pred = model.predict(X_test)


print(f'Accuracy: {accuracy_score(y_test, y_pred):.2f}')
print(classification_report(y_test, y_pred))


def predict_sentiment(input_text):
    if not input_text.strip():
        return "Error: Input text is empty. Please provide valid text."
    cleaned_text = clean_tweet(input_text)
    with open('tfidf_vectorizer.pkl', 'rb') as file:
        loaded_tfidf = pickle.load(file)
    with open('logistic_model.pkl', 'rb') as file:
        loaded_model = pickle.load(file)
    input_tfidf = loaded_tfidf.transform([cleaned_text])
    prediction = loaded_model.predict(input_tfidf)
    return prediction[0]


if __name__ == "__main__":
    input_text = input("Enter your text: ")
    predicted_sentiment = predict_sentiment(input_text)
    print(f"The predicted sentiment is: {predicted_sentiment}")
