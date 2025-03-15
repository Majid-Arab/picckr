"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const slideData = [
  {
    src: "https://picckr.com/assets/images/sender-whyus-3.png",
    title: "Accessibility",
    description: "PicckR is at your fingertips. Download to begin.",
  },
  {
    src: "https://picckr.com/assets/images/sender-whyus-3.png",
    title: "Real-Time Tracking",
    description: "Track your packages on the go.",
  },
  {
    src: "https://picckr.com/assets/images/sender-whyus-3.png",
    title: "Community-Driven",
    description: "Your neighbor may just be your delivery person.",
  },
  {
    src: "https://picckr.com/assets/images/sender-whyus-3.png",
    title: "Customer Service",
    description: "A team is readily available, round the clock.",
  },
  {
    src: "https://picckr.com/assets/images/sender-whyus-3.png",
    title: "Customer Service",
    description: "A team is readily available, round the clock.",
  },
  {
    src: "https://picckr.com/assets/images/sender-whyus-3.png",
    title: "Customer Service",
    description: "A team is readily available, round the clock.",
  },
];

const Carousel = () => {
  return (
    <div className="px-5 sm:px-8 md:px-14 lg:px-16 xl:px-28 py-8 sm:py-14 md:py-20">
      <Swiper
        spaceBetween={30}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center gap-5 w-full h-full flex-shrink-0">
              <div className="p-4 rounded-full border-4 border-yellow-400">
                <Image
                  src={slide.src}
                  alt={slide.title}
                  className="h-20 w-20"
                  height={500}
                  width={500}
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-2xl text-black font-semibold">
                  {slide.title}
                </h3>
                <p className="text-md text-black">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;