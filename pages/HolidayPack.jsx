import Bfooter from "../components/Bfooter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OtherService from "../components/OtherService";
import PackHoliday from "../components/PackHoliday";

const HolidayPack = () => {
  return (
    <>
      <div className="w-full h-full">
        <Header />
        <PackHoliday />
        <OtherService />
        <Bfooter />
        <Footer />
      </div>
    </>
  );
};
export default HolidayPack;
