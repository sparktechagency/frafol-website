import React from "react";
import SectionBanner from "../ui/SectionBanner";
import Container from "../ui/Container";
import ProductCard from "../shared/ProductCard";
import { AllImages } from "../../../public/assets/AllImages";
import MarketPlaceTab from "./MarketPlaceTab";
import SectionHeader from "../ui/SectionHeader";
import MarketPlaceSeacrhFiltre from "./MarketPlaceSeacrhFiltre";

const sampleProduct = {
  image: AllImages.product?.src,
  name: "Canon EOS 5D Mark IV DSLR Camera",
  price: "1,499.99",
  description:
    "Perfect for beginners and professionals alike, this telescope offers superior optics and a user-friendly design.",
  seller: "John Doe",
  condition: "New",
};

// Let's generate 12 dummy entries (mock data like a boss 😎)
const productData = Array.from({ length: 12 }, () => sampleProduct);

const MarketPlace = () => {
  return (
    <main className="pb-20">
      <SectionBanner
        image={AllImages?.marketBanner?.src}
        title="Market Place"
      />

      <Container>
        <div className="mt-20">
          <SectionHeader
            title="Market Place"
            description="Browse and buy equipment from professionals in the industry."
          />
          <div className="mt-16">
            <MarketPlaceTab />
          </div>
          <div className="mt-10 flex justify-end">
            <MarketPlaceSeacrhFiltre />
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {productData.map((item, index) => (
              <ProductCard key={index} product={item} />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default MarketPlace;
