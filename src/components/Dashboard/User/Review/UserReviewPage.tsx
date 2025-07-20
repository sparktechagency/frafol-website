"use client";
import ReusableTabs from "@/components/ui/ReusableTabs";
import React, { useState } from "react";
import UserAllReviews from "./UserAllReviews";
import UserAllPendingReview from "./UserAllPendingReview";
import UserReviewOverview from "./UserReviewOverview";

const UserReviewPage = () => {
  const [activeTab, setActiveTab] = useState<"allReviews" | "pendingReviews">(
    "allReviews"
  );

  return (
    <div>
      <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl  font-bold mb-10">
        Reviews
      </h1>
      <UserReviewOverview />
      {/* <UserPaymentCard /> */}
      <div className="mt-10">
        <ReusableTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          align="left"
          tabs={[
            {
              label: "All Reviews",
              value: "allReviews",
              content: <UserAllReviews activeTab={activeTab} />,
            },
            {
              label: "Pending Reviews",
              value: "pendingReviews",
              content: <UserAllPendingReview activeTab={activeTab} />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default UserReviewPage;
