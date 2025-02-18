//CameraHeader


import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CameraHeader() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility (optional if you need a toggle effect)
  const toggleDropdown = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const navigateToChatPage = (e) => {
    e.preventDefault();
    console.log("chatPage");
    navigate("/chatPage");
  };

  return (
    <>
      <div className="bg-[#f8f1f1] flex flex-row justify-around items-center p-4 max-lg:hidden">
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
          <Link
            to={"/"}
            className="cursor-pointer  hover:underline duration-500 hover:text-green-800"
          >
            HOME
          </Link>
          <Link to={"/"} className="cursor-pointer  hover:underline duration-500 hover:text-green-800">
            ABOUT
          </Link>
          <Link to={"/"} className="cursor-pointer hover:underline duration-500 hover:text-green-800">
            FEATURES
          </Link>
          <Link to={"/"} className="cursor-pointer  hover:underline duration-500 hover:text-green-800">
            CONTACT
          </Link>
          <Link
            onClick={navigateToChatPage}
            className="cursor-pointer  hover:underline duration-500 hover:text-green-800"
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

        <div className="group relative">
          {/* Options Button */}
          <Link
            onClick={toggleDropdown}
            className="ml-2 px-4 py-2 max-lg:ml-0 max-lg:mt-5 text-black font-handlee font-semibold text-xl"
          >
            Options
          </Link>

          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-1 mr-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
            <Link
              to={"/"}
              className="block px-4 py-2 hover:bg-[#d5c5c5] cursor-pointer font-handlee font-semibold"
            >
              HOME
            </Link>
            <Link to={"/"} className="block px-4 py-2 hover:bg-[#d5c5c5] cursor-pointer font-handlee font-semibold">
              ABOUT
            </Link>
            <Link to={"/"} className="block px-4 py-2 hover:bg-[#d5c5c5] cursor-pointer font-handlee font-semibold">
              CONTACT
            </Link>
            <Link
              to={"/chatPage"}
              className="block px-4 py-2 hover:bg-[#d5c5c5] cursor-pointer font-handlee font-semibold"
            >
              CHAT PAGE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}