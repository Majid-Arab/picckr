"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IconMenu2, IconX } from "@tabler/icons-react";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="fixed bg-black w-full">
      <div className="mx-auto px-2 sm:px-6 md:px-14 lg:px-16 xl:px-28 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="">
            <Image
              className="w-28"
              src="https://picckr.com/assets/svg/logo.svg"
              alt="Your Company"
              width={100}
              height={100}
            />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isSidebarOpen ? "true" : "false"}
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? (
                <IconX className="block h-6 w-6" stroke={2} />
              ) : (
                <IconMenu2 className="block h-6 w-6" stroke={2} />
              )}
            </button>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <a
                href="#"
                className="px-3 py-2 text-sm font-medium text-white hover:text-[#F4A602]"
                aria-current="page"
              >
                Home
              </a>
              <a
                href="#"
                className="px-3 py-2 text-sm font-medium text-white hover:text-[#F4A602]"
              >
                How it Works
              </a>
              <a
                href="#"
                className="px-3 py-2 text-sm font-medium text-white hover:text-[#F4A602]"
              >
                FAQs
              </a>
              <a
                href="#"
                className="px-3 py-2 text-sm font-medium text-white hover:text-[#F4A602]"
              >
                Contact
              </a>
              <a
                href="#"
                className="py-2 px-3 text-base font-medium text-white hover:text-[#F4A602]"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Sidebar menu for mobile --> */}
      <div
        className={`flex flex-col justify-center items-center fixed inset-y-0 left-0 w-full bg-white text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-30`}
      >
        <div className="flex flex-col justify-center items-center mt-10">
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-[#F48507]"
          >
            <IconX className="h-8 w-8" stroke={1} />
          </button>
          <a
            href="#"
            className="block py-2 px-3 text-base font-medium text-white"
            aria-current="page"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 px-3 text-base font-medium text-white hover:text-[#F4A602]"
          >
            How it Works
          </a>
          <a
            href="#"
            className="block py-2 px-3 text-base font-medium text-white hover:text-[#F4A602]"
          >
            FAQs
          </a>
          <a
            href="#"
            className="block py-2 px-3 text-base font-medium text-white hover:text-[#F4A602]"
          >
            Contact
          </a>
          <a
            href="#"
            className="block py-2 px-3 text-base font-medium text-white hover:text-[#F4A602]"
          >
            Support
          </a>
        </div>
      </div>
      {/* Backdrop for sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
