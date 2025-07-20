import React from "react";
import ReviewCard from "./ReviewCard";
import UserReviewEditModal from "./UserReviewEditModal";

const UserAllReviews = ({ activeTab }: { activeTab: string }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const openModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);
  return (
    <div>
      {Array.from({ length: 2 }).map((_, index) => (
        <ReviewCard
          data={null}
          activeTab={activeTab}
          key={index}
          openModal={openModal}
        />
      ))}
      <UserReviewEditModal
        isViewModalVisible={isModalOpen}
        handleCancel={handleCancel}
        currentRecord={{ message: "Nice Work, keep it up", rating: 0 }}
      />
    </div>
  );
};

export default UserAllReviews;
