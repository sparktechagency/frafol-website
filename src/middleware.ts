/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { decodedToken } from "./utils/jwt";

// Define types for the request and response
interface Request {
  nextUrl: URL;
}

interface DecodedToken {
  email: string;
}

export async function middleware(request: Request) {
  const { pathname } = request.nextUrl;

  // Await cookies() to get the cookies object
  const accessToken = (await cookies()).get("frafolMainAccessToken")?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL("/", request.nextUrl.href));
  }

  try {
    // Decode the token
    const decodedData: DecodedToken | undefined = decodedToken(accessToken);
    console.log(decodedData);
    const email = decodedData?.email;

    // General private routes (accessible to all logged-in users)
    const privateRoutes = ["/message", "/dashboard/:paths*"];

    if (privateRoutes.some((route) => pathname.startsWith(route))) {
      if (email) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL("/", request.nextUrl.href));
      }
    }
  } catch (error: any) {
    return NextResponse.redirect(new URL("/", request.nextUrl.href));
  }
}

export const config = {
  matcher: ["/message", "/dashboard/:paths*"],
};
