import React from "react";
import fb from "../../../assets/img/social/facebook.png";
import ln from "../../../assets/img/social/linkedin.png";
import gh from "../../../assets/img/social/github.png";

const Banner = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse mr-10">
        <img
          src="https://api.lorem.space/image/movie?w=260&h=400"
          alt=""
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="lg:mr-16 ml-10">
          <h1 class="text-5xl font-bold">
            <span className="text-primary">Hello,</span> I Am Naimul Islam
          </h1>
          <h2 className="text-xl font-bold text-secondary">
            Jr. FullStock Developer
          </h2>

          <button class="btn btn-outline btn-success mt-7">
            Download My CV
          </button>
          <div className="mt-5 lg:ml-16">
            <div class="avatar">
              <div class="w-10 transition ease-in-out delay-150  hover:translate-y-2  hover:scale-100  duration-300">
                <a
                  href="https://web.facebook.com/profile.php?id=100030513918924"
                  target="_blank"
                >
                  <img src={fb} alt="" />
                </a>
              </div>
            </div>
            <div class="avatar ml-3">
              <div class="w-10 transition ease-in-out delay-150  hover:translate-y-2  hover:scale-100  duration-300">
                <a
                  href="https://www.linkedin.com/in/md-naimul-islam-134412226/"
                  target="_blank"
                >
                  <img src={ln} alt="" />
                </a>
              </div>
            </div>
            <div class="avatar ml-3">
              <div class="w-10 transition ease-in-out delay-150  hover:translate-y-2  hover:scale-100  duration-300">
                <a href="https://github.com/naimulislamshakil" target="_blank">
                  <img src={gh} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
