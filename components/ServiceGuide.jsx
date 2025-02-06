import { useState } from "react";

const ServiceGuide = () => {
  const [selected, setSelected] = useState("Service required");
  const [open, setOpen] = useState(false);
  const options = ["Bachelors Degree", "Masters Degree", "Diploma", "Others"];

  return (
    <>
      <div className="mx-auto w-full px-4 sm:px-14 lg:px-14 pt-4 sm:pt-24 bg-[#fbfbfb]">
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-white rounded-4xl px-14 py-24">
          <div className="lg:w-[423px] lg:h-[191px]">
            <h1 className=" font-bold  text-[#1E1E1E] text-[32px]">
              Get expert guidance for your study abroad journey
            </h1>
            <p className="text-[#989898] font-medium pt-4">
              Schedule a consultation with our experienced advisors to explore
              the best study options, universities, and countries that match
              your goals. Let’s help you take the first step toward your dream
              education!
            </p>
          </div>

          <div className="mt-8 md:mt-0 md:ml-12  w-full max-w-md">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full border border-gray-300 rounded p-2 outline-red-50"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-gray-300 rounded p-2 outline-red-50"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="w-full border border-gray-300 rounded p-2 outline-red-50"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full border border-gray-300 rounded p-2 outline-red-50"
              />

              <div className="relative w-full">
                {/* Dropdown Button */}
                <div
                  className="w-full border border-gray-300 rounded p-2 bg-white text-gray-700 cursor-pointer flex justify-between items-center"
                  onClick={() => setOpen(!open)}
                >
                  {selected}
                  <span className="text-gray-500">&#9662;</span>
                </div>

                {/* Dropdown Options */}
                {open && (
                  <ul className="absolute w-full mt-1 border border-gray-300 bg-white rounded shadow-lg">
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

              <textarea
                placeholder="Message"
                className="w-full h-[150px] border border-gray-300 rounded p-2 outline-red-50"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-red-600 text-white p-2 rounded-4xl  py-4 hover:bg-red-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceGuide;
