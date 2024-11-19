import Footer from "../../Components/Footer.tsx";
import Header from "../../Components/Header.tsx";
import React, { Component } from "react";
import Volunteer from "../UserPages/Volunteer.tsx";

export class SignUp extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Volunteer/>
        <Footer/>
      </div>
    )
  }
}

export default SignUp
