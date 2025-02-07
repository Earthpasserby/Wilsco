import student1 from "/images/student1.png";
import acada1 from "/images/acada1.png";
import calender from "/images/calender.png";
import { useNavigate } from "react-router-dom";

export default function BlogDetail() {
  const navigate = useNavigate();
  return (
    <div className="w-full lg:px-38 mx-auto p-6 bg-[#fbfbfb]">
      <button
        onClick={() => navigate("/blog")}
        className="pt-24 px-4 py-2 text-gray-300 font-normal sm:text-[16px] rounded"
      >
        Back
      </button>

      {/* Title */}
      <h1 className=" md:text-[32px] font-bold text-center text-gray-600 pt-4">
        The ultimate guide to studying abroad:
        <br />
        <span className="text-gray-600 ">Everything you need to know</span>
      </h1>
      <div className="flex item-center justify-center gap-4">
        <p className="text-gray-300 text-center text-[12px] mt-2">
          <img
            src={calender}
            alt="Service Icon"
            className="inline-block w-4 h-4 mr-2 "
          />
          Published on February 7, 2025
        </p>
        <p className="text-gray-300 text-center text-[12px] mt-2">
          <img
            src={calender}
            alt="Service Icon"
            className="inline-block w-4 h-4 mr-2 "
          />
          By: Moses Daniel
        </p>
      </div>
      {/* First Image */}
      <div className="pt-14">
        <img
          src={student1}
          alt="Students studying abroad"
          className="rounded-4xl w-full mb-10"
        />
      </div>
      {/* First Paragraph */}
      <p className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        Studying abroad is a life-changing experience that provides access to
        world-class education, career opportunities, and cultural enrichment.
        However, the process can feel overwhelming without the right guidance.
        From choosing the perfect destination to securing your student visa,
        this guide will walk you through each step to ensure a smooth journey.
      </p>
      {/* Second Paragraph */}
      <p className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        The first step is selecting the right country for your studies. Factors
        such as the quality of education, cost of living, tuition fees, and
        post-graduation opportunities should be considered. Countries like
        Canada, the United States, the United Kingdom, and Australia are popular
        choices due to their top-ranked universities and work opportunities
        after graduation. However, more affordable options like Germany, Norway,
        and Malaysia also provide excellent education with lower tuition costs.
      </p>
      {/* Thrid Paragraph */}
      <p className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        Once you have chosen your destination, the next step is finding the best
        university and program that align with your academic and career goals.
        Researching university rankings, available scholarships, and course
        structures will help you make an informed decision. Many universities
        require English proficiency tests such as IELTS or TOEFL, so it is
        essential to prepare in advance. After securing admission, you will need
        to apply for a student visa. Each country has different visa
        requirements, but most will ask for proof of admission, financial
        statements, a valid passport, and sometimes a medical examination. It is
        crucial to apply early to avoid delays in your travel plans.
      </p>
      {/* fourth Paragraph */}
      <p className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        As your departure date approaches, planning your travel, accommodation,
        and financial arrangements will make your transition smoother. Booking
        your flight in advance, arranging student housing, and setting up a
        local bank account are key steps. You should also familiarize yourself
        with the country’s culture, weather, and student life to help you adjust
        quickly.
      </p>
      {/* Second Image */}
      <div className="pt-6">
        <img
          src={acada1}
          alt="Student at an international university"
          className="rounded-4xl w-full pt-12"
        />
      </div>
      {/* Third Paragraph */}
      <p className="pt-6 text-gray-900 leading-relaxed text-[16px] font-normal sm:px-18">
        Finally, once you arrive, take time to settle in and make the most of
        your experience. Engaging with classmates, exploring your new city, and
        participating in student activities will enrich your journey. If your
        visa allows, part-time work can provide additional financial support and
        valuable experience. Planning for life after graduation, including
        post-study work permits or permanent residency options, will also help
        you make the most of your time abroad.
      </p>
      {/* Fourth Paragraph */}
      <p className="pt-6 text-gray-900 leading-relaxed  text-[16px] font-normal sm:px-18  ">
        Studying abroad is a rewarding experience that opens doors to endless
        opportunities. At Wilsco Travels, we are here to guide you through every
        step, from consultation to arrival. Ready to start your journey?{" "}
        <span className="font-medium">
          {" "}
          Book a consultation today and let’s make your study abroad dream a
          reality!
        </span>
      </p>
    </div>
  );
}
