import React from "react";
import About from "./about";
import Creater from "./creater";
import Footer from "./footer";
import Home from "./home";
import Navbar from "./navbar";
import Navbars from "./Navbars";
import Services from "./services";

const Index = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Navbars />
      <Home />
      <About />
      <Creater />
      <Services />
      <Footer />
    </>
  );
};

export default Index;
