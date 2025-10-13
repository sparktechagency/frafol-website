import UserOrdersPage from "@/components/Dashboard/User/Orders/UserOrdersPage";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const tab =
    (params?.tab as
      | "currentOrder"
      | "toConfirm"
      | "delivered"
      | "pending"
      | "orderOffer"
      | "myOffers"
      | "cancelled") || "currentOrder";
  return <UserOrdersPage activeTab={tab} />;
};

export default page;
