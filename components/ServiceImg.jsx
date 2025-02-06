const ServiceImg = () => {
  return (
    <>
      <div className="">
        <div className="">
          <div className="bg-[url('/images/canada.png')] bg-cover bg-center h-screen">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="absolute inset-0 top-[30vh] sm:top-[30vh] md:top-[50vh] lg:top-[70vh]  sm:px-14 lg:px-14 px-4">
              <div>
                <span className="font-medium text-[32px] text-white">
                  School Service
                </span>
                <p className="sm-w-[567px] lg:w-[567px] text-[16px] font-normal text-white">
                  We can assist you with reducing the stress associated with
                  University application processes. We make applying to
                  Universities hassle free, quick and simple. With our
                  affiliations, we are able to students a quick application
                  process. After admission, we will also assist with your study
                  permit application and flight bookings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceImg;
