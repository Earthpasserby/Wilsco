import React from "react";
import Header from "../components/Header";
import Bfooter from "../components/Bfooter";
import Footer from "../components/Footer";
import OtherService from "../components/OtherService";
import VisaImg from "../components/VisaImg";
import Apply from "../components/Apply";
import Destinations from "../components/Destinations";

const VisaService = () => {
  return (
    <>
      <div className="w-full h-full">
        <Header />
        <VisaImg />
        <Apply />
        <Destinations />
        <OtherService />

        <Bfooter />
        <Footer />
      </div>
    </>
  );
};
export default VisaService;
