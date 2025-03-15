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
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg "
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-center mb-5">Contact us</h2>
        <p className="text-center text-lg">
          Have some questions? Get in touch with our team, they are super
          excited <br />
          to hear from you.
        </p>
        <div className="flex">
          <div className="flex-1 hidden md:flex relative justify-center items-end bg-[#F69308] rounded-lg text-start m-2">
            <Image
              src="https://picckr.com/assets/images/contact-arrow.png"
              alt="Contact Arrow"
              width={500}
              height={500}
              className="absolute w-[100px]"
            />
            <Image
              src="https://picckr.com/assets/images/sender-contact.png"
              alt="Contact us Image"
              width={500}
              height={500}
              className="w-[100px]"
            />
          </div>
          <div>
            <form className="space-y-4 border-solid border-black border-[1px] rounded-lg px-4 py-8 text-start m-2">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Your Message</label>
                <textarea
                  placeholder="Your message"
                  className="w-full px-3 py-2 border rounded-lg h-24"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-2 bg-orange-500 text-white rounded-lg"
              >
                Send Your Message
              </button>
            </form>
          </div>
        </div>
        <div>
          <a href="">
            <IconMail />
            <p>hi@picckr.com</p>
          </a>
          <a href="">
            <IconPhone />
            <p>+234 916 000 2449</p>
          </a>
          <a href="">
            <IconBrandWhatsapp />
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
        className="px-6 py-2 bg-orange-500 text-white rounded-lg"
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
