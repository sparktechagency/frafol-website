"use client";
import React from "react";
import ReuseButton from "./Button/ReuseButton";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { IGear } from "@/types";
import { IoCartOutline } from "react-icons/io5";

const AddToCardButton = ({ gear }: { gear: IGear }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (data: IGear) => {
    dispatch(addToCart(data));
  };
  return (
    <ReuseButton
      variant="secondary"
      className="!px-6 !py-5 mt-4 flex justify-center items-center gap-2"
      onClick={() => handleAddToCart(gear)}
    >
      <IoCartOutline className="text-2xl" />
      <p>Add To Cart</p>
    </ReuseButton>
  );
};

export default AddToCardButton;
