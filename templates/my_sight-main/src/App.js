import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatPage from './Home/chatPage/chatPage';  // Ensure correct import and file name
import ChatHeader from './Components/chatHeader'; // Correct case

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatHeader />} /> 
        <Route path="/chatPage" element={<ChatPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
