"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <div className="p-4 rounded-full border-4 border-yellow-400">
              <Image
                src="https://picckr.com/assets/images/sender-whyus-3.png"
                alt="Accessibility"
                height={500}
                width={500}
                className="h-24 w-24 z-10"
              />
            </div>
            <h3 className=" text-xl md:text-2xl text-black  font-semibold text-center">
              Accessibility
            </h3>
            <p className=" text-15fs sm:text-17fs text-black text-center">
              PicckR is at your fingertips. Download to begin.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
