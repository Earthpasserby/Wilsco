const KongImg = () => {
  return (
    <>
      <div className="relative h-[50vh] sm:h-[40vh] md:h-[50vh] lg:h-[100vh] ">
        <div className="bg-[url('/images/kong.jpg')] bg-cover bg-center h-full">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 top-[20vh] sm:top-[30vh] md:top-[50vh] lg:top-[70vh]  sm:px-14 lg:px-14 px-4">
            <div>
              <span className="font-medium text-[32px] text-white">
                HONG KONG
              </span>
              <p className="sm-w-[567px] lg:w-[567px] text-[16px] font-normal text-white">
                Enjoy a great tour and a dynamic lifestyle in Hong KOng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default KongImg;
