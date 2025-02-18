import Bfooter from "../components/Bfooter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OtherService from "../components/OtherService";
import PackHoliday from "../components/PackHoliday";
import TourG from "../components/TourG";

const HolidayPack = () => {
  return (
    <>
      <div className="w-full h-full">
        <Header />
        <PackHoliday />
        <TourG />
        <OtherService />
        <Bfooter />
        <Footer />
      </div>
    </>
  );
};
export default HolidayPack;
