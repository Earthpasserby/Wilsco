import { Link } from "react-router-dom";

export default function Destinations() {
  const destinations = [
    {
      name: "UNITED KINGDOM",
      flag: "/flags/uk.png",
      description:
        "Study, work, or relocate to one of the world’s top education and business hubs, known for its prestigious universities and vibrant culture.",
    },
    {
      name: "UNITED STATES AMERICA",
      flag: "/flags/usa.png",
      description:
        "Achieve your American dream with world-class education, career opportunities, and a dynamic lifestyle in the USA.",
    },
    {
      name: "CANADA",
      flag: "/flags/canada.png",
      description:
        "Experience quality education and a high standard of living with Canada’s welcoming immigration policies and top-ranked institutions",
    },
    {
      name: "SCHENGEN",
      flag: "/flags/switzerland.png",
      description:
        "Travel across multiple European countries with a single visa and explore rich history, culture, and business opportunities.",
    },
    {
      name: "EGYPT",
      flag: "/flags/egypt.png",
      description:
        "Discover ancient wonders and affordable travel options in Egypt, a gateway to both history and adventure",
    },
    {
      name: "EAST AFRICA",
      flag: "/flags/east-africa.png",
      description:
        "Visit breathtaking landscapes and booming economies across East African nations, including Kenya, Tanzania, and Uganda.",
    },
    {
      name: "SOUTH AFRICA",
      flag: "/flags/south-africa.png",
      description:
        "Whether for business, study, or leisure, enjoy South Africa’s diverse culture, thriving industries, and scenic beauty.",
    },
    {
      name: "AUSTRALIA",
      flag: "/flags/australia.png",
      description:
        "Study at world-renowned universities, explore career opportunities, and enjoy a high quality of life in Australia.",
    },
    {
      name: "KENYA",
      flag: "/flags/kenya.png",
      description:
        "From wildlife safaris to thriving business hubs, Kenya offers great opportunities for tourism, education, and investment.",
    },
    {
      name: "IRELAND",
      flag: "/flags/ireland.png",
      description:
        "A top destination for students and professionals, Ireland boasts high-quality education and a strong job market",
    },
    {
      name: "SEYCHELLES",
      flag: "/flags/seychelles.png",
      description:
        "A bridge between Europe and Asia, Turkey offers rich cultural heritage, affordable education, and excellent tourism experiences.",
    },
    {
      name: "TURKEY",
      flag: "/flags/turkey.png",
      description:
        "A bridge between Europe and Asia, Turkey offers rich cultural heritage, affordable education, and excellent tourism experiences.",
    },
    {
      name: "QATAR",
      flag: "/flags/qatar.png",
      description:
        "A growing business and tourism destination with world-class infrastructure and job opportunities in various sectors.",
    },
    {
      name: "BRAZIL",
      flag: "/flags/brazil.png",
      description:
        "Experience Brazil’s diverse culture, scenic landscapes, and thriving economy, making it a great destination for work and travel.",
    },
    {
      name: "HONG KONG",
      flag: "/flags/hongkong.png",
      description:
        "A financial powerhouse with excellent education institutions, career prospects, and visa options making it a great destination for work and travel.",
    },
    {
      name: "THAILAND (E-VISA)",
      flag: "/flags/thailand.png",
      description:
        "Enjoy easy access to Thailand’s stunning beaches, vibrant nightlife, and cultural wonders with a hassle-free e-visa.",
    },
  ];

  return (
    <div className="px-8 py-12 bg-[#fbfbfb]">
      {/* Section Heading */}
      <div className="px-4 mb-8">
        <h2 className="sm:text-3xl  font-bold text-gray-800">
          Explore your next destination
        </h2>
        <p className="text-[#1e1e1e] mt-2 sm:text-[16px] text-normal">
          From top study hubs to dream travel locations, we connect you to the
          <br /> destinations worldwide for education, relocation, and
          adventure.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {destinations.map((destination, index) => (
          <div key={index} className="bg-white rounded-4xl p-4 transition">
            {/* Flag Image */}
            <img
              src={destination.flag}
              alt={destination.name}
              className="w-full h-40 object-cover rounded-t-lg"
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
            <div className="mt-12">
              <Link to="/can">
                <button className="w-full text-[16px] font-normal bg-red-700 text-white py-3 rounded-4xl hover:bg-red-700 transition">
                  Apply now
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
