import { FaHourglassEnd } from "react-icons/fa6";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const UserOrdersOverview = () => {
  const countData = [
    {
      id: 3,
      background: "#ffffff",
      name: "Current Order",
      icon: <RiMoneyDollarCircleFill className="size-6 text-secondary-color" />,
      count: 4,
    },
    {
      id: 2,
      background: "#ffffff",
      name: "To Confirm",
      icon: <FaHourglassEnd className="size-5 text-secondary-color" />,
      count: 2,
    },
    {
      id: 1,
      background: "#ffffff",
      name: "Delivered",
      icon: (
        <IoCheckmarkDoneCircleOutline className="size-6 text-secondary-color" />
      ),
      count: 4,
    },
    {
      id: 4,
      background: "#ffffff",
      name: "Pending",
      icon: <FaHourglassEnd className="size-6 text-secondary-color" />,
      count: 4,
    },
  ];
  return (
    <div className="flex flex-row flex-wrap gap-1 lg:gap-5 mb-5 !w-fit">
      {/* Company  */}
      {countData.map((item) => (
        <div
          key={item.id}
          className={`flex rounded-2xl !w-fit my-2 lg:my-0 flex-1 border border-[#E1E1E1] p-6 gap-5`}
          style={{
            backgroundColor: item.background,
          }}
        >
          <div className="!w-full">
            <div className="flex items-center justify-between gap-5 ">
              <p className="text-base sm:text-lg lg:text-xl  font-medium mb-1  tracking-tight w-full text-nowrap">
                {item.name}
              </p>
              <p>{item?.icon}</p>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl  font-bold capitalize tracking-wider">
              {item.count}
            </p>
            {/* <div className="bg-[#FAF4FF] p-3 rounded-full">{item.icon}</div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserOrdersOverview;
