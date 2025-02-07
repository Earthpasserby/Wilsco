import Bfooter from "../components/Bfooter";
import FaqsCol from "../components/FaqsCol";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FaqImg from "../components/FaqImg";

export const Faqs = () => {
  return (
    <>
      <div className="w-full h-full">
        <Header />
        <FaqImg />
        <FaqsCol />
        <Bfooter />
        <Footer />
      </div>
    </>
  );
};
