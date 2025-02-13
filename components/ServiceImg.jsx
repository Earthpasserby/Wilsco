const ServiceImg = () => {
  return (
    <>
      <div className="">
        <div className="relative h-[50vh] sm:h-[40vh] md:h-[50vh] lg:h-[100vh]   ">
          <div className="bg-[url('/images/fiend.png')] bg-cover bg-center h-full">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="absolute inset-0 top-[20vh] sm:top-[30vh] md:top-[50vh] lg:top-[70vh]  sm:px-14 lg:px-14 px-4 ">
              <div>
                <span className="font-medium text-[32px] text-white">
                  SCHOOL SERVICE
                </span>
                <p className="sm-w-[567px] lg:w-[567px] text-[16px] font-normal text-white leading-5 ">
                  We can assist you with reducing the stress associated with
                  University application processes. We make applying to
                  Universities hassle free, quick and simple. With our
                  affiliations,you're assured a quick application process. After
                  admission, we will also assist with your study permit
                  application and flight bookings.
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
