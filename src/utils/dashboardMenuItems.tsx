"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import overview from "../../public/assets/svg/overview.svg";

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
      label: <Link href="/dashboard/my-account/orders">My Orders</Link>,
    },
    {
      key: "payments",
      label: <Link href="/dashboard/my-account/payments">My Payments</Link>,
    },
    {
      key: "my-workshop",
      label: <Link href="/dashboard/my-account/my-workshop">My Workshop</Link>,
    },
    {
      key: "reviews",
      label: <Link href="/dashboard/my-account/reviews">My Reviews</Link>,
    },
    {
      key: "profile-settings",
      label: <Link href="/dashboard/my-account/profile">Profile</Link>,
    },
  ];
};
