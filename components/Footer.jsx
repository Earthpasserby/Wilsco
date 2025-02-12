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
    <footer className="bg-gray-100 text-black">
      <div className="w-full mx-auto px-4 sm:px-14 py-10 grid grid-cols-2 md:grid-cols-2 sm:flex sm:flex-wrap gap-26">
        {/* Logo & Social Icons */}
        <div>
          <img
            src="/logo.png"
            alt="Willsco Travel and Tours"
            className="w-40 "
          />
          <div className="flex space-x-1">
            <a
              href="#"
              className="text-white hover:text-white bg-[#1E1E1E] rounded-4xl p-2"
            >
              <FaFacebookF size={15} />
            </a>
            <a
              href="#"
              className="text-white hover:text-white bg-[#1E1E1E] rounded-4xl p-2"
            >
              <FaInstagram size={15} />
            </a>
            <a
              href="#"
              className="text-white hover:text-white bg-[#1E1E1E] rounded-4xl p-2"
            >
              <FaLinkedinIn size={15} />
            </a>
            <a
              href="#"
              className="text-white hover:text-white bg-[#1E1E1E] rounded-4xl p-2"
            >
              <FaTiktok size={15} />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-medium text-[12px] mb-3">COMPANY</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-red-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Our services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="font-medium text-[12px] mb-3">SERVICES</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-red-500">
                School services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Visa services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Ticketing & Reservation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Holiday packages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Relocation services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Birth abroad services
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-[12px] mb-3">FAQs</h4>
          <ul className="space-y-2">
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
        <div className="space-x-8">
          <h4 className="font-medium text-[12px] mb-3">CONTACT US</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaPhone className="text-red-500" />
              <span>+2347058619281</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-red-500" />
              <span>info@willscotravel.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-red-500" />
              <span>
                172 Hunter Road, London, <br />
                UKRM10 8HU
              </span>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h4 className="font-medium text-[12px] mb-3">
            SUBSCRIBE TO OUR NEWSLETTER
          </h4>
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-2 border border-gray-300 rounded-md mb-3"
          />
          <button className="w-full bg-red-700 text-white py-2 rounded-md hover:bg-red-700">
            Subscribe
          </button>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-900 text-white text-center py-4">
        Copyright © 2025. Willsco Travel and Tours.
      </div>
    </footer>
  );
};

export default Footer;
