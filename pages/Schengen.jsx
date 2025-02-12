import Bfooter from "../components/Bfooter";
import Schegendet from "../components/Schengendet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SchengenImg from "../components/SchenImg";

export const Schengen = () => {
  return (
    <>
      <div className="w-full h-full">
        <Header />
        <SchengenImg />
        <Schegendet />
        <Bfooter />
        <Footer />
      </div>
    </>
  );
};
