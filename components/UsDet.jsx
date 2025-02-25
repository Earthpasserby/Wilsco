import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

// Different sets of FAQs
const faqSets = {
  visa: [
    {
      question:
        "What are the requirements documents needed to apply for a US visa?",
      answer:
        "1. International passport (must be valid for at least 6 months)\n2. 5X5 white background passport photograph\n3. Work details i.e., introduction letter, Work ID card, etc\n4. CAC registration certificate if business is registered.\n5. 6 months bank statement",
    },
    {
      question: "What is the cost of applying for a US visa?",
      answer:
        "Processing Fee - N200,000 per adult N160,000 per child Visa Fee - $195",
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
      answer: "Yes, it's. You will be required to go for biometrics.",
    },
    {
      question: "Will I be prepared for the interview?",
      answer: "Yes, our team of experts will prepare you adequately.",
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
      question: "What are the requirements to apply for admission in USA?",
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
        "Reviewing your documents\nAdvisory services based on our experience\nDoing a school search\nGetting a suitable school\nCreating your student profile\nApplying for your admission (at least 2 schools)\nAssistance to pay for your admission (at least 2 schools)\nAdmission processing\nGetting your offer letter\nAssisting with tuition fee deposit (if applicable)\nFurther assistance where needed.",
    },
    {
      question: "What are the requirements needed to apply for a student visa?",
      answer:
        "UNDERGRADUATE\nAdmission letter\nAcceptance letter\nStatement of account showing sufficient proof of funds\nPassport Photograph\nEnglish Proficiency test results (If applicable)\nSecondary Certificate Examination Result\nInternational Passport\n\nPOSTGRADUATE\nAdmission letter\nAcceptance letter\nStatement of account showing sufficient proof of funds\nPassport Photograph\nEnglish Proficiency test results (If applicable)\nUndergraduate Degree Certificate\nInternational Passport\nTranscript\nDetailed CV",
    },
    {
      question: "What does the visa processing fee cover?",
      answer:
        "The visa processing fee which costs N200,000 covers:\nFilling of client’s application form\nFlight reservation\nSchool details\nAdvisory services based on our experience\nDocumentation review\nGuiding client through the application process\nPre interview session\nFurther assistance where needed\nThe visa processing fee is only paid when you have your admission and you are ready to proceed with your study visa.\n\nStudy visa application fee: $195\n\nServis Fee: $350",
    },
    {
      question: "What is the visa processing timeline?",
      answer:
        "It depends on the next available interview date at the embassy. You will be adequately prepared for the interview by our team.",
    },
    {
      question: "What is the duration of the visa?",
      answer:
        "This depends on program and course of study, but it is at the discretion of the consular.\n\nUndergraduate Course(s): 3-5 years\n\nPostgraduate course(s): 1-4 years",
    },
    {
      question: "Is English Proficiency Test compulsory?",
      answer:
        "No, it depends on the school you are applying to if its a requirement for admission",
    },
    {
      question: "How much is the tuition fee?",
      answer:
        "This depends on your course and program but its between $10,000 – $25,000",
    },
    {
      question: "How much is the tuition deposit?",
      answer:
        "It depends on your course and program, but it is between $4,000 – $10,000",
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
        "No, you won't get a refund. You can reapply without paying the processing fees.",
    },
    {
      question: "How much do I need to have in my account?",
      answer:
        "Enough to cover your expenses abroad including the school fees, further guidance will be given to you during the process.",
    },
  ],
  birth: [
    {
      question: "When is the best time to start the process?",
      answer:
        "It is advisable to start early. It is better to start even before you get pregnant to enable you to prepare adequately.",
    },
    {
      question: "How long does it take to process a USA medical visa?",
      answer: "It depends on the next available date.",
    },
    {
      question: "What is the duration of the visa?",
      answer: "5 Years",
    },
    {
      question: "What is the breakdown for visa application fee?",
      answer:
        "Processing Fee: N200,000\nVisa Fee: $195\nBirth Package: N300,000",
    },
    {
      question: "What documents do I need for the Visa Processing?",
      answer: "Bank statement, work details and hospital details.",
    },
    {
      question: "What does the birth package cover for USA application?",
      answer:
        "N300,000 covers:\n– Hospital/Doctor full details\n– Doctor’s appointment\n– Preparation for Poe\n– Accommodation recommendation if applicable (Apartment and Hotel).\n– Flight booking if applicable.\n– Guide to Baby documentation",
    },
    {
      question:
        "Must I declare medical reasons if going for USA Visa application?",
      answer:
        "It is advisable to declare medical reasons to ensure smooth Port of Entry (POE) and renewal.",
    },
    {
      question: "Will I go for an Interview?",
      answer: "Yes, We will prepare you ahead for the interview.",
    },
    {
      question: "When can I travel after my visa has been granted?",
      answer:
        "You can travel immediately if a visa is issued. This also depends on the stage of pregnancy you are.",
    },
    {
      question: "How long can I stay in the USA?",
      answer:
        "It is recommended to stay for 8 weeks. You can however, stay longer with valid reason",
    },
    {
      question: "How much do I need to have in my account?",
      answer:
        "Enough to cover the trip including medical bills and living expenses. We would draw up a budget sheet for you.",
    },
    {
      question: "What is the estimated cost of giving birth in the USA?",
      answer:
        "The estimated cost of giving birth is $5000 for Vaginal Birth and $7000 for CS Birth. It includes Doctor, Hospital and pediatrician bills. It is advisable to budget higher.",
    },
    {
      question: "Can I apply with my family?",
      answer: "Yes, you can.",
    },
    {
      question: "Does the bill cover processing of my baby’s documentation?",
      answer: "No, Baby’s documentation process costs an average of $500.",
    },
    {
      question: "Can I know the name of the hospital you use?",
      answer:
        "We will disclose the hospital details when process payment is made.",
    },
    {
      question: "Can I sponsor myself or must my husband sponsor me?",
      answer:
        "Either one of you can sponsor your trip. You can also get a third-party sponsor.",
    },
    {
      question: "Do I need to pay the hospital and doctor’s bill from Nigeria?",
      answer:
        "No, you only pay directly to the hospital and doctor when you travel.",
    },
    {
      question: "Is your visa guaranteed?",
      answer:
        "We do not guarantee visas as visa issuance is at the sole discretion of the consular. We offer an 85% success rate and based on our visa knowledge and expertise, we will guide you for a better chance.",
    },
    {
      question: "If I am refused a visa will there be a refund?",
      answer:
        "No, but you can reapply without paying the processing fee. (You will be required to pay the Visa fee only). This is only valid for 3 months after denial.",
    },
    {
      question: "Do I need to have a travel history before applying?",
      answer:
        "No, you do not need to have travel history, but it is an added advantage.",
    },
    {
      question:
        "If I already have a visa, can I still apply for the maternity package?",
      answer: "Yes",
    },
    {
      question: "What are the benefits of giving birth in USA?",
      answer:
        "USA passport is ranked the 6th strongest passport in the world\nYour child gets instant citizenship by birth and social security number\nThe passport allows your child access to 186 visa free countries.\nThe child can file for second citizenship for family members when he's of age",
    },
  ],
};

export default function UsDet() {
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
                ? "School Services"
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
