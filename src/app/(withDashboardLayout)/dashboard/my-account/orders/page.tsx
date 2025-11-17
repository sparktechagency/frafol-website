import UserOrdersPage from "@/components/Dashboard/User/Orders/UserOrdersPage";
import TagTypes from "@/helpers/config/TagTypes";
import { fetchWithAuth } from "@/lib/fetchWraper";
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
      | "accepted"
      | "cancelRequest"
      | "cancelled") || "currentOrder";

  const page = Number(params?.page) || 1;
  const limit = 1;

  const eventRes = await fetchWithAuth(
    `/event-order/my-orders?role=user&tab=${tab}&page=${page}&limit=${limit}&sort=date`,
    {
      next: {
        tags: [TagTypes.eventOrder],
      },
    }
  );

  const eventData = await eventRes.json();

  const myEventData = eventData?.data?.data || [];
  const totalData = eventData?.data?.meta?.total;

  return (
    <UserOrdersPage
      activeTab={tab}
      page={page}
      totalData={totalData}
      limit={limit}
      myEventData={myEventData}
    />
  );
};

export default page;
