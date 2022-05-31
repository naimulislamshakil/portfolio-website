import React from "react";
import "./Home.css";

const AboutMe = () => {
  return (
    <div className="mt-5">
      <div class="divider"></div>
      <div className="text-center">
        <h2 className="font-bold text-primary text-lg">What I Do</h2>
        <h2 className="font-bold text-accent text-2xl">About Me</h2>
      </div>
      <div class="divider"></div>
      <div class="hero min-h-screen bg-base-200">
        <div class="about-me flex-col lg:flex-row">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
