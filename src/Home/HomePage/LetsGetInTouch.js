import React from "react";
import Footer from "../../Components/Footer";

export default function LetsGetInTouch() {
  return (
    <>
      <div className="flex flex-row items-center justify-evenly gap-24 max-lg:gap-5 mt-16 max-lg:flex-col">
        <div className="flex flex-col justify-start">
          <div className="font-montserrat font-semibold text-xl mb-5">
            Let's Get In Touch
          </div>
          <div className="mb-5">
            <div className="font-semibold font-montserrat">PHONE:</div>
            <div className="font-montserrat">(+92) 3321-05388</div>
          </div>
          <div className="mb-5">
            <div className="font-semibold font-montserrat">EMAIL:</div>
            <div className="font-montserrat">(+92) 3321-05388</div>
          </div>
          <div className="mb-5">
            <div className="font-semibold font-montserrat">ADDRESS:</div>
            <div className="font-montserrat">(+92) 3321-05388</div>
          </div>
        </div>
        <div className="flex flex-col justify-start max-lg:w-[90%] mb-16">
          <div className="font-caveat font-semibold text-5xl mb-5 max-sm:text-3xl">
            Words of Encouragement
          </div>

          <div className="font-montserrat">
            A healthy mind begins with a positive thought. Here’s a dose of
            inspiration to brighten your day. <br></br>“Your mental health is a
            priority. Your happiness is essential. Your self-care is a
            necessity."
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
