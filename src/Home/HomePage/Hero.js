import React from "react";
import { Link } from "react-router-dom";
import HomeHeader from "../../Components/homeHeader";
import Welcome from './Welcome'
import hero from "../../../src/Assests/hero.webp";

export default function Hero() {
  return (
    <>
      <HomeHeader />
      <div>
        <img src={hero} alt=".."/>
      </div>
      <div className="bg-white max-lg:w-[70%] max-xl:w-[70%] w-[30%] p-10 text-black absolute bottom-[10%] max-lg:bottom-[30%] max-md:hidden opacity-50 left-96 max-lg:left-24 max-xl:left-24 flex flex-col items-center justify-center">
        <div className="font-caveat text-5xl mb-5">
          Mental Well-Being
        </div>
        <div className="text-2xl">
          Your mental health matters. Take the first step towards
          emotional balance with our AI-driven tools. Whether you're looking for
          personalized recommendations, we're here to guide you every step of the way.
        </div>
        <div>
          {/* give chat boat link */}
          <button className="font-montserrat h-14 mt-5 text-black border-black w-80 max-lg:w-56 p-4  bg-[#f8f1f1] hover:bg-[#ddcccc] hover:duration-300 hover:text-black border-2 hover:border-black">
            <Link to="/chatpage">Start Your Journey</Link>
          </button>
        </div>
      </div>
      <Welcome />
      <div></div>
    </>
  );
}
