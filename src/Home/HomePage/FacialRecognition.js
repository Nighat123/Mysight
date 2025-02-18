import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import CameraHeader from "../../Components/CameraHeader";

const videoConstraints = {
  width: 540,
  facingMode: "environment",
};

export default function FacialRecognition() {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);
  const [status, setStatus] = useState("");
  const [emotion, setEmotion] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [cameraStarted, setCameraStarted] = useState(false);
  const [captured, setCaptured] = useState(false);

  const capturePhoto = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
      setStatus("Photo captured successfully!");
      setEmotion("");
      setRecommendations([]);
      setCaptured(true);
      setCameraStarted(false);
    } else {
      setStatus("Failed to capture photo. Please try again.");
    }
  }, [webcamRef]);

  const refreshCapture = () => {
    setUrl(null);
    setStatus("");
    setEmotion("");
    setRecommendations([]);
    setCaptured(false);
    setCameraStarted(false);
  };

  const sendToBackend = async () => {
    if (!url) {
      setStatus("No image captured to send!");
      return;
    }

    try {
      setStatus("Analyzing image. Please wait...");

      const response = await axios.post("http://localhost:5000/FacialRecognition", {
        image: url.split(",")[1],
      });

      if (response.status === 200) {
        const { emotion, recommendations } = response.data;
        setEmotion(emotion);
        setRecommendations(recommendations);
        setStatus("Image successfully analyzed!");
      } else {
        setStatus("Unexpected response from server. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred while analyzing the image. Please try again.");
      console.error("Error while sending image to backend:", error);
    }
  };

  return (
    <>
      <CameraHeader />
      <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
        <div className="text-center">
          {!cameraStarted && !captured ? (
            <div>
              <h1 className="text-6xl font-bold font-caveat mb-4">Facial Emotion Recognition</h1>
              <p className="text-xl font-medium font-montserrat mb-4">Click below to start the camera and capture an image for analysis.</p>
              <button
                onClick={() => setCameraStarted(true)}
                className="font-montserrat h-16 mt-5 text-black border-black max-sm:w-56 max-lg:w-96 w-96 p-4  bg-[#f8f1f1] hover:bg-[#ddcccc] hover:duration-300 hover:text-black border-2 hover:border-black"
              >
                Open Camera
              </button>
            </div>
          ) : captured ? (
            <div>
              <h2 className="text-4xl font-sans mb-5">Image Is Captured</h2>
              <img
                src={url}
                alt="Captured screenshot"
                className="border-2 border-gray-300 rounded-md mt-2 "
              />
              <div className="flex flex-col items-center justify-center mt-6">
                <button
                  onClick={refreshCapture}
                  className="font-montserrat h-16 mt-5 text-black border-black max-sm:w-56 max-lg:w-96 w-96 p-4  bg-[#f8f1f1] hover:bg-[#ddcccc] hover:duration-300 hover:text-black border-2 hover:border-black"
                >
                  Open Camera Again
                </button>
                <button
                  className="font-montserrat h-16 mt-5 text-black border-black max-sm:w-56 max-lg:w-96 w-96 p-4  bg-[#f8f1f1] hover:bg-[#ddcccc] hover:duration-300 hover:text-black border-2 hover:border-black"
                  onClick={sendToBackend}
                  disabled={!url}
                >
                  Analyze
                </button>
                <button
                  onClick={refreshCapture}
                  className="font-montserrat h-16 mt-5 text-black border-black max-sm:w-56 max-lg:w-96 w-96 p-4  bg-[#f8f1f1] hover:bg-[#ddcccc] hover:duration-300 hover:text-black border-2 hover:border-black"
                >
                  Cancel
                </button>
              </div>
              {status && <p className="text-lg font-medium text-gray-700 mt-4">{status}</p>}
              {emotion && recommendations.length > 0 && (
                <div className="mt-6 text-left ml-8">
                  <h2 className="text-xl font-semibold">Emotion Detected</h2>
                  <h3 className="text-lg mt-4 font-medium">Recommendations:</h3>
                  <ul className="list-disc list-inside mt-2">
                    {recommendations.map((rec, index) => (
                      <li key={index}>{rec}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h2 className="text-4xl font-sans mb-5">Capture Your Picture</h2>
              <Webcam
                ref={webcamRef}
                audio={false}
                screenshotFormat="image/png"
                videoConstraints={videoConstraints}
                mirrored={true}
                className="border-2 border-gray-300 rounded-md mb-4"
              />
              <div className="flex justify-center items-center flex-col mt-6">
                <button
                  onClick={capturePhoto}
                  className="font-montserrat h-16 mt-5 text-black border-black max-sm:w-56 max-lg:w-96 w-96 p-4  bg-[#f8f1f1] hover:bg-[#ddcccc] hover:duration-300 hover:text-black border-2 hover:border-black"
                >
                  Capture
                </button>
                <button
                  onClick={refreshCapture}
                  className="font-montserrat h-16 mt-5 text-black border-black max-sm:w-56 max-lg:w-96 w-96 p-4  bg-[#f8f1f1] hover:bg-[#ddcccc] hover:duration-300 hover:text-black border-2 hover:border-black"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}



// import React, { useRef, useState, useEffect } from "react";
// import Webcam from "react-webcam";
// import axios from "axios";
// import { FaRobot } from "react-icons/fa";

// const videoConstraints = {
//   width: 540,
//   facingMode: "environment",
// };

// export default function FacialRecognization() {
//   const webcamRef = useRef(null);
//   const [url, setUrl] = useState(null);
//   const [status, setStatus] = useState("");
//   const [boatMsg, setBoatMsgs] = useState([]);

//   // Fetch boat messages
//   useEffect(() => {
//     const fetchBoatMsgs = async () => {
//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/posts"
//         );
//         setBoatMsgs(response.data);
//       } catch (error) {
//         console.log("Fetching error", error);
//       }
//     };

//     fetchBoatMsgs();
//   }, []);

//   // Capture photo
//   const capturePhoto = React.useCallback(() => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setUrl(imageSrc);
//     setStatus(""); // Clear any previous status messages
//   }, [webcamRef]);

//   // Send image to backend
//   const sendToBackend = async () => {
//     if (!url) {
//       setStatus("No image captured to send!");
//       console.log("No image captured to send!");
//       return;
//     }

//     try {
//       console.log("Sending image to backend...");
//       console.log("Captured Image URL:", url);

//       // Sending the POST request
//       const response = await axios.post(
//         "https://jsonplaceholder.typicode.com/posts",
//         { image: url }
//       );

//       console.log("Response received:", response);

//       // Handling response status
//       if (response.status === 201 || response.status === 200) {
//         setStatus("Image successfully sent to backend!");
//         console.log("Image successfully sent to backend!");
//       } else {
//         setStatus("Unexpected response from server.");
//         console.log(
//           "Unexpected response from server. Status:",
//           response.status
//         );
//       }
//     } catch (error) {
//       // Handling errors
//       setStatus("An error occurred while sending the image.");
//       console.error("Error occurred while sending the image:", error);
//     }
//   };

//   return (
//     <>
//       <div className="flex flex-col items-center justify-center">
//         <Webcam
//           ref={webcamRef}
//           audio={false}
//           screenshotFormat="image/png"
//           videoConstraints={videoConstraints}
//           mirrored={true}
//         />
//         <div className="flex flex-col items-center justify-center">
//           <button className="p-2 bg-blue-100 mb-2 w-24" onClick={capturePhoto}>
//             Capture
//           </button>
//           <button
//             className="p-2 bg-blue-100 mb-2 w-24"
//             onClick={() => setUrl(null)}
//           >
//             Refresh
//           </button>
//           <button
//             className={`p-2 mb-2 w-24 ${
//               url ? "bg-blue-500" : "bg-gray-300 cursor-not-allowed"
//             }`}
//             onClick={sendToBackend}
//             disabled={!url} // Disable if no image is captured
//           >
//             Send
//           </button>
//         </div>

//         {status && <p>{status}</p>}

//         {url && (
//           <div>
//             <img src={url} alt="Captured screenshot" />
//           </div>
//         )}

//         {/* Bot Messages */}
//         {boatMsg.map((comment, index) => (
//           <div
//             key={index}
//             className={`flex items-center w-full max-w-2xl ${
//               comment.userId ? "justify-start" : "justify-end"
//             }`}
//           >
//             {comment.userId && <FaRobot className="text-2xl mr-2" />}
//             {comment.body && (
//               <p
//                 className={`${
//                   comment.body
//                     ? "bg-[#f8f1f1] text-lg font-mono px-4 py-2"
//                     : "p-0"
//                 } rounded-lg w-fit max-w-[75%]`}
//               >
//                 {comment.title}
//               </p>
//             )}
//             {!comment.userId && <FaRobot className="text-3xl ml-2" />}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
