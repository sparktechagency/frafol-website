import { IWorkshopParticipants } from "@/types";
import ReuseTable from "@/utils/ReuseTable";
import { Modal } from "antd";
import React from "react";

const ProfessionalViewParticipentModal = ({
  isViewModalVisible,
  handleCancel,
  participantsData,
}: {
  isViewModalVisible: boolean;
  handleCancel: () => void;
  participantsData: IWorkshopParticipants[] | undefined;
}) => {
  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "Client Name",
      dataIndex: ["clientId", "name"],
      key: "clientName",
    },
    {
      title: "Email",
      dataIndex: ["clientId", "email"],
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
          data={participantsData === undefined ? [] : participantsData}
          loading={participantsData === undefined ? true : false}
          keyValue={"orderId"}
        />
      </div>
    </Modal>
  );
};

export default ProfessionalViewParticipentModal;
