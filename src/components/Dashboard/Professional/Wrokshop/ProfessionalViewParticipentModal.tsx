import ReuseTable from "@/utils/ReuseTable";
import { Modal } from "antd";
import React from "react";

const ProfessionalViewParticipentModal = ({
  isViewModalVisible,
  handleCancel,
}: {
  isViewModalVisible: boolean;
  handleCancel: () => void;
}) => {
  const participantsData = Array.from({ length: 8 }).map((_, index) => ({
    key: index + 1,
    clientName: "Lívia Nováková",
    email: "livia@example.com",
  }));

  const columns = [
    {
      title: "Order ID",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Client Name",
      dataIndex: "clientName",
      key: "clientName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];
  return (
    <Modal
      open={isViewModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      className="lg:!w-[1000px]"
    >
      <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-2">
        Participants
      </h3>
      <div className="mt-10">
        <ReuseTable
          columns={columns}
          data={participantsData}
          loading={false}
          keyValue={"email"}
        />
      </div>
    </Modal>
  );
};

export default ProfessionalViewParticipentModal;
