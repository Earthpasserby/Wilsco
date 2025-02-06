export default function BirthCont() {
  const destinations = [
    {
      name: "UNITED KINGDOM",
      flag: "/flags/uk.png",
      description:
        "Give birth in a facility with excellent healthcare services and access to a  passport for your child.",
    },
    {
      name: "UNITED STATES AMERICA",
      flag: "/flags/usa.png",
      description:
        "Secure birthright citizenship for your child in the USA while enjoying top-tier medical care and a smooth delivery experience.",
    },
    {
      name: "CANADA",
      flag: "/flags/canada.png",
      description:
        "Benefit from world-class maternity care and grant your child automatic Canadian citizenship with lifelong advantages.",
    },
    {
      name: "SCHENGEN",
      flag: "/flags/switzerland.png",
      description:
        "Give birth in a serene island paradise with excellent healthcare services and access to a  passport for your child.",
    },
    {
      name: "EGYPT",
      flag: "/flags/egypt.png",
      description:
        "Experience affordable maternity care and provide your child with Egypt citizenship, offering regional mobility and future opportunities.",
    },
    {
      name: "EAST AFRICA",
      flag: "/flags/east-africa.png",
      description:
        "Benefit from world-class maternity care and grant your child automatic  with lifelong advantages.",
    },
    {
      name: "SOUTH AFRICA",
      flag: "/flags/south-africa.png",
      description:
        "Benefit from world-class maternity care and grant your child automatic citizenship with lifelong advantages.",
    },
    {
      name: "AUSTRALIA",
      flag: "/flags/australia.png",
      description:
        "Benefit from world-class maternity care and grant your child automatic Australia citizenship with lifelong advantages.",
    },
  ];

  return (
    <div className="px-8 py-12 bg-[#fbfbfb]">
      {/* Section Heading */}
      <div className="px-4 mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          We give you the very best
        </h2>
        <p className="text-gray-200 mt-2 text-[16px] text-normal">
          We partner with the best specialist hospitals and have agents in these
          countries to offer you a seamless journey.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-white rounded-4xl hover:border-1  hover:border-red-500 p-4 transition"
          >
            {/* Flag Image */}
            <img
              src={destination.flag}
              alt={destination.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />

            {/* Country Name */}
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              {destination.name}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-2">
              {destination.description}
            </p>

            {/* Buttons */}
            <div className="mt-4">
              <a href="#">
                <button className="w-full text-[16px] font-normal bg-red-500 text-white py-4 rounded-4xl hover:bg-red-700 transition">
                  Contact us
                </button>
              </a>

              <a href="#">
                <button className="w-full mt-2  py-2 text-[12px] font-normal text-gray-400 transition">
                  View FAQs
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
