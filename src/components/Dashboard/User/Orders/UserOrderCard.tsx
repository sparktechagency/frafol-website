/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsEye } from "react-icons/bs";
import { IoCalendarOutline, IoCheckmarkSharp } from "react-icons/io5";

const UserOrderCard = ({
  activeTab,
  data,
  openModal = () => {},
}: {
  activeTab: string;
  data: any;
  openModal?: () => void;
}) => {
  console.log(data);
  return (
    <div className="p-4 rounded-md border border-[#E1E1E1] shadow-xs hover:shadow-md transition-all duration-200">
      <div>
        <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-secondary-color mb-1">
          Standard Wedding Photography
        </h3>
        <h4 className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold mb-1">
          Wedding Photography
        </h4>
        <p className="text-xs sm:text-sm lg:text-base text-gray-700">
          By Peter Kováč
        </p>
        <div className="text-xs sm:text-sm text-[#5D5D5D] flex items-center gap-1 mt-1">
          <IoCalendarOutline />
          <span>May 24, 2025</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-secondary-color mt-1">
            $500
          </p>
          {activeTab === "toConfirm" ? (
            <div className="flex items-center gap-2">
              <button
                // onClick={() => openModal()}
                className="flex items-center gap-1 px-3 py-1 border border-[#00C566] text-[#00C566] rounded bg-[#00C56633] text-sm transition cursor-pointer"
              >
                <IoCheckmarkSharp size={16} />
                Complete
              </button>
              <button
                onClick={() => openModal()}
                className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 text-sm transition cursor-pointer"
              >
                <BsEye size={16} />
                View Details
              </button>
            </div>
          ) : activeTab === "orderOffer" ? (
            <div className="flex items-center gap-2">
              <button
                // onClick={() => openModal()}
                className="flex items-center gap-1 px-3 py-1 border border-[#00C566] text-primary-color rounded bg-[#00C566] text-sm transition cursor-pointer"
              >
                <IoCheckmarkSharp size={16} />
                Accept Order
              </button>
              <button
                onClick={() => openModal()}
                className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 text-sm transition cursor-pointer"
              >
                <BsEye size={16} />
                View Details
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => openModal()}
                className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 text-sm transition cursor-pointer"
              >
                <BsEye size={16} />
                View Details
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserOrderCard;
