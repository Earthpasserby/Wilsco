import paris from "/images/paris.png";
import visa from "/images/visa.png";
import tickett from "/images/tickett.png";
import { Link } from "react-router-dom";

const OtherService = () => {
  return (
    <>
      <div className="mx-auto w-full px-4 sm:px-8 lg:px-8 pt-4 sm:pt-8 bg-[#fbfbfb]">
        <div className="pt-8">
          <h3 className="text-[32px] font-medium text-[#1E1E1E] leading-8">
            Other services
          </h3>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {/* First Column */}
          <div className="bg-white rounded-2xl p-6 h-full flex flex-col justify-between">
            <img src={visa} alt="group" className="rounded-4xl w-full" />
            <h2 className="text-[#1E1E1E] font-medium text-[20px] pt-4">
              Visa services
            </h2>
            <p className="text-[#686868] font-normal text-[16px] pt-4">
              Simplify your visa application process with our proven expertise
              and personalized assistance.
            </p>
            <div className="pt-10 ">
              <Link
                to="/visaservice"
                className="bg-transparent border border-gray-200 text-gray-500 px-4 py-2 rounded-4xl hover:bg-red-500 hover:border-0 hover:text-white inline-block"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 h-full flex flex-col justify-between ">
            <img src={tickett} alt="group" className="rounded-4xl w-full" />
            <h2 className="text-[#1E1E1E] font-medium text-[20px] pt-7">
              Ticketing and Reservation
            </h2>
            <p className="text-[#686868] font-normal text-[16px] pt-4">
              Book flights and accommodations effortlessly with our reliable and
              cost-effective reservation services.
            </p>
            <div className="pt-10 ">
              <Link
                to="/ticket"
                className="bg-transparent border border-gray-200 text-gray-500 px-4 py-2 rounded-4xl hover:bg-red-500 hover:border-0 hover:text-white inline-block"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 h-full flex flex-col justify-between">
            <img src={paris} alt="group" className="rounded-4xl w-full" />
            <h2 className="text-[#1E1E1E] font-medium text-[20px] pt-4">
              Holiday packages
            </h2>
            <p className="text-[#686868] font-normal text-[16px] pt-4">
              Discover dream destinations with tailored holiday packages that
              suit your budget and preferences.
            </p>
            <div className="pt-10 ">
              <Link
                to="/holidaypack"
                className="bg-transparent border border-gray-200 text-gray-500 px-4 py-2 rounded-4xl hover:bg-red-500 hover:border-0 hover:text-white inline-block"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OtherService;
