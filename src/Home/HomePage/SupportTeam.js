import React from "react";
import suprtTeam from "../../Assests/suprtTeam.webp";
import flower from "../../Assests/flower.webp";
import bgTeam from "../../Assests/bgTeam.webp";
import LetsGetInTouchBg from "./LetsGetInTouchBg";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import Bg2 from "./Bg2";


export default function SupportTeam() {
  return (
    <>
      <div className="flex flex-row items-center max-lg:flex-col justify-center gap-24 max-lg:gap-0 mt-16 max-sm:w-full mb-16">
        <div>
          <img src={bgTeam} alt={".."} className="size-48 max-lg:hidden" />
          <img
            src={suprtTeam}
            alt={".."}
            className="size-44 rounded-full relative bottom-44 max-lg:bottom-5"
          />
          <img
            src={flower}
            alt={".."}
            className="size-24 rounded-full relative bottom-56 left-20 max-lg:hidden"
          />
        </div>
        <div className="flex flex-col justify-center max-lg:w-[90%]">
          <div className="text-3xl font-medium mb-2 font-caveat max-sm:w-full max-sm:flex max-lg:flex max-sm:justify-center max-lg:justify-center">
            Here to Support You
          </div>
          <div className="flex items-center justify-center w-96 font-montserrat max-sm:w-full max-sm:flex max-lg:flex max-sm:justify-center max-lg:justify-center">
            At My Sight, we understand the importance of having the right
            support system. Our team is dedicated to helping you achieve mental
            clarity and emotional well-being through innovative AI tools and
            expert guidance. Whether you're exploring our chatbot for
            personalized advice, using face recognition to better understand
            your emotions, or accessing resources tailored to your needs, we're
            committed to walking this journey with you. Trust us to provide the
            care, tools, and encouragement you need to thrive in every aspect of
            life.
          </div>
          {/* about.html */}
          <ScrollLink
            to="home-part"
            smooth={true}
            duration={500}
            className="font-montserrat h-14 mt-5 text-black border-black w-80 max-lg:w-56 p-2 bg-[#f8f1f1] hover:bg-[#ddcccc] hover:duration-300 hover:text-black border-2 hover:border-black flex items-center justify-center text-center"
          >
            <button>Meet the Team</button>
          </ScrollLink>

          <button className="font-montserrat h-14 mt-5 text-black border-black w-80 max-lg:w-56 p-4  bg-[#f8f1f1] hover:bg-[#ddcccc] hover:duration-300 hover:text-black border-2 hover:border-black">
            <Link to="/chatpage">Start Your Journey</Link>
          </button>
        </div>
      </div>
      <Bg2/>
      <LetsGetInTouchBg />
    </>
  );
}
