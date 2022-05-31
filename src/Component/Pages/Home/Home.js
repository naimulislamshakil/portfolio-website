import React from "react";
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import BestWebsite from "./BestWebsite";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <BestWebsite></BestWebsite>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
