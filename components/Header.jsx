import React, { useState, useEffect } from "react";
import logo from "../public/logo.png";
import bok from "../public/images/bok.png";
import baby from "../public/images/baby.png";
import mob from "../public/images/mob.png";
import bag1 from "../public/images/bag1.png";
import plane from "../public/images/plane.png";
import hol from "../public/images/hol.png";

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state

  // Function to close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-menu")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-white w-full fixed top-0 left-0 right-0 z-50">
        <div className="w-full mx-auto px-4  sm:px-6 lg:px-14">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile Menu Button */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-red-700 hover:text-white focus:ring-1 focus:ring-white focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
            </div>

            {/* Logo and Navigation Links */}
            <div className="flex items-center justify-between w-full">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img className="h-16 w-auto" src={logo} alt="Willsco-logo" />
              </div>
              {/* Desktop Navigation Links */}
              <div className="hidden sm:flex sm:space-x-12 mx-auto">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#000000]"
                      : "text-gray-500 hover:text-gray-700"
                  }
                >
                  Home
                </NavLink>

                {/* Dropdown for Our Services */}
                <div className="relative dropdown-menu">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent closing when clicking the button
                      setDropdownOpen(!dropdownOpen);
                    }}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none flex items-center gap-1"
                  >
                    Our Services
                    <svg
                      className="w-4 h-4 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-[500px] text-[14px] px-4 py-2 bg-white border-1 border-red-100 rounded-md shadow-lg z-50 grid grid-cols-2 gap-4 p-2 mb-4">
                      <Link
                        to="/service"
                        className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-700"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <img
                          src={bok}
                          alt="Service Icon"
                          className="inline-block w-6 h-6 mr-2 "
                        />
                        School service
                      </Link>
                      <Link
                        to="/visaservice"
                        className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-700"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <img
                          src={bag1}
                          alt="Service Icon"
                          className="inline-block w-6 h-6 mr-2"
                        />
                        Visa service
                      </Link>
                      <Link
                        to="/ticket"
                        className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-700"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <img
                          src={plane}
                          alt="Service Icon"
                          className="inline-block w-6 h-6 mr-2 "
                        />
                        Ticketing & Reservation
                      </Link>
                      <Link
                        to="/birthservice"
                        className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-700"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <img
                          src={baby}
                          alt="Service Icon"
                          className="inline-block w-6 h-6 mr-2 "
                        />
                        Birth abroad service
                      </Link>
                      <Link
                        to="/holidaypack"
                        className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-700"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <img
                          src={hol}
                          alt="Service Icon"
                          className="inline-block w-6 h-6 mr-2 "
                        />
                        Holiday packages
                      </Link>
                      <Link
                        to="/relocateserv"
                        className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-700"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <img
                          src={mob}
                          alt="Service Icon"
                          className="inline-block w-6 h-6 mr-2 "
                        />
                        Relocation service
                      </Link>
                    </div>
                  )}
                </div>

                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#000000]"
                      : "text-gray-500 hover:text-gray-700"
                  }
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/faqs"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#000000]"
                      : "text-gray-500 hover:text-gray-700"
                  }
                >
                  FAQs
                </NavLink>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#000000]"
                      : "text-gray-500 hover:text-gray-700"
                  }
                >
                  Blog
                </NavLink>
              </div>
              {/* Contact Us Button */}
              <div className="hidden sm:block">
                <Link
                  to="/contactus"
                  className="bg-transparent border border-gray-200 text-gray-500 px-8 py-3 rounded-4xl hover:text-white hover:border-0 hover:bg-red-500"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="sm:hidden absolute top-16 left-0 w-full bg-red-50 ">
            <div className="px-2 pt-2 pb-3 space-y-2">
              <NavLink
                exact
                to="/"
                className="block text-gray-600 px-3 py-2 rounded-md text-base  hover:bg-red-100  hover:text-red-700"
                activeClassName="text-red-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>

              {/* Dropdown for Our Services */}
              <div className="relative dropdown-menu">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent closing when clicking the button
                    setDropdownOpen(!dropdownOpen);
                  }}
                  className="text-gray-700  px-3 py-2 focus:outline-none flex items-center gap-1 hover:bg-red-100  hover:text-red-700"
                >
                  Our Services
                  <svg
                    className="w-4 h-4 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2  text-[12px] px-4 py-2 bg-white border-1 border-red-100 rounded-md shadow-lg z-50 grid grid-cols-2 gap-4 p-2 mb-4">
                    <Link
                      to="/service"
                      className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-700"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <img
                        src={bok}
                        alt="Service Icon"
                        className="inline-block w-4 h-4 mr-2 "
                      />
                      School service
                    </Link>
                    <Link
                      to="/visaservice"
                      className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-700"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <img
                        src={bag1}
                        alt="Service Icon"
                        className="inline-block w-4 h-4 mr-2 "
                      />
                      Visa service
                    </Link>
                    <Link
                      to="/ticket"
                      className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-700"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <img
                        src={plane}
                        alt="Service Icon"
                        className="inline-block w-6 h-6 mr-2 "
                      />
                      Ticketing & Reservation
                    </Link>
                    <Link
                      to="/birthservice"
                      className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-700"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <img
                        src={baby}
                        alt="Service Icon"
                        className="inline-block w-6 h-6 mr-2 "
                      />
                      Birth abroad service
                    </Link>
                    <Link
                      to="/holidaypack"
                      className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-700"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <img
                        src={hol}
                        alt="Service Icon"
                        className="inline-block w-5 h-5 mr-2 "
                      />
                      Holiday packages
                    </Link>
                    <Link
                      to="/relocateserv"
                      className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-700"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <img
                        src={mob}
                        alt="Service Icon"
                        className="inline-block w-6 h-6 mr-2 "
                      />
                      Relocation service
                    </Link>
                  </div>
                )}
              </div>

              <NavLink
                to="/about"
                className="block text-gray-600 px-3 py-2 rounded-md text-base
                 hover:bg-red-100  hover:text-red-700"
                activeClassName="text-red-500"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/faqs"
                className="block text-gray-600 px-3 py-2 rounded-md text-base
    hover:bg-red-100  hover:text-red-700 "
                activeClassName="text-red-500"
                onClick={() => setIsOpen(false)}
              >
                FAQs
              </NavLink>
              <NavLink
                to="/blog"
                className="block text-gray-600 px-3 py-2 rounded-md text-base
    hover:bg-red-100  hover:text-red-700  "
                activeClassName="text-red-500"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </NavLink>

              <NavLink
                to="/contactus"
                className="block text-gray-600 px-3 py-2 rounded-md text-base hover:bg-red-100  hover:text-red-700  "
                activeClassName="text-red-500"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
