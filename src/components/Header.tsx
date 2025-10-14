import { useState } from "react";
import logo from "../images/Logo_Xittoo Sewa.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center justify-around max-w-7xl mx-auto px-6 h-[70px]">
        {/* Logo */}
        <img
          src={logo}
          alt="Xittoo Sewa Logo"
          className="h-[40px] w-[220px] object-contain"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-row gap-10 text-gray-800 font-medium">
          <button className="hover:text-[#10507a] cursor-pointer transition-colors">
            Home
          </button>
          <button className="hover:text-[#10507a] cursor-pointer transition-colors">
            Contact Us
          </button>
        </nav>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            // Close Icon (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <nav className="flex flex-col items-center py-4 space-y-3 text-gray-800 font-medium">
            <button
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#10507a] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#10507a] transition-colors"
            >
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
