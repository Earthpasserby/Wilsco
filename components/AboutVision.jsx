import wils from "/images/wils.png";

export const AboutVision = () => {
  return (
    <>
      <div className="bg-[#fbfbfb] mx-auto w-full px-4 sm:px-28 lg:px-28  ">
        <div className="justify-center text-center">
          <h3 className="text-[32px] font-medium text-[#1E1E1E]">Our vision</h3>
          <p className="text-[16px] font-normal text-[#989898]">
            At Wilsco, our vision is to make every journey extraordinary!
          </p>
        </div>
        <div className="pt-14">
          <img src={wils} alt="willsco-vision" />
        </div>
      </div>
    </>
  );
};
