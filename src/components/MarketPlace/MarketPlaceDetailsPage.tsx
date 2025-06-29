import React from "react";
import ReuseButton from "../ui/Button/ReuseButton";
import ProductDetailAccordion from "../ui/ProductDetailAccordion";
import MarketPlaceImageTab from "./MarketPlaceImageTab";

const generalData = [
  {
    title: "Details",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    title: "Shipping",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.​",
  },
];

const MarketPlaceDetailsPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-[90vh]">
      <div>
        <MarketPlaceImageTab />
      </div>
      <div className="space-y-1 lg:space-y-2">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold">
          Canon EOS 5D Mark IV
        </h1>
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
          $1499.99
        </h3>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold mt-4">
          Seller: <span className="font-bold"> John Doe</span>
        </p>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold mt-4">
          Condition: <span className="font-bold"> New</span>
        </p>
        <div className="flex flex-col w-full mt-10">
          <ReuseButton
            variant="outline"
            className=" !text-sm sm:!text-base lg:!text-lg !py-5 w-full !border-secondary-color !text-secondary-color !font-bold"
          >
            Add to Cart
          </ReuseButton>
          <ReuseButton
            className=" mt-5 !text-sm sm:!text-base lg:!text-lg !py-5 w-full !border-secondary-color !font-bold"
            variant="secondary"
          >
            Buy Now
          </ReuseButton>
          <div className="mt-10">
            {generalData.map((item, index) => (
              <ProductDetailAccordion
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceDetailsPage;
