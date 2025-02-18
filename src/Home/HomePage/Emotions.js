import React from "react";
import img1 from "../../../src/Assests/mindImg1.webp";
import img2 from "../../../src/Assests/mindImg2.webp";
import img3 from "../../../src/Assests/mindImg3.webp";
import { Link } from "react-router-dom";
import UpcomingFeatures from "./UpcomingFeatures";

export default function Emotions() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="font-caveat text-5xl ">Mindful Living</div>
     
        <div className="font-montserrat mt-5 text-2xl max-lg:flex max-lg:items-center max-lg:justify-center max-sm:flex max-sm:items-center max-sm:justify-center max-lg:text-xl max-sm:w-[80%]">Embrace happiness, practice gratitude, and find calmness.</div>

        <div className="flex flex-row items-center justify-center mt-16 gap-14 max-lg:flex-col max-lg:w-full">
          <div className="flex flex-col items-center justify-center ">
            <img className="w-56 h-40 rounded-md" src={img1} alt=".."/>
            <div className="font-montserrat mt-5">Happiness</div>
            <div className="mt-5 font-montserrat">
              <Link to={"https://link.springer.com/article/10.1007/s11482-020-09891-6"}>LEARN MORE</Link>
            </div>
            <div className="bg-black w-full h-[.2vh]"></div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-56 rounded-md h-40" src={img2} alt=".."/>
            <div className="font-montserrat mt-5">Gratitude</div>
            <div className="mt-5 font-montserrat">
              <Link to={"https://www.magonlinelibrary.com/doi/abs/10.12968/bjmh.2019.0040"}>LEARN MORE</Link>
            </div>
            <div className="bg-black w-full h-[.2vh]"></div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-56 rounded-md h-40" src={img3} alt=".."/>
            <div className="font-montserrat mt-5">Calmness </div>
            <div className="mt-5 font-montserrat">
              <Link to={"https://acquire.cqu.edu.au/articles/journal_contribution/Clinical_leadership_in_mental_health_nursing_the_importance_of_a_calm_and_confident_approach/13432109"}>LEARN MORE</Link>
            </div>
            <div className="bg-black w-full h-[.2vh] "></div>
          </div>
        </div>
      </div>
      <UpcomingFeatures/>
      </>
  );
}
