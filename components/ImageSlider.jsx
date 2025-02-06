import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// import { Link } from "react-router-dom";
import flight1 from "../public/images/flight1.png";
import explore from "../public/images/explore.png";
import canada from "../public/images/canada.png";
import flight from "../public/images/flight.png";
import adventure from "../public/images/adventure.png";
import group from "../public/images/group.png";
import care from "../public/images/care.png";

import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: flight1,
    span: "ADMISSION",
    title: "Enjoy a hassle free process with our study abroad packages.",
    buttonText: "Learn now",
    link: "/admission",
  },
  {
    image: explore,
    span: "TOURIST VISA",
    title:
      "Explore the world when you apply for your visit visa with 85% success rate.",
    buttonText: "Apply Now",
    link: "/tourist-visa",
  },
  {
    image: canada,
    span: "RELOCATION SERVICE",
    title: "Live and Work in Canada legally with your family",
    buttonText: "Start now",
    link: "/relocation-service",
  },
  {
    image: flight,
    span: "FLIGHT SERVICE",
    title: "Enjoy the best deals on local and International flights",
    buttonText: "Plan Trip",
    link: "/flight-service",
  },
  {
    image: adventure,
    span: "TOUR SERVICE",
    title:
      "Take a break from the stress and let's treat you to an adventure to remember",
    buttonText: "Plan Trip",
    link: "/tour-service",
  },
  {
    image: group,
    span: "TEAM BONDING PACKAGE",
    title:
      "Take a break from work and bond with colleagues locally or internationally",
    buttonText: "Grab Deal",
    link: "/team-bonding-package",
  },
  {
    image: care,
    span: "MATERNITY SERVICE",
    title:
      "Birth abroad made easy with us. Get the best deals on medical bills and give your child the gift of dual citizenship.",
    buttonText: "Check Offers",
    link: "/maternity-service",
  },
];

const ImageSlider = () => {
  return (
    <div className="relative w-full h-full z-10">
      <div className="">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 8000 }}
          loop={true}
          className="w-full h-full  relative"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="absolute inset-0 top-[30vh] sm:top-[30vh] md:top-[50vh] lg:top-[70vh] flex flex-col justify-center items-start px-10 mx-auto w-full sm:px-14 lg:px-14 transform -translate-y-1/2">
                  <p className="text-red-100 text-[16px] font-medium uppercase tracking-wide">
                    {slide.span}
                  </p>
                  <h3 className="text-white sm:text-[40px]  font-bold lg:w-[550px] pt-4">
                    {slide.title}
                  </h3>
                  <button className="mt-4 px-8 py-3 bg-red-500 text-white rounded-4xl hover:bg-red-500">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
