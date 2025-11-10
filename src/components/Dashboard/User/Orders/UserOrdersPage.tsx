"use client";
import React from "react";
import UserOrdersOverview from "./UserOrdersOverview";
import ReusableTabs from "@/components/ui/ReusableTabs";
import UserCurrentOrder from "./UserCurrentOrder";
import UserConfirmOrder from "./UserConfirmOrder";
import UserDeliveriedOrder from "./UserDeliveriedOrder";
import UserPendingOrder from "./UserPendingOrder";
import UserOrderOffer from "./UserOrderOffer";
import UserCancleOrder from "./UserCancleOrder";
import PendingPayment from "../Payment/PendingPayment";
import { IEventOrder } from "@/types";

const UserOrdersPage = ({
  activeTab,
  page,
  totalData,
  myEventData,
  limit = 12,
}: {
  activeTab:
    | "currentOrder"
    | "toConfirm"
    | "delivered"
    | "pending"
    | "orderOffer"
    | "accepted"
    | "cancelRequest"
    | "cancelled";
  page: number;
  totalData: number;
  myEventData: IEventOrder[];
  limit: number;
}) => {
  console.log(myEventData);
  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-between items-center ">
        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl  font-bold mb-10">
          Orders
        </h1>
      </div>
      <UserOrdersOverview />
      <div className="mt-10">
        <ReusableTabs
          activeTab={activeTab}
          // onTabChange={setActiveTab}
          align="left"
          tabs={[
            {
              label: "Current Order",
              value: "currentOrder",
              content: (
                <UserCurrentOrder
                  activeTab={activeTab}
                  page={page}
                  totalData={totalData}
                  myEventData={myEventData}
                  limit={limit}
                />
              ),
            },
            {
              label: "Confirm Delivery",
              value: "toConfirm",
              content: (
                <UserConfirmOrder
                  activeTab={activeTab}
                  page={page}
                  totalData={totalData}
                  myEventData={myEventData}
                  limit={limit}
                />
              ),
            },
            {
              label: "Delivered",
              value: "delivered",
              content: (
                <UserDeliveriedOrder
                  activeTab={activeTab}
                  page={page}
                  totalData={totalData}
                  myEventData={myEventData}
                  limit={limit}
                />
              ),
            },
            {
              label: "My Request",
              value: "pending",
              content: (
                <UserPendingOrder
                  activeTab={activeTab}
                  page={page}
                  totalData={totalData}
                  myEventData={myEventData}
                  limit={limit}
                />
              ),
            },
            {
              label: "Order Offer",
              value: "orderOffer",
              content: (
                <UserOrderOffer
                  activeTab={activeTab}
                  page={page}
                  totalData={totalData}
                  myEventData={myEventData}
                  limit={limit}
                />
              ),
            },
            {
              label: "Pending Payment",
              value: "accepted",
              content: (
                <PendingPayment
                  activeTab={activeTab}
                  page={page}
                  totalData={totalData}
                  myEventData={myEventData}
                  limit={limit}
                />
              ),
            },
            {
              label: "Cancel Confirmation",
              value: "cancelRequest",
              content: (
                <UserCancleOrder
                  activeTab={activeTab}
                  page={page}
                  totalData={totalData}
                  myEventData={myEventData}
                  limit={limit}
                />
              ),
            },
            {
              label: "Cancelled",
              value: "cancelled",
              content: (
                <UserCancleOrder
                  activeTab={activeTab}
                  page={page}
                  totalData={totalData}
                  myEventData={myEventData}
                  limit={limit}
                />
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default UserOrdersPage;
