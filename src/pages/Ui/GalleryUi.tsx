
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import React, { Component } from "react";
import Gallery from "../Gallary";

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
