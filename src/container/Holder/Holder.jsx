import React from "react";
import Blog from "../Blog/Blog";
import Testimonial from "../Testimonial/Testimonial";
import Nav from "./../../components/Nav/Nav";
import About from "./../About/About";
import { Footer } from "./../Footer/Footer";
import Header from "./../Header/Header";
const Holder = () => {
  return (
    <>
      {" "}
      <Nav />
      <Header />
      <About />
      <Blog />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Holder;
