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
        className="bg-white p-6 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-center mb-5">Contact us</h2>
        <p className="text-center text-lg">
          Have some questions? Get in touch with our team, they are super
          excited <br />
          to hear from you.
        </p>
        <div className="flex">
          <div className="hidden md:flex relative justify-center items-end h-full w-470wd md:w-350wd rounded-10bd md:px-0 bg-[#F69308] w-1/2">
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
            <form action="" className="border-solid border-2 ">
              <div>
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder="Your full name" />
              </div>
              <div>
                <label htmlFor="">Email Address</label>
                <input type="text" placeholder="Your email address" />
              </div>
              <div>
                <label htmlFor="">Your Message</label>
                <textarea name="" id="" placeholder="Your message"></textarea>
              </div>
              <button>Send Your Message</button>
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
    <div className="text-center pb-20">
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
