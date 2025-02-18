import React from "react";
import r1 from '../../Assests/r1.webp'
import r2 from '../../Assests/r2.webp'
import r3 from '../../Assests/r3.webp'
import r4 from '../../Assests/r4.webp'
import r5 from '../../Assests/r5.webp'
import ClassesAndService from "./ClassesAndService";


export default function LetsGetInTouchBg() {
  return (
    <>
      <div id="contact-section" className="flex flex-row items-center justify-center w-full">
        <div><img src={r1} alt=".." className="size-72 w-full max-lg:w-full max-sm:w-full max-lg:size-36 max-sm:size-28"/></div>
        <div><img src={r2} alt=".." className="size-72 w-full max-lg:w-full max-sm:w-full max-lg:size-36 max-sm:size-28"/></div>
        <div><img src={r3} alt=".." className="size-72 w-full max-lg:w-full max-sm:w-full max-lg:size-36 max-sm:size-28"/></div>
        <div><img src={r4} alt=".." className="size-72 w-full max-lg:w-full max-sm:w-full max-lg:size-36 max-sm:size-28"/></div>
        <div><img src={r5} alt=".." className="size-72 w-full max-lg:w-full max-sm:w-full max-lg:size-36 max-sm:size-28"/></div>

      </div>
      <ClassesAndService/>
    </>
  );
}
