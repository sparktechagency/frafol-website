/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import OverviewCard from "./OverviewCards";
import RecentNotification from "./RecentNotification";
import ActionRequired from "./ActionRequired";

export interface IDashboardStats {
  user: string;
  totalActiveOrders: number;
  totalPendingConfirmation: number;
  totalCompletedOrders: number;
  totalSpent: number;
  actionRequired: IActionRequired;
  latestNotifications: NotificationItem[];
}

export interface IActionRequired {
  totalPaymentPending: number;
  totalDeliveryConfirmation: number;
  totalCancelRequestConfirmation: number;
}

export interface NotificationItem {
  [key: string]: any;
  // If you later add fields, put them here.
}

const Overview = ({ overview }: { overview: IDashboardStats }) => {

  console.log(overview)
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl  font-bold mb-5 ">
          Welcome back, {overview?.user}!
        </h1>
        <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-34xl font-semibold mb-5">
          Here&apos;s what&apos;s happening with your orders.
        </h3>
      </div>
      <OverviewCard overview={overview} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <RecentNotification notificationData={overview.latestNotifications} />
        <ActionRequired actionData={overview.actionRequired} />
      </div>
    </div>
  );
};

export default Overview;
