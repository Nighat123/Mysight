import React from "react";
import t1 from "../../Assests/t1.webp";
import t2 from "../../Assests/t2.webp";

import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import SupportTeam from "./SupportTeam";

export default function UpcomingFeatures() {
  return (
    <>
      <div className="flex flex-col  items-center justify-center bg-[#f8f1f1] mt-16">
        <div className="font-caveat text-5xl flex justify-center mb-10 mt-10 max-sm:text-4xl">
          Upcoming Features
        </div>
        <div className="flex flex-row max-lg:flex-col justify-center items-center gap-24 ">
          <div className="flex items-center justify-center">
            <img src={t1} alt="t1" className="size-36 rounded-full" />
          </div>
          <div className="flex flex-col justify-center font-montserrat max-lg:w-[90%]">
            <div className="text-2xl font-medium mb-2">
              Guided Meditation Tools
            </div>
            <div className="flex items-center justify-center w-full">
              Discover meditation techniques designed to help you relax & and
              improve your emotional health.
            </div>
            {/* link to meditations */}
            <div className="mt-10 flex flex-row items-center">
              <Link to={"https://www.sciencedirect.com/science/article/abs/pii/S0165032720328317"}>Learn More </Link>
              <FaArrowRightLong className="ml-2" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-[0.1vh] w-[50%] mt-10 bg-black max-lg:w-[90%]"></div>

        <div className="flex flex-row max-lg:flex-col justify-center items-center gap-24 mt-10">
          <div className="flex items-center justify-center">
            <img src={t2} alt="t1" className="size-36 rounded-full" />
          </div>
          <div className="flex flex-col justify-center font-montserrat max-lg:w-[90%]">
            <div className="text-2xl font-medium mb-2">
              Mental Health Webinars
            </div>
            <div className="flex items-center justify-center w-full">
              Join live and recorded sessions by experts to improve your mental
              health knowledge and practices.
            </div>
            {/* link to meditations */}
            <div className="mt-10 flex flex-row items-center">
              <Link to={"https://psycnet.apa.org/record/2024-36224-001"}>Learn More </Link>
              <FaArrowRightLong className="ml-2" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-[0.1vh] w-[50%] mt-10 bg-black mb-16 max-lg:w-[90%]"></div>
      </div>
      <SupportTeam/>
    </>
  );
}
