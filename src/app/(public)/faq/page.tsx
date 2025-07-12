"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "When will the RSVP WhatsApp message be sent before the wedding?",
    answer:
      "We recommend sending the RSVP WhatsApp message 4 weeks before the wedding date to allow your guests plenty of time to respond. However, the exact timing can be adjusted according to your request for optimal planning.",
  },
  {
    question: "Can I customize the message template for the RSVP invitation?",
    answer:
      "Absolutely! We offer full customization of your RSVP message template. You can personalize it with your wedding details, special instructions and questions, tailored to fit your unique preferences.",
  },
  {
    question: "What happens if my guests do not respond to the RSVP message?",
    answer:
      "If your guests don’t respond to the initial RSVP message, we will contact them via a follow-up call and Instagram DM, so you don’t have to worry or stress about keeping track of your guest list. We’ll handle it for you!",
  },
  {
    question: "How do I manage and track my wedding RSVPs?",
    answer:
      "You can easily track your RSVPs through our dedicated dashboard. We provide real-time updates and a simple overview of your guest list, so you always know who’s coming and who hasn’t responded yet.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="side-margin">
      <div className="mb-3xl mx-auto -mt-12 flex max-w-3xl flex-col items-start p-2 md:-mt-14 lg:-mt-16 xl:-mt-20 2xl:-mt-24">
        <h3 className="text-h3 mb-6 font-marjorie text-dark-green-base drop-shadow-sm">
          Frequently Asked Questions
        </h3>
        <div className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-[30px] bg-light-green-lighter shadow transition-all duration-500 ${
                openIndex === index ? "px-2" : "px-2"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-4 p-4 text-left font-marjorie text-lg text-dark-green-base drop-shadow-sm"
              >
                {faq.question}
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </button>
              <div
                id={`faq-${index}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] scale-100 px-4 py-4 opacity-100"
                    : "max-h-0 scale-100 overflow-hidden px-4 opacity-0"
                }`}
              >
                <p className="text-md max-w-[90%] font-inter text-dark-green-base drop-shadow-sm">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
