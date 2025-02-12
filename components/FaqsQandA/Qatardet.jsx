import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

// Different sets of FAQs
const faqSets = {
  visa: [
    {
      question:
        "What are the requirements documents needed to apply for a QATAR visa?",
      answer:
        "1. International passport\n2.Clear passport photograph \n3. Paid hotel booking from our partners",
    },
    {
      question: "What is the cost of applying for a QATAR visa?",
      answer:
        "Qatar visa costs N200,000\n- Kindly note that payment for your accommodation for the entire duration of your stay is required prior to visa approval.",
    },
    {
      question: "How long is the visa processing timeline?",
      answer: " 5 to 7 days after submission",
    },
    {
      question: "What does the visa processing fee include?",
      answer:
        "Filling of client’s application form\nFlight reservation and Hotel/accommodation reservation\nAdvisory services based on our experience\nDocuments review\nGuiding client through the application process\nFurther assistance where needed\nPreparing client for interview through a pre-interview stage where necessary",
    },
    {
      question: "Can I apply if I’m not employed?",
      answer: "Yes, you can. You can make use of a sponsor.",
    },
    {
      question: "Is the submission online or physical?",
      answer:
        "It's an online submission, however, you will be required to go for biometrics at either the Ikeja, VI or Abuja centre.",
    },
    {
      question: "Is the application interview based?",
      answer: "No, it's not. You will be required to go for biometrics.",
    },
    {
      question:
        "Will I be able to go for biometrics and submission immediately I make payment and apply?",
      answer:
        "Submission is based on the available appointment date. Please note that the appointment date availability changes from time to time.",
    },
    {
      question: "What is the duration of the visa?",
      answer: "The visa is valid for 30 days from the date of issuance.",
    },
    {
      question: "How much should be in my account while applying for the visa?",
      answer:
        "You should have enough to cover for your trip. Our expert agents will give you further guidance.",
    },
    {
      question: "What is the best time to reapply for a visa after denial?",
      answer: "You can reapply immediately with expert assistance.",
    },
    {
      question:
        "Do I have to come to your office before I start my application?",
      answer:
        "It's not compulsory to come to the office, everything can be done online via mail. However, you're welcome to verify our office and speak with any of our agents.",
    },
    {
      question: "What is the guarantee of getting a visa?",
      answer:
        "We offer 95% guarantee on our visa applications. With our expertise and wide knowledge , we will guide you for a higher chance of getting your visa, however, visa issuance is at the discretion of the embassy consulate.",
    },
    {
      question: "Will I be refunded after a visa denial?",
      answer:
        "No, you will not be refunded but you can reapply without paying the visa processing fee. (This is only valid for 3 months after denial)",
    },
    {
      question: "Can I travel immediately when my visa is out?",
      answer: "Yes, you can",
    },
    {
      question: "Is it compulsory to have a travel history before I apply?",
      answer: " No, it's not compulsory. It is just an added advantage.",
    },
    {
      question:
        "Can Willsco handle my flight and accommodation bookings when my visa is out?",
      answer: "Of course we can and at affordable rates too!!!",
    },
  ],
  school: [
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

export default function Qatardet() {
  const [selectedFaq, setSelectedFaq] = useState("visa"); // Tracks current FAQ category
  const [openIndex, setOpenIndex] = useState(null); // Tracks open question
  const [currentPage, setCurrentPage] = useState(1); // Tracks pagination
  const itemsPerPage = 7; // Number of questions per page

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
        <div className="w-full flex gap-4  rounded-2xl py-4 px-4">
          {["visa", "school", "study"].map((type) => (
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
                : type === "school"
                ? "School service"
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
                : "bg-gray-500 text-white"
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
                : "bg-gray-500 text-white"
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
