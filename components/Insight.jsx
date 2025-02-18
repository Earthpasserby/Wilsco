import React from "react";
import kigali from "../public/images/kigali.png";
import zanzibar from "../public/images/zanzibar.png";
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
            <div className=" rounded-bl-2xl rounded-br-2xl overflow-hidden">
              <img
                src={kigali}
                alt="group"
                className="rounded-tl-2xl rounded-tr-2xl abosolute w-full h-full inset-0 object-cover object-center"
              />
            </div>
            <div className="rounded-bl-2xl rounded-br-2xl  ">
              <img
                src={zanzibar}
                alt="group"
                className="rounded-tl-2xl rounded-tr-2xl abosolute w-full h-full inset-0 object-cover object-center "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Insight;
