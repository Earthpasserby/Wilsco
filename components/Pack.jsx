import { Link } from "react-router-dom";

const Pack = () => {
  return (
    <>
      <div className="mx-auto w-full px-4 sm:px-14 lg:px-14 sm:pt-24  pt-24 bg-[#fbfbfb]">
        <div className="h-[600px] relative bg-[url('/public/images/acada.png')] bg-cover bg-center rounded-4xl px-2 ">
          <div className="Cont-overlay absolute inset-0 bg-black opacity-100"></div>
          <div className="Cont-text px-4">
            <div className="lg:w-[46%] px-2">
              <h2 className="text-white sm:text-[20px] lg:text-[32px] font-bold leading-9  pt-12">
                Wilsco Travels is known for it’s successes in assisting with
                study abroad, travel packages to several countries, relocation
                services and lots more.
              </h2>
            </div>

            <div className="pt-8">
              <Link
                to="/blogdet"
                className="bg-transparent border border-white text-white px-8 py-3 text-center rounded-4xl hover:bg-red-700 hover:border-0"
              >
                Learn more
              </Link>
            </div>

            <div className="sm:pt-20 pt-8">
              <p className="font-medium text-[16px] text-[#B9B9B9]">
                Our Impact in Numbers
              </p>
              <div className="grid grid-cols-2 sm:flex sm:gap-24 gap-14 pt-10">
                <div>
                  <span className="font-bold text-[32px] leading-2">2000+</span>
                  <p className="font-medium text-[16px] text-[#B9B9B9]">
                    Happy client
                  </p>
                </div>
                <div>
                  <span className="font-bold text-[32px] leading-2">97%</span>
                  <p className="font-medium text-[16px] text-[#B9B9B9]">
                    Client satisfaction
                  </p>
                </div>
                <div>
                  <span className="font-bold text-[32px] leading-2">100+</span>
                  <p className="font-medium text-[16px] text-[#B9B9B9]">
                    Transit visa
                  </p>
                </div>
                <div>
                  <span className="font-bold text-[32px] leading-2">1.8k</span>
                  <p className="font-medium text-[16px] text-[#B9B9B9]">
                    Flight tickets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pack;
