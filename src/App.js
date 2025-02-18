import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatPage from './Home/chatPage/chatPage'; 
import Hero from './Home/HomePage/Hero' 
import FacialRecognition from './Home/HomePage/FacialRecognition';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Hero/>} /> 
        <Route path="/chatPage" element={<ChatPage />} /> 
        <Route path="/FacialRecognition" element={<FacialRecognition />} /> 


      </Routes>
    </BrowserRouter>
  );
}

export default App;
