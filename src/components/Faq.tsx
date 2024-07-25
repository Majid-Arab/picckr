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
    // Add more FAQs as needed
  ];

  return (
    <>
      <div
        className="relative h-64 w-full bg-cover bg-center bg-[#F49C02]"
        style={{
          backgroundImage:
            "url(https://picckr.com/assets/images/community-bg.png)",
        }}
      >
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Join Us</h2>
          <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg">
            Join Now
          </button>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
          FAQs
        </h2>
        <p className="text-center text-lg mb-6">
          Still have some questions for us? Please reach out to our friendly
          team. Get in touch.
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
    </>
  );
};

export default FAQ;
