import React from "react";
import avatar from "../public/images/avatar.png";

const testimonials = [
  {
    text: "“Willsco customer service is top notch. They are so friendly and efficient. When they say they'll guide you through the process, they keep to their word.”",
    name: "Mrs Blessing.",
    location: "United Kingdom, Study Visa",
    size: "row-span-1", // Taller card
  },
  {
    text: "“I wrote my IELTS for the first time with WILLSCO tutorials and I had a 7.5 score. They also assisted with helping me gain admission to study my dream course.”",
    name: "Chisom O.",
    location: "Canada",
    size: "row-span-1", // Normal height
  },
  {
    text: "“I had the best experience with Wilsco travels on my vacation everything I needed was ready, also they have the best customer care, I was always getting calls to make sure I am ready for my tours and reminders.”",
    name: "Olaleye Omoyeni.",
    location: "Qatar",
    size: "row-span-1", // Taller card
  },
  {
    text: "“Special appreciation to Wilsco travel and tours. They helped me secure my Qatar tourist visa in less than a week. I totally recommend this travel agency for your visa and travel application.”",
    name: "Ishola Rebecca.",
    location: "Qatar",
    size: "row-span-1", // Normal height
  },
  {
    text: "“Willsco Travel and Tours handled my Canada visa process and it was so swift and efficient. I am glad I found them.”",
    name: "Mr Abiodun",
    location: "Canada",
    size: "row-span-1", // Normal height
  },
  {
    text: "“Wilsco Travel and Tour is a professional agency. That’s what I will say, they are good at what they do, very supportive and knowledgeable. Customer service is top notch. I travelled solo and from visa processing to the whole activities, and till I got home, Sonia was always on the clock. It’s like she had zero closing time, she was available even in traffic, at midnight. I was so satisfied with my experience and trust me I am difficult to please when planning trips. As a perfectionist, I would definitely use them again.”",
    name: "Seyi Adesanya.",
    location: "Doha",
    size: "row-span-2", // Taller card
  },
  {
    text: "“I wrote my IELTS for the first time with WILLSCO tutorials and I had a 7.5 score. They also assisted with helping me gain admission to study my dream course.”",
    name: "Miss Martha",
    location: "United Kingdom, Study Visa ",
    size: "row-span-1", // Taller card
  },
  {
    text: "“Wilsco was the highlight of my friends and I trip to Doha last Christmas. The entire trip would not have been possible without their help in getting our Visas.”",
    name: "Oluwakemi Adesola",
    location: "Doha",
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
                <div className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
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
