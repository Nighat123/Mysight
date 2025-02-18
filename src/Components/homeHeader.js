//homeHeader.js



import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";

export default function HomeHeader() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown when an option is selected
  const closeDropdown = () => setIsOpen(false);

  const navigate = useNavigate();

  const navigateToChatPage = (e) => {
    e.preventDefault();
    console.log("chatPage");
    navigate("/chatPage");
    closeDropdown(); // Close dropdown after navigation
  };

  return (
    <>
      <div className="flex flex-row justify-around items-center p-4 bg-transparent max-lg:hidden">
        <Link to={"/"}>
          <div className="flex flex-row items-center space-x-2">
          <img
              src="https://i.pinimg.com/236x/2d/1b/df/2d1bdf1cb9fe7ebbd65a1bebdf418616.jpg"
              alt="Logo"
              className="size-10 rounded-full"
            />
            <div className="font-caveat font-semibold text-3xl">MY</div>
            
            <div className="font-caveat font-semibold text-3xl">SIGHT</div>
          </div>
        </Link>
        <div className="flex items-center justify-center flex-row space-x-7 font-handlee font-semibold text-xl">
          <ScrollLink
            to="home-part"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline duration-500 hover:text-green-800"
          >
            HOME
          </ScrollLink>
          <ScrollLink
            to="home-part"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline duration-500 hover:text-green-800"
          >
            ABOUT
          </ScrollLink>
          <ScrollLink
            to="fetures-part"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline duration-500 hover:text-green-800"
          >
            FEATURES
          </ScrollLink>
          <ScrollLink
            to="contact-section"
            smooth={true}
            duration={700}
            className="cursor-pointer hover:underline duration-500 hover:text-green-800"
          >
            CONTACT
          </ScrollLink>
          <Link
            onClick={navigateToChatPage}
            className="cursor-pointer hover:underline duration-500 hover:text-green-800"
          >
            CHAT PAGE
          </Link>
        </div>
      </div>

      {/* Small page header */}
      <div className="max-lg:visible lg:hidden flex flex-row justify-between items-center m-auto p-4">
        <Link to={"/"}>
          <div className="flex flex-row items-center space-x-2">
          <img
              src="https://i.pinimg.com/236x/2d/1b/df/2d1bdf1cb9fe7ebbd65a1bebdf418616.jpg"
              alt="Logo"
              className="size-10 rounded-full"
            />
            <div className="font-caveat font-semibold text-3xl">MY</div>
            
            <div className="font-caveat font-semibold text-3xl">SIGHT</div>
          </div>
        </Link>

        <div className="group relative ">
          {/* Options Button */}
          <Link
            onClick={toggleDropdown}
            className="ml-2 px-4 py-2 max-lg:ml-0 max-lg:mt-5 text-black font-handlee font-semibold text-xl"
          >
            Options
          </Link>

          {/* Dropdown Menu */}
          <div
            className={`absolute right-0 mt-1 mr-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg transition-opacity duration-300 ${
              isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <ScrollLink
              to="home-part"
              smooth={true}
              duration={500}
              className="block px-4 py-2 hover:bg-[#d5c5c5] cursor-pointer font-handlee font-semibold"
              onClick={closeDropdown}
            >
              HOME
            </ScrollLink>
            <ScrollLink
              to="home-part"
              smooth={true}
              duration={500}
              className="block px-4 py-2 hover:bg-[#d5c5c5] cursor-pointer font-handlee font-semibold"
              onClick={closeDropdown}
            >
              ABOUT
            </ScrollLink>
            <ScrollLink
              to="fetures-part"
              smooth={true}
              duration={500}
              className="block px-4 py-2 hover:bg-[#d5c5c5] cursor-pointer font-handlee font-semibold"
              onClick={closeDropdown}
            >
              FEATURES
            </ScrollLink>
            <ScrollLink
              to="contact-section"
              smooth={true}
              duration={700}
              className="block px-4 py-2 hover:bg-[#d5c5c5] cursor-pointer font-handlee font-semibold"
              onClick={closeDropdown}
            >
              CONTACT
            </ScrollLink>
            <Link
              to={"/chatPage"}
              className="block px-4 py-2 hover:bg-[#d5c5c5] cursor-pointer font-handlee font-semibold"
              onClick={navigateToChatPage}
            >
              CHAT PAGE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}