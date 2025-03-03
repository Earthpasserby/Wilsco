import guide from "/images/guide.jpg";
import france from "/images/france.jpg";
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
        Pack Smart, Travel Happy:
        <br />
        <span className="text-gray-600 ">
          Your Ultimate Vacation Packing Guide!
        </span>
      </h1>
      <div className="flex item-center justify-center gap-4">
        <p className="text-[#1e1e1e] text-center text-[12px] mt-2">
          <img
            src={calender}
            alt="Service Icon"
            className="inline-block w-4 h-4 mr-2 "
          />
          Published on March 7, 2025
        </p>
        <p className="text-[#1e1e11e] text-center text-[12px] mt-2">
          <img
            src={calender}
            alt="Service Icon"
            className="inline-block w-4 h-4 mr-2 "
          />
          By: Wilsco
        </p>
      </div>
      {/* First Image */}
      <div className="pt-14">
        <img
          src={france}
          alt="Students studying abroad"
          className="rounded-4xl w-full mb-10"
        />
      </div>
      {/* First Paragraph */}
      <p className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        Let’s be real—vacation excitement kicks in the moment you start packing.
        The hotel stalking, the last-minute shopping, the self-care glow-up—it’s
        all part of the fun! But in all that excitement, it’s easy to overpack
        or forget essentials. So, let’s get you prepped with these simple,
        stress-free packing tips.
      </p>
      {/* Second Paragraph */}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          1. Check the Weather
        </ul>
        Know the forecast so you can pack appropriately and avoid surprises.
        Nobody wants to be caught in the rain without an umbrella!
      </div>
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          2. Make a Packing List
        </ul>
        A checklist keeps you organized and ensures you don’t leave behind the
        important stuff (like your charger or swimsuit!).
      </div>{" "}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          3. Pack a Mini Carry-On Survival Kit
        </ul>
        Keep must-haves like your charger, power bank, snacks, and a book
        handy—just in case of delays.
      </div>{" "}
      <div className="pt-6">
        <img
          src={guide}
          alt="Student at an international university"
          className="rounded-xl w-full pt-12"
        />
      </div>
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          4. Keep Your Documents Accessible
        </ul>
        Store your passport, tickets, and ID in an easy-to-reach spot to avoid
        last-minute airport stress.
      </div>{" "}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          5. Make Copies of Important Documents
        </ul>
        Always have backup copies in case of emergencies. Better safe than
        sorry!
      </div>{" "}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          6. Plan Your Outfits
        </ul>
        Avoid overpacking by planning daily looks in advance. Bonus: You’ll have
        extra space for souvenirs!
      </div>{" "}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          7. Check Airline Luggage Rules
        </ul>
        Know weight limits and restrictions to dodge unnecessary fees or
        surprises at check-in. With these quick tips, you’re set for a smooth,
        stress-free trip. Now, go enjoy that vacation—you deserve it! ✈️🌴
      </div>
      {/* Thrid Paragraph */}
      {/* <p className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18"> */}
      {/* Once you have chosen your destination, the next step is finding the best */}
      {/* university and program that align with your academic and career goals. */}
      {/* Researching university rankings, available scholarships, and course */}
      {/* structures will help you make an informed decision. Many universities */}
      {/* require English proficiency tests such as IELTS or TOEFL, so it is */}
      {/* essential to prepare in advance. After securing admission, you will need */}
      {/* to apply for a student visa. Each country has different visa */}
      {/* requirements, but most will ask for proof of admission, financial */}
      {/* statements, a valid passport, and sometimes a medical examination. It is */}
      {/* crucial to apply early to avoid delays in your travel plans. */}
      {/* </p> */}
      {/* fourth Paragraph */}
      {/* <p className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18"> */}
      {/* As your departure date approaches, planning your travel, accommodation, */}
      {/* and financial arrangements will make your transition smoother. Booking */}
      {/* your flight in advance, arranging student housing, and setting up a */}
      {/* local bank account are key steps. You should also familiarize yourself */}
      {/* with the country’s culture, weather, and student life to help you adjust */}
      {/* quickly. */}
      {/* </p> */}
      {/* Second Image */}
      {/* Third Paragraph */}
      {/* <p className="pt-6 text-gray-900 leading-relaxed text-[16px] font-normal sm:px-18"> */}
      {/* Finally, once you arrive, take time to settle in and make the most of */}
      {/* your experience. Engaging with classmates, exploring your new city, and */}
      {/* participating in student activities will enrich your journey. If your */}
      {/* visa allows, part-time work can provide additional financial support and */}
      {/* valuable experience. Planning for life after graduation, including */}
      {/* post-study work permits or permanent residency options, will also help */}
      {/* you make the most of your time abroad. */}
      {/* </p> */}
      {/* Fourth Paragraph */}
      {/* <p className="pt-6 text-gray-900 leading-relaxed  text-[16px] font-normal sm:px-18  "> */}
      {/* Studying abroad is a rewarding experience that opens doors to endless */}
      {/* opportunities. At Wilsco Travels, we are here to guide you through every */}
      {/* step, from consultation to arrival. Ready to start your journey?{" "} */}
      {/* <span className="font-medium"> */}
      {/* {" "} */}
      {/* Book a consultation today and let’s make your study abroad dream a */}
      {/* reality! */}
      {/* </span> */}
      {/* </p> */}
    </div>
  );
}
