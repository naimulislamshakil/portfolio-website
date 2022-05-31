import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";
import { Navigation } from "swiper";

const BestWebsite = () => {
  return (
    <div className="mt-5">
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
          <SwiperSlide>Slide 1</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BestWebsite;
