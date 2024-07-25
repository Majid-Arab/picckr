"use client";

import { IconApple } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Checkout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 sm:gap-16 w-full h-full px-5 sm:px-8 md:px-14 lg:px-16 xl:px-28 py-8 sm:py-14 md:py-20 sm:!h-fit md:gap-5  sm:!pb-28 bg-white">
        <h1 className="text-1xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
          Check out the app
        </h1>
        <p className=" text-lg md:text-xl leading-6 text-black !text-center">
          Place orders for delivery & someone close to you will do the job
        </p>
        <div className="flex flex-col gap-5 md:flex-row justify-center items-center ">
          <div className="bg-black rounded-full text-white p-5">
            <svg
              className="w-10 h-10"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google-play"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
              ></path>
            </svg>
          </div>
          <div className="bg-black rounded-full text-white p-5">
            <svg
              className="w-12 h-12"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="apple"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center w-full h-full mt-5 min-400:mt-10 sm:mt-0">
        <Image
          src="https://picckr.com/assets/images/arrow-1.png"
          alt="Mobile"
          width={500}
          height={500}
          className="absolute -left-6 sm:-left-14 lg:-left-28 w-28 sm:w-56 md:w-64 lg:w-80 aos-init aos-animate"
        />
        <Image
          src="https://picckr.com/assets/images/sender-mobile.png"
          alt="Mobile"
          width={500}
          height={500}
          className="w-[250px]"
        />
        <Image
          src="https://picckr.com/assets/images/arrow-2.png"
          alt="Mobile"
          width={500}
          height={500}
          className="absolute right-0 top-0 w-20 sm:w-40 md:w-48 lg:w-64 aos-init aos-animate"
        />
      </div>
    </>
  );
}
