import React from "react";
import like from "../public/images/like.png";
import star from "../public/images/star.png";
import profile from "../public/images/profile.png";
import firm from "../public/images/firm.png";
import { Link } from "react-router-dom";

const Testimony = () => {
  return (
    <>
      <div className="mx-auto w-full px-4 sm:px-14 lg:px-14 pt-4 sm:pt-24 bg-[#fbfbfb]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:w-[423px] sm:h-[191px] mb-24">
            <h1 className=" font-bold  text-[#1E1E1E] text-[32px]">
              Why Wilsco Travels?
            </h1>
            <p className="text-[#989898] font-medium pt-4">
              With over 85% success in applications, Wilsco Travels offers
              exceptional study abroad, travel, and relocation services backed
              by a global network and dedicated team.
            </p>
            <div className="pt-14 ">
              <Link
                to="/contactus"
                className="bg-transparent border border-gray-200 text-gray-500 px-8 py-3 rounded-4xl hover:text-white hover:border-0 hover:bg-red-500"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-24">
            <div className="bg-[#FAE6E6]   px-4 py-8 rounded-2xl">
              <img src={like} alt="group" className="w-[42px]" />
              <h1 className="text-[#1E1E1E] font-medium text-[16px] text-sm pt-2">
                Excellent client service{" "}
              </h1>
              <p className="text-[#4B4B4B] font-normal text-sm pt-2">
                Our team goes above and beyond to ensure your needs are met with
                personalized attention, making your experience seamless and
                stress-free.
              </p>
            </div>
            <div className="bg-[#E9F9E8]   px-4 py-8 rounded-2xl">
              <img src={star} alt="group" className="w-[42px]" />
              <h1 className="text-[#1E1E1E] font-medium text-[16px] text-sm pt-2">
                High success rate
              </h1>
              <p className="text-[#4B4B4B] font-normal text-sm pt-2">
                We pride ourselves on an impressive 85% success rate, helping
                countless clients achieve their dreams of studying, relocating,
                or traveling abroad.
              </p>
            </div>
            <div className="bg-[#F9F4E8]  px-4 py-8 rounded-2xl ">
              <img src={profile} alt="group" className="w-[42px]" />
              <h1 className="text-[#1E1E1E] font-medium text-[16px] text-sm pt-2">
                Professionalism
              </h1>
              <p className="text-[#4B4B4B] font-normal text-sm pt-2">
                With years of expertise and a highly trained team, we handle
                every aspect of your journey with the utmost professionalism,
                ensuring your peace of mind.
              </p>
            </div>
            <div className="bg-[#E9E9E9]   px-4 py-8 rounded-2xl ">
              <img src={firm} alt="group" className="w-[42px]" />
              <h1 className="text-[#1E1E1E] font-medium text-[16px] text-sm pt-2">
                International partnerships
              </h1>
              <p className="text-[#4B4B4B] font-normal text-sm pt-2">
                Our extensive network of trusted global partners gives you
                access to the best opportunities and resources for your travel,
                study, and relocation needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Testimony;
