/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

interface GalleryCardProps {
  gallery: any;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ gallery }) => {
  return (
    <div className="relative group w-full">
      <Image
        width={2000}
        height={2000}
        src={gallery.image}
        alt={gallery?.name || "gallery Image"}
        className="w-full h-full object-cover rounded-lg"
        quality={75}
      />

      <div className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 absolute inset-0 bg-gradient-to-b from-[#0000001A] via-[#0000005A] to-[#000000AA] flex flex-col justify-end p-5 rounded-lg transition-all duration-300">
        <p className="text-white/75 text-base sm:text-lg lg:text-xl font-semibold mb-3 cursor-pointer">
          {gallery?.name}
        </p>
      </div>
    </div>
  );
};

export default GalleryCard;
