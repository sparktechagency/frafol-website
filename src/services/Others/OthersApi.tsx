"use server";
import { fetchWithAuth } from "@/lib/fetchWraper";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const addReport = async (req: { body: any; params: any }) => {
  console.log(req?.body);
  try {
    const res = await fetchWithAuth(`/report/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Add content type header for JSON
      },
      body: JSON.stringify(req.body),
    });
    const result = await res.json();

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
