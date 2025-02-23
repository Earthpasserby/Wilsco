import { useRef } from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

export default function ContactSection() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const sendToWhatsapp = (event) => {
    event.preventDefault();

    // Get values and ensure they're not null
    let name = nameRef.current?.value || "";
    let email = emailRef.current?.value || "";
    let message = messageRef.current?.value || "";
    // Properly encode each parameter

    let phoneNumber = "2347058619281"; // removed the + sign

    // Create a very simple message with minimal formatting
    const simpleMessage = `Name: ${name} 
    Email: ${email}
    Message: ${message}`;

    // Try direct WhatsApp Web URL format
    const whatsappURL = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
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
    <>
      {/* <div className="absolute inset-0 bg-gray-50 opacity-80"></div> */}

      <div className="bg-[url('/images/mapbase.png')] min-h-screen  object-cover object-center  flex justify-center items-center ">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10  p-8 sm:pt-28 ">
          {/* Left Section - Contact Info */}
          <div className="pt-20 sm:pt-0 p-6">
            <h2 className="sm:text-[30px] text-gray-900 font-bold">
              WE’D LOVE TO HEAR FROM YOU
            </h2>
            <p className="text-gray-600 mt-2 sm:[16px] font-normal">
              Have any inquiries? Our team is ready to provide expert guidance.
              Send us a message, and we’ll respond promptly.
            </p>

            {/* Social Media Icons */}
            <p className="pt-4 sm:pt-10 text-red-500 font-semibold ">
              Follow us on our social media platform
            </p>
            <div className="flex gap-4 mt-2 sm:pb-10 sm:mb-0 mb-10 ">
              <div className="w-8 h-8 flex items-center justify-center text-white hover:text-white bg-[#1E1E1E] rounded-4xl p-2">
                <a
                  href="https://www.facebook.com/wilscotravelandtours/"
                  className="bg-[#1E1E1E] text-white p-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={15} />
                </a>
              </div>
              <div className="w-8 h-8 flex items-center justify-center text-white hover:text-white bg-[#1E1E1E] rounded-4xl p-2">
                <a
                  href="https://www.instagram.com/wilsco_travelandtours/"
                  className="bg-[#1E1E1E] text-white p-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={15} />
                </a>
              </div>
              <div className="w-8 h-8 text-white hover:text-white bg-[#1E1E1E] p-2 flex items-center justify-center rounded-full">
                <a
                  href="https://www.linkedin.com/company/wilscotravelandtours/"
                  className="bg-[#1E1E1E] text-white p-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={15} />
                </a>
              </div>
              <div className="w-8 h-8 text-white hover:text-white bg-[#1E1E1E] p-2 flex items-center justify-center rounded-full">
                <a
                  href="https://www.tiktok.com/@wilscotravelandtours"
                  className="bg-[#1E1E1E] text-white p-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok size={15} />
                </a>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl px-8 py-4 shadow ">
              <p className="text-gray-600 mt-4">
                Have questions about studying abroad, travel packages, or
                relocation services? Our team is here to assist you every step
                of the way.
              </p>

              <div className="mt-4  space-y-2">
                <p className="flex items-center gap-2 sm:text-[16px] text-gray-900">
                  <FaPhoneAlt className="text-red-500" /> +234 7056819261
                </p>
                <p className="flex items-center gap-2 sm:text-[16px]  text-gray-900">
                  <FaEnvelope className="text-red-500" />{" "}
                  info@wilscoetravels.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md py-8 ">
            <h3 className="sm:text-[12px] font-semibold text-gray-600 mb-4 px-4">
              SEND US A MESSAGE
            </h3>

            <form className="space-y-4 px-4 ">
              <div>
                <label className="block text-gray-700 font-medium">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="full name"
                  ref={nameRef}
                  className="w-full mt-2 px-4 py-2 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="email address"
                  ref={emailRef}
                  className="w-full mt-1 px-4 py-2 border  border-gray-100  rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  placeholder="message"
                  ref={messageRef}
                  className="w-full mt-1 px-4 py-2 border  border-gray-100  rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 h-48"
                ></textarea>
              </div>

              <button
                type="submit"
                onClick={sendToWhatsapp}
                className="w-full bg-red-500 text-white py-3 rounded-4xl font-semibold hover:bg-red-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
