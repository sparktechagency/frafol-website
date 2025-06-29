"use client";
import React from "react";
import { AllImages } from "../../../public/assets/AllImages";
import Image from "next/image";

const images = [
  { id: 1, image: AllImages?.product },
  { id: 2, image: AllImages?.product2 },
  { id: 3, image: AllImages?.product3 },
  { id: 4, image: AllImages?.product },
];

const MarketPlaceImageTab = () => {
  const [selectedImage, setSelectedImage] = React.useState(images[0]);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2">
        {images.map((item) => (
          <Image
            width={80}
            height={80}
            key={item.id}
            src={item.image}
            alt="product thumbnail"
            className={`object-cover cursor-pointer border-2 rounded-md ${
              item.id === selectedImage.id
                ? "border-secondary-color"
                : "border-transparent"
            }`}
            onClick={() => setSelectedImage(item)}
          />
        ))}
      </div>

      <div className="flex-1">
        <Image
          key={selectedImage.id} // <-- Force remount & reload on change
          width={800}
          height={800}
          src={selectedImage.image}
          alt="selected product"
          className="w-full h-[500px] object-cover "
          priority
        />
      </div>
    </div>
  );
};

export default MarketPlaceImageTab;
