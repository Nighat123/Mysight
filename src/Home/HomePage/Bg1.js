import React from "react";
import bg3 from "../../../src/Assests/bg4.webp";
import Emotions from "./Emotions";

export default function Bg1() {
  return (
    <>
      <div className="relative flex items-center justify-center mt-16 mb-16">
        {/* Image */}
        <img
          className="w-full h-[70vh] object-cover max-sm:w-full"
          src={bg3}
          alt="Background"
        />

        {/* Black Shade */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content Over Image (Optional) */}
        <div className="absolute w-[95%] text-white max-lg:w-[95%] max-sm:w-[95%] max-xl:w-[95%] flex flex-col items-center justify-center">
          <div className="text-5xl font-handlee max-lg:text-2xl max-sm:text-xl flex items-center justify-center">
          “There is hope, even when your brain tells you there isn’t.”
          </div>
          <div className="mt-10 font-montserrat">– John Green</div>
        </div>
      </div>
      <Emotions />
    </>
  );
}
