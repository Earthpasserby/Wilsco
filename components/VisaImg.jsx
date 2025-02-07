const VisaImg = () => {
  return (
    <>
      <div className="">
        <div className="bg-[url('/images/passport.png')] bg-cover bg-center h-screen">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="absolute inset-0 top-[60vh] sm:top-[30vh] md:top-[50vh] lg:top-[70vh]  sm:px-14 lg:px-14 px-4">
            <div>
              <span className="font-medium text-[32px] text-white">
                Visa Service
              </span>
              <p className="sm-w-[567px] lg:w-[567px] text-[16px] font-normal text-white">
                We boast of 85% success rate bearing in mind that the visa
                issuance is decided by the embassy or consulate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VisaImg;
