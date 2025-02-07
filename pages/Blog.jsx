import Bfooter from "../components/Bfooter";
import { BlogCol } from "../components/BlogCol";
import { BlogImg } from "../components/BlogImg";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const Blog = () => {
  return (
    <>
      <div>
        <Header />
        <BlogImg />
        <BlogCol />
        <Bfooter />
        <Footer />
      </div>
    </>
  );
};
