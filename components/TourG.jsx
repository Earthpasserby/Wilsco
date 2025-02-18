import React from "react";
import kigali from "../public/images/kigali.png";
import zanzibar from "../public/images/zanzibar.png";
import beriut from "../public/images/beriut.png";
import nami from "../public/images/nami.png";
import qatarf from "../public/images/qatarf.png";
import singa from "../public/images/singa.png";

import { Link } from "react-router-dom";

const TourG = () => {
  return (
    <>
      <div className="mx-auto w-full px-4 sm:px-14  lg:px-14   bg-[#fbfbfb]">
        <div className="justify-center text-center">
          <h3 className="sm:text-[32px] font-bold text-[#1E1E1E]">
            Discover your perfect getaway
          </h3>
          <p className="sm:text-[16px] mx-auto font-normal text-[#989898] sm:w-xl">
            From breathtaking beach retreats to thrilling city adventures, our
            holiday packages are designed to give you an unforgettable travel
            experience.
          </p>
        </div>
        <div className="pt-14">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            <div className="bg-white p-4 transition rounded-4xl">
              <div className="">
                <img
                  src={kigali}
                  alt="group"
                  className="w-full h-full object-cover object-center rounded-xl"
                />
              </div>
              <div className=" pt-5">
                <Link
                  to="/blog"
                  className="w-full block bg-transparent text-center border-1 text-red-700 p-2 border-red-700 px-8 py-2 rounded-4xl hover:bg-red-700 hover:border-0 hover:text-white"
                >
                  Book now
                </Link>
              </div>
            </div>
            <div className="bg-white p-4 transition rounded-4xl">
              <div className="">
                <img
                  src={zanzibar}
                  alt="group"
                  className="w-full h-full object-cover object-center rounded-xl"
                />
              </div>
              <div className=" pt-5">
                <Link
                  to="/blog"
                  className="w-full block bg-transparent text-center border-1 text-red-700 p-2 border-red-700 px-8 py-2 rounded-4xl hover:bg-red-700 hover:border-0 hover:text-white"
                >
                  Book now
                </Link>
              </div>
            </div>
            <div className="bg-white p-4 transition rounded-4xl">
              <div className="">
                <img
                  src={beriut}
                  alt="group"
                  className="w-full h-full object-cover object-center rounded-xl"
                />
              </div>
              <div className=" pt-5">
                <Link
                  to="/blog"
                  className="w-full block bg-transparent text-center border-1 text-red-700 p-2 border-red-700 px-8 py-2 rounded-4xl hover:bg-red-700 hover:border-0 hover:text-white"
                >
                  Book now
                </Link>
              </div>
            </div>{" "}
            <div className="bg-white p-4 transition rounded-4xl">
              <div className="">
                <img
                  src={nami}
                  alt="group"
                  className="w-full h-full object-cover object-center rounded-xl"
                />
              </div>
              <div className=" pt-5">
                <Link
                  to="/blog"
                  className="w-full block bg-transparent text-center border-1 text-red-700 p-2 border-red-700 px-8 py-2 rounded-4xl hover:bg-red-700 hover:border-0 hover:text-white"
                >
                  Book now
                </Link>
              </div>
            </div>{" "}
            <div className="bg-white p-4 transition rounded-4xl">
              <div className="">
                <img
                  src={qatarf}
                  alt="group"
                  className="w-full h-full object-cover object-center rounded-xl"
                />
              </div>
              <div className=" pt-5">
                <Link
                  to="/blog"
                  className="w-full block bg-transparent text-center border-1 text-red-700 p-2 border-red-700 px-8 py-2 rounded-4xl hover:bg-red-700 hover:border-0 hover:text-white"
                >
                  Book now
                </Link>
              </div>
            </div>{" "}
            <div className="bg-white p-4 transition rounded-4xl">
              <div className="">
                <img
                  src={singa}
                  alt="group"
                  className="w-full h-full object-cover object-center rounded-xl"
                />
              </div>
              <div className=" pt-5">
                <Link
                  to="/blog"
                  className="w-full block bg-transparent text-center border-1 text-red-700 p-2 border-red-700 px-8 py-2 rounded-4xl hover:bg-red-700 hover:border-0 hover:text-white"
                >
                  Book now
                </Link>
              </div>
            </div>{" "}
            <div className="bg-white p-4 transition rounded-4xl">
              <div className="">
                <img
                  src={kigali}
                  alt="group"
                  className="w-full h-full object-cover object-center rounded-xl"
                />
              </div>
              <div className=" pt-5">
                <Link
                  to="/blog"
                  className="w-full block bg-transparent text-center border-1 text-red-700 p-2 border-red-700 px-8 py-2 rounded-4xl hover:bg-red-700 hover:border-0 hover:text-white"
                >
                  Book now
                </Link>
              </div>
            </div>{" "}
            <div className="bg-white p-4 transition rounded-4xl">
              <div className="">
                <img
                  src={kigali}
                  alt="group"
                  className="w-full h-full object-cover object-center rounded-xl"
                />
              </div>
              <div className=" pt-5">
                <Link
                  to="/blog"
                  className="w-full block bg-transparent text-center border-1 text-red-700 p-2 border-red-700 px-8 py-2 rounded-4xl hover:bg-red-700 hover:border-0 hover:text-white"
                >
                  Book now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TourG;
