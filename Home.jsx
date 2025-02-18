import ImageSlider from "./components/ImageSlider";
import CenteredLogo from "./components/CenteredLogo";
import Testimony from "./components/Testimony";
import Opportunities from "./components/Opportunities";
import Pack from "./components/Pack";
import Insight from "./components/Insight";
import Stories from "./components/Stories";
import Bfooter from "./components/Bfooter";
import TourGuide from "./components/TourGuide";

const Home = () => {
  return (
    <>
      {/* <Title title="Palynx | The People Pairing App" /> */}
      <div className="w-full h-full">
        <ImageSlider />
        <Testimony />
        <Opportunities />
        <TourGuide />
        <Pack />
        <Insight />
        <Stories />
        <CenteredLogo />
        <Bfooter />
      </div>
    </>
  );
};
export default Home;
