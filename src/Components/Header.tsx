import React from "react";
import { AcademicCapIcon, HeartIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function Header() {
  return (
    <div>
            <header className="bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4ade80]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <h1 className="text-2xl font-bold">Futo 1k</h1>
          </div>
          <nav className=" md:flex space-x-8">
            <Link to="/" className="text-[#4ade80] font-semibold">Home</Link>
            <Link to="/AboutUs" className="text-gray-600 hover:text-[#4ade80]">About</Link>
            <Link to="/Campaigns" className="text-gray-600 hover:text-[#4ade80]">Campaigns</Link>
            <Link to="/Gallery" className="text-gray-600 hover:text-[#4ade80]">Gallery</Link>
            <Link to="/Contact" className="text-gray-600 hover:text-[#4ade80]">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className=" md:inline-flex px-4 py-2 border border-[#4ade80] text-[#4ade80] rounded-md hover:bg-[#4ade80] hover:text-white transition-colors">
              Donate Now
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
