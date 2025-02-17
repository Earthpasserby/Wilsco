import { useState } from "react";

import { FaExclamationCircle } from "react-icons/fa";
import maldavies from "/images/maldavies.png";

export default function PackHoliday() {
  const [selected, setSelected] = useState("Choose flight class");
  const [open, setOpen] = useState(false);
  const options = [
    "Economy",
    "Premium Economy",
    "Business Class",
    "First Class",
  ];
  const [selectedHotel, setSelectedHotel] = useState("Choose a star rating");
  const [hotelOpen, setHotelOpen] = useState(false);
  const hotelOptions = [
    "3 star rating",
    "4 star rating",
    "5 star rating",
    //     "6 star rating",
    //     "7 star rating",
    //     "8 star rating",
    //     "9 star rating",
    //     "10 star rating",
  ];

  return (
    <div className="relative bg-[#fbfbfb]">
      {/* Hero Section */}
      <div
        className="relative text-center bg-cover bg-center shadow-2xl "
        style={{ backgroundImage: `url(${maldavies})`, height: "700px" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 pt-32">
          <h2 className="text-[32px] font-bold text-white">HOLIDAY PACKAGES</h2>
          <p className="mt-2 max-w-lg text-[16px] font-normal mx-auto text-white">
            You deserve a vacation after all the hustle and bustle. We have pre
            planned vacation packages fit for solo or group travel. Have a
            destination in mind? We can customize a package suitable for your
            needs.
          </p>
        </div>
      </div>

      {/* Booking Form Container */}
      <div className="relative max-w-4xl mx-auto -mt-48 bg-gray-50   rounded-lg p-6 mb-12">
        {/* Tabs for One Way / Round Trip */}
        <div className="flex  pb-2 mb-4 gap-3">
          <h1>BOOK A PACKAGE</h1>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-6 gap-5 ">
          {/* Full Name */}
          <div className="col-span-6 sm:col-span-6 md:col-span-2">
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
          <div className="col-span-6 sm:col-span-6 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="border-0 bg-white rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="col-span-6 sm:col-span-6 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Phon number
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="border-0 rounded-lg px-4 py-2 bg-white w-full"
            />
          </div>

          {/* From */}
          <div className="col-span-6 sm:col-span-6 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Vacation destination
            </label>
            <input
              type="text"
              placeholder="Enter departure"
              className="border-0 bg-white rounded-lg px-4 py-2 w-full"
            />
          </div>

          {/* To */}
          <div className="col-span-6 sm:col-span-6 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Date of arrival
            </label>
            <input
              type="date"
              placeholder="Choose date"
              className="border-0 bg-white rounded-lg px-4 py-2 w-full"
            />
          </div>

          {/* Date of Departure */}
          <div className="col-span-6 sm:col-span-6 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Duration of stay
            </label>
            <input
              type="text"
              placeholder="e.g 2 days"
              className="border-0 bg-white rounded-lg px-4 py-2 w-full"
            />
          </div>

          {/* Return Date (Optional) */}
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
          <div className="col-span-6 sm:col-span-6 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Number of children(2y-12y)
            </label>
            <input
              type="number"
              placeholder="Number of Children"
              className="border-0 bg-white rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="col-span-6 sm:col-span-6 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Number of infants(Below 2y)
            </label>
            <input
              type="number"
              placeholder="Number of Children"
              className="border-0 bg-white rounded-lg px-4 py-2 w-full"
            />
          </div>

          {/* Cabin Class */}
          <div className="relative col-span-6 sm:col-span-6 md:col-span-3">
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
          <div className="relative col-span-6 sm:col-span-6 md:col-span-3">
            <label className="block text-gray-700 font-medium mb-1">
              Hotel rating
            </label>
            <div
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 cursor-pointer flex justify-between items-center"
              onClick={() => {
                setOpen(false);
                setHotelOpen(!hotelOpen);
              }}
            >
              {selectedHotel}
              <span className="text-gray-500">&#9662;</span>
            </div>
            {/* Dropdown Options */}
            {hotelOpen && (
              <ul className="absolute w-full border border-gray-300 bg-white rounded">
                {hotelOptions.map((option, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-red-50 text-[16px] text-[#686868] cursor-pointer"
                    onClick={() => {
                      setSelectedHotel(option);
                      setHotelOpen(false);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-6 sm:col-span-6 md:col-span-6 flex justify-end">
            <button className="bg-red-600 text-white px-8 py-3 rounded-4xl hover:bg-red-700 flex items-center space-x-2">
              <span>Customize your holiday package</span>
              {/* <FaSearch /> */}
            </button>
          </div>
        </form>

        {/* WhatsApp Contact Info */}
      </div>

      <div className="pb-12 lg:pb-24   px-4">
        {/* <p className="text-[14px] text-yellow-500 bg-yellow-100 rounded-4xl  text-center  max-w-4xl mx-auto px-8 py-2 flex items-center justify-center space-x-2"> */}
        {/* <FaExclamationCircle size={20} /> */}
        {/* <span className="text-[10px] sm:text-[12px]"> */}
        {/* Clicking on the Customize your holiday package button takes you */}
        {/* straight to our WhatsApp contact or email: +2347058619281/ */}
        {/* info@wilscotravels.com */}
        {/* </span> */}
        {/* </p> */}
      </div>
    </div>
  );
}
