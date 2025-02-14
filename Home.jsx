import ImageSlider from "./components/ImageSlider";
import CenteredLogo from "./components/CenteredLogo";
import Testimony from "./components/Testimony";
import Opportunities from "./components/Opportunities";
import Pack from "./components/Pack";
import Insight from "./components/Insight";
import Stories from "./components/Stories";
import Bfooter from "./components/Bfooter";

const Home = () => {
  return (
    <>
      {/* <Title title="Palynx | The People Pairing App" /> */}
      <div className="w-full h-full">
        <ImageSlider />
        <CenteredLogo />
        <Testimony />
        <Opportunities />
        <Pack />
        <Insight />
        <Stories />
        <Bfooter />
      </div>
    </>
  );
};
export default Home;
