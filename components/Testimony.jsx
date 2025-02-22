import React from "react";
import like from "../public/images/like.png";
import star from "../public/images/star.png";
import profile from "../public/images/profile.png";
import firm from "../public/images/firm.png";
import { Link } from "react-router-dom";

const Testimony = () => {
  return (
    <>
      <div className="mx-auto w-full px-4 sm:px-14 lg:px-14 pt-8 sm:pt-24 bg-[#fbfbfb]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-5 xl:gap-8">
          <div className=" grid sm:grid-cols-2 xl:grid-cols-1 gap-4 sm:gap-5 ">
            <div className="flex flex-col">
              <h1 className=" font-bold  text-[#1E1E1E] text-2xl sm:text-[32px]">
                Why Wilsco Travels?
              </h1>
              <p className="text-[#989898] font-medium pt-2 max-w-xl">
                With over 95% success in applications, Wilsco Travels offers
                exceptional study abroad, travel, and relocation services backed
                by a global network and dedicated team.
              </p>

              <Link
                to="/contactus"
                className="bg-transparent border-1 w-fit mt-4 border-[#1e1e1e] text-gray-500 px-8 py-3 sm:py-4 rounded-4xl hover:text-white hover:border-0 hover:bg-red-700"
              >
                Contact Us
              </Link>
            </div>
            <div className="bg-[#FAE6E6] hidden sm:block xl:hidden px-6 py-12 rounded-2xl">
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
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-24">
            <div className="bg-[#FAE6E6]   px-6 py-12 rounded-2xl sm:hidden xl:inline-block">
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
            <div className="bg-[#E9F9E8]   px-6 py-12 rounded-2xl">
              <img src={star} alt="group" className="w-[42px]" />
              <h1 className="text-[#1E1E1E] font-medium text-[16px] text-sm pt-2">
                High success rate
              </h1>
              <p className="text-[#4B4B4B] font-normal text-sm pt-2">
                We pride ourselves on an impressive 95% success rate, helping
                countless clients achieve their dreams of studying, relocating,
                or traveling abroad.
              </p>
            </div>
            <div className="bg-[#F9F4E8]  px-6 py-12 rounded-2xl ">
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
            <div className="bg-[#E9E9E9] sm:col-span-2 xl:col-span-1  px-6 py-12 rounded-2xl ">
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
