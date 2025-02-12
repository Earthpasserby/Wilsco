import { useState } from "react";

import { FaExclamationCircle, FaSearch } from "react-icons/fa";
import airplane from "/images/airplane.png";

export default function TicketReservation() {
  const [selected, setSelected] = useState("Choose flight class");
  const [open, setOpen] = useState(false);
  const options = [
    "Economy",
    "Premium Economy",
    "Business Class",
    "First Class",
  ];

  return (
    <div className="relative  bg-[#fbfbfb]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-950 to-white text-white text-center py-16">
        <h2 className="text-[32px] font-bold pt-14">
          TICKETING AND RESERVATION
        </h2>
        <p className="mt-2 max-w-lg text-[16px]  font-normal mx-auto">
          WIllsco offers top notch flight services on both local and
          international flights. No matter the cabin category, we have
          affordable deals for you.
        </p>
        {/* Airplane Image */}
        <img
          src={airplane}
          alt="Airplane"
          className="mx-auto items-center justify-center "
        />
      </div>

      {/* Booking Form Container */}
      <div className="relative max-w-4xl mx-auto -mt-52 bg-gray-50  rounded-lg p-6 mb-12">
        {/* Tabs for One Way / Round Trip */}
        <div className="flex  pb-2 mb-4 gap-3">
          <button className="flex text-center hover:px-4  text-gray-500 hover:shadow-lg hover:bg-white py-2 font-medium ">
            ONE WAY
          </button>
          <button className="flex text-center hover:px-4  py-2 hover:shadow-lg hover:bg-white  font-medium text-gray-500">
            ROUND TRIP
          </button>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-6 sm:grid-cols-2    gap-5">
          {/* Full Name */}
          <div className="col-span-6 sm:col-span-6 md:col-span-3">
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="border-0 rounded-lg px-4 py-2 bg-white w-full"
            />
          </div>

          {/* Email Address */}
          <div className="col-span-6 sm:col-span-6 md:col-span-3">
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="border-0 bg-white rounded-lg px-4 py-2 w-full"
            />
          </div>

          {/* From */}
          <div className="col-span-6 sm:col-span-6 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">From</label>
            <input
              type="text"
              placeholder="From"
              className="border-0 bg-white rounded-lg px-4 py-2 w-full"
            />
          </div>

          {/* To */}
          <div className="col-span-6 sm:col-span-6 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">To</label>
            <input
              type="text"
              placeholder="To"
              className="border-0 bg-white rounded-lg px-4 py-2 w-full"
            />
          </div>

          {/* Date of Departure */}
          <div className="col-span-6 sm:col-span-6 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Date of depature
            </label>
            <input
              type="date"
              className="border-0 bg-white rounded-lg px-4 py-2 w-full"
            />
          </div>

          {/* Return Date (Optional) */}
          <div className="col-span-6 sm:col-span-6 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Date of arrival
            </label>
            <input
              type="date"
              placeholder="Return Date"
              className="border-0 bg-white rounded-lg px-4 py-2 w-full"
            />
          </div>

          {/* Cabin Class */}
          <div className="relative col-span-6 sm:col-span-6 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Flight class
            </label>
            <div
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 cursor-pointer flex justify-between items-center"
              onClick={() => setOpen(!open)}
            >
              {selected}
              <span className="text-gray-500">&#9662;</span>
            </div>
            {/* Dropdown Options */}
            {open && (
              <ul className="absolute w-full  border border-gray-300 bg-white rounded ">
                {options.map((option, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-red-50 text-[16px] text-[#686868] cursor-pointer"
                    onClick={() => {
                      setSelected(option);
                      setOpen(false);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="col-span-6 sm:col-span-6 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Number of adults(2+)
            </label>
            <input
              type="number"
              placeholder="Number of Adults"
              className="border-0 bg-white rounded-lg px-4 py-2 w-full"
            />
          </div>

          {/* Number of Adults */}
          <div className="col-span-6 sm:col-span-6 md:col-span-3">
            <label className="block text-gray-700 font-medium mb-1">
              Number of children(2y-12y)
            </label>
            <input
              type="number"
              placeholder="Number of Children"
              className="border-0 bg-white rounded-lg px-4 py-2 w-full"
            />
          </div>

          {/* Number of Children */}
          <div className="col-span-6 sm:col-span-6 md:col-span-3">
            <label className="block text-gray-700 font-medium mb-1">
              Number of infants(Below 2y)
            </label>
            <input
              type="number"
              placeholder="Number of Children"
              className="border-0 bg-white rounded-lg px-4 py-2 w-full"
            />
          </div>

          {/* Additional Information */}
          <div className="col-span-6 sm:col-span-6 md:col-span-4">
            <label className="block text-gray-700 font-medium mb-1">
              Additional information
            </label>
            <textarea
              placeholder="Additional Information"
              className="border-0 bg-white rounded-lg px-4 py-2 w-full"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-6 sm:col-span-6 md:col-span-6 flex justify-end">
            <button className="bg-red-600 text-white px-8 py-3 rounded-4xl hover:bg-red-700 flex items-center space-x-2">
              <span>Search</span>
              <FaSearch />
            </button>
          </div>
        </form>

        {/* WhatsApp Contact Info */}
      </div>

      <div className="lg:pb-24 pt-2 pb-12 px-4">
        <p className="text-[14px] text-yellow-500 bg-yellow-100 rounded-4xl mt-4 text-center lg:mb-32 mb-10 max-w-4xl mx-auto px-8 py-2 flex items-center justify-center space-x-2">
          <FaExclamationCircle size={20} />
          <span className="text-[10px] sm:text-[12px]">
            Clicking on the search button takes you straight to our WhatsApp
            contact or email: +2347058619281/ info@wilscotravels.com
          </span>
        </p>
      </div>
    </div>
  );
}
