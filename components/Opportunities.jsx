import sch from "../public/images/sch.png";
import visa from "../public/images/visa.png";
import tickett from "../public/images/tickett.png";
import paris from "../public/images/paris.png";
import birth from "../public/images/birth.png";
import relocate from "../public/images/relocate.png";
import { Link } from "react-router-dom";

const Opportunities = () => {
  return (
    <>
      <div className="mx-auto  w-full px-4 sm:px-14 lg:px-14 pt-0 sm:pt-10 bg-[#fbfbfb]">
        <div className="grid">
          <h1 className="text-[#1E1E1E] font-bold text-3xl">
            Your gateway to global opportunities
          </h1>
          <p className="text-[#989898] font-medium text-[16px] pt-4">
            Explore our wide range of services designed to make your study,
            <span className="hidden sm:inline">
              <br />
            </span>
            travel, and relocation dreams a reality, with expert support
            <span className="hidden sm:inline">
              <br />
            </span>{" "}
            every step of the way.
          </p>
        </div>
      </div>
      <div className="mx-auto w-full px-4 sm:px-14 lg:px-14  bg-[#fbfbfb]">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 pt-8">
          {/* First Column */}
          <div className="bg-white  rounded-2xl p-6  min-h-[400px] flex flex-col h-full ">
            <div className="relative h-[200px] w-full">
              <img
                src={sch}
                alt="group"
                className="w-full h-full absolute inset-0 object-cover rounded-4xl object-center "
              />
            </div>

            <h2 className="text-[#1E1E1E] font-medium text-[20px] pt-2">
              School service
            </h2>
            <p className="text-[#686868] font-normal text-[16px] pt-2 flex-grow ">
              Secure your spot in top institutions worldwide with our expert
              guidance and support for study abroad applications.
            </p>
            <div className="pt-4 mt-auto">
              <Link
                to="/service"
                className="bg-transparent border border-gray-200 text-gray-500 px-4 py-2 rounded-4xl hover:bg-red-500 hover:border-0 hover:text-white"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Second Column */}
          <div className="bg-white  p-6 rounded-2xl  min-h-[400px] flex flex-col h-full  ">
            <div className="relative h-[200px] w-full">
              <img
                src={visa}
                alt="group"
                className="w-full h-full absolute inset-0 object-cover rounded-4xl object-center "
              />
            </div>

            <h2 className="text-[#1E1E1E] font-medium text-[20px] pt-2">
              Visa Service
            </h2>
            <p className="text-[#686868] font-normal text-[16px] pt-2 flex-grow">
              Get expert assistance for a smooth visa application process and
              increase your approval chances.
            </p>
            <div className="pt-4 mt-auto">
              <Link
                to="/visaservice"
                className="bg-transparent border border-gray-200 text-gray-500 px-4 py-2 rounded-4xl hover:bg-red-500 hover:border-0 hover:text-white"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Third Column (Larger One) */}
          <div className="bg-white  rounded-2xl p-6   min-h-[400px] flex flex-col h-full sm:col-span-2 lg:col-span-2">
            <div className="h-[200px] w-full relative">
              <img
                src={tickett}
                alt="group"
                className=" w-full h-full absolute inset-0 object-cover rounded-4xl object-center "
              />
            </div>

            <h2 className="text-[#1E1E1E] font-medium text-[20px] pt-2">
              Ticketing and Reservation
            </h2>
            <p className="text-[#686868] font-normal text-[16px] flex-grow  pt-2 ">
              Book flights and accommodations effortlessly with our reliable and
              cost-effective reservation services.
            </p>
            <div className="pt-4 mt-auto">
              <Link
                to="/ticket"
                className="bg-transparent border border-gray-200 text-gray-500 px-4 py-2 rounded-4xl hover:bg-red-500 hover:border-0 hover:text-white"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full px-4 sm:px-14 lg:px-14 pt-4 sm:pt-8 bg-[#fbfbfb]">
        <div className="grid sm:grid-cols-4 gap-4 pt-8">
          {/* First Column */}
          <div className="bg-white  rounded-2xl p-6   min-h-[400px] flex flex-col h-full ">
            <div className="relative h-[200px] w-full">
              <img
                src={paris}
                alt="group"
                className="w-full h-full absolute inset-0 object-cover rounded-4xl object-center "
              />
            </div>

            <h2 className="text-[#1E1E1E] font-medium text-[20px] pt-2">
              Holiday packages
            </h2>
            <p className="text-[#686868] font-normal text-[16px] pt-2 ">
              Discover dream destinations with tailored holiday packages that
              suit your budget and preferences.
            </p>
            <div className="pt-4 mt-auto">
              <Link
                to="holidaypack"
                className="bg-transparent border border-gray-200 text-gray-500 px-4 py-2 rounded-4xl hover:bg-red-500 hover:border-0 hover:text-white"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="bg-white  rounded-2xl  min-h-[400px] flex flex-col h-full  p-6 sm:col-span-2">
            <div className="relative h-[200px] w-full">
              <img
                src={birth}
                alt="group"
                className="w-full h-full absolute inset-0 object-cover rounded-4xl object-center "
              />
            </div>

            <h2 className="text-[#1E1E1E] font-medium text-[20px] pt-2">
              Birth abroad service
            </h2>
            <p className="text-[#686868] font-normal text-[16px] pt-2">
              Experience peace of mind with our comprehensive support for
              delivering your baby abroad, from planning to post-birth
              logistics.
            </p>
            <div className="pt-4 mt-auto">
              <Link
                to="/birthservice"
                className="bg-transparent border border-gray-200 text-gray-500 px-4 py-2 rounded-4xl hover:bg-red-500 hover:border-0 hover:text-white"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Second Column */}
          <div className="bg-white  p-6 rounded-2xl  min-h-[400px] flex flex-col h-full ">
            <div className="relative h-[200px] w-full">
              <img
                src={relocate}
                alt="group"
                className="w-full h-full absolute inset-0 object-cover rounded-4xl object-center "
              />
            </div>

            <h2 className="text-[#1E1E1E] font-medium text-[20px] pt-2">
              Relocation service
            </h2>
            <p className="text-[#686868] font-normal text-[16px] pt-2">
              Make your move stress-free with our professional relocation
              services, ensuring a smooth transition to your new destination.
            </p>
            <div className="pt-4 mt-auto">
              <Link
                to="/relocateserv"
                className="bg-transparent border border-gray-200 text-gray-500 px-4 py-2 rounded-4xl hover:bg-red-500 hover:border-0 hover:text-white"
              >
                Learn more
              </Link>
            </div>
          </div>
          {/* Third Column (Larger One) */}
        </div>
      </div>
    </>
  );
};
export default Opportunities;
