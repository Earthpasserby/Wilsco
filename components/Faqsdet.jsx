import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question:
      "What are the requirements documents needed to apply for a UK visa?",
    answer: `
    1. International passport (must be valid for at least 6 months)\n
    2. Six white background passport photographs\n
    3. Work details i.e., introduction letter, Work ID, pay slip\n
    4. CAC registration certificate (if business is registered)\n
    5. 6 months bank statement
    `,
  },
  {
    question: "What is the cost of applying for a UK visa?",
    answer: "The cost varies based on the type of visa.",
  },
  {
    question: "How long is the visa processing timeline?",
    answer: "It depends on the visa type but generally takes 2-4 weeks.",
  },
  {
    question: "What does the visa processing fee include?",
    answer: "The fee includes administrative and biometric processing costs.",
  },
  {
    question: "Can I apply for the visa if I’m not employed or run a business?",
    answer: "Yes, but you may need a sponsor.",
  },
];

export default function Faqsdet() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center">
        Frequently Asked Questions
      </h2>
      <div className="mt-6 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full flex justify-between items-center py-4 text-lg font-medium text-left"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-100 text-gray-700 whitespace-pre-line">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
