import Footer from "../Components/Footer.tsx";
import Header from "../Components/Header.tsx";
import React, { Component } from "react";

export default class componentName extends Component {
  render() {
    return (
      <>
      <Header/>
        <h1>Welcome to Contacts's Page</h1>
        <p>This is a simple React component.</p>
        <p>You can pass a name as a prop to this component.</p>     Cont
      <Footer/>
      </>
    )
  }
}
