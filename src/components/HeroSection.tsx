"use client";

import Image from "next/image";
import { useState } from "react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative flex flex-col justify-center items-center gap-10 sm:gap-16 w-full h-full px-5 sm:px-8 md:px-14 lg:px-16 xl:px-28 py-8 sm:py-14 md:py-20 sm:!h-fit md:gap-20  sm:!pb-28 bg-white">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
          Delivery on the go!
        </h1>
        <p className="text-xl md:text-2xl text-custom_black mt-1 sm:mt-7">
          Have a delivery?
        </p>
      </div>
      <div className="w-full">
        <Image
          width={500}
          height={500}
          src="https://picckr.com/assets/svg/hero.svg"
          alt="Your Company"
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-10">
        <Image
          width={500}
          height={500}
          src="https://picckr.com/assets/images/google.png"
          alt="Google Play"
          className="object-cover h-20 w-44"
        />
        <Image
          width={500}
          height={500}
          src="https://picckr.com/assets/images/apple.png"
          alt="App Store"
          className="object-cover h-20 w-44"
        />
      </div>
    </div>
  );
}
