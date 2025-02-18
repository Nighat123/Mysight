import React from "react";
import bg3 from "../../../src/Assests/bg3.webp";

export default function Bg2() {
  return (
    <>
      <div className="relative flex items-center justify-center mt-16">
        {/* Image */}
        <img
          className="w-full h-[70vh] object-cover"
          src={bg3}
          alt="Background"
        />

        {/* Black Shade */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content Over Image (Optional) */}
        <div className="absolute w-[95%] text-white max-lg:w-[95%] max-sm:w-[95%] max-xl:w-[95%] flex flex-col items-center justify-center">
          <div className="text-5xl font-handlee max-lg:text-2xl max-sm:text-xl flex items-center justify-center">
            “Self-care is how you take your power back.”
          </div>
          <div className="mt-10 font-montserrat"> — Lalah Delia</div>
        </div>
      </div>
    </>
  );
}
