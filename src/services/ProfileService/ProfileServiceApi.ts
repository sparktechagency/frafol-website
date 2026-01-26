"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import TagTypes from "@/helpers/config/TagTypes";
import { fetchWithAuth } from "@/lib/fetchWraper";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const updateProfile = async (
  req = {
    body: FormData,
    params: {},
  },
) => {
  try {
    const res = await fetchWithAuth(`/users/update-my-profile`, {
      method: "PATCH",
      body: req.body as any,
    });
    const result = await res.json();
    revalidateTag(TagTypes.profile);

    if (result?.success) {
      const threeMonths = 1000 * 60 * 60 * 24 * 30 * 3; // 3 months in milliseconds

      (await cookies()).set(
        "frafolMainAccessToken",
        result?.data?.accessToken,
        {
          path: "/",
          expires: new Date(Date.now() + threeMonths),
        },
      );

      (await cookies()).set(
        "frafolMainRefreshToken",
        result?.data?.refreshToken,
        {
          path: "/",
          expires: new Date(Date.now() + threeMonths),
        },
      );
    }

    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const updateIntroVIdeo = async (
  req = {
    body: FormData,
    params: {},
  },
) => {
  try {
    const res = await fetchWithAuth(`/users/upload-new-video`, {
      method: "PATCH",
      body: req.body as any,
    });
    const result = await res.json();
    revalidateTag(TagTypes.profile);
    console.log(result);
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const updateBannerImage = async (
  req = {
    body: FormData,
    params: {},
  },
) => {
  try {
    const res = await fetchWithAuth(`/users/upload-new-banner`, {
      method: "PATCH",
      body: req.body as any,
    });
    const result = await res.json();
    revalidateTag(TagTypes.profile);
    console.log(result);
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const updateGallery = async (
  req = {
    body: FormData,
    params: {},
  },
) => {
  try {
    const res = await fetchWithAuth(`/users/upload-new-photo`, {
      method: "PATCH",
      body: req.body as any,
    });
    const result = await res.json();
    revalidateTag(TagTypes.profile);
    console.log(result);
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const updateUnavailableDates = async (
  req = { body: FormData, params: {} },
) => {
  try {
    const res = await fetchWithAuth(`/users/setUnAvailability`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
    const result = await res.json();
    revalidateTag(TagTypes.profile);

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
