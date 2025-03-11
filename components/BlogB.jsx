// import guide from "/images/guide.jpg";
import france from "/images/france.jpg";
import calender from "/images/calender.png";
import { useNavigate } from "react-router-dom";

export default function BlogB() {
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
        What to Expect When Traveling for Childbirth Abroad
        <br />
        <span className="text-gray-600 "> – A Guide for Nigerian Mothers</span>
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
      {/* // alt="Students studying abroad" */}
      {/* // className="rounded-4xl w-full mb-10" */}
      {/* //    /> */}
      {/* </div> */}
      {/* First Paragraph */}
      <p className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        Bringing a child into the world is a beautiful experience, and for many
        Nigerian families, giving birth abroad offers additional benefits, such
        as access to high-quality healthcare and the possibility of securing a
        stronger passport for their child. Maternity tourism has become an
        increasingly popular option, with destinations like the USA, Canada,
        Barbados, Mexico, and Brazil being top choices. If you're considering
        this journey, here’s what you need to know!
      </p>
      {/* Second Paragraph */}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          1. Choosing the Right Destination
        </ul>
        Each country has different visa requirements, birthright citizenship
        policies, and healthcare standards. Here’s a quick breakdown:
        <li>
          {" "}
          USA – Offers birthright citizenship (your child becomes a U.S. citizen
          automatically). High medical standards but expensive unless well
          planned.
        </li>
        <li>
          Canada – Also grants birthright citizenship. High-quality healthcare
          and a structured visa process.
        </li>
        <li>
          Barbados – Birthright citizenship applies here too. It’s a beautiful
          and affordable island destination with great healthcare.
        </li>
        <li>
          Mexico – Your child will be a Mexican citizen by birth, and the
          process for obtaining residency for parents is straightforward.
        </li>
        <li>
          Brazil – Like Mexico, birthright citizenship is granted, and parents
          can apply for residency easily after birth.
        </li>
      </div>
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          2. Visa & Travel Requirements for Nigerians
        </ul>
        Visa requirements vary per country. The USA and Canada require thorough
        visa applications, with proof of financial stability and intent to
        return to Nigeria. Mexico, Brazil, and Barbados have more relaxed visa
        policies, making them easier to access for Nigerian travelers.
      </div>{" "}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          3. Cost of Giving Birth Abroad
        </ul>
        Medical expenses depend on the country and hospital you choose. Here’s a
        rough estimate:
        <li>
          {" "}
          USA – $10,000 to $30,000 (₦12M – ₦36M), depending on complications and
          hospital choice.
        </li>
        <li>Canada – $7,000 to $15,000 (₦8.4M – ₦18M), varies by province.</li>
        <li>
          Barbados – $4,000 to $7,000 (₦4.8M – ₦8.4M), more affordable and
          relaxed.
        </li>
        <li>
          Mexico & Brazil – $3,500 to $7,000 (₦4.2M – ₦8.4M), with modern
          hospitals and quality care.
        </li>
      </div>
      {/* <div className="pt-6"> */}
      {/* <img */}
      {/* // src={guide} */}
      {/* // alt="Student at an international university" */}
      {/* // className="rounded-xl w-full pt-12" */}
      {/* //    /> */}
      {/* </div> */}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          4. Accommodation & Support Services
        </ul>
        You’ll need a comfortable place to stay before and after delivery.
        Wilsco Travel & Tours assists with:
        <li>Finding safe, affordable accommodations near hospitals.</li>
        <li>Arranging airport pickups and local transportation.</li>
        <li>Connecting you with local support communities.</li>
      </div>{" "}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          5. Legal and Citizenship Process
        </ul>
        After birth, you’ll need to process your child’s birth certificate,
        passport, and Nigerian citizenship documentation. Our team ensures
        you’re guided every step of the way.
      </div>{" "}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          6. Planning Your Return to Nigeria
        </ul>
        Traveling with a newborn requires extra preparation, including securing
        your baby’s passport, visa, and required vaccinations. Wilsco Travel &
        Tours helps with return flight bookings and postnatal travel
        arrangements.
      </div>{" "}
      <div className=" pt-6 text-grey-900 text-[16px] font-normal leading-relaxed sm:px-18">
        <ul className=" pt-6 text-grey-900 text-[20px] text-black font-bold  leading-relaxed sm:px-0">
          Why Choose Wilsco Travel & Tours?
        </ul>
        We have helped numerous Nigerian families successfully navigate
        maternity tourism, offering end-to-end services, from visa applications
        to hospital recommendations and postnatal travel support. Ready to
        embark on this life-changing journey? Let’s make your maternity travel
        stress-free and memorable. Contact Wilsco Travel & Tours today!
      </div>
    </div>
  );
}
