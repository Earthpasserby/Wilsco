import paris from "/images/paris.png";
import visa from "/images/visa.png";
import tickett from "/images/tickett.png";

const OtherService = () => {
  return (
    <>
      <div className="mx-auto w-full px-4 sm:px-14 lg:px-14 pt-4 sm:pt-8 bg-[#fbfbfb]">
        <div className="pt-8">
          <h3 className="text-[32px] font-medium text-gray-500">
            Other services
          </h3>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 pt-8">
          {/* First Column */}
          <div className="bg-white  rounded-2xl p-6 h-full hover:border-1 hover:border-red-700">
            <img src={visa} alt="group" />
            <h2 className="text-[#1E1E1E] font-medium text-[20px] pt-4">
              Visa services
            </h2>
            <p className="text-[#686868] font-normal text-[16px] pt-4">
              Simplify your visa application process with our proven expertise
              and personalized assistance.
            </p>
            <div className="pt-10">
              <a
                href="#"
                className="bg-transparent border border-gray-500 text-gray-500 px-4 py-2 rounded-4xl hover:bg-gray-100"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="bg-white  rounded-2xl p-6 h-full hover:border-1 hover:border-red-700 ">
            <img src={tickett} alt="group" className="rounded-4xl" />
            <h2 className="text-[#1E1E1E] font-medium text-[20px] pt-7">
              Ticketing and Reservation
            </h2>
            <p className="text-[#686868] font-normal text-[16px] pt-4">
              Book flights and accommodations effortlessly with our reliable and
              cost-effective reservation services.
            </p>
            <div className="pt-10">
              <a
                href="#"
                className="bg-transparent border border-gray-500 text-gray-500 px-4 py-2 rounded-4xl hover:bg-gray-100"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="bg-white  rounded-2xl p-6 h-full  hover:border-1 hover:border-red-700">
            <img src={paris} alt="group" />
            <h2 className="text-[#1E1E1E] font-medium text-[20px] pt-4">
              Holiday packages
            </h2>
            <p className="text-[#686868] font-normal text-[16px] pt-4">
              Discover dream destinations with tailored holiday packages that
              suit your budget and preferences.
            </p>
            <div className="pt-10">
              <a
                href="#"
                className="bg-transparent border border-gray-500 text-gray-500 px-4 py-2 rounded-4xl hover:bg-gray-100"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OtherService;
