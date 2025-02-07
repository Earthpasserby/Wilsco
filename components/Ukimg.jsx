const Ukimg = () => {
  return (
    <>
      <div className="">
        <div className="bg-[url('/flags/uk.png')] bg-cover bg-center h-[100vh]">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="absolute inset-0 top-[50vh] sm:top-[30vh] md:top-[50vh] lg:top-[70vh]  sm:px-14 lg:px-14 px-4">
            <div>
              <span className="font-medium text-[32px] text-white">
                UNITED KINGDOM
              </span>
              <p className="sm-w-[567px] lg:w-[567px] text-[16px] font-normal text-white">
                Travel across multiple European countries with a single visa and
                explore rich history, culture, and business opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Ukimg;
