const AboutusImg = () => {
  return (
    <>
      <div className="">
        <div className="bg-[url('/images/view.png')] bg-cover bg-center h-screen">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="absolute inset-0 top-[50vh] sm:top-[30vh] md:top-[50vh] lg:top-[60vh]  sm:px-14 lg:px-14 px-4">
            <div>
              <span className="font-medium text-[16px] text-red-100">
                ABOUT US
              </span>
              <p className="sm-w-[453px] lg:w-[453px] sm:text-[40px] font-bold text-white">
                Making global dreams a reality, one journey at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutusImg;
