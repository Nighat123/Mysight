import React from "react";
import logo from "../../Assests/logo.webp";
import LetsGetInTouch from "./LetsGetInTouch";
export default function ClassesAndService() {
  return (
    <>
      <div className="bg-[#f8f1f1] flex flex-row items-center justify-evenly max-lg:flex-col ">
        <div>
          <img src={logo} alt="logo" className="w-96 h-96" />
        </div>
        <div className="flex flex-col justify-start max-lg:w-[90%] max-sm:w-[90%]  mb-10">
          <div className="font-montserrat text-4xl font-medium mb-3 max-sm:text-2xl">Navigation</div>
          <div className="font-montserrat text-xl max-sm:text-lg">Home</div>
          <div className="font-montserrat text-xl max-sm:text-lg">About</div>
          <div className="font-montserrat text-xl max-sm:text-lg">Features</div>
          <div className="font-montserrat text-xl max-sm:text-lg">Contact</div>
        </div>
        <div className="flex flex-col justify-start max-lg:w-[90%] max-sm:w-[90%] mb-16">
          <div className="font-montserrat text-4xl font-medium mb-3 max-sm:text-2xl">Classes and Services</div>
          <div className="font-montserrat text-xl max-sm:text-lg">AI Chatbot</div>
          <div className="font-montserrat text-xl max-sm:text-lg">Face Recognition</div>
        </div>
      </div>
      <LetsGetInTouch/>
    </>
  );
}
