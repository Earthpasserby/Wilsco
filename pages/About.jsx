import AboutCont from "../components/AboutCont";
import AboutusImg from "../components/AboutusImg";
import { AboutVision } from "../components/AboutVision";
import Bfooter from "../components/Bfooter";
import CenteredLogo from "../components/CenteredLogo";
import Header from "../components/Header";
import Stories from "../components/Stories";

function About() {
  return (
    <>
      <div className="w-full h-full">
        <Header />
        <AboutusImg />
        <CenteredLogo />
        <AboutCont />
        <AboutVision />
        <Stories />
        <Bfooter />
      </div>
    </>
  );
}

export default About;
