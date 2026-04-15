import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="flex flex-col flex-wrap justify-center items-center md:flex-row">
        <Cards />
        <Cards />
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
