import Footer from "../../Components/Footer";
import Gallery from "../Gallary";
import Header from "../../Components/Header";
import React, { Component } from "react";

export class GalleryUi extends Component {
  render() {
    return (
      <div className="bg-[#FCFCFC] min-h-screen">
            <Header/>
            <Gallery/>
            <Footer/>
      </div>
    )
  }
}

export default GalleryUi