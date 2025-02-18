import React, { useState, useEffect, useRef } from "react";
import {
MdOutlineSelfImprovement,
} from "react-icons/md";
import { FaUserCircle, FaRobot } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";
import ChatHeader from "../../Components/chatHeader";








export default function ChatPage() {
const [Message, setMessage] = useState("");
const [messages, setMessages] = useState([]);
const messagesEndRef = useRef(null);








const sendMessage = async (e) => {
 e.preventDefault();








 try {
   if (!Message.trim()) {
     toast.error("Message cannot be empty!");
     return;
   }









   setMessages((prev) => [...prev, { type: "user", body: Message }]);









   const newMessage = await axios.post("http://localhost:5000/chatPage", { text: Message });








   if (newMessage.status === 200) {
     const recommendations = newMessage.data.recommendations;








     // Append bot responses after the user message
     recommendations.forEach((rec) => {
       setMessages((prev) => [
         ...prev,
         { type: "bot", body: rec },
       ]);
     });








     setMessage("");
     toast.success("Message sent successfully");
   } else {
     toast.error("Unexpected response from server");
   }
 } catch (error) {
   toast.error("Something went wrong while sending message");
 }
};








const handleKeyPress = (e) => {
 if (e.key === "Enter") {
   sendMessage(e);
 }
};








useEffect(() => {
 const fetchMessages = async () => {
   try {
     const response = await axios.get("http://localhost:5000/chatPage");
     // If there's any data in the response, we set the messages state
     if (Array.isArray(response.data)) {
       setMessages(response.data);
     }
   } catch (error) {
     console.log("Fetching messages error", error);
   }
 };
 fetchMessages();
}, []);








// Scroll to the bottom of the chat whenever messages change
useEffect(() => {
 messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);








return (
 <>
   <ChatHeader />
   <div className="bg-[#ffffff] flex flex-col h-screen">
     {/* Header Section */}
     <div className="flex justify-center font-serif mb-5 font-extrabold items-center flex-row max-sm:flex-col mt-16">
       <MdOutlineSelfImprovement className="text-8xl text-[#bfaeae]" />
       <div className="text-4xl max-sm:text-xl max-sm:justify-center max-sm:flex">
         I am here to listen and support you
         <br />
         let’s start whenever you’re ready.
       </div>
     </div>








     {/* Chat Messages */}
     <div className="flex flex-col items-center flex-1 overflow-y-auto py-4 space-y-4 px-4">
       {/* Render both user and bot messages */}
       {messages.map((message, index) => (
         <div key={index} className={`flex items-center w-full max-w-2xl ${message.type === "user" ? "justify-end" : "justify-start"}`}>
           {message.type === "user" ? (
             <FaUserCircle className="text-3xl mr-2" />
           ) : (
             <FaRobot className="text-3xl mr-2" />
           )}
           {message.body && (
             <p className={`bg-[#f8f1f1] text-lg font-mono px-4 py-2 rounded-lg w-fit max-w-[75%]`}>
               {message.body}
             </p>
           )}
         </div>
       ))}
       {/* Ref to scroll to the bottom of the chat */}
       <div ref={messagesEndRef} />
     </div>








     {/* Input Section */}
     <div className="flex p-4 flex-row max-lg:flex-col border-t bg-[#d5c5c5] max-sm:w-[95%] rounded-lg w-[90%] m-auto justify-center">
       <input
         type="text"
         value={Message}
         onChange={(e) => setMessage(e.target.value)}
         onKeyDown={handleKeyPress}
         placeholder="Type your message..."
         className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
       />
       <button
         onClick={sendMessage}
         className="ml-2 px-4 py-2 max-lg:ml-0 max-lg:mt-5 bg-[#dfd1d1] text-black font-serif rounded-lg hover:bg-[#eee6e6] duration-300 text-xl"
       >
         Send
       </button>
     </div>
   </div>
 </>
);
}
