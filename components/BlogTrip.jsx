// import guide from "/images/guide.jpg";
// import france from "/images/france.jpg";
import calender from "/images/calender.png";
import arrival from "/images/arrival.jpg";
import viewws from "/images/viewws.jpg";
import pool from "/images/pool.jpg";
import posee from "/images/posee.jpg";
import pose from "/images/pose.jpg";

import flags from "/images/flags.jpg";

import { useNavigate } from "react-router-dom";

export default function BlogTrip() {
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
        My First International Trip:
        <br />
        <span className="text-gray-600 ">
          A Client’s Experience with Wilsco Travel
        </span>
      </h1>
      <div className="flex item-center justify-center gap-4">
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
      <p className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        For many, the thought of international travel is both exciting and
        overwhelming. From visa applications to flight bookings, hotel
        reservations, and navigating a new country, the process can be daunting.
        At Wilsco Travel & Tours, we pride ourselves on making travel seamless,
        stress-free, and memorable. Recently, we had the pleasure of assisting
        one of our valued clients on her first international trip to Doha,
        Qatar. Here’s a glimpse into her unforgettable journey with Wilsco.
        <br />
        <br />
        <span className="font-bold text-[20px]">Planning the Perfect Trip</span>
        <br />
        <br />
        Our client had always dreamed of exploring a new destination, and when
        the opportunity arose to visit Doha, she knew she needed expert
        guidance. Wilsco Travel & Tours handled everything, including visa
        processing, flight arrangements, hotel bookings, meet-and-assist
        services at the airport, and carefully curated tours. With a 30-day visa
        instead of the limited 96-hour visa for Dubai, she had ample time to
        explore Qatar without feeling rushed.
        <br />
        <br />
        <span className="font-bold text-[20px]">
          Arrival & Stay at Gloria Hotel and Suites
        </span>
        <br />
        <br />
        Upon arrival in Doha, our meet-and-assist team ensured a smooth airport
        experience, guiding her through immigration and baggage collection. She
        checked into the elegant Gloria Hotel and Suites, known for its comfort,
        luxury, and proximity to major attractions. After settling in, she was
        ready to embark on an adventure of a lifetime!
      </p>
      {/* Second Paragraph */}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          Day 1: Exploring Doha’s Rich Culture and Heritage
        </ul>
        <br />
        {/* <br /> */}
        Her first day was dedicated to discovering Doha’s vibrant culture and
        history. She embarked on a city tour, visiting some of the most iconic
        landmarks:
        <br />
        <br />{" "}
        <li>
          {" "}
          Souq Waqif – A bustling traditional market filled with handicrafts,
          spices, and Qatari souvenirs.
        </li>
        <br />{" "}
        <li>
          Lusail – Qatar’s futuristic city, home to impressive architecture and
          modern attractions.
        </li>
        <br />
        <li>
          Katara Cultural Village – A hub for art, culture, and entertainment,
          showcasing Qatar’s rich heritage.
        </li>
        <br />
        <li>
          The National Museum of Qatar – Offering deep insights into the
          country’s history and evolution.
        </li>
        <br />
        <li>
          The Corniche – A stunning waterfront promenade perfect for an evening
          stroll.
        </li>
      </div>
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          Day 2: Thrill & Adventure in the Desert
        </ul>
        <br />A trip to Qatar wouldn’t be complete without experiencing its
        breathtaking desert landscape. Day two was packed with thrilling
        adventures:
        {/* <br /> */}
        <br />{" "}
        <li>
          Desert Safari – An adrenaline-pumping ride through the golden sand
          dunes.
        </li>
        <br />{" "}
        <li>
          Dune Bashing & Sandboarding – Testing her skills on the shifting
          sands.
        </li>
        <br />
        <li>
          Camel Ride – A true Arabian experience on the back of these majestic
          creatures.
        </li>
        <li>
          Inland Sea – A stunning natural wonder where the desert meets the sea.
        </li>
        <li>
          Traditional Refreshments at a Desert Camp – A moment to relax and soak
          in the beauty of the Qatari desert.
        </li>
      </div>{" "}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          Day 3: Shopping, Luxury & Leisure
        </ul>
        <br />
        <br />
        The final day of her trip was all about leisure and indulgence:
        {/* <br /> */}
        <br />{" "}
        <li>
          Villaggio Mall – A luxurious shopping destination featuring
          world-renowned brands and a stunning Venetian-inspired design.
        </li>
        <br />{" "}
        <li>
          Gondola Ride – A surreal experience, gliding through an indoor canal
          just like in Venice.
        </li>
        <br />
        <li>
          Flag Plaza – A landmark showcasing flags from around the world,
          symbolizing Qatar’s global presence and hospitality.
        </li>
      </div>{" "}
      {/* <div className="pt-6"> */}
      {/* <img */}
      {/* // src={guide} */}
      {/* // alt="Student at an international university" */}
      {/* // className="rounded-xl w-full pt-12" */}
      {/* // /> */}
      {/* </div> */}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18 mb-6">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          A Memorable Journey, Made Seamless by Wilsco
        </ul>
        Reflecting on her experience, our client couldn’t have been more
        grateful for Wilsco Travel & Tours. From securing her visa and flights
        to ensuring a luxurious and adventure-filled itinerary, our team
        provided seamless support every step of the way. This journey wasn’t
        just about visiting a new country; it was about creating lasting
        memories and fulfilling a dream.
        <br />
        <br />
        Are you ready for your own international adventure? Let Wilsco Travel &
        Tours handle the details while you focus on making memories! Contact us
        today to plan your next getaway. ✈️🌍
      </div>{" "}
      <div>
        <div className="grid grid-cols-3 gap-7 ">
          <div className="">
            <img src={arrival} alt="arrival Img" className="rounded-2xl" />
          </div>
          <div className="">
            <img src={flags} alt="arrival Img" className="rounded-2xl" />
          </div>
          <div className="">
            <img src={viewws} alt="arrival Img" className="rounded-2xl" />
          </div>
          <div className="">
            <img src={pool} alt="arrival Img" className="rounded-2xl" />
          </div>
          <div className="">
            <img src={pose} alt="arrival Img" className="rounded-2xl" />
          </div>
          <div className="">
            <img src={posee} alt="arrival Img" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
