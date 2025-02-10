import happy from "/images/happy.png";

const AboutCont = () => {
  return (
    <>
      <div className="bg-[#fbfbfb]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center min-h-screen sm:px-12 lg:px-32  px-8 sm:gap-14 lg:gap-34">
          <div>
            <p className=" sm:text-[24px] font-normal text-[#000000]">
              Wilsco Travels is known for our successes in assisting with study
              abroad, travel packages to several countries, relocation services
              and lots more. Based on our wide network of partners across the
              globe, our knowledge and expertise over the years, excellent
              client service and highly trained staff, we are considered the
              best with over 85% success rate on all applications
            </p>
          </div>
          <div>
            <img src={happy} alt="happy-img" className="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutCont;
