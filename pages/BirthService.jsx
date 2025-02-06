import Bfooter from "../components/Bfooter";
import BirthCont from "../components/BirthCont";
import BirthImg from "../components/BirthImg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OtherService from "../components/OtherService";

const BirthService = () => {
  return (
    <>
      <div className="w-full h-full">
        <Header />
        <BirthImg />
        <BirthCont />
        <OtherService />
        <Bfooter />
        <Footer />
      </div>
    </>
  );
};
export default BirthService;
