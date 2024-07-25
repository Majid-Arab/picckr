"use client";
import { useState } from "react";

const FAQ = () => {
  const [showAll, setShowAll] = useState(false);
  const faqs = [
    {
      question: "What is PicckR?",
      answer:
        "PicckR is a delivery service app that allows users to place orders for delivery, and someone nearby will fulfill the order.",
    },
    {
      question: "Where is PicckR available?",
      answer:
        "PicckR is available in multiple locations. Please check the app for the latest available areas.",
    },
    {
      question: "Can I schedule a delivery ahead of time?",
      answer:
        "Yes, you can schedule deliveries in advance through the PicckR app.",
    },
  ];

  return (
    <div className="px-5 sm:px-8 md:px-14 lg:px-16 xl:px-28 py-8 sm:py-14 md:py-20">
      <div
        className="relative h-64 w-full bg-cover bg-center bg-[#F49C02] rounded-2xl"
        style={{
          backgroundImage:
            "url(https://picckr.com/assets/images/community-bg.png)",
        }}
      >
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold pb-5">
            Join #Picckr Community
          </h2>
          <button className="mt-5 px-10 py-2 text-orange-500 bg-white rounded-lg">
            Join
          </button>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
          FAQs
        </h2>
        <p className="text-center text-lg mb-6">
          Still have some questions for us? Please reach out to our <br />
          friendly team. Get in touch.
        </p>
        <div className="space-y-4">
          {faqs.slice(0, showAll ? faqs.length : 3).map((faq, index) => (
            <details key={index} className="bg-gray-100 p-4 rounded-lg">
              <summary className="cursor-pointer font-semibold">
                {faq.question}
              </summary>
              <p className="mt-2">{faq.answer}</p>
            </details>
          ))}
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg mx-auto block"
        >
          {showAll ? "Show Less" : "More FAQs"}
        </button>
      </div>
    </div>
  );
};

export default FAQ;
