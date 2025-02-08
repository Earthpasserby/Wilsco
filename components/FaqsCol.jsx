import { Link } from "react-router-dom";

export default function FaqsCol() {
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
    <div className="px-18 py-12 bg-[#fbfbfb] ">
      {/* Section Heading */}
      <div className="px-4 mb-8 justify-center text-center item-center pt-14">
        <h2 className="sm:text-3xl font-bold text-gray-800">
          Frequently asked questions
        </h2>
        <p className="text-gray-200 mt-2 text-[16px] text-normal">
          List of FAQs by countries
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
              <Link to="/faqsdetail">
                <button className="w-full text-[16px] font-normal border-red-500 hover:bg-red-500 text-red-500 border-1 py-4 rounded-4xl  hover:text-white transition">
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
