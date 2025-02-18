import React from "react";
import wlcm from "../../../src/Assests/welcome.webp";
import Features from "./Features";

export default function Welcome() {
  return (
    <>
      <div id="home-part" className=" text-white flex flex-row gap-16 mb-16 items-center justify-center max-lg:flex-col max-sm:justify-center max-lg:w-[90%]  max-sm:overflow-x-hidden">
        <div className="w-[45%] max-lg:w-[90%] max-sm:w-[90%] mt-16">
          <div className="mt-5 text-black text-8xl font-caveat">welcome</div>
          <div className="font-montserrat text-lg mt-5 text-black max-lg:w-full">
            In today’s fast-paced world, we often overlook the power of our
            emotions. Whether it’s stress, happiness, anxiety, or excitement,
            our moods play a significant role in shaping our daily experiences.
            At MoodMaster, we believe in the power of self-awareness. By
            recognizing and understanding our moods, we can take control of our
            emotions and foster better mental and emotional health.
          </div>
          <div className="font-montserrat text-lg text-black">
            <div><br></br></div>
            At My Sight, we prioritize your mental well-being. With AI-powered
            tools and resources, we help you navigate your emotions and take
            steps toward a healthier mind. We understand the importance of
            mental health. Our platform offers AI-driven solutions and
            compassionate tools to help you feel better and achieve peace of
            mind.
          </div>
          <div>
            {/* about.tml link */}
            <button className="font-montserrat h-16 mt-5 text-black border-black max-sm:w-56 max-lg:w-96 w-96 p-4  bg-[#f8f1f1] hover:bg-[#ddcccc] hover:duration-300 hover:text-black border-2 hover:border-black">
              LEARN MORE
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center max-sm:w-[90%]">
          <div className="flex flex-col font-mono">
            <div>
              <img className="h-96 " src={wlcm} alt=".."/>
            </div>
          </div>
        </div>
      </div>
      <Features/>
    </>
  );
}
