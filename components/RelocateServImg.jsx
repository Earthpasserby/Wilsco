const RelocateServImg = () => {
  return (
    <>
      <div className="relative h-[50vh] sm:h-[40vh] md:h-[50vh] lg:h-[100vh]   ">
        <div className="bg-[url('/images/relocatee.png')] bg-cover bg-center h-full">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 top-[20vh] sm:top-[30vh] md:top-[30vh] lg:top-[70vh]  sm:px-14 lg:px-14 px-4">
            <div>
              <span className="font-medium text-[32px] text-white">
                RELOCATION SERVICE
              </span>
              <p className="sm-w-[567px] lg:w-[567px] text-[16px] font-normal text-white">
                Wilsco offers you legal pathways to live and work in a country.
                We offer the express entry programme which is point based and
                allows you to live and work legally as a Permanent Resident.
              </p>
              {/* <div className="pt-2"> */}
              {/* <button className="bg-red-600 text-white px-8 py-3 rounded-4xl hover:bg-red-700 flex items-center space-x-2"> */}
              {/* <span>Take the free eligibilty test</span> */}
              {/* <FaSearch /> */}
              {/* </button> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RelocateServImg;
