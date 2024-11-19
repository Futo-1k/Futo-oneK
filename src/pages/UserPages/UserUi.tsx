import Footer from "../../Components/Footer.tsx";
import React from "react";
import User from "./User.tsx";
import UserHeader from "../../Components/UserHeader.tsx";

function UserUi() {
  return (
    <div>
        <UserHeader/>
        <User/>
        <Footer/>
    </div>
  )
}

export default UserUi
