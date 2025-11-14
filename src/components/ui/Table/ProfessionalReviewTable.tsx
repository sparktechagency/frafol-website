/* eslint-disable @typescript-eslint/no-explicit-any */
import { Rate, Space, Tooltip } from "antd";
import { GoEye } from "react-icons/go";
import ReuseTable from "@/utils/ReuseTable";
const ProfessionalReviewTable = ({
  data,
  loading,
  showViewModal,
  page,
  total,
  limit,
}: // showFilters = true,
any) => {
  const columns = [
    {
      title: "#UID",
      dataIndex: "_id",
      key: "_id",
      render: (_: any, __: any, index: number) =>
        page * limit - limit + index + 1,
    },
    {
      title: "Client Name",
      dataIndex: "userId",
      key: "userId",
      render: (user: any) => user?.name || "N/A", // uses actual user name
    },
    {
      title: "Feedback",
      dataIndex: "message",
      key: "message",
      render: (message: string) => (
        <div className="max-w-[200px] truncate">
          {message || "No feedback provided"}
        </div>
      ),
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating: number) => (
        <div className="flex items-center gap-2">
          <Rate
            disabled
            value={rating}
            allowHalf
            className="!text-secondary-color"
          />
          <span>{rating}</span>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date: string) => <p>{new Date(date).toLocaleDateString()}</p>,
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <>
          <Space size="middle">
            {/* View Details Tooltip */}
            <Tooltip placement="right" title="View Details">
              <button
                className="!p-0 !bg-transparent !border-none !text-secondary-color !cursor-pointer"
                onClick={() => showViewModal(record)}
              >
                <GoEye style={{ fontSize: "24px" }} />
              </button>
            </Tooltip>
          </Space>
        </>
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
      keyValue={"_id"}
    />
  );
};

export default ProfessionalReviewTable;
