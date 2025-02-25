import { Link } from "react-router-dom";

export default function SchCont() {
  const destinations = [
    {
      name: "UNITED KINGDOM",
      flag: "/flags/uk.png",
      description:
        "Study, work, or relocate to one of the world’s top education and business hubs, known for its prestigious universities and vibrant culture.   ",
    },
    {
      name: "UNITED STATES AMERICA",
      flag: "/flags/usa.png",
      description:
        "Achieve your American dream with world-class education, career opportunities, and a dynamic lifestyle in the USA. ",
    },
    //     {
    //  name: "BARBADOS",
    //  flag: "/flags/barb.png",
    //  description:
    //    "Give birth in a serene island paradise with excellent healthcare services and access to a Barbadian passport for your child. ",
    //     },
    {
      name: "CANADA",
      flag: "/flags/canada.png",
      description:
        "Experience quality education and a high standard of living with Canada’s welcoming immigration policies and top-ranked institutions. ",
    },
    //     {
    //  name: "BRAZIL",
    //  flag: "/flags/brazil.png",
    //  description:
    //    "Enjoy quality medical services and ensure your child gains Brazilian citizenship with visa-free access to numerous countries.  ",
    //     },
    //     {
    //  name: "MEXICO",
    //  flag: "/flags/mexico.png",
    //  description:
    //    "Experience affordable maternity care and provide your child with Mexican citizenship, offering regional mobility and future opportunities.  ",
    //     },
    // {
    // name: "EAST AFRICA",
    // flag: "/flags/east-africa.png",
    // description:
    // "Benefit from world-class maternity care and grant your child automatic  with lifelong advantages.",
    // },
    // {
    // name: "SOUTH AFRICA",
    // flag: "/flags/south-africa.png",
    // description:
    // "Benefit from world-class maternity care and grant your child automatic citizenship with lifelong advantages.",
    // },
    // {
    // name: "AUSTRALIA",
    // flag: "/flags/australia.png",
    // description:
    // "Benefit from world-class maternity care and grant your child automatic Australia citizenship with lifelong advantages.",
    // },
  ];

  return (
    <div className="px-8 py-12 bg-[#fbfbfb] items-center justify-center pt-24">
      {/* Section Heading */}
      {/* <div className="px-4 mb-8"> */}
      {/* <h2 className="text-3xl font-bold text-gray-800"> */}
      {/* We give you the very best */}
      {/* </h2> */}
      {/* <p className="text-[#1e1e1e] mt-2 text-[16px] text-normal"> */}
      {/* <span className="hidden sm:inline"> */}
      {/* <br /> */}
      {/* </span> */}
      {/* </p> */}
      {/* </div> */}

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <div key={index} className="bg-white rounded-4xl  p-4 transition">
            {/* Flag Image */}
            <img
              src={destination.flag}
              alt={destination.name}
              className="w-full h-40 object-cover rounded-t-lg "
            />

            {/* Country Name */}
            <h3 className="text-xl font-semibold text-gray-800 mt-4 h-12">
              {destination.name}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-2 h-16">
              {destination.description}
            </p>

            {/* Buttons */}
            <div className="mt-10">
              <Link to="/contactus">
                <button className="w-full text-[16px] font-normal bg-red-700 text-white py-3 rounded-4xl hover:bg-red-700 transition">
                  Contact us
                </button>
              </Link>

              <Link to="/faqs">
                <button className="w-full mt-2  py-2 text-[12px] font-normal text-gray-400 transition">
                  View FAQs
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
