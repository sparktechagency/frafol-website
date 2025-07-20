import React from "react";
import PaymentsCard from "./PaymentsCard";
import PaymenViewModal from "./PaymentViewModal";

const data = [
  {
    title: "Wedding Photography",
    role: "Photographer",
    name: "Peter Kováč",
    date: "May 23, 2023",
    amount: "$2,000",
  },
  {
    title: "Canon EOS 2000D",
    role: "Seller",
    name: "Mark Kováč",
    date: "May 24, 2025",
    amount: "$5,000",
  },
];

const PendingPayment = ({ activeTab }: { activeTab: string }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const openModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);
  return (
    <div>
      <div className="flex flex-col gap-5">
        {data?.map((item, index) => (
          <PaymentsCard
            activeTab={activeTab}
            openModal={openModal}
            key={index}
            data={item}
          />
        ))}
      </div>
      <PaymenViewModal
        isViewModalVisible={isModalOpen}
        handleCancel={handleCancel}
        currentRecord={data[0]}
      />
    </div>
  );
};

export default PendingPayment;
