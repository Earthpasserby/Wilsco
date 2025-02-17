import React from "react";
import avatar from "../public/images/avatar.png";

const testimonials = [
  {
    text: "Willsco customer service is top notch. They are so friendly and efficient. When they say they’ll guide you through the process, they keep to their word.",
    name: "Chisom O.",
    location: "Canada",
    size: "row-span-1", // Taller card
  },
  {
    text: "I wrote my IELTS for the first time with WILLSCO tutorials and I had a 7.5 score. They also assisted with helping me gain admission to study my dream course.",
    name: "Chisom O.",
    location: "Canada",
    size: "row-span-1", // Normal height
  },
  {
    text: "Willsco Travel and Tours handled my Canada visa process and it was so swift and efficient. I am glad I found them.",
    name: "Chisom O.",
    location: "Canada",
    // Taller card
  },
  {
    text: "“ We are your gateway to unforgettable destinations and remarkable experiences around the globe. Whether you crave a sun-soaked beach retreat, a thrilling mountain expedition, or a cultural immersion in bustling cities, we've got you covered. We are more than just a travel services company. By harnessing the power of technology to untangle bureaucratic knots, we’re demonstrating how private enterprise can create a public benefit.Take the first step towards your next extraordinary adventure and start exploring today      ”",
    name: "Chisom O.",
    location: "Canada",
    size: "row-span-2", // Normal height
  },
  {
    text: "“I wrote my IELTS for the first time with WILSCO tutorials and I had a 7.5 score. They also assisted with helping me gain admission to study my dream course ”",
    name: "Karen Forsyth",
    location: "Ireland",
    size: "row-span-1", // Normal height
  },
  {
    text: "“We are your gateway to unforgettable destinations and remarkable experiences around the globe. Whether you crave a sun-soaked beach retreat, a thrilling mountain expedition, or a cultural immersion in bustling cities, we've got you covered. Take the first step towards your next extraordinary adventure and start exploring today.”",
    name: "Karen Forsyth",
    location: "Ireland",
    size: "row-span-2", // Taller card
  },
  {
    text: "“I wrote my IELTS for the first time with WILSCO tutorials and I had a 7.5 score. They also assisted with helping me gain admission to study my dream course ”",
    name: "Chisom O.",
    location: "Canada",
    size: "row-span-1", // Taller card
  },
];

const Stories = () => {
  return (
    <div className="w-full  px-4 sm:px-14  py-10 sm:pt-32 bg-[#fbfbfb]">
      <div className=" w-full max-w-[924px] mx-auto">
        {" "}
        <div>
          <h1 className="flex justify-center text-[#1E1E1E] font-bold sm:text-[32px] text-2xl ">
            Success Stories:
          </h1>
          <h1 className="flex justify-center text-[#1E1E1E] font-bold sm:text-[32px] text-2xl">
            Real People, Real Results
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-1fr  gap-4 pt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-2xl  border border-gray-100 ${testimonial.size}`}
            >
              <p className="text-[#686868] text-[16px]  font-medium">
                {testimonial.text}
              </p>
              <div className="flex items-center mt-4">
                <img
                  src={avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-gray-900 font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500  text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
