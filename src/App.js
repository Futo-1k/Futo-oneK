import "./index.css";
import  Contact  from "./pages/Contact.tsx";
import  Gallery  from "./pages/Gallary.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Campaigns  from "./pages/Campaigns.tsx";
import Home from "./pages/Home.tsx";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Component() {
  return (
    <Router>
      <Routes>


     {/* Route for the About Us page */}
      <Route path="/" element={<Home/>} />
      <Route path="/Campaigns" element={<Campaigns/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Gallery" element={<Gallery/>} />
      <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>

  )
}
