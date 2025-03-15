"use client";
import { IconBrandWhatsapp, IconMail, IconPhone } from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Contact Us
        </h2>
        <p className="text-center text-sm md:text-lg mb-6">
          Have some questions? Get in touch with our team, they are excited to
          hear from you.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="hidden md:flex flex-1 relative justify-center items-center bg-[#F69308] rounded-lg">
            <Image
              src="https://picckr.com/assets/images/contact-arrow.png"
              alt="Contact Arrow"
              width={100}
              height={100}
              className="absolute w-[40px] top-10 right-10"
            />
            <Image
              src="https://picckr.com/assets/images/sender-contact.png"
              alt="Contact us Image"
              width={100}
              height={100}
              className="w-[60%] absolute bottom-0"
            />
          </div>
          <form className="flex-1 space-y-4 border border-gray-300 rounded-lg p-4">
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Your Message
              </label>
              <textarea
                placeholder="Your message"
                className="w-full px-3 py-2 border rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Send Your Message
            </button>
          </form>
        </div>

        {/* Contact Links */}
        <div className="mt-6 flex flex-col items-center space-y-3 text-sm">
          <a href="mailto:hi@picckr.com" className="flex items-center gap-2">
            <IconMail size={18} />
            <p>hi@picckr.com</p>
          </a>
          <a href="tel:+2349160002449" className="flex items-center gap-2">
            <IconPhone size={18} />
            <p>+234 916 000 2449</p>
          </a>
          <a href="https://wa.me/2349160002449" className="flex items-center gap-2">
            <IconBrandWhatsapp size={18} />
            <p>+234 916 000 2449</p>
          </a>
        </div>
      </div>
    </div>
  );
};

const ContactUsButton: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="text-center pb-20" id="Contact">
      <button
        className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        onClick={handleButtonClick}
      >
        Contact Us
      </button>
      {isModalVisible && (
        <Modal isVisible={isModalVisible} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ContactUsButton;
