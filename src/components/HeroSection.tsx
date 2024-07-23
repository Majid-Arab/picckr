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
    <div className="relative px-6 pt-14 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Delivery on the go!
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">Have a delivery?</p>
      </div>
      <div>
        <Image
          width={100}
          height={100}
          src="https://picckr.com/assets/svg/hero.svg"
          alt="Your Company"
          className="w-full mx-auto"
        />
      </div>
      <div className="flex">
        <Image
          width={100}
          height={100}
          src="https://picckr.com/assets/images/google.png"
          alt="Your Company"
          className="w-full mx-auto"
        />
        <Image
          width={100}
          height={100}
          src="https://picckr.com/assets/images/apple.png"
          alt="Your Company"
          className="w-full mx-auto"
        />
      </div>
    </div>
  );
}
