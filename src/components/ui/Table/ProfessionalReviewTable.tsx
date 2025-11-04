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
      dataIndex: "reportedBy", // Data key for reportedBy
      key: "reportedBy",
    },
    {
      title: "Feedback",
      dataIndex: "comment", // Data key for comment
      key: "comment",
      render: () => (
        <div className="max-w-[200px] truncate">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          maiores provident quae eligendi...
        </div>
      ),
    },
    {
      title: "Rating",
      dataIndex: "rating", // Data key for rating
      key: "rating",
      render: (rating: number) => (
        <div>
          <Rate
            disabled
            defaultValue={rating}
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
      dataIndex: "createdAt", // Data key for createdAt
      key: "createdAt",
      render: () => <p>2021-01-01</p>,
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
                className="!p-0 !bg-transparent !border-none !text-secondary-color"
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
