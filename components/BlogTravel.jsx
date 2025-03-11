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
        Why Wilsco Travel & Tours
        <br />
        <span className="text-gray-600 ">
          Stands Out in the Travel Industry
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
      {/* <div className="pt-14"> */}
      {/* <img */}
      {/* // src={france} */}
      {/* // alt="Students studying abroad" */}
      {/* // className="rounded-4xl w-full mb-10" */}
      {/* //    /> */}
      {/* </div> */}
      {/* First Paragraph */}
      <p className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        In a world where travel has become more than just moving from one place
        to another, Wilsco Travel & Tours is redefining the experience by making
        every journey seamless, memorable, and hassle-free. We don’t just book
        flights; we create personalized travel experiences tailored to each
        client’s needs. But what exactly makes Wilsco Travel & Tours stand out
        in the travel industry? Here’s why we are the go-to travel agency for
        smart travelers.
      </p>
      {/* Second Paragraph */}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          1. Personalized Travel Solutions
        </ul>
        At Wilsco, we understand that no two travelers are the same. Whether
        you're a student, a tourist, a business traveler, or an expectant mother
        seeking birth tourism services, we tailor our packages to fit your
        specific needs. Our expert team takes time to understand your
        preferences and crafts a customized travel plan just for you.
      </div>
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          2. Visa Assistance Made Easy
        </ul>
        Visa applications can be stressful, but not with Wilsco! We simplify the
        process by offering expert guidance, document processing, and high
        success rates for visa approvals. Whether you’re planning a vacation,
        study abroad, or relocation, we ensure a smooth journey from start to
        finish.
      </div>{" "}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          3. Exclusive Travel Packages
        </ul>
        From exotic tours to affordable flight and hotel bookings, we offer
        unbeatable travel packages that cater to all budgets. Our partnerships
        with top airlines, luxury hotels, and tour operators enable us to
        provide our clients with the best deals in the market
      </div>{" "}
      {/* <div className="pt-6"> */}
      {/* <img */}
      {/* // src={guide} */}
      {/* // alt="Student at an international university" */}
      {/* // className="rounded-xl w-full pt-12" */}
      {/* //    /> */}
      {/* </div> */}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          4. Exceptional Customer Service
        </ul>
        We pride ourselves on providing professional yet personalized service.
        Our 24/7 customer support ensures that clients receive real-time
        assistance before, during, and after their trips. Need help with a
        last-minute change? We’ve got you covered!
      </div>{" "}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          5. Fast and Reliable Flight Bookings{" "}
        </ul>
        Wilsco offers the fastest and most reliable flight booking services,
        ensuring that our clients get the best fares and seamless ticketing
        processes. Whether it’s a domestic or international flight, we guarantee
        stress-free bookings with competitive prices.
      </div>{" "}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          6. Maternity Travel Services
        </ul>
        Expecting mothers looking for birth tourism opportunities trust Wilsco
        for safe and legal maternity travel arrangements. We provide complete
        support, from visa processing to hospital recommendations, ensuring a
        smooth journey for both mother and baby.
      </div>{" "}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          7. Tech-Driven Travel Experience
        </ul>
        Wilsco is embracing the future with AI-driven systems that enhance
        travel planning, customer engagement, and booking efficiency. Our use of
        cutting-edge technology ensures that clients receive fast, seamless, and
        innovative travel services.
      </div>
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          8. Unrivaled Tour Experiences
        </ul>
        We don’t just send you on a trip; we create immersive experiences. From
        desert safaris in Dubai to historical explorations in Europe, our tour
        packages offer adventure, culture, and relaxation in one perfect bundle.
      </div>
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          9. Affordable Yet Premium Services
        </ul>
        Luxury travel doesn’t have to be expensive. Wilsco provides high-quality
        services at competitive rates, ensuring our clients enjoy premium
        experiences without breaking the bank.
      </div>
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          10. Strong Online Presence and Engagement
        </ul>
        We stay connected with our clients through our interactive website and
        active social media platforms. Our digital marketing strategies ensure
        that we keep our clients informed about the best travel deals, visa
        updates, and industry trends. At Wilsco Travel & Tours, we don’t just
        book your trips; we make travel dreams a reality. Whether you’re
        planning your first international adventure or looking for exclusive
        travel services, we are here to take you places in the best way
        possible. Ready to embark on your next journey? Let Wilsco Travel &
        Tours be your trusted travel partner!
      </div>
    </div>
  );
}
