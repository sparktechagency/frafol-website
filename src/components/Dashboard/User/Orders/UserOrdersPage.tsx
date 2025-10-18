"use client";
import React, { useState } from "react";
import UserOrdersOverview from "./UserOrdersOverview";
import ReusableTabs from "@/components/ui/ReusableTabs";
import UserCurrentOrder from "./UserCurrentOrder";
import UserConfirmOrder from "./UserConfirmOrder";
import UserDeliveriedOrder from "./UserDeliveriedOrder";
import UserPendingOrder from "./UserPendingOrder";
import UserOrderOffer from "./UserOrderOffer";
import UserCancleOrder from "./UserCancleOrder";
import ReuseSelect from "@/components/ui/Form/ReuseSelect";
import { Form } from "antd";
import UserCurrentGearOrder from "./UserCurrentGearOrder";
import UserConfirmGearOrder from "./UserConfirmGearOrder";
import UserDeliveriedGearOrder from "./UserDeliveriedGearOrder";
import UserCancleGearOrder from "./UserCancleGearOrder";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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
    | "cancelled";
  page: number;
  totalData: number;
  myEventData: IEventOrder[];
  limit: number;
}) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const { replace } = router;
  const [orderType, setOrderType] = useState<"photography" | "gear">(
    "photography"
  );

  // type PhotographyTabs =
  //   | "currentOrder"
  //   | "toConfirm"
  //   | "delivered"
  //   | "pending"
  //   | "orderOffer"
  //   | "myOffers"
  //   | "cancelled";

  // type GearTabs = "currentOrder";

  // const [activeTab, setActiveTab] = useState<PhotographyTabs | GearTabs>(
  //   "currentOrder"
  // );
  const handleOrderTypeChange = (value: "photography" | "gear") => {
    setOrderType(value);
    const params = new URLSearchParams(searchParams);
    params.delete("tab");
    replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

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
            onChange={(value) => handleOrderTypeChange(value)}
          />
        </Form>
      </div>
      <UserOrdersOverview />
      {orderType === "photography" ? (
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
      ) : (
        <div className="mt-10">
          <ReusableTabs
            activeTab={activeTab}
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
