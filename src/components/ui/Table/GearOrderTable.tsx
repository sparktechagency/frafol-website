import React from "react";
import { Space, Tooltip } from "antd";
import { GoEye } from "react-icons/go";
import ReuseTable from "@/utils/ReuseTable";
import { IGearOrder } from "@/types";
import { formatDate } from "@/utils/dateFormet";
import { eventOrderStatus } from "@/utils/budgetLabels";

// Define the type for the props
interface GearOrderTableProps {
  data: IGearOrder[]; // Replace `unknown` with the actual type of your data array
  loading: boolean;
  showViewModal: (record: IGearOrder) => void; // Function to handle viewing a user
  page?: number;
  total?: number;
  limit?: number;
}

const GearOrderTable: React.FC<GearOrderTableProps> = ({
  data,
  loading,
  showViewModal,
  page,
  total,
  limit,
}) => {
  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
      fixed: "left",
    },
    {
      title: "Client Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mobile Number",
      dataIndex: "mobileNumber",
      key: "mobileNumber",
    },
    {
      title: "Item Name",
      dataIndex: ["gearMarketplaceId", "name"],
      key: ["gearMarketplaceId", "name"],
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text: string) => formatDate(text),
    },
    {
      title: "Amount",
      dataIndex: ["gearMarketplaceId", "mainPrice"],
      key: "amount",
    },
    {
      title: "Shipping Details",
      dataIndex: ["gearMarketplaceId", "shippingCompany"],
      key: "shippingDetails",
      render: (shippingCompany: { name: string; price: number }) =>
        `${shippingCompany.name} - $${shippingCompany.price}`,
    },
    {
      title: "Payment Confirmation By Admin",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (text: string) => text.charAt(0).toUpperCase() + text.slice(1),
    },
    {
      title: "Order Status",
      dataIndex: "orderStatus",
      key: "orderStatus",
      render: (_: string, record: IGearOrder) => {
        return (
          eventOrderStatus[record?.orderStatus as string] || record?.orderStatus
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_: unknown, record: IGearOrder) => (
        <Space size="middle">
          <Tooltip placement="right" title="View Details">
            <button
              className="!p-0 !bg-transparent !border-none !text-base-color cursor-pointer"
              onClick={() => showViewModal(record)}
            >
              <GoEye style={{ fontSize: "24px" }} />
            </button>
          </Tooltip>
        </Space>
      ),
      align: "center",
    },
  ];

  return (
    <ReuseTable
      columns={columns}
      data={data}
      loading={loading}
      total={total}
      limit={limit}
      page={page}
      keyValue={"orderId"}
    />
  );
};

export default GearOrderTable;
