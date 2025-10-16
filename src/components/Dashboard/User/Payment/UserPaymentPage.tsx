import React from "react";
import UserPaymentCard from "./UserPaymentCard";
import PaymentHistory from "./PaymentHistory";

const UserPaymentPage = () => {
  return (
    <div>
      <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl  font-bold mb-10">
        Payment
      </h1>
      <UserPaymentCard />
      <div className="mt-10">
        <PaymentHistory />
        {/* <ReusableTabs
          activeTab={activeTab}
          align="left"
          tabs={[
            {
              label: "Payment History",
              value: "paymentHistory",
              content: <PaymentHistory activeTab={activeTab} />,
            },
            {
              label: "Pending Payment",
              value: "pendingPayment",
              content: <PendingPayment activeTab={activeTab} />,
            },
          ]}
        /> */}
      </div>
    </div>
  );
};

export default UserPaymentPage;
