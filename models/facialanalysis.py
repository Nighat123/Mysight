
import cv2
from deepface import DeepFace


def capture_and_analyze_emotion():
    cap = cv2.VideoCapture(0)
    print("Press 's' to take a photo or 'q' to quit.")
    while True:
        ret, frame = cap.read()
        if not ret:
            print("Failed to grab frame.")
            break
        cv2.imshow("Press 's' to capture or 'q' to quit.", frame)
        key = cv2.waitKey(1) & 0xFF
        if key == ord('s'):
            print("Photo captured.")
            cropped_face = detect_and_crop_face(frame)
            image_path = "captured_image.jpg"
            cv2.imwrite(image_path, cropped_face)
            break
        elif key == ord('q'):
            print("Exiting without capturing.")
            cap.release()
            cv2.destroyAllWindows()
            return None
    cap.release()
    cv2.destroyAllWindows()
    try:
        print("Analyzing emotion...")
        analysis = DeepFace.analyze(img_path=image_path, actions=['emotion'], enforce_detection=False)

        # Debugging line to check output structure
        print("Raw analysis result:", analysis)

        # Handle list format if returned
        if isinstance(analysis, list):
            analysis = analysis[0]

        # Extract dominant emotion
        primary_emotion = analysis['dominant_emotion']
        print(f"Detected Emotion: {primary_emotion}")
        return primary_emotion
    except Exception as e:
        print(f"Error analyzing emotion: {e}")
        return None


def detect_and_crop_face(image):
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
    if len(faces) == 0:
        print("No face detected.")
        return image
    x, y, w, h = faces[0]
    cropped_face = image[y:y + h, x:x + w]
    return cropped_face


detected_emotion = capture_and_analyze_emotion()
if detected_emotion:
    print(f"The detected emotion is: {detected_emotion}")
else:
    print("No emotion detected or analysis failed.")
analyzeface = capture_and_analyze_emotion()