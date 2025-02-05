import stu from "/images/stu.png";

const Bfooter = () => {
  return (
    <>
      <div className="bg-[#fbfbfb] pb-14">
        <div className="mx-auto w-full px-4 sm:px-14 lg:px-14 sm:pt-24  ">
          <div className="sm:h-[585px] h-[923px] relative bg-[url('/public/images/shapes.png')]   bg-cover bg-center bg-red-500 rounded-4xl sm:px-24 ">
            <div className="Cont-overlay absolute"></div>
            <div className="Cont-text grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-12 ">
              <div className="w-full sm:py-32">
                <h2 className="text-white text-[20px] sm:text-[40px] font-medium px-2 pt-12">
                  Ready to Make Your Travel Dreams a Reality?
                </h2>
                <p className="px-2 pt-2">
                  At Wilsco Travels, we’re here to guide you every step of the
                  way-whether you're planning to study abroad, relocate, or
                  explore new destinations. Let’s make it happen together!
                </p>

                <div className="pt-12">
                  <a
                    href="#"
                    className="  text-red-500 px-10 py-4 rounded-4xl bg-white"
                  >
                    Contact us
                  </a>
                </div>
              </div>

              <div className="">
                <img
                  src={stu}
                  alt="Willsco Travel and Tours"
                  className="sm:w-[500px] sm:h-[584px] h-[638px] w-[1000px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bfooter;
