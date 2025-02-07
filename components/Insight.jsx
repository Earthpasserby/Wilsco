import React from "react";
import paris1 from "../public/images/paris1.png";
import calender from "../public/images/calender.png";

const Insight = () => {
  return (
    <>
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-14 pt-4 sm:pt-24 bg-[#fbfbfb]">
        <div className="grid grid-cols-1 sm:grid-cols-2 ">
          <div className="sm:w-[444px] sm:h-[191px] mb-11">
            <h1 className="text-[32px] font-bold  text-[#1E1E1E]">
              Insights & Travel Tips
            </h1>
            <p className="text-[#989898] text-[16px] font-medium pt-2 ">
              Stay informed with expert advice, travel guides, visa updates, and
              success stories to help you navigate your journey with confidence.
            </p>
            <div className="pt-8 ">
              <a
                href="#"
                className="bg-transparent border border-gray-500 text-gray-500 px-6 py-3 rounded-4xl hover:bg-gray-100"
              >
                Explore more
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
            <div className="bg-white rounded-bl-2xl rounded-br-2xl ">
              <img
                src={paris1}
                alt="group"
                className="rounded-tl-2xl rounded-tr-2xl  "
              />
              <div className="flex items-center px-4 pt-4">
                <img src={calender} alt="group" className="w-[14px] h-[14px]" />
                <span className="font-normal text-[12px] text-[#686868] px-1">
                  Published on: January 28, 2025
                </span>
              </div>
              <h3 className="px-4 text-[#1E1E1E] text-[16px] font-normal">
                Top 5 Countries with the Easiest Visa Approval Process in 2024
              </h3>
              <div className="pt-8 px-4 mb-8">
                <a
                  href="#"
                  className="bg-transparent border border-gray-500 text-gray-500 px-4 py-2 rounded-4xl hover:bg-gray-100"
                >
                  Read
                </a>
              </div>
            </div>
            <div className="bg-white rounded-bl-2xl rounded-br-2xl  ">
              <img
                src={paris1}
                alt="group"
                className="rounded-tl-2xl rounded-tr-2xl  "
              />
              <div className="">
                <div className="flex items-center px-4 pt-4">
                  <img
                    src={calender}
                    alt="group"
                    className="w-[14px] h-[14px]"
                  />
                  <span className="font-normal text-[12px] text-[#686868] px-1">
                    Published on: January 28, 2025
                  </span>
                </div>
                <h3 className="px-4 text-[#1E1E1E] text-[16px] font-normal">
                  Top 5 Countries with the Easiest Visa Approval Process in 2025
                </h3>
                <div className="pt-8 px-4 mb-8 ">
                  <a
                    href="#"
                    className="bg-transparent border border-gray-500 text-gray-500 px-4 py-2 rounded-4xl hover:bg-gray-100"
                  >
                    Read
                  </a>
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
