"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import overview from "../../public/assets/svg/overview.svg";
import orders from "../../public/assets/svg/orders.svg";
import payments from "../../public/assets/svg/payments.svg";
import workshop from "../../public/assets/svg/workshop.svg";
import review from "../../public/assets/svg/review.svg";
import profile from "../../public/assets/svg/profile.svg";

export const useAdminPaths = () => {
  const pathname = usePathname();

  return [
    {
      key: "overview",
      label: <Link href="/dashboard/my-account/overview">Overview</Link>,
      icon: (
        <Image
          src={overview}
          alt="icon"
          width={20}
          className="mr-2"
          style={{
            filter: pathname.includes("/overview")
              ? "invert(1) sepia(1) saturate(0) brightness(200%) contrast(100%)"
              : undefined,
          }}
        />
      ),
    },
    {
      key: "orders",
      icon: (
        <Image
          src={orders}
          alt="icon"
          width={20}
          className="mr-2"
          style={{
            filter: pathname.includes("/orders")
              ? "invert(1) sepia(1) saturate(0) brightness(200%) contrast(100%)"
              : undefined,
          }}
        />
      ),
      label: <Link href="/dashboard/my-account/orders">My Orders</Link>,
    },
    {
      key: "payments",
      icon: (
        <Image
          src={payments}
          alt="icon"
          width={20}
          className="mr-2"
          style={{
            filter: pathname.includes("/payments")
              ? "invert(1) sepia(1) saturate(0) brightness(200%) contrast(100%)"
              : undefined,
          }}
        />
      ),
      label: <Link href="/dashboard/my-account/payments">My Payments</Link>,
    },
    {
      key: "my-workshop",
      icon: (
        <Image
          src={workshop}
          alt="icon"
          width={20}
          className="mr-2"
          style={{
            filter: pathname.includes("/my-workshop")
              ? "invert(1) sepia(1) saturate(0) brightness(200%) contrast(100%)"
              : undefined,
          }}
        />
      ),
      label: <Link href="/dashboard/my-account/my-workshop">My Workshop</Link>,
    },
    {
      key: "reviews",
      icon: (
        <Image
          src={review}
          alt="icon"
          width={20}
          className="mr-2"
          style={{
            filter: pathname.includes("/reviews")
              ? "invert(1) sepia(1) saturate(0) brightness(200%) contrast(100%)"
              : undefined,
          }}
        />
      ),
      label: <Link href="/dashboard/my-account/reviews">My Reviews</Link>,
    },
    {
      key: "profile-settings",
      icon: (
        <Image
          src={profile}
          alt="icon"
          width={20}
          className="mr-2"
          style={{
            filter: pathname.includes("/profile-settings")
              ? "invert(1) sepia(1) saturate(0) brightness(200%) contrast(100%)"
              : undefined,
          }}
        />
      ),
      label: <Link href="/dashboard/my-account/profile-settings">Profile</Link>,
    },
  ];
};
