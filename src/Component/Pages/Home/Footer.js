import React from "react";
import fb from "../../../assets/img/social/facebook.png";
import ln from "../../../assets/img/social/linkedin.png";
import gh from "../../../assets/img/social/github.png";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div class="footer p-10  mt-5">
        <div>
          <p>
            Uttarkull-8530 <br />
            Banaripara, Barishal, Bangladesh.
          </p>
          <p>
            Email: <b>naimul.islam.shakil55@gmail.com</b>
          </p>
          <p>
            Phone Number: <b>+8801879212420</b>
            <br />
            <b className="ml-[110px]">+8801317514691</b>
          </p>
        </div>
        <div>
          <div class="grid grid-flow-col gap-4">
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

      <div className="flex justify-center my-2">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Naimul
          Islam.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
