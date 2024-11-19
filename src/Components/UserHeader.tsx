import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="container flex items-center justify-between px-2 py-6 mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-[#4ade80]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <h1 className="text-2xl font-bold">Futo 1k</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-8 md:flex">
          <Link to="/" className="text-[#4ade80] font-semibold">
            Home
          </Link>
          <Link to="/AboutUs" className="text-gray-600 hover:text-[#4ade80]">
            About
          </Link>
          <Link to="/User" className="text-gray-600 hover:text-[#4ade80]">
            User
          </Link>
          <Link to="/Campaigns" className="text-gray-600 hover:text-[#4ade80]">
            Campaigns
          </Link>
          <Link to="/Volunteer" className="text-gray-600 hover:text-[#4ade80]">
            Volunteer
          </Link>
          <Link to="/Gallery" className="text-gray-600 hover:text-[#4ade80]">
            Gallery
          </Link>
        </nav>

        {/* Desktop Action Items */}
        <div className="items-center hidden space-x-4 md:flex">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-gray-600 md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-white ${isMenuOpen ? 'block' : 'hidden'
          } shadow-lg`}
      >
        <nav className="flex flex-col px-4 py-2">
          <Link
            to="/"
            className="py-2 text-[#4ade80] font-semibold border-b border-gray-100"
          >
            Home
          </Link>
          <Link
            to="/User"
            className="py-2 text-gray-600 hover:text-[#4ade80] border-b border-gray-100"
          >
            User
          </Link>
          <Link
            to="/AboutUs"
            className="py-2 text-gray-600 hover:text-[#4ade80] border-b border-gray-100"
          >
            About
          </Link>
          <Link
            to="/Campaigns"
            className="py-2 text-gray-600 hover:text-[#4ade80] border-b border-gray-100"
          >
            Campaigns
          </Link>
          <Link
            to="/Gallery"
            className="py-2 text-gray-600 hover:text-[#4ade80] border-b border-gray-100"
          >
            Gallery
          </Link>
          <Link
            to="/Contact"
            className="py-2 text-gray-600 hover:text-[#4ade80] border-b border-gray-100"
          >
            Contact
          </Link>

          <div className="flex justify-center pb-4 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default UserHeader;



