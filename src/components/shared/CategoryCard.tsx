/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

// Define the props interface that expects a 'service' object
interface CategoryCardProps {
  item: any;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ item }) => {
  return (
    <div className="relative group w-full">
      <Image
        width={2000}
        height={2000}
        src={item.image?.src}
        alt={item?.name || "item Image"}
        className="w-full !h-[360px] object-cover rounded-lg"
      />

      <div className=" absolute inset-0 bg-gradient-to-b from-[#0000001A] via-[#0000005A] to-[#000000AA] flex flex-col justify-end p-3 rounded-lg transition-all duration-300">
        <p className="text-primary-color text-base sm:text-lg lg:text-xl font-semibold mb-1 cursor-pointer">
          {item?.name}
        </p>
        <p className="text-primary-color text-xs sm:text-sm lg:text-base font-medium mb-1 cursor-pointer">
          {item?.description}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
