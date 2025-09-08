/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const registerUser = async (userData: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();

    if (result.success) {
      (await cookies()).set("frafolMainAccessToken", result.data.accessToken, {
        path: "/",
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      });
      (await cookies()).set(
        "frafolMainRefreshToken",
        result?.data?.refreshToken,
        {
          path: "/",
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        }
      );
    }

    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const loginUser = async (
  req = {
    body: {},
    params: {},
  }
) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const result = await res.json();

    if (result?.success) {
      (await cookies()).set(
        "frafolMainAccessToken",
        result?.data?.accessToken,
        {
          path: "/",
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        }
      );
      (await cookies()).set(
        "frafolMainRefreshToken",
        result?.data?.refreshToken,
        {
          path: "/",
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        }
      );
    }

    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("frafolMainAccessToken")?.value;
  let decodedData = null;

  if (accessToken) {
    decodedData = await jwtDecode(accessToken);
    return decodedData;
  } else {
    return null;
  }
};

export const logout = async () => {
  (await cookies()).delete("frafolMainAccessToken");
};

export const getNewToken = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/auth/refresh-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("frafolMainRefreshToken")!.value,
        },
      }
    );

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
