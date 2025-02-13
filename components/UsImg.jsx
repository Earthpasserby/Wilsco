const UsImg = () => {
  return (
    <>
      <div className="relative h-[50vh] sm:h-[40vh] md:h-[50vh] lg:h-[100vh]  ">
        <div className="bg-[url('/flags/usa.png')] bg-cover bg-center h-full">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="absolute inset-0 top-[20vh] sm:top-[30vh] md:top-[30vh] lg:top-[70vh]  sm:px-14 lg:px-14 px-4">
            <div>
              <span className="font-medium text-[32px] text-white">
                UNITED STATES OF AMERICA
              </span>
              <p className="sm-w-[567px] lg:w-[567px] text-[16px] font-normal text-white">
                Achieve your American dream with world-class education, career
                opportunities, and a dynamic lifestyle in the USA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UsImg;
