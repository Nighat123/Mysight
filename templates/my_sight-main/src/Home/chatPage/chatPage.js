import React, { useState } from "react";
import axios from "axios";

const ChatPage = () => {
    const [input, setInput] = useState(""); // State for user input
    const [messages, setMessages] = useState([]); // State for chat messages

    // Function to handle sending a message
    const sendMessage = async (e) => {
        e.preventDefault();

        if (!input.trim()) {
            console.error("Cannot send empty message");
            return;
        }

        try {
            // Send POST request to the backend
            const response = await axios.post("http://127.0.0.1:5000/analyze-text", {
                text: input, // Ensure the key matches what the backend expects
            });

            // Update chat with the user's input and the backend response
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: "user", text: input },
                { sender: "bot", text: response.data.message },
            ]);

            setInput(""); // Clear input field
        } catch (error) {
            console.error("Error sending message: ", error.response || error);
            alert("An error occurred while sending the message. Please try again.");
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-window">
                <div className="messages">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
                        >
                            {msg.text}
                        </div>
                    ))}
                </div>
            </div>
            <form onSubmit={sendMessage} className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatPage;
