import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";
import { Navigation } from "swiper";
import manu from "../../../assets/img/Screenshot (5).png";
import { Link } from "react-router-dom";

const BestWebsite = () => {
  return (
    <div className="mt-5 py-5">
      <div class="divider"></div>
      <div className="text-center">
        <h2 className="font-bold text-accent text-2xl">Best Website</h2>
      </div>
      <div class="divider"></div>
      <div className="bg-base-200">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={1}
        >
          <SwiperSlide>
            <div class="card card-compact w-[700px] bg-base-100 shadow-2xl">
              <figure>
                <img src={manu} alt="" />
              </figure>
              <div class="card-body">
                <h2 class="card-title justify-center">
                  Laptop Parts Manufacturer Website!
                </h2>
                <div>
                  <button class="btn btn-xs mr-2 mt-2">React</button>
                  <button class="btn btn-xs mr-2 mt-2">React Router</button>
                  <button class="btn btn-xs mr-2 mt-2">
                    Firebase Authentication
                  </button>
                  <button class="btn btn-xs mr-2 mt-2">Tailwind CSS</button>
                  <button class="btn btn-xs mr-2 mt-2">Swiper JS</button>
                  <button class="btn btn-xs mr-2 mt-2">Node JS</button>
                  <button class="btn btn-xs mr-2 mt-2">Express JS</button>
                  <button class="btn btn-xs mr-2 mt-2">MongoDB</button>
                </div>
                <a
                  target="_blank"
                  href="https://build-laptop-parts.web.app/"
                  class="btn btn-outline btn-success lgw-1/4 w-2/4 mx-auto"
                >
                  Learn More
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BestWebsite;
