import EventOrdersPage from "@/components/Dashboard/Professional/EventOrders/EventOrdersPage";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const tab =
    (params?.tab as
      | "Delivered"
      | "InProgress"
      | "Upcoming"
      | "Pending"
      | "Cancelled") || "Delivered";
  return <EventOrdersPage activeTab={tab} />;
};

export default page;
