import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

// Different sets of FAQs
const faqSets = {
  visa: [
    {
      question:
        "What are the requirements documents needed to apply for a UK visa?",
      answer:
        "1. International passport (must be valid for at least 6 months)\n2. 5X5 white background passport photograph\n3. Work details i.e., introduction letter, Work ID card, etc\n4. CAC registration certificate if business is registered.\n5. 6 months bank statement",
    },
    {
      question: "What is the cost of applying for a UK visa?",
      answer:
        "Processing Fee - N200,000 per adult\nN160,000 per child\n\n6 Months Visa Fee\nIkeja or Abuja: $170\nVI Centre: $170 + £55 (Location Fee)\n\n2 Years Visa Fee\nIkeja or Abuja: $600\nVI Centre: $600 + £55 (Location Fee)\n\n5 Years Visa Fee\nIkeja or Abuja: $1000\nVI Centre: $1000 + £55 (Location Fee)\n\n10 Years Visa Fee\nIkeja or Abuja: $1250\nVI Centre: $1250 + £55 (Location Fee)\n\nApplication fee (Visiting Academic: 6-12 months):\nIkeja or Abuja: $309\nVI Centre: $309 + £55 (Location Fee)\n\nApplication fee (Medical Treatment: 11 months)\nIkeja or Abuja: $300\nVI Centre: $300 + £55 (Location Fee)\n\nApplication fee (Marriage Visitor: 6 months):\nIkeja or Abuja: $200\nVI Centre: $200 + £55 (Location Fee)\n\nAdded Services (Optional):\nFasTrack Service at our office (2 days): N20,000\nExpress courier: N8,000\nKeep my passport: N70,000\nPremium lounge (payment on-site): £89\nPrime time appointment (Payment on-site): N90,000\nFlexi Appointment (Payment on-site): £89\nFast track service (5 days): £220\nFast track service (1 day): £956\n\nWhat is a location fee: this is an extra service charge paid to the visa application centre if you want to submit in VI centre. Every other submission centre does not require this location fee.",
    },
    {
      question: "How long is the visa processing timeline?",
      answer:
        "It could take 30 to 60 working days after submission at the embassy.",
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
      question: "Is an invitation letter compulsory for the visa application?",
      answer:
        "No, an invitation letter is not compulsory but can be an added advantage. However, it does not guarantee visa issuance.",
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
      question:
        "What are the requirements to apply for admission in United Kingdom?",
      answer:
        "UNDERGRADUATE\nWaec result\nInternational Passport\nPassport photograph\nHigh school transcript\nReferences\n\nPOSTGRADUATE\nWaec result\nWaec scratch card\nInternational Passport\nPassport photograph\nTranscript\nBSc certificate\nLetter of intent\nCV\nEnglish Proficiency (where applicable)",
    },
    {
      question: "How much is the school services fee?",
      answer: "It costs N300,000 and we would be applying to two schools.",
    },
    {
      question: "What does the school service cover?",
      answer:
        "Reviewing your documents\nAdvisory services based on our experience\nDoing a school search\nGetting a suitable school\nCreating your student profile\nApplying for your admisssion (at least 2 schools)\nAssistance to pay for your admission (at least 2 schools)\nAdmission processing\nGetting your offer letter\nAssisting with tuition fee deposit (if applicable)\nFurther assistance where needed.",
    },
    {
      question: "What are the requirements needed to apply for a student visa?",
      answer:
        "UNDERGRADUATE\nAdmission letter\nAcceptance letter\nStatement of account showing sufficient proof of funds\nPassport Photograph\nEnglish Proficiency test results (If applicable)\nSecondary Certificate Examination Result\nInternational Passport\n\nPOSTGRADUATE\nAdmission letter\nAcceptance letter\nStatement of account showing sufficient proof of funds\nPassport Photograph\nEnglish Proficiency test results (If applicable)\nUndergraduate Degree Certificate\nInternational Passport\nTranscript\nDetailed CV",
    },
    {
      question: "What does the visa processing fee cover?",
      answer:
        "The visa processing fee which costs N200,000 covers:\nFilling of client’s application form\nFlight reservation\nSchool details\nAdvisory services based on our experience\nDocumentation review\nGuiding client through the application process\nFurther assistance where needed\nThe visa processing fee is only paid when you have your admission and you are ready to proceed with your study visa.\n\nStudy visa application fee & biometric: $508\n\nHealth Surcharge: £470-1000.",
    },
    {
      question: "What is the visa processing timeline?",
      answer: "60 working days or more after submission at the embassy.",
    },
    {
      question: "What is the duration of the visa?",
      answer:
        "This depends on program and course of study, but it is at the discretion of the consular.\n\nUndergraduate Course(s): 3-5years\n\nPostgraduate course(s): 1-4years",
    },
    {
      question: "Is English Proficiency Test compulsory?",
      answer:
        "No, it depends on the school you are applying to if its a requirement for admission",
    },
    {
      question: "How much is the tuition fee?",
      answer:
        "This depends on your course and program but its between £8,000 – £20,000",
    },
    {
      question: "How much is the tuition deposit?",
      answer:
        "It depends on your course and program, but it is between £3,000 – £10,000",
    },
    {
      question: "Will I pay any fees before I travel?",
      answer:
        "Yes, as soon as you are given admission. You will be required to pay some amount of money which is part of your tuition fees",
    },
    {
      question: "Can I work while studying?",
      answer:
        "Yes you can. But it is also dependent on the terms on your student visa",
    },
    {
      question: "If I'm refused the visa, will I get a refund?",
      answer:
        "No , you won't get a refund. You can reapply without paying the processing fees.",
    },
    {
      question: "How much do I need to have in my account?",
      answer:
        "Enough to cover your expenses abroad including the school fees, further guidance will be given to you during the process.",
    },
  ],
  birth: [],
};

export default function Faqsdet() {
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
          {["visa", "school", "birth"].map((type) => (
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
                : "Birth Services"}
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
