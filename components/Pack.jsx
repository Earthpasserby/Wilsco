const Pack = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 sm:pt-24  pt-24">
        <div className="h-[582px] relative bg-[url('/public/images/acada.png')] bg-cover bg-center rounded-4xl px-8 ">
          <div className="Cont-overlay absolute inset-0 bg-black opacity-50"></div>
          <div className="Cont-text">
            <div className="sm:w-[54%] w-full px-2">
              <h2 className="text-white text-[20px] sm:text-[32px] font-bold  pt-12">
                Wilsco Travels is known for it’s successes in assisting with
                study abroad, travel packages to several countries, relocation
                services and lots more.
              </h2>
            </div>

            <div className="pt-12">
              <a
                href="#"
                className="bg-transparent border border-white text-white px-4 py-2 rounded-4xl hover:bg-gray-100"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pack;
