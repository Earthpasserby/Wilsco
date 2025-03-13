// import guide from "/images/guide.jpg";
// import france from "/images/france.jpg";
import calender from "/images/calender.png";
import aus from "/images/aus.jpg";

import { useNavigate } from "react-router-dom";

export default function BlogD() {
  const navigate = useNavigate();
  return (
    <div className="w-full lg:px-38 mx-auto p-6 bg-[#fbfbfb]">
      <button
        onClick={() => navigate("/blog")}
        className="pt-24 px-4 py-2 text-gray-300 font-normal sm:text-[16px] rounded"
      >
        Back
      </button>
      {/* Title */}
      <h1 className=" md:text-[32px] font-bold text-center text-gray-600 pt-4">
        Doha vs. Dubai:
        <br />
        <span className="text-gray-600 ">
          Which One Is Best for Your Next Vacation?
        </span>
      </h1>
      <div className="flex item-center justify-center gap-4 mb-4">
        <p className="text-[#1e1e1e] text-center text-[12px] mt-2">
          <img
            src={calender}
            alt="Service Icon"
            className="inline-block w-4 h-4 mr-2 "
          />
          Published on March 7, 2025
        </p>
        <p className="text-[#1e1e11e] text-center text-[12px] mt-2">
          <img
            src={calender}
            alt="Service Icon"
            className="inline-block w-4 h-4 mr-2 "
          />
          By: Wilsco
        </p>
      </div>
      {/* First Image */}
      {/* <div className="pt-14"> */}
      {/* <img */}
      {/* // src={france} */}
      {/* // alt="Students studying abroad" // className="rounded-4xl w-full mb-10" */}
      {/* // /> */}
      {/* </div> */}
      {/* First Paragraph */}
      <img src={aus} alt="arrival Img" className="rounded-2xl" />
      <p className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        When it comes to Middle Eastern travel destinations, Dubai and Doha
        stand out as two of the most exciting cities to visit. Both offer luxury
        experiences, stunning architecture, and cultural richness, but for
        Nigerian passport holders, one key factor sets them apart—visa duration.
        Visa Policy for Nigerians: Dubai vs. Doha Dubai: Nigerians can only get
        a 96-hour (4-day) transit visa when traveling to Dubai, which
        significantly limits the time available to explore the city.
        Doha(Qatar): Nigerians can obtain a 30-day visa, allowing much more time
        to experience the country without feeling rushed. This means that while
        Dubai offers a short, action-packed stay, Doha gives you the flexibility
        to explore at a more relaxed pace. But beyond visas, let’s compare both
        destinations in key travel categories.
      </p>
      {/* Second Paragraph */}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          1. Attractions & Experiences
        </ul>
        <br />
        {/* <br /> */}
        ✅ Dubai: Known for its futuristic skyline, Dubai offers must-visit
        attractions like Burj Khalifa, Dubai Mall, Desert Safari, and the
        luxurious Palm Jumeirah. Shopping enthusiasts will love the Dubai
        Shopping Festival, and adventure seekers can try skydiving over the Palm
        Islands.
        <br />
        <br />
        ✅ Doha: Doha blends tradition with modernity. Visit the National Museum
        of Qatar, the beautiful Katara Cultural Village, the Corniche
        waterfront, and Souq Waqif for a traditional shopping experience. Don’t
        miss a desert safari to Khor Al Adaid (the Inland Sea), a
        UNESCO-recognized site. <br />
        <br />
        Verdict: If you love ultra-modern skyscrapers and adrenaline-pumping
        activities, Dubai wins. If you prefer a mix of rich Arabian culture,
        heritage, and modern elegance, Doha is the better choice.
      </div>
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          2. Affordability
        </ul>
        <br />
        💰 Dubai: Dubai is known for luxury, and while there are budget-friendly
        options, most activities, accommodations, and dining can be quite
        expensive.
        <br />
        <br />
        💰 Doha: Generally, Doha offers more affordable accommodations and food
        compared to Dubai, with high-quality services at reasonable prices.
        <br />
        <br />
        Verdict: If you're traveling on a budget but still want a premium
        experience, Doha is a more cost-effective destination.
      </div>{" "}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          3. Culture & Lifestyle
        </ul>
        <br />
        🎭 Dubai: While Dubai has a blend of cultures, it has a more commercial
        and Westernized feel. The city's nightlife, entertainment, and shopping
        make it a great spot for a quick luxury getaway.
        <br />
        <br />
        🎭 Doha: Doha retains a stronger sense of Arabian tradition. Visitors
        can experience authentic Qatari hospitality, traditional souqs, and
        Islamic culture, making it a perfect destination for those who want an
        immersive cultural experience.
        <br />
        <br /> Verdict: If you want to experience a deeper connection to Arabian
        heritage, Doha is the better choice.
      </div>{" "}
      {/* <div className="pt-6"> */}
      {/* <img */}
      {/* // src={guide} */}
      {/* // alt="Student at an international university" */}
      {/* // className="rounded-xl w-full pt-12" */}
      {/* // /> */}
      {/* </div> */}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          4. Flight Connectivity
        </ul>
        ✈️ Both Dubai and Doha are well-connected to Nigeria, with major
        airlines like Qatar Airways and Emirates offering direct flights from
        Lagos and Abuja.
        <br />
        <br /> However, Doha has become a rising hub for international
        connections, meaning flights may sometimes be more affordable and
        available.
      </div>{" "}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          Final Verdict: Which Should You Choose?
        </ul>
        If you have limited time and want a quick, luxurious getaway with
        high-energy activities, Dubai is great for a 4-day adventure.
        <br />
        <br />
        However, if you want to explore at your own pace, soak in the culture,
        and enjoy more value for your money, Doha’s 30-day visa makes it the
        ideal choice for Nigerian travelers.
        <br />
        <br />
        <span className="text-[20px] font-bold"> Conclusion </span>
        <br />
        <br /> With a longer visa stay, affordability, and a rich cultural
        experience, Doha is emerging as the best Middle Eastern destination for
        Nigerians who want more than just a stopover. If you’re planning a trip
        soon, why not take advantage of Qatar’s generous visa policy and
        experience the magic of Doha beyond the airport? Would you love a
        personalized travel package for Doha or Dubai? Wilsco Travel & Tours can
        help you plan the perfect trip! Contact us today. 😊✈️
      </div>{" "}
    </div>
  );
}
