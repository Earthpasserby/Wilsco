import aus from "../public/images/aus.jpg";
import birth1 from "../public/images/birth1.png";
import view from "../public/images/view.png";

import qatar from "../public/images/qatar.jpg";
import explore from "../public/images/explore.png";
import adventure from "../public/images/adventure.png";

import calender from "../public/images/calender.png";
import { Link } from "react-router-dom";

export const BlogCol = () => {
  return (
    <>
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-14 pt-4 sm:pt-24 bg-[#fbfbfb]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          <div className="bg-white rounded-bl-2xl rounded-br-2xl ">
            <img
              src={aus}
              alt="group"
              className="rounded-tl-2xl rounded-tr-2xl  "
            />
            <div className="flex items-center px-4 pt-4">
              <img src={calender} alt="group" className="w-[14px] h-[14px]" />
              <span className="font-normal text-[12px] text-[#686868] px-1">
                Published on: March 07, 2025
              </span>
            </div>
            <h3 className="px-4 text-[#1E1E1E] text-[16px] font-normal">
              Pack Smart, Travel Happy: Your Ultimate Vacation Packing Guide!
            </h3>
            <div className="pt-8 px-4 mb-8">
              <Link
                to="/blogdet"
                className="bg-transparent  hover:text-white border-gray-100 border-1 hover:border-0 text-gray-500 px-7 py-2 rounded-4xl   hover:bg-red-700"
              >
                Read
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-bl-2xl rounded-br-2xl ">
            <img
              src={qatar}
              alt="group"
              className="rounded-tl-2xl rounded-tr-2xl  "
            />
            <div className="flex items-center px-4 pt-4">
              <img src={calender} alt="group" className="w-[14px] h-[14px]" />
              <span className="font-normal text-[12px] text-[#686868] px-1">
                Published on: March 07, 2025
              </span>
            </div>
            <h3 className="px-4 text-[#1E1E1E] text-[16px] font-normal">
              Doha vs. Dubai: Which One Is Best for Your Next Vacation?
            </h3>
            <div className="pt-8 px-4 mb-8">
              <Link
                to="/blogdoha"
                className="bg-transparent  hover:text-white border-gray-100 border-1 hover:border-0 text-gray-500 px-7 py-2 rounded-4xl   hover:bg-red-700"
              >
                Read
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-bl-2xl rounded-br-2xl ">
            <img
              src={explore}
              alt="group"
              className="rounded-tl-2xl rounded-tr-2xl   "
            />
            <div className="flex items-center px-4 pt-4">
              <img src={calender} alt="group" className="w-[14px] h-[14px]" />
              <span className="font-normal text-[12px] text-[#686868] px-1">
                Published on: March 07, 2025
              </span>
            </div>
            <h3 className="px-4 text-[#1E1E1E] text-[16px] font-normal">
              My First International Trip: A Client’s Experience with Wilsco
              Travel
            </h3>
            <div className="pt-8 px-4 mb-8">
              <Link
                to="/blogtrips"
                className="bg-transparent  hover:text-white border-gray-100 border-1 hover:border-0 text-gray-500 px-7 py-2 rounded-4xl   hover:bg-red-700"
              >
                Read
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-bl-2xl rounded-br-2xl ">
            <img
              src={adventure}
              alt="group"
              className="rounded-tl-2xl rounded-tr-2xl  "
            />
            <div className="flex items-center px-4 pt-4">
              <img src={calender} alt="group" className="w-[14px] h-[14px]" />
              <span className="font-normal text-[12px] text-[#686868] px-1">
                Published on: March 07, 2025
              </span>
            </div>
            <h3 className="px-4 text-[#1E1E1E] text-[16px] font-normal">
              Why Wilsco Travel & Tours Stands Out in the Travel Industry
            </h3>
            <div className="pt-8 px-4 mb-8">
              <Link
                to="/blogtour"
                className="bg-transparent  hover:text-white border-gray-100 border-1 hover:border-0 text-gray-500 px-7 py-2 rounded-4xl   hover:bg-red-700"
              >
                Read
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-bl-2xl rounded-br-2xl ">
            <img
              src={view}
              alt="group"
              className="rounded-tl-2xl rounded-tr-2xl  "
            />
            <div className="flex items-center px-4 pt-4">
              <img src={calender} alt="group" className="w-[14px] h-[14px]" />
              <span className="font-normal text-[12px] text-[#686868] px-1">
                Published on: March 07, 2025
              </span>
            </div>
            <h3 className="px-4 text-[#1E1E1E] text-[16px] font-normal">
              The Best Family-Friendly Summer Vacation Spots in 2025
            </h3>
            <div className="pt-8 px-4 mb-8">
              <Link
                to="/blogfam"
                className="bg-transparent  hover:text-white border-gray-100 border-1 hover:border-0 text-gray-500 px-7 py-2 rounded-4xl   hover:bg-red-700"
              >
                Read
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-bl-2xl rounded-br-2xl ">
            <img
              src={birth1}
              alt="group"
              className="rounded-tl-2xl rounded-tr-2xl  "
            />
            <div className="flex items-center px-4 pt-4">
              <img src={calender} alt="group" className="w-[14px] h-[14px]" />
              <span className="font-normal text-[12px] text-[#686868] px-1">
                Published on: March 07, 2025
              </span>
            </div>
            <h3 className="px-4 text-[#1E1E1E] text-[16px] font-normal">
              Childbirth Abroad – A Guide for Nigerian Mothers
            </h3>
            <div className="pt-8 px-4 mb-8">
              <Link
                to="/blogbirth"
                className="bg-transparent  hover:text-white border-gray-100 border-1 hover:border-0 text-gray-500 px-7 py-2 rounded-4xl   hover:bg-red-700"
              >
                Read
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center mt-8"> */}
        {/* <button className="px-4 py-2 mx-1  rounded hover:bg-red-500 hover:text-white"> */}
        {/* Prev */}
        {/* </button> */}
        {/* {[...Array(4)].map((_, index) => ( */}
        {/* <button */}
        {/* // key={index} */}
        {/* // className={`px-4 py-2 mx-1 rounded ${ */}
        {/* // index === 0 ? "bg-red-500 text-white" : "bg-none" */}
        {/* // } hover:bg-red-500 hover:text-white`} */}
        {/* // > */}
        {/* {index + 1} */}
        {/* </button> */}
        {/* ))} */}
        {/* <button className="px-4 py-2 mx-1  rounded hover:bg-red-500 hover:text-white"> */}
        {/* Next */}
        {/* </button> */}
        {/* </div> */}
      </div>
    </>
  );
};
