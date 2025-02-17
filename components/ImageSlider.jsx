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
    title: "Live and Work in Canada legally with your family.",
    buttonText: "Start now",
    link: "/relocation-service",
  },
  {
    image: flight,
    span: "FLIGHT SERVICE",
    title: "Enjoy the best deals on local and International flights.",
    buttonText: "Plan Trip",
    link: "/flight-service",
  },
  {
    image: adventure,
    span: "TOUR SERVICE",
    title:
      "Take a break from the stress and let's treat you to an adventure to remember.",
    buttonText: "Plan Trip",
    link: "/tour-service",
  },
  {
    image: group,
    span: "TEAM BONDING PACKAGE",
    title:
      "Take a break from work and bond with colleagues locally or internationally.",
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
    <div className="">
      <div className="">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            pegClass: "swiper-custom-pagination",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          autoplay={{ delay: 8000 }}
          loop={true}
          className="w-full relative"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="relative h-[50vh] lg:h-[100vh] sm:max-h-[800px] w-full">
                <div className="">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-[100vh]  object-center object-cover absolute inset-0"
                  />
                </div>

                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="absolute inset-0 top-[30vh]  sm:top-[65%] flex flex-col justify-center items-start px-10 mx-auto lg:px-14 transform -translate-y-1/2">
                  <p className="text-red-100 text-[16px] font-medium uppercase tracking-wide">
                    {slide.span}
                  </p>
                  <div className="sm:w-[700px]">
                    <h3 className="text-white sm:text-4xl lg:text-[40px] font-bold pt-4">
                      {slide.title}
                    </h3>
                  </div>

                  <button className="mt-2 sm:mt-7 sm:px-8 sm:py-4 px-8 py-2 bg-red-700 text-white rounded-4xl hover:bg-red-700">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
              <div className="custom-pagination !absolute !bottom-0"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
