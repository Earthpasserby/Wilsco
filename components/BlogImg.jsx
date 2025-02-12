export const BlogImg = () => {
  return (
    <>
      <div className="bg-[url('/images/student.png')] bg-cover  h-screen">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 top-[50vh] sm:top-[30vh] md:top-[50vh] lg:top-[60vh]  sm:px-14 lg:px-14 px-4">
          <div>
            <span className="font-medium sm:text-[35px] text-white">
              The ultimate guide to studying abroad:
              <br /> Everything you need to know
            </span>
            <p className="sm-w-[567px] lg:w-[567px] text-[16px] font-normal text-white">
              Discover the step-by-step process of studying in top destinations,
              from choosing the right school to securing your visa.
            </p>
            {/* <div className="pt-4"> */}
            {/* <button className="bg-red-600 text-white px-8 py-3 rounded-4xl hover:bg-red-700 flex items-center space-x-2"> */}
            {/* <span>Read</span> */}
            {/* <FaSearch /> */}
            {/* </button> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
