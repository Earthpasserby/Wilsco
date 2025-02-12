import { Link } from "react-router-dom";
import stu from "/images/stu.png";

const Bfooter = () => {
  return (
    <div className="bg-[#fbfbfb] pb-14">
      <div className="mx-auto w-full px-4 sm:px-14 lg:px-14 sm:pt-24 pt-12">
        <div className="relative">
          {/* Overlay for better readability */}
          <div className="absolute inset-0 bg-[url('/images/shapes.png')] bg-red-700 bg-opacity-50 object-center object-cover rounded-4xl "></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 px-6 sm:px-12 lg:px-24 min-h-[400px] sm:min-h-[550px] lg:min-h-[500px] items-center">
            {/* Left Content */}
            <div className="w-full py-12 sm:py-24">
              <h2 className="text-white text-[20px] sm:text-[40px] font-bold px-2">
                Ready to Make Your Travel Dreams a Reality?
              </h2>
              <p className="px-2 pt-2 text-white">
                At Wilsco Travels, we’re here to guide you every step of the
                way—whether you're planning to study abroad, relocate, or
                explore new destinations. Let’s make it happen together!
              </p>

              <div className="pt-8 sm:pt-12">
                <Link
                  to="/contactus"
                  className="text-red-500 px-8 sm:px-10 py-3 sm:py-4 rounded-4xl bg-white"
                >
                  Contact us
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src={stu}
                alt="Willsco Travel and Tours"
                className="w-full max-w-md sm:max-w-lg h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bfooter;
