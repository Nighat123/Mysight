import React from "react";
import { BiChat } from 'react-icons/bi';
import { FaRegSmileBeam } from 'react-icons/fa';
import { MdAssistant } from 'react-icons/md';
import { Link as ScrollLink } from "react-scroll";


import Bg1 from "./Bg1";

export default function Features() {
  return (
    <>
      <div id="fetures-part" className=" flex flex-col items-center justify-center mb-10">
        <div className="text-5xl mb-10 font-caveat">Our Key Features</div>
        <div className="font-montserrat text-xl mb-10">
          These Are Our Key Fetures
        </div>

        <div className="flex flex-row w-[70%] max-sm:w-[99%] items-center justify-center max-lg:gap-y-10 gap-10 max-lg:flex-col max-lg:w-[90%] mb-16">
          {/* Card 1 */}
          <div className="bg-[#f8f1f1] size-96 w-full rounded-3xl p-6 flex flex-col items-center shadow-lg max-lg:w-[70%] ">
            <div className="bg-[#ffedec] rounded-full p-5 mb-4">
              {/* Icon or Image here */}
              <BiChat className="text-4xl" /> {/* Replace with icon */}
            </div>
            <h3 className="font-montserrat text-lg mb-4">Chat with AI</h3>
            <p className="font-montserrat text-sm text-center text-gray-600">
              "Engage with our intelligent chatbot to discuss your concerns and
              receive personalized recommendations for mental health
              improvements. It’s your safe space for support."
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f8f1f1] size-96 w-full rounded-3xl p-6 flex flex-col items-center shadow-lg max-lg:w-[70%]">
            <div className="bg-[#ffedec] rounded-full p-5 mb-4">
              {/* Icon or Image here */}
              <FaRegSmileBeam className="fa-solid fa-spa text-4xl" />{" "}
              {/* Replace with icon */}
            </div>
            <h3 className="font-montserrat text-lg mb-4">Face Recognition</h3>
            <p className="font-montserrat text-sm text-center text-gray-600">
              "Leverage our cutting-edge face recognition technology to analyze
              your emotions and receive customized insights. A unique and
              innovative approach to mental well-being."
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f8f1f1] size-96 w-full rounded-3xl p-6 flex flex-col items-center shadow-lg max-lg:w-[70%]">
            <div className="bg-[#ffedec] rounded-full p-5 mb-4">
              {/* Icon or Image here */}
              <MdAssistant className="text-4xl" /> {/* Replace with icon */}
            </div>
            <h3 className="font-montserrat text-lg mb-4">
              Real-Time Assistance
            </h3>
            <p className="font-montserrat text-sm text-center text-gray-600">
              "Get immediate support whenever you need it, ensuring you never
              feel alone. Real-time help tailored to your emotional needs."
            </p>
          </div>
        </div>
        <div>
          {/* about.html link */}
          <ScrollLink
            to="home-part"
            smooth={true}
            duration={500}
            className="font-montserrat h-14 mt-5 text-black border-black w-80 max-lg:w-56 p-2 bg-[#f8f1f1] hover:bg-[#ddcccc] hover:duration-300 hover:text-black border-2 hover:border-black flex items-center justify-center text-center"
          >
            <button>LEARN MORE</button>
          </ScrollLink>
        </div>
      </div>
      <Bg1/>
    </>
  );
}
