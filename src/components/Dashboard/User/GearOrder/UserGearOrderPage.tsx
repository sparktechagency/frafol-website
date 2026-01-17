"use client";
import ReusableTabs from "@/components/ui/ReusableTabs";
import UserCancleGearOrder from "../Orders/UserCancleGearOrder";
import UserConfirmGearOrder from "../Orders/UserConfirmGearOrder";
import UserCurrentGearOrder from "../Orders/UserCurrentGearOrder";
import UserDeliveriedGearOrder from "../Orders/UserDeliveriedGearOrder";
// import UserOrdersOverview from "../Orders/UserOrdersOverview";
import { IGearOrder } from "@/types";

const UserGearOrderPage = ({
  activeTab,
  page,
  totalData,
  myGearOrderData,
  limit = 12,
}: {
  activeTab: "currentOrder" | "toConfirm" | "delivered" | "cancelled";
  page: number;
  totalData: number;
  myGearOrderData: IGearOrder[];
  limit: number;
}) => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-between items-center ">
        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl  font-bold mb-10">
          Orders
        </h1>
      </div>
      {/* <UserOrdersOverview /> */}

      <div className="mt-10">
        <ReusableTabs
          activeTab={activeTab}
          align="left"
          tabs={[
            {
              label: "Current Order",
              value: "currentOrder",
              content: (
                <UserCurrentGearOrder
                  myGearOrderData={myGearOrderData}
                  page={page}
                  limit={limit}
                  totalData={totalData}
                  activeTab={activeTab}
                />
              ),
            },
            {
              label: "To Confirm",
              value: "toConfirm",
              content: (
                <UserConfirmGearOrder
                  myGearOrderData={myGearOrderData}
                  page={page}
                  limit={limit}
                  totalData={totalData}
                  activeTab={activeTab}
                />
              ),
            },
            {
              label: "Delivered",
              value: "delivered",
              content: (
                <UserDeliveriedGearOrder
                  myGearOrderData={myGearOrderData}
                  page={page}
                  limit={limit}
                  totalData={totalData}
                  activeTab={activeTab}
                />
              ),
            },
            {
              label: "Cancelled",
              value: "cancelled",
              content: (
                <UserCancleGearOrder
                  myGearOrderData={myGearOrderData}
                  page={page}
                  limit={limit}
                  totalData={totalData}
                  activeTab={activeTab}
                />
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default UserGearOrderPage;
