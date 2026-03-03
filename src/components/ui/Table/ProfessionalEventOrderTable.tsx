/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Space, Tooltip } from "antd";
import { GoEye } from "react-icons/go";
import ReuseTable from "@/utils/ReuseTable";
import { IEventOrder } from "@/types";
import { formatDate } from "@/utils/dateFormet";
import { budgetLabels } from "@/utils/budgetLabels";

// Define the type for the props
interface ProfessionalEventOrderTableProps {
  data: IEventOrder[];
  loading: boolean;
  showViewModal: (record: IEventOrder) => void;
  setPage?: (page: number) => void;
  page?: number;
  total?: number;
  limit?: number;
  activeTab?: string;
}

const ProfessionalEventOrderTable: React.FC<
  ProfessionalEventOrderTableProps
> = ({ data, loading, showViewModal, page, total, limit }) => {
  // const user = useGetUserData();

  // const checkExtension = (extensionReq: any) => {
  //   const extensionLength = extensionReq?.length;

  //   const lastExtension = extensionReq[extensionLength - 1];

  //   return lastExtension;
  // };

  const columns = [
    {
      title: "Client Name",
      dataIndex: "userId",
      key: "userId",
      render: (_: unknown, record: IEventOrder) =>
        record?.companyName || record?.name || record?.userId?.name,
      fixed: "left",
    },
    {
      title: "Service Type",
      dataIndex: "serviceType",
      key: "serviceType",
      render: (text: string) => <span className="capitalize">{text === "both" ? "Photography & Videography" : text}</span>,
    },
    {
      title: "Event Name",
      dataIndex: ["packageId", "title"],
      key: "packageId",
      render: (_: unknown, record: IEventOrder) => (
        <div>
          {record?.orderType === "custom" ? (
            <p className="capitalize">{record?.title}</p>
          ) : (
            <p className="capitalize">{record?.packageId?.title}</p>
          )}
        </div>
      ),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      width: 300,
    },
    {
      title: "Event Date",
      dataIndex: "date",
      key: "date",
      render: (text: string) => formatDate(text),
    },
    {
      title: "Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (text: string, record: IEventOrder) => (
        <div>
          {text ? (
            <p className="capitalize text-center">{text}€</p>
          ) : (
            <p className="capitalize">
              {budgetLabels[record?.budget_range as string] ||
                record?.budget_range}
            </p>
          )}
        </div>
      ),
    },

    // {
    //   title: "Status",
    //   dataIndex: "status",
    //   key: "status",
    //   render: (status: string, record: IEventOrder) => (
    //     <span className=" font-semibold capitalize">
    //       {eventOrderStatus[record?.status as string] || record?.status}
    //     </span>
    //   ),
    // },
    // ...(activeTab === "inProgress"
    //   ? [
    //     {
    //       title: "Extension Status",
    //       dataIndex: "status",
    //       key: "status",
    //       render: (_: unknown, record: IEventOrder) => (
    //         <span className="font-semibold capitalize">
    //           {record?.extensionRequests?.length < 1
    //             ? "Request Not Sent"
    //             : checkExtension(record?.extensionRequests)?.status ===
    //               "pending"
    //               ? "Request On Pending"
    //               : checkExtension(record?.extensionRequests)?.status ===
    //                 "accepted"
    //                 ? " Request Approved"
    //                 : " Request Decline"}
    //         </span>
    //       ),
    //     },
    //   ]
    //   : []),
    // ...(activeTab === "cancelRequest"
    //   ? [
    //     {
    //       title: "Reason",
    //       dataIndex: "cancelReason",
    //       key: "cancelReason",
    //       width: 300,
    //     },
    //   ]
    //   : []),
    // ...(activeTab === "cancelRequest"
    //   ? [
    //     {
    //       title: "Canceled By",
    //       dataIndex: "cancelRequestedBy",
    //       key: "cancelRequestedBy",
    //       render: (_: unknown, record: IEventOrder) => (
    //         <span className="font-semibold capitalize">
    //           {record?.cancelRequestedBy === user?.userId
    //             ? "Me"
    //             : record?.userId?.name}
    //         </span>
    //       ),
    //     },
    //   ]
    //   : []),
    {
      title: "Action",
      key: "action",
      render: (_: unknown, record: IEventOrder) => (
        <Space size="middle">
          {/* View Details Tooltip */}
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

export default ProfessionalEventOrderTable;
