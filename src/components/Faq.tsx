"use client";

import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      question: "What is Flowbite?",
      answer:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
      details:
        'Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.',
    },
    {
      question: "Is there a Figma file available?",
      answer:
        "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
      details:
        'Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.',
    },
    {
      question: "What are the differences between Flowbite and Tailwind UI?",
      answer:
        "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
      details:
        'Learn more about these technologies: <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400"><li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li><li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li></ul>',
    },
    {
      question: "What are the differences between Flowbite and Tailwind UI?",
      answer:
        "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
      details:
        'Learn more about these technologies: <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400"><li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li><li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li></ul>',
    },
    {
      question: "What are the differences between Flowbite and Tailwind UI?",
      answer:
        "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
      details:
        'Learn more about these technologies: <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400"><li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li><li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li></ul>',
    },
    {
      question: "What are the differences between Flowbite and Tailwind UI?",
      answer:
        "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
      details:
        'Learn more about these technologies: <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400"><li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li><li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li></ul>',
    },
    {
      question: "What are the differences between Flowbite and Tailwind UI?",
      answer:
        "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
      details:
        'Learn more about these technologies: <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400"><li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li><li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li></ul>',
    },
    // Add more FAQ items as needed
  ];

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div data-accordion="collapse" id="FAQ">
      <div className="px-5 sm:px-8 md:px-14 lg:px-16 xl:px-28 py-8 sm:py-14 md:py-20">
        <div
          className="relative w-full p-8 bg-cover bg-center bg-[#F49C02] rounded-2xl"
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
      </div>
      <div className="pt-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center mb-5">
          FAQs
        </h2>
        <p className="text-center text-lg">
          Still have some questions for us? Please reach out to our <br />
          friendly team. Get in touch.
        </p>
      </div>
      <div className="px-5 sm:px-8 md:px-14 lg:px-16 xl:px-28 py-8 sm:py-14 md:py-20">
        {faqs.slice(0, showAll ? faqs.length : 5).map((faq, index) => (
          <div key={index}>
            <h2 id={`accordion-flush-heading-${index + 1}`}>
              <button
                type="button"
                className="w-full m-3 px-3 py-10 bg-[#F7F7F7] rounded-md font-medium  gap-3"
                aria-expanded={activeIndex === index}
                aria-controls={`accordion-flush-body-${index + 1}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between">
                  <span>{faq.question}</span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 shrink-0 rotate-180${
                      activeIndex === index ? "rotate-0 text-yellow-400" : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </div>
                <div
                  id={`accordion-flush-body-${index + 1}`}
                  className={`text-start ${
                    activeIndex === index ? "" : "hidden"
                  }`}
                  aria-labelledby={`accordion-flush-heading-${index + 1}`}
                >
                  <div className="">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      {faq.answer}
                    </p>
                    <p
                      className="text-gray-500 dark:text-gray-400"
                      dangerouslySetInnerHTML={{ __html: faq.details }}
                    ></p>
                  </div>
                </div>
              </button>
            </h2>
          </div>
        ))}
        {faqs.length > 5 && (
          <button
            className="flex items-center justify-center w-full py-5 font-medium text-orange-500 hover:text-orange-600 gap-3"
            onClick={() => setShowAll(!showAll)}
          >
            <span>{showAll ? "Show Less" : "More FAQs"}</span>
            <svg
              className={`w-3 h-3 transition-transform ${
                showAll ? "rotate-180" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default FAQ;
