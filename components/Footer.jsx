import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="hidden md:flex flex-col bg-gray-100 text-black">
        <div className="w-full mx-auto px-4 sm:px-14 pt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
          {/* Logo & Social Icons */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 mb-2">
            <img
              src="/logo.png"
              alt="Willsco Travel and Tours"
              className="w-40 mb-4"
            />
            <div className="flex space-x-3">
              <a href="#" className="bg-[#1E1E1E] text-white p-2 rounded-full">
                <FaFacebookF size={15} />
              </a>
              <a href="#" className="bg-[#1E1E1E] text-white p-2 rounded-full">
                <FaInstagram size={15} />
              </a>
              <a href="#" className="bg-[#1E1E1E] text-white p-2 rounded-full">
                <FaLinkedinIn size={15} />
              </a>
              <a href="#" className="bg-[#1E1E1E] text-white p-2 rounded-full">
                <FaTiktok size={15} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-medium text-[12px] mb-3">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Our services", "About us", "FAQs", "Blog"].map(
                (item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-red-500">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-medium text-[12px] mb-3">SERVICES</h4>
            <ul className="space-y-2 text-sm">
              {[
                "School services",
                "Visa services",
                "Ticketing & Reservation",
                "Holiday packages",
                "Relocation services",
                "Birth abroad services",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-red-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQs */}
          <div>
            <h4 className="font-medium text-[12px] mb-3">FAQs</h4>
            <ul className="space-y-2 text-sm">
              {[
                "United Kingdom",
                "United States Africa",
                "Canada",
                "Schengen",
                "Egypt",
                "East Africa",
                "South Africa",
                "Australia",
                "Kenya",
                "Ireland",
                "Singapore",
                "Seychelles",
                "Turkey",
                "Qatar",
                "Brazil",
                "Hong Kong",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-red-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-medium text-[12px] mb-3">CONTACT US</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <FaPhone className="text-red-500" />
                <span>+2347058619281</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-red-500" />
                <span>info@wilscotravel.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-red-500 mt-1" />
                <span>
                  10 Hughes Ave, Yaba 101011, <br />
                  Lagos, Nigeria.
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h4 className="font-medium text-[12px] mb-3">
              SUBSCRIBE TO OUR NEWSLETTER
            </h4>
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-2 border border-gray-300 rounded-md mb-3 outline-red-700"
            />
            <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="bg-gray-900 text-white text-center py-4 mt-6">
          Copyright © 2025. Wilsco Travel and Tours.
        </div>
      </footer>

      <footer className="block md:hidden bg-gray-100 text-black p-4">
        <div className="grid grid-cols-2">
          <div className="">
            <img
              src="/logo.png"
              alt="Willsco Travel and Tours"
              className="w-32 mb-4"
            />
          </div>
          <div className="flex space-x-3 mb-4 py-10">
            <a href="#" className="bg-[#1E1E1E] text-white p-2 rounded-full">
              <FaFacebookF size={15} />
            </a>
            <a href="#" className="bg-[#1E1E1E] text-white p-2 rounded-full">
              <FaInstagram size={15} />
            </a>
            <a href="#" className="bg-[#1E1E1E] text-white p-2 rounded-full">
              <FaLinkedinIn size={15} />
            </a>
            <a href="#" className="bg-[#1E1E1E] text-white p-2 rounded-full">
              <FaTiktok size={15} />
            </a>
          </div>
        </div>
        <div className="text-center mb-4">
          <h4 className="font-medium text-[12px] mb-3">
            SUBSCRIBE TO OUR NEWSLETTER
          </h4>
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-2 border border-gray-300 rounded-md mb-3 outline-red-700"
          />
          <button className="w-full bg-red-700 text-white py-2 rounded-md hover:bg-red-700">
            Subscribe
          </button>
        </div>
        <div className="grid grid-cols-2 items-center px-4">
          {/* Company Links */}
          <div>
            <h4 className="font-medium text-[14px] mb-3">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Our services", "About us", "FAQs", "Blog"].map(
                (item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-red-500">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Services Links */}
          <div className="pt-4">
            <h4 className="font-medium text-[14px] mb-3">SERVICES</h4>
            <ul className="space-y-2 text-sm">
              {[
                "School services",
                "Visa services",
                "Ticketing & Reservation",
                "Holiday packages",
                "Relocation services",
                "Birth abroad services",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-red-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/*Faqs*/}
          <div className="pt-4">
            <h4 className="font-medium mb-3 text-[14px] ">FAQs</h4>
            <ul className="space-y-2 text-sm">
              {[
                "United Kingdom",
                "United States Africa",
                "Canada",
                "Schengen",
                "Egypt",
                "East Africa",
                "South Africa",
                "Australia",
                "Kenya",
                "Ireland",
                "Singapore",
                "Seychelles",
                "Turkey",
                "Qatar",
                "Brazil",
                "Hong Kong",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-red-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-[14px] mb-3">CONTACT US</h4>
            <ul className=" text-sm">
              <li className="flex items-center space-x-2">
                <FaPhone className="text-red-500" />
                <span>+2347058619281</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-red-500" />
                <span>info@wilscotravel.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-red-500 " />
                <span>
                  10 Hughes Ave, Yaba 101011, <br />
                  Lagos, Nigeria.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-900 text-white text-center py-4 mt-6">
          Copyright © 2025. Wilsco Travel and Tours.
        </div>
      </footer>
    </>
  );
};

export default Footer;
