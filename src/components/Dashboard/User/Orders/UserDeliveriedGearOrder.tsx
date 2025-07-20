import React from "react";
import UserGearOrderCard from "./UserGearOrderCard";
import UserGearViewModal from "./UserGearViewModal";

const UserDeliveriedGearOrder = ({ activeTab }: { activeTab: string }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const openModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);
  return (
    <div>
      <div className="space-y-5">
        {Array.from({ length: 2 }).map((_, index) => (
          <UserGearOrderCard
            data={null}
            activeTab={activeTab}
            key={index}
            openModal={openModal}
          />
        ))}
      </div>
      <UserGearViewModal
        isViewModalVisible={isModalOpen}
        handleCancel={handleCancel}
        currentRecord={null}
        activeModal={activeTab}
      />
    </div>
  );
};

export default UserDeliveriedGearOrder;
