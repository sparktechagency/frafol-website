import React from "react";
import OverviewCard from "./OverviewCards";
import RecentNotification from "./RecentNotification";
import ActionRequired from "./ActionRequired";

const Overview = () => {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl  font-bold mb-5 ">
          Welcome back, Jane!
        </h1>
        <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-34xl font-semibold mb-5">
          Here&apos;s what&apos;s happening with your orders.
        </h3>
      </div>
      <OverviewCard />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <RecentNotification />
        <ActionRequired />
      </div>
    </div>
  );
};

export default Overview;
