import Bfooter from "../components/Bfooter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OtherService from "../components/OtherService";
import RelocateServImg from "../components/RelocateServImg";

const RelocateServ = () => {
  return (
    <>
      <div className="w-full h-full">
        <Header />
        <RelocateServImg />
        <OtherService />
        <Bfooter />
        <Footer />
      </div>
    </>
  );
};
export default RelocateServ;
