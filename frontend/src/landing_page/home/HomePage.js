import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Awards from "./Awards";
import Pricing from "./Pricing";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";
import { Statistics } from "./Statistics";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Statistics />
      <Pricing />
      <OpenAccount />
    </>
  );
}

export default HomePage;
