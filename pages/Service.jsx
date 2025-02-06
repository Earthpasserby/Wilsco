import React from "react";
import Header from "../components/Header";
import Bfooter from "../components/Bfooter";
import Footer from "../components/Footer";
import ServiceImg from "../components/ServiceImg";
import Achieve from "../components/Achieve";
import ServiceGuide from "../components/ServiceGuide";
import OtherService from "../components/OtherService";

const Service = () => {
  return (
    <>
      <div className="w-full h-full">
        <Header />
        <ServiceImg />
        <Achieve />
        <ServiceGuide />
        <OtherService />
        <Bfooter />
        <Footer />
      </div>
    </>
  );
};
export default Service;
