import React from "react";
import freelancer from "../../../assets/img/brands/freelancer.png";
import fiverr from "../../../assets/img/brands/fiverr.png";
import upwork from "../../../assets/img/brands/upwork.png";
import dribbble from "../../../assets/img/brands/dribbble.png";
import behance from "../../../assets/img/brands/behance.png";

const MarketPlace = () => {
  return (
    <div className="mt-5">
      <div class="divider"></div>
      <div className="text-center bg-black grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 justify-center py-5 w-full items-center">
        <img src={freelancer} alt="" />
        <img src={fiverr} alt="" />
        <img src={upwork} alt="" />
        <img src={dribbble} alt="" />
        <img src={behance} alt="" />
      </div>
      <div class="divider"></div>
    </div>
  );
};

export default MarketPlace;
