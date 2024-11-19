import "./index.css";
import  Contact  from "./pages/Contact.tsx";
import  Gallery  from "./pages/Gallary.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Campaigns  from "./pages/Campaigns.tsx";
import Home from "./pages/Home.tsx";
import Login from "./pages/Register/Login.tsx";
import React from "react";
import UserRegister from "./pages/Register/UserRegister.tsx";
import UserUi from "./pages/UserPages/UserUi.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { VolunteerUi } from "./pages/UserPages/VolunteerUI.tsx";

export default function Component() {
  return (
    <Router>
      <Routes>


     {/* Route for the About Us page */}
      <Route path="/" element={<Home/>} />
      <Route path="/User" element={<UserUi/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Volunteer" element={<VolunteerUi/>} />
      <Route path="/Login/userRegister" element={<UserRegister/>} />
      <Route path="/Campaigns" element={<Campaigns/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Gallery" element={<Gallery/>} />
      <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>

  )
}
