import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

// Different sets of FAQs
const faqSets = {
  visa: [
    {
      question: "What are the requirements for a UK visa?",
      answer: "1. Passport\n2. Photos\n3. Bank statement, etc.",
    },
    {
      question: "What is the cost of applying for a UK visa?",
      answer: "The cost varies based on the type of visa.",
    },
    {
      question: "How long is the visa processing timeline?",
      answer: "It takes 2-4 weeks.",
    },
    {
      question: "What does the visa processing fee include?",
      answer: "It includes admin and biometric costs.",
    },
    {
      question: "Can I apply if I’m not employed?",
      answer: "Yes, but you may need a sponsor.",
    },
  ],
  travel: [
    {
      question: "What should I pack for international travel?",
      answer: "Passport, visa, clothes, money, etc.",
    },
    {
      question: "How to book cheap flights?",
      answer: "Book early, use comparison sites, travel off-peak.",
    },
    {
      question: "Do I need travel insurance?",
      answer: "Highly recommended for emergencies.",
    },
    {
      question: "What are the best travel destinations?",
      answer: "Depends on interests, budget, and season.",
    },
    {
      question: "How to avoid jet lag?",
      answer: "Adjust sleep before departure, stay hydrated.",
    },
  ],
  study: [
    {
      question: "What are the best countries to study abroad?",
      answer: "UK, USA, Canada, Germany, Australia.",
    },
    {
      question: "How do I apply for a student visa?",
      answer: "Admission letter, proof of funds, language tests.",
    },
    {
      question: "Are scholarships available?",
      answer: "Yes, many universities offer scholarships.",
    },
    {
      question: "What documents do I need for study visas?",
      answer: "ID, transcripts, proof of funds, acceptance letter.",
    },
    {
      question: "How long does it take to get a student visa?",
      answer: "Usually 4-8 weeks, depending on the country.",
    },
  ],
};

export default function Faqsdet() {
  const [selectedFaq, setSelectedFaq] = useState("visa"); // Tracks current FAQ category
  const [openIndex, setOpenIndex] = useState(null); // Tracks open question
  const [currentPage, setCurrentPage] = useState(1); // Tracks pagination
  const itemsPerPage = 2; // Number of questions per page

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Get selected FAQ set & apply pagination
  const faqs = faqSets[selectedFaq];
  const totalPages = Math.ceil(faqs.length / itemsPerPage);
  const paginatedFaqs = faqs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-[#fbfbfb]">
      <div className="max-w-4xl mx-auto p-6">
        {/* FAQ Category Buttons */}
        <div className="w-full flex gap-4 bg-white rounded-2xl py-4 px-4">
          {["visa", "travel", "study"].map((type) => (
            <button
              key={type}
              className={`px-4 py-2 rounded-lg ${
                selectedFaq === type ? "bg-red-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => {
                setSelectedFaq(type);
                setCurrentPage(1); // Reset to first page
                setOpenIndex(null);
              }}
            >
              {type === "visa"
                ? "Visa Services"
                : type === "travel"
                ? "Travel Tips"
                : "Study Abroad"}
            </button>
          ))}
        </div>

        {/* FAQ List with Pagination */}
        <div className="mt-6 space-y-4">
          {paginatedFaqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
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
                <div className="p-4 text-gray-700 whitespace-pre-line">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            className={`px-3 py-2 rounded-md ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-red-500 text-white"
            }`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-3 py-2 rounded-md ${
                currentPage === i + 1 ? "bg-red-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className={`px-3 py-2 rounded-md ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-red-500 text-white"
            }`}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
