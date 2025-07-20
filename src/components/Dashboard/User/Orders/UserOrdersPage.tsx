"use client";
import React, { useState } from "react";
import UserOrdersOverview from "./UserOrdersOverview";
import ReusableTabs from "@/components/ui/ReusableTabs";
import UserCurrentOrder from "./UserCurrentOrder";
import UserConfirmOrder from "./UserConfirmOrder";
import UserDeliveriedOrder from "./UserDeliveriedOrder";
import UserPendingOrder from "./UserPendingOrder";
import UserOrderOffer from "./UserOrderOffer";
import UserMyOffer from "./userMyOffer";
import UserCancleOrder from "./UserCancleOrder";
import ReuseSelect from "@/components/ui/Form/ReuseSelect";
import { Form } from "antd";
import UserCurrentGearOrder from "./UserCurrentGearOrder";
import UserConfirmGearOrder from "./UserConfirmGearOrder";
import UserDeliveriedGearOrder from "./UserDeliveriedGearOrder";
import UserCancleGearOrder from "./UserCancleGearOrder";

const UserOrdersPage = () => {
  const [orderType, setOrderType] = useState<"photography" | "gear">(
    "photography"
  );

  type PhotographyTabs =
    | "currentOrder"
    | "toConfirm"
    | "delivered"
    | "pending"
    | "orderOffer"
    | "myOffers"
    | "cancelled";

  type GearTabs = "currentOrder";

  const [activeTab, setActiveTab] = useState<PhotographyTabs | GearTabs>(
    "currentOrder"
  );

  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-between items-center ">
        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl  font-bold mb-10">
          Orders
        </h1>
        <Form initialValues={{ status: "photography" }}>
          <ReuseSelect
            selectClassName="!w-[200px]"
            value={orderType}
            name="status"
            options={[
              { value: "photography", label: "Photography" },
              { value: "gear", label: "Gear" },
            ]}
            onChange={(value) => setOrderType(value)}
          />
        </Form>
      </div>
      <UserOrdersOverview />
      {orderType === "photography" ? (
        <div className="mt-10">
          <ReusableTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
            align="left"
            tabs={[
              {
                label: "Current Order",
                value: "currentOrder",
                content: <UserCurrentOrder activeTab={activeTab} />,
              },
              {
                label: "To Confirm",
                value: "toConfirm",
                content: <UserConfirmOrder activeTab={activeTab} />,
              },
              {
                label: "Delivered",
                value: "delivered",
                content: <UserDeliveriedOrder activeTab={activeTab} />,
              },
              {
                label: "Pending",
                value: "pending",
                content: <UserPendingOrder activeTab={activeTab} />,
              },
              {
                label: "Order Offer",
                value: "orderOffer",
                content: <UserOrderOffer activeTab={activeTab} />,
              },
              {
                label: "My Offers",
                value: "myOffers",
                content: <UserMyOffer activeTab={activeTab} />,
              },
              {
                label: "Cancelled",
                value: "cancelled",
                content: <UserCancleOrder activeTab={activeTab} />,
              },
            ]}
          />
        </div>
      ) : (
        <div className="mt-10">
          <ReusableTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
            align="left"
            tabs={[
              {
                label: "Current Order",
                value: "currentOrder",
                content: <UserCurrentGearOrder activeTab={activeTab} />,
              },
              {
                label: "To Confirm",
                value: "toConfirm",
                content: <UserConfirmGearOrder activeTab={activeTab} />,
              },
              {
                label: "Delivered",
                value: "delivered",
                content: <UserDeliveriedGearOrder activeTab={activeTab} />,
              },
              {
                label: "Cancelled",
                value: "cancelled",
                content: <UserCancleGearOrder activeTab={activeTab} />,
              },
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default UserOrdersPage;
