import React from "react";
import "./Home.css";
import check from "../../../assets/img/check.png";

const AboutMe = () => {
  return (
    <div className="mt-5" id="about">
      <div class="divider"></div>
      <div className="text-center">
        <h2 className="font-bold text-primary text-lg">What I Do</h2>
        <h2 className="font-bold text-accent text-2xl">About Me</h2>
      </div>
      <div class="divider"></div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://api.lorem.space/image/movie?w=260&h=400"
            alt=""
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <p class="m-7">
              I am Naimul Islam.I am a Fullstock Web Application Devoloper using
              JavaScript.The things that i know are mentioned below:
            </p>
            <div className="ml-16">
              <h2 className="text-lg font-bold text-black flex items-center ">
                <img className="w-[25px] mr-3" src={check} alt="" /> HTML5
              </h2>
              <h2 className="text-lg font-bold text-black flex items-center ">
                <img className="w-[25px] mr-3" src={check} alt="" /> CSS3
              </h2>
              <h2 className="text-lg font-bold text-black flex items-center ">
                <img className="w-[25px] mr-3" src={check} alt="" /> Bootstrap
              </h2>
              <h2 className="text-lg font-bold text-black flex items-center ">
                <img className="w-[25px] mr-3" src={check} alt="" /> Tailwind
                css
              </h2>
              <h2 className="text-lg font-bold text-black flex items-center ">
                <img className="w-[25px] mr-3" src={check} alt="" /> Javascript
              </h2>
              <h2 className="text-lg font-bold text-black flex items-center ">
                <img className="w-[25px] mr-3" src={check} alt="" /> Typescript
              </h2>
              <h2 className="text-lg font-bold text-black flex items-center ">
                <img className="w-[25px] mr-3" src={check} alt="" /> Javascript
                API
              </h2>
              <h2 className="text-lg font-bold text-black flex items-center ">
                <img className="w-[25px] mr-3" src={check} alt="" /> React
              </h2>
              <h2 className="text-lg font-bold text-black flex items-center ">
                <img className="w-[25px] mr-3" src={check} alt="" /> React
                Router
              </h2>
              <h2 className="text-lg font-bold text-black flex items-center ">
                <img className="w-[25px] mr-3" src={check} alt="" /> React
                Authentication
              </h2>
              <h2 className="text-lg font-bold text-black flex items-center ">
                <img className="w-[25px] mr-3" src={check} alt="" /> Node JS
              </h2>
              <h2 className="text-lg font-bold text-black flex items-center ">
                <img className="w-[25px] mr-3" src={check} alt="" /> Express JS
              </h2>
              <h2 className="text-lg font-bold text-black flex items-center ">
                <img className="w-[25px] mr-3" src={check} alt="" />{" "}
                Mongodb(CRUD)
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
