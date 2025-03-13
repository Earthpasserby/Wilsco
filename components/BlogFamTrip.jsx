// import guide from "/images/guide.jpg";
import view from "/images/view.png";
import calender from "/images/calender.png";
import { useNavigate } from "react-router-dom";

export default function BlogFamTrip() {
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
        The Best Family-Friendly Summer
        <br />
        <span className="text-gray-600 ">Vacation Spots in 2025</span>
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
      <div className="pt-14">
        <img
          src={view}
          alt="Students studying abroad"
          className="rounded-4xl w-full mb-10"
        />
      </div>
      {/* First Paragraph */}
      <p className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        Planning a family vacation can feel like assembling furniture—exciting,
        full of possibilities, but also slightly overwhelming. With 2025 just
        around the corner, it's time to start mapping out the ultimate getaway
        that caters to every family member, from the adventure-seeking teen to
        the history-loving grandparent. Whether you’re craving thrilling
        amusement parks, cultural deep dives, or breathtaking natural wonders,
        we’ve rounded up the best family-friendly destinations for an
        unforgettable summer vacation.
      </p>
      {/* Second Paragraph */}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          1. Orlando, USA – The Land of Endless Magic
        </ul>
        It’s no surprise that Orlando is at the top of our list! Home to Walt
        Disney World, Universal Studios, and Legoland, this Florida hotspot
        guarantees a vacation packed with fun and adventure. Families can
        explore iconic theme parks, encounter their favorite movie characters,
        and indulge in thrilling rides. But beyond the roller coasters, Orlando
        offers beautiful nature parks, interactive science museums, and even
        alligator-spotting tours in the Everglades!
      </div>
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          2. Paris, France – A Fairytale Adventure
        </ul>
        The City of Light isn't just for lovers—it’s an absolute dream for
        families too! Disneyland Paris is the perfect starting point for kids
        (and kids at heart), while parents will appreciate the stunning
        architecture and rich history. Explore the Eiffel Tower, Louvre Museum,
        and Seine River cruises that make learning fun and interactive. Plus,
        French pastries? A win for everyone!
      </div>{" "}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          3. Doha, Qatar – The Rising Star of Family Travel
        </ul>
        Qatar is quickly becoming a top travel destination, and for good reason.
        Doha is a family-friendly paradise with its beaches, desert adventures,
        and world-class museums. Families can enjoy a desert safari with camel
        rides and dune bashing, stroll through the stunning Souq Waqif, and
        explore the National Museum of Qatar. The best part? Unlike Dubai’s
        restrictive 96-hour visa for Nigerians, Qatar offers a 30-day visa—more
        than enough time to soak in all the excitement!
      </div>{" "}
      {/* <div className="pt-6"> */}
      {/* <img */}
      {/* // src={guide} */}
      {/* // alt="Student at an international university" */}
      {/* // className="rounded-xl w-full pt-12" */}
      {/* //    /> */}
      {/* </div> */}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          4. Cape Town, South Africa – The Ultimate Adventure Destination
        </ul>
        If your family loves nature, wildlife, and jaw-dropping scenery, Cape
        Town is the place to be! Take a cable car up Table Mountain, visit the
        adorable penguins at Boulders Beach, or go on a Big Five safari to spot
        lions, elephants, and rhinos. The city’s mix of beaches, culture, and
        adventure makes it a perfect family getaway.
      </div>{" "}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          5. Singapore – A Futuristic Playground for All Ages
        </ul>
        Singapore is like stepping into the future while still being incredibly
        welcoming to families. Universal Studios Singapore, Gardens by the Bay,
        and Sentosa Island offer plenty of attractions for kids and adults
        alike. For something educational, visit the Singapore Science Centre or
        the S.E.A. Aquarium—one of the largest in the world. The city is safe,
        clean, and packed with exciting activities for every age group.
      </div>{" "}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          6. Nairobi, Kenya – Safari and City Fun in One
        </ul>
        Want to give your kids the thrill of spotting giraffes, elephants, and
        lions in the wild? Nairobi offers the perfect blend of urban life and
        wildlife adventure. Visit the Giraffe Centre, take a safari in Nairobi
        National Park, or explore the Karen Blixen Museum. With its mix of
        nature, history, and vibrant city life, Nairobi is an affordable yet
        exciting African gem that won’t break the bank.
      </div>{" "}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          Final Thoughts
        </ul>
        Family vacations are about making lifelong memories, and the best
        destinations cater to every traveler, no matter their age. Whether
        you’re meeting Mickey Mouse in Orlando, sandboarding in Doha, or
        watching lions roam the Kenyan plains, 2025 is set to be a year of epic
        family adventures. So, where’s your next stop? Let Wilsco Travel & Tours
        take the stress out of planning and get you to your dream destination
        hassle-free! Ready to book your next family getaway? Contact Wilsco
        Travel & Tours today!
      </div>
    </div>
  );
}
