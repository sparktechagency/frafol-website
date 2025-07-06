"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";
import { MdDelete } from "react-icons/md";

const CartCard = ({ product }: { product: any }) => {
  return (
    <div className="py-2 flex justify-between items-center gap-5 ">
      <div className="flex gap-2 items-center">
        <Image
          src={AllImages?.product}
          alt="product"
          width={2000}
          height={2000}
          className="w-28 h-28 object-cover rounded"
          quality={75}
        />
        <div>
          <h2 className="text-sm sm:text-base lg:text-lg font-semibold mb-2">
            {product?.name}
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-xs sm:text-sm lg:text-base font-semibold">
              Condition:
            </p>
            <p className="text-xs sm:text-sm lg:text-base">
              {product?.condition}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xs sm:text-sm lg:text-base font-semibold">
              Seller:
            </p>
            <p className="text-xs sm:text-sm lg:text-base">{product?.seller}</p>
          </div>
          <h2 className="text-xs sm:text-sm lg:text-base mb-2">
            Price: <span className="font-semibold">{product?.price}</span>
          </h2>
        </div>
      </div>
      <MdDelete
        onClick={() => {}}
        className="size-4 sm:size-5 lg:size-6 cursor-pointer text-error "
      />
    </div>
  );
};

export default CartCard;
