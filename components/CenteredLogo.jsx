import DQLogo from "../public/images/DQLogo 4.png";

const CenteredLogo = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-12">
          <h1 className="text-xl font-medium flex justify-center text-[#686868]">
            Trusted By
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
