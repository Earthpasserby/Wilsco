import DQLogo from "../public/images/DQLogo 4.png";

const CenteredLogo = () => {
  return (
    <>
      <div className="mx-auto w-full px-4 sm:px-28 lg:px-28 bg-[#fbfbfb]">
        <div className="pt-14">
          <h1 className="text-[16px] font-normal flex justify-center mb-4 text-[#686868]">
            TRUSTED BY
          </h1>
          <div className="grid grid-cols-3 sm:flex gap-4 sr">
            <img
              className="mx-auto w-[134px] h-[70.9px]"
              src={DQLogo}
              alt="centered-logo"
            />
            <img
              className="mx-auto w-[134px] h-[70.9px]"
              src={DQLogo}
              alt="centered-logo"
            />
            <img
              className="mx-auto w-[134px] h-[70.9px]"
              src={DQLogo}
              alt="centered-logo"
            />
            <img
              className="mx-auto w-[134px] h-[70.9px]"
              src={DQLogo}
              alt="centered-logo"
            />
            <img
              className="mx-auto w-[134px] h-[70.9px]"
              src={DQLogo}
              alt="centered-logo"
            />
            <img
              className="mx-auto w-[134px] h-[70.9px]"
              src={DQLogo}
              alt="centered-logo"
            />
            <img
              className="mx-auto w-[134px] h-[70.9px]"
              src={DQLogo}
              alt="centered-logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default CenteredLogo;
