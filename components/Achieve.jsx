const Achieve = () => {
  return (
    <>
      <div className="">
        <div className="sm:px-14 lg:px-14 px-4 bg-[#fbfbfb]">
          <h4 className="text-[20px] font-normal text-[#1E1E1E] pt-14">
            Achieve your dream in 5 simple steps
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 pt-10 gap-4">
            {[
              {
                step: "Step 01",
                title: "Consultation & Assessment",
                description:
                  "Book a consultation to discover the best study options tailored to you.",
              },
              {
                step: "Step 02",
                title: "Secure Your Application",
                description:
                  "Make payment to kick-start your school search and application process.",
              },
              {
                step: "Step 03",
                title: "Admission Success",
                description:
                  "Receive your admission letter from your preferred university.",
              },
              {
                step: "Step 04",
                title: "Study Permit Application",
                description:
                  "Apply for your study permit with expert guidance.",
              },
              {
                step: "Step 05",
                title: "Start Your Journey",
                description:
                  "Pack your bags—you’re on your way to achieving your dream of studying abroad!",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl px-8 flex flex-col justify-between"
              >
                <div className="pt-8 mb-4">
                  <a
                    href="#"
                    className="bg-red-700 text-white px-4 py-2 rounded-4xl"
                  >
                    {item.step}
                  </a>
                </div>
                <h5 className="font-medium text-[20px] text-[#1E1E1E]">
                  {item.title}
                </h5>
                <p className="text-[#686868] text-[16px] font-normal mb-8">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Achieve;
