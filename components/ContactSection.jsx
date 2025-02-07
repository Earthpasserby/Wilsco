import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="bg-[url('/public/images/map.png')] min-h-screen object-cover object-center flex justify-center items-center ">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10  p-8 ">
        {/* Left Section - Contact Info */}
        <div className="  p-6">
          <h2 className="text-2xl font-bold">WE’D LOVE TO HEAR FROM YOU</h2>
          <p className="text-gray-600 mt-2">
            Have any inquiries? Our team is ready to provide expert guidance.
            Send us a message, and we’ll respond promptly.
          </p>

          {/* Social Media Icons */}
          <p className="mt-4 text-red-500 font-semibold ">
            Follow us on our social media platform
          </p>
          <div className="flex gap-4 mt-2">
            <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full">
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full">
              <i className="fab fa-linkedin"></i>
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-2xl px-8 py-4">
            <p className="text-gray-600 mt-4">
              Have questions about studying abroad, travel packages, or
              relocation services? Our team is here to assist you every step of
              the way.
            </p>

            <div className="mt-4 space-y-2">
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-red-500" /> +234 7056819261
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-red-500" /> info@wilscoetravels.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">SEND US A MESSAGE</h3>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">
                Full name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                placeholder="Write here..."
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 h-24"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
