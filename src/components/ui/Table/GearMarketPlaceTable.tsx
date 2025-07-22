/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Space, Tooltip } from "antd";
import { GoEye } from "react-icons/go";
import ReuseTable from "@/utils/ReuseTable";
import Image from "next/image";
import { AllImages } from "../../../../public/assets/AllImages";
import { MdDelete, MdEdit } from "react-icons/md";

// Define the type for the props
interface GearMarketPlaceTableProps {
  data: any[]; // Replace `unknown` with the actual type of your data array
  loading: boolean;
  showViewModal: (record: any) => void; // Function to handle viewing a user
  showDeleteModal: (record: any) => void; // Optional function to handle adding a new item
  showEditModal: (record: any) => void; // Optional function to handle editing
  setPage?: (page: number) => void; // Function to handle pagination
  page?: number;
  total?: number;
  limit?: number;
}

const GearMarketPlaceTable: React.FC<GearMarketPlaceTableProps> = ({
  data,
  loading,
  showViewModal,
  showDeleteModal,
  showEditModal,
  setPage,
  page,
  total,
  limit,
}) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Item Image",
      dataIndex: "image",
      key: "image",
      render: () => (
        <Image
          src={AllImages?.product}
          alt="Item"
          width={50}
          height={50}
          className="rounded"
        />
      ),
    },
    {
      title: "Item Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Item Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Item Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Condition",
      dataIndex: "condition",
      key: "condition",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <span
          className={`text-sm font-medium ${
            status === "In Stock" ? "text-blue-600" : "text-red-500"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Shipping Company",
      dataIndex: "shippingCompany",
      key: "shippingCompany",
    },
    {
      title: "Shipping Price",
      dataIndex: "shippingPrice",
      key: "shippingPrice",
    },
    {
      title: "Approval Status",
      dataIndex: "approvalStatus",
      key: "approvalStatus",
      render: (status: string) => (
        <span
          className={`text-sm font-semibold ${
            status === "Approved" ? "text-green-600" : "text-yellow-500"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: unknown, record: any) => (
        <Space size="middle">
          {/* View Details Tooltip */}
          <Tooltip placement="right" title="View Details">
            <button
              className="!p-0 !bg-transparent !border-none !text-base-color cursor-pointer"
              onClick={() => showEditModal(record)}
            >
              <MdEdit style={{ fontSize: "24px" }} />
            </button>
          </Tooltip>
          <Tooltip placement="right" title="View Details">
            <button
              className="!p-0 !bg-transparent !border-none !text-base-color cursor-pointer"
              onClick={() => showDeleteModal(record)}
            >
              <MdDelete style={{ fontSize: "24px", color: "red" }} />
            </button>
          </Tooltip>
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
      setPage={setPage}
      total={total}
      limit={limit}
      page={page}
      keyValue={"email"}
    />
  );
};

export default GearMarketPlaceTable;
