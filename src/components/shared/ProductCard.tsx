import Image from "next/image";
import React from "react";
import ReuseButton from "../ui/Button/ReuseButton";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import { IGear } from "@/types";
import { getServerUrl } from "@/helpers/config/envConfig";

interface ProductCardProps {
  product: IGear;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const serverUrl = getServerUrl();

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="overflow-hidden rounded-tl-lg rounded-tr-lg ">
        <Image
          width={200}
          height={200}
          className="w-full h-72 object-cover hover:scale-105 transform-3d transition-transform duration-300 ease-in-out"
          src={serverUrl + product?.gallery[0]}
          alt="product"
        />
      </div>
      <div className="mt-4 p-1">
        <Link href={`/marketplace/${product?._id}`}>
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-secondary-color  mb-2">
            {product?.name}
          </p>
        </Link>

        <p className=" mb-2">{product?.description}</p>
        <p className=" mb-2">
          Seller: <span className="font-medium">{product?.authorId?.name}</span>
        </p>
        <p className=" mb-2">
          Condition: <span className="font-medium">{product?.condition}</span>
        </p>
        <span className="text-sm sm:text-lg lg:text-xl font-bold">
          ${product?.price}
        </span>
        <ReuseButton
          variant="secondary"
          className="!px-6 !py-5 mt-4 flex justify-center items-center gap-2"
        >
          <IoCartOutline className="text-2xl" />
          <p>Add To Cart</p>
        </ReuseButton>
      </div>
    </div>
  );
};

export default ProductCard;
