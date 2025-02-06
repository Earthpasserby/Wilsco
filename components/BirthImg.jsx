const BirthImg = () => {
  return (
    <>
      <div className="">
        <div className="bg-[url('/images/birth1.png')] bg-cover bg-center h-screen">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="absolute inset-0 top-[50vh] sm:top-[30vh] md:top-[50vh] lg:top-[70vh]  sm:px-14 lg:px-14 px-4">
            <div>
              <span className="font-medium text-[32px] text-white">
                BIRTH SERVICE
              </span>
              <p className="sm-w-[567px] lg:w-[567px] text-[16px] font-normal text-white">
                Do you desire to give birth to your child abroad for the purpose
                of dual citizenship or better medical care? We offer affordable
                visa and birth services applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BirthImg;
