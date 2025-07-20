import React from "react";
import OverviewCard from "./OverviewCards";
import RecentNotification from "./RecentNotification";
import ActionRequired from "./ActionRequired";

const Overview = () => {
  return (
    <div>
      <OverviewCard />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <RecentNotification />
        <ActionRequired />
      </div>
    </div>
  );
};

export default Overview;
