import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { AllImages } from "../../../public/assets/AllImages";
import ProductCard from "../shared/ProductCard";
import ReuseButton from "../ui/Button/ReuseButton";

const data = [
  {
    image: AllImages.product,
    name: "Canon EOS 5D Mark IV DSLR Camera",
    price: "1,499.99",
    description:
      "Perfect for beginners and professionals alike, this telescope offers superior optics and a user-friendly",
    seller: "John Doe",
    condition: "New",
  },
  {
    image: AllImages.product,
    name: "Canon EOS 5D Mark IV DSLR Camera",
    price: "1,499.99",
    description:
      "Perfect for beginners and professionals alike, this telescope offers superior optics and a user-friendly",
    seller: "John Doe",
    condition: "New",
  },
  {
    image: AllImages.product,
    name: "Canon EOS 5D Mark IV DSLR Camera",
    price: "1,499.99",
    description:
      "Perfect for beginners and professionals alike, this telescope offers superior optics and a user-friendly",
    seller: "John Doe",
    condition: "New",
  },
  {
    image: AllImages.product,
    name: "Canon EOS 5D Mark IV DSLR Camera",
    price: "1,499.99",
    description:
      "Perfect for beginners and professionals alike, this telescope offers superior optics and a user-friendly",
    seller: "John Doe",
    condition: "New",
  },
];

const Marketplace = () => {
  return (
    <section className="pb-28">
      <Container>
        <SectionHeader
          title="Marketplace"
          description="Browse and buy equipment from professionals in the industry."
        />
        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.map((item, i) => (
              <ProductCard key={i} product={item} />
            ))}
          </div>
          <div className="flex justify-center items-center !mt-10">
            <ReuseButton
              url="/photography"
              className="w-fit  mt-5 !text-sm sm:!text-base lg:!text-lg !py-4.5"
              variant="secondary"
            >
              View All
            </ReuseButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Marketplace;
