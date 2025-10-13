import React from "react";
import logo from "../images/Logo_Xittoo Sewa.png";

const Header = () => {
  return (
    <header className="w-full h-[80px] bg-white shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 h-full">
        {/* Logo */}
        <img
          src={logo}
          alt="Xittoo Sewa Logo"
          className="h-[40px] w-[220px] object-contain"
        />

        {/* Navigation */}
        <nav className="flex gap-10 text-gray-800 font-medium">
          <button className="hover:text-[#10507a] cursor-pointer transition-colors">Home</button>
          <button className="hover:text-[#10507a] cursor-pointer transition-colors">Contact Us</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
