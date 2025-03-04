import React from "react";
import paris1 from "../public/images/paris1.png";
import calender from "../public/images/calender.png";
import { Link } from "react-router-dom";

const Insight = () => {
  return (
    <>
      <div className="mx-auto w-full px-4 sm:px-14  lg:px-14 pt-6 sm:pt-24 bg-[#fbfbfb]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          <div className="sm:max-w-[484px] sm:mx-auto xl:mx-0 mb-11 sm:text-center sm:flex flex-col sm:items-center xl:text-left xl:items-start">
            <h1 className="text-[32px] font-bold  text-[#1E1E1E]">
              Insights & Travel Tips
            </h1>
            <p className="text-[#989898] text-[16px] font-medium pt-2 ">
              Stay informed with expert advice, travel guides, visa updates, and
              success stories to help you navigate your journey with confidence.
            </p>
            <div className="pt-8 ">
              <Link
                to="/blog"
                className="bg-transparent border border-gray-200 text-gray-500 px-8 py-4 rounded-4xl hover:bg-red-700 hover:border-0 hover:text-white"
              >
                Explore more
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 ">
            <div className="bg-white rounded-bl-2xl rounded-br-2xl overflow-hidden">
              <div className="relative max-h-[200px] md:max-h-[250px] overflow-hidden">
                <img
                  src={paris1}
                  alt="group"
                  className="rounded-tl-2xl rounded-tr-2xl abosolute w-full h-full inset-0 object-cover object-bottom "
                />
              </div>
              <div className="flex items-center px-4 pt-4 md:px-5">
                <img src={calender} alt="group" className="w-[14px] h-[14px]" />
                <span className="font-normal text-[12px] text-[#686868] px-1">
                  Published on: March 07, 2025
                </span>
              </div>
              <h3 className="px-4 text-[#1E1E1E] text-[16px] font-normal pt-2">
                Top 5 Countries with the Easiest Visa Approval Process in 2024
              </h3>
              <div className="pt-6 px-4 mb-6">
                <Link
                  to="/blog"
                  className="bg-transparent border border-gray-200 text-gray-500 px-8 py-2 rounded-4xl hover:bg-red-700 hover:border-0 hover:text-white"
                >
                  Read
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-bl-2xl rounded-br-2xl  ">
              <div className="relative max-h-[200px] md:max-h-[250px] overflow-hidden">
                <img
                  src={paris1}
                  alt="group"
                  className="rounded-tl-2xl rounded-tr-2xl abosolute w-full h-full inset-0 object-cover object-bottom "
                />
              </div>
              <div className="">
                <div className="flex items-center px-4 pt-4 md:px-5">
                  <img
                    src={calender}
                    alt="group"
                    className="w-[14px] h-[14px]"
                  />
                  <span className="font-normal text-[12px] text-[#686868] px-1">
                    Published on: March 07, 2025
                  </span>
                </div>
                <h3 className="px-4 text-[#1E1E1E] text-[16px] font-normal pt-2">
                  Top 5 Countries with the Easiest Visa Approval Process in 2025
                </h3>
                <div className="pt-6 px-4 mb-6 ">
                  <Link
                    to="/blog"
                    className="bg-transparent border border-gray-200 text-gray-500 px-8 py-2 rounded-4xl hover:bg-red-700 hover:border-0 hover:text-white"
                  >
                    Read
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Insight;
