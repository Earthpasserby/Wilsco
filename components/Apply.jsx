import DP from "/images/DP.png";

const Apply = () => {
  return (
    <>
      <div className="bg-[#fbfbfb]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center min-h-screen sm:px-12 lg:px-32  px-8 sm:gap-14 lg:gap-34">
          <div>
            <img src={DP} alt="visa-img" className="" />
          </div>
          <div>
            <h4 className="sm:text-[32px] text-xl font-bold text-[#1E1E1E] sm:leading-10">
              Applying for a visa can be tricky, that is why you need
              professional guidance to avoid visa refusal.
            </h4>
            <p className="text-[16px] font-normal text-[#1e1e1e}">
              This is where we come in to guide and assist you with the form
              filling, review of documents, travel itinerary that meet the
              specific embassy requirements and standards.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Apply;
