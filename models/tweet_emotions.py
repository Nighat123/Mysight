import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
import re
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

data = pd.read_csv('tweet_emotions.csv')

def clean_tweet(text):
    text = text.lower()
    text = re.sub(r'http\S+|www\S+|https\S+', '', text, flags=re.MULTILINE)
    text = re.sub(r'@\w+', '', text)
    text = re.sub(r'#', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

# Apply the cleaning function to the 'content' column
data['Cleaned_Content'] = data['content'].apply(clean_tweet)

# Initialize TF-IDF vectorizer
tfidf = TfidfVectorizer(max_features=5000)

# Fit and transform the text data
X_tfidf = tfidf.fit_transform(data['Cleaned_Content'])

# Initialize Logistic Regression model
model = LogisticRegression()

# Train the model with the entire dataset
model.fit(X_tfidf, data['sentiment'])

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(data['Cleaned_Content'], data['sentiment'], test_size=0.2, random_state=42)

# Transform the training and test data using the TF-IDF vectorizer
X_train_tfidf = tfidf.fit_transform(X_train)
X_test_tfidf = tfidf.transform(X_test)

# Train the model on training data
model.fit(X_train_tfidf, y_train)

# Predict on test data
y_pred = model.predict(X_test_tfidf)

# Evaluate the model performance
print(f'Accuracy: {accuracy_score(y_test, y_pred):.2f}')
print(classification_report(y_test, y_pred))

# Function to clean and predict sentiment from user input
def predict_sentiment(input_text):
    cleaned_text = clean_tweet(input_text)  # Clean the input text
    input_tfidf = tfidf.transform([cleaned_text])  # Convert to TF-IDF vector
    prediction = model.predict(input_tfidf)  # Predict sentiment
    return prediction[0]

# Step 3: Example usage - Get input from the user, analyze it, and return the sentiment
input_text = input("Enter your text: ")  # Prompt the user for input
predicted_sentiment = predict_sentiment(input_text)  # Predict the sentiment
print(f"The predicted sentiment is: {predicted_sentiment}")  # Output the result



