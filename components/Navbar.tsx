import React from "react";
import { FaGlobe } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center h-[60px] font-sans">
        {/* Left: Logo */}
        <div className="flex items-center">
          <div className="w-7 h-7 bg-green-500 rounded-md flex items-center justify-center mr-2">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </div>
          <span className="text-[20px] font-bold text-gray-800">RentUP</span>
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex space-x-6 text-[14px] font-medium">
          <a href="#" className="text-gray-800 hover:text-green-500">Home</a>
          <a href="#" className="text-gray-600 hover:text-green-500">About</a>
          <a href="#" className="text-gray-600 hover:text-green-500">Services</a>
          <a href="#" className="text-gray-600 hover:text-green-500">Blog</a>
          <a href="#" className="text-gray-600 hover:text-green-500">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-green-500">Contact Us</a>
        </div>

        {/* Right: Globe + User */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-600 hover:text-green-500 text-[14px] font-medium">
            <FaGlobe className="text-[14px] mr-1" />
            EN
          </button>
          <button className="text-gray-600 hover:text-green-500 text-[18px]">
            <FiUser className="text-[18px]" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
