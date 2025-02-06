import Bfooter from "../components/Bfooter";
import ServiceImg from "../components/ServiceImg";
import Achieve from "../components/Achieve";
import ServiceGuide from "../components/ServiceGuide";
import OtherService from "../components/OtherService";

const Service = () => {
  return (
    <>
      <div className="w-full h-full">
        <ServiceImg />
        <Achieve />
        <ServiceGuide />
        <OtherService />
        <Bfooter />
      </div>
    </>
  );
};
export default Service;
