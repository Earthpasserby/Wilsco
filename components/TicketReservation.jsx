import { useState, useRef } from "react";

import { FaSearch } from "react-icons/fa";
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
  const [errors, setErrors] = useState({});

  // Function to validate the form
  const validateForm = () => {
    let newErrors = {};

    if (!nameRef.current?.value.trim())
      newErrors.name = "Full Name is required";
    if (!emailRef.current?.value.trim()) newErrors.email = "Email is required";
    if (!fromRef.current?.value.trim())
      newErrors.from = "Departure location is required";
    if (!toRef.current?.value.trim()) newErrors.to = "Destination is required";
    if (!depatureRef.current?.value)
      newErrors.depature = "Departure date is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  // const phoneRef = useRef(null);
  // const countryRef = useRef(null);
  // const dateRef = useRef(null);
  const fromRef = useRef(null);
  const adultRef = useRef(null);
  const childRef = useRef(null);
  const infantRef = useRef(null);
  const toRef = useRef(null);
  const depatureRef = useRef(null);
  // const digitRef = useRef(null);
  const returnRef = useRef(null);
  const messageRef = useRef(null);
  const sendToWhatsapp = () => {
    // Get values and ensure they're not null
    let name = nameRef.current?.value || "";
    // let phone = phoneRef.current?.value || "";
    // let country = countryRef.current?.value || "";
    let email = emailRef.current?.value || "";
    let depature = depatureRef.current?.value || "";
    // let digit = digitRef.current?.value || "";
    let from = fromRef.current?.value || "";
    let to = toRef.current?.value || "";
    // let date = dateRef.current?.value || "";
    let returnDate = returnRef.current?.value || "";
    let message = messageRef.current?.value || "";

    let phoneNumber = "2347058619281"; // removed the + sign
    // Create a very simple message with minimal formatting
    const simpleMessage = `Name: ${name}
     Email: ${email} 
     Message: ${message} 
     From: ${from} 
     To: ${to} 
     Depature: ${depature} 
     Return: ${returnDate} 
     flight: ${selected}`;
    // Try direct WhatsApp Web URL format
    const whatsappURL = `https://wa.me/send?phone=${phoneNumber}&text=${encodeURIComponent(
      simpleMessage
    )}`;
    // Detect if mobile or desktop
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      // Use wa.me format for mobile
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          simpleMessage
        )}`,
        "_blank"
      );
    } else {
      // For desktop, try the web.whatsapp.com link
      window.open(whatsappURL, "_blank");
    }
  };

  return (
    <div className="relative  bg-[#fbfbfb]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-950 to-white text-white text-center py-16">
        <h2 className="sm:text-[32px] font-bold pt-14">
          TICKETING AND RESERVATION
        </h2>
        <p className="mt-2 max-w-lg sm:text-[16px] text-sm px-3  font-normal mx-auto">
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
        <form
          className="grid grid-cols-1 md:grid-cols-6 sm:grid-cols-2    gap-5"
          required
        >
          {/* Full Name */}
          <div className="col-span-6 sm:col-span-6 md:col-span-3">
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              ref={nameRef}
              className="border-0 rounded-lg px-4 py-2 bg-white w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Email Address */}
          <div className="col-span-6 sm:col-span-6 md:col-span-3">
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email Address"
              ref={emailRef}
              className="border-0 bg-white rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
            {errors.from && (
              <p className="text-red-500 text-sm">{errors.from}</p>
            )}
          </div>

          {/* From */}
          <div className="col-span-6 sm:col-span-6 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">From</label>
            <input
              type="text"
              placeholder="From"
              ref={fromRef}
              className="border-0 bg-white rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          {/* To */}
          <div className="col-span-6 sm:col-span-6 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">To</label>
            <input
              type="text"
              placeholder="To"
              ref={toRef}
              className="border-0 bg-white rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          {/* Date of Departure */}
          <div className="col-span-6 sm:col-span-6 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Date of depature
            </label>
            <input
              type="date"
              ref={depatureRef}
              className="border-0 bg-white rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
            {errors.depature && (
              <p className="text-red-500 text-sm">{errors.depature}</p>
            )}
          </div>

          {/* Return Date (Optional) */}
          <div className="col-span-6 sm:col-span-6 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Date of arrival
            </label>
            <input
              type="date"
              placeholder="Return Date"
              ref={returnRef}
              className="border-0 bg-white rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          {/* Cabin Class */}
          <div className="relative col-span-6 sm:col-span-6 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Flight class
            </label>
            <div
              className="w-full focus:ring-2 focus:ring-red-400 focus:outline-none border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 cursor-pointer flex justify-between items-center"
              onClick={() => setOpen(!open)}
            >
              {selected}
              <span className="text-gray-500">&#9662;</span>
            </div>
            {/* Dropdown Options */}
            {open && (
              <ul className="absolute w-full focus:ring-2 focus:ring-red-400 focus:outline-none  border border-gray-300 bg-white rounded ">
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
              ref={adultRef}
              className="border-0 bg-white rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
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
              ref={childRef}
              className="border-0 bg-white rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
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
              ref={infantRef}
              className="border-0 bg-white rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          {/* Additional Information */}
          <div className="col-span-6 sm:col-span-6 md:col-span-4">
            <label className="block text-gray-700 font-medium mb-1">
              Additional information
            </label>
            <textarea
              placeholder="message"
              ref={messageRef}
              className="border-0 bg-white rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-6 sm:col-span-6 md:col-span-6 flex justify-end">
            <button
              className="bg-red-600 text-white px-8 py-3 rounded-4xl hover:bg-red-700 flex items-center space-x-2"
              onClick={sendToWhatsapp}
            >
              <span>Search</span>
              <FaSearch />
            </button>
          </div>
        </form>

        {/* WhatsApp Contact Info */}
      </div>

      <div className="lg:pb-24 pt-2 pb-12 px-4 md:pb-4">
        {/* <p className="text-[14px] text-yellow-500 bg-yellow-100 rounded-4xl mt-4 md:mb-0 text-center lg:mb-32 mb-10 max-w-4xl mx-auto px-8 py-2 flex items-center justify-center space-x-2"> */}
        {/* <FaExclamationCircle size={20} /> */}
        {/* <span className="text-[10px] sm:text-[12px]"> */}
        {/* Clicking on the search button takes you straight to our WhatsApp */}
        {/* contact or email: +2347058619281/ info@wilscotravels.com */}
        {/* </span> */}
        {/* </p> */}
      </div>
    </div>
  );
}
