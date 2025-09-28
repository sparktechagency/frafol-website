/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import TagTypes from "@/helpers/config/TagTypes";
import { fetchWithAuth } from "@/lib/fetchWraper";
import { revalidateTag } from "next/cache";

export const addNewWrokshop = async (req = { body: FormData, params: {} }) => {
  try {
    const res = await fetchWithAuth(`/workshop/add`, {
      method: "POST",
      body: req.body as any,
    });
    const result = await res.json();
    revalidateTag(TagTypes.workshop);

    console.log(result, " =====>");
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const updateWrokshop = async (req = { body: FormData, params: {} }) => {
  try {
    const res = await fetchWithAuth(`/workshop/update/${req.params}`, {
      method: "PATCH",
      body: req.body as any,
    });
    const result = await res.json();
    revalidateTag(TagTypes.workshop);

    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const deleteWrokshop = async (req = { body: {}, params: {} }) => {
  try {
    console.log("req.params", req.params);
    const res = await fetchWithAuth(`/workshop/${req.params}`, {
      method: "DELETE",
    });
    const result = await res.json();
    revalidateTag(TagTypes.workshop);

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
