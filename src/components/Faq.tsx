'use client'
import { useState } from "react";

const FAQ = () => {
  const [showAll, setShowAll] = useState(false);
  const faqs = [
    {
      question: "What is the app?",
      answer: "It is an app for placing delivery orders.",
    },
    {
      question: "How does it work?",
      answer: "Place an order and someone close will do the job.",
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <div
        className="relative h-64 w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/path/to/background.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Join Us</h2>
          <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg">
            Join Now
          </button>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-lg mb-6">
          Find answers to common questions below
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
