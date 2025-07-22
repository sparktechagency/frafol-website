import { FaStar } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoCameraSharp } from "react-icons/io5";

const ProfessionalOverviewCards = () => {
  const countData = [
    {
      id: 1,
      background: "#ffffff",
      name: "Pending Gear Order",
      icon: <LuShoppingBag className="size-5 text-secondary-color" />,
      count: 4,
      message: "2  Due This week",
    },
    {
      id: 2,
      background: "#ffffff",
      name: "Upcoming Events",
      icon: <IoCameraSharp className="size-5 text-secondary-color" />,
      count: 2,
      message: "2  Due This week",
    },
    {
      id: 3,
      background: "#ffffff",
      name: "May Earnings",
      icon: <RiMoneyDollarCircleFill className="size-6 text-secondary-color" />,
      count: "$500",
      message: "+12%",
    },
    {
      id: 4,
      background: "#ffffff",
      name: "Reviews Received",
      icon: <FaStar className="size-6 text-secondary-color" />,
      count: 12,
      message: "Based on 27 reviews",
    },
  ];
  return (
    <div className="flex flex-row flex-wrap gap-1 lg:gap-5 mb-5 ">
      {/* Company  */}
      {countData.map((item) => (
        <div
          key={item.id}
          className={`flex rounded-2xl w-full my-2 lg:my-0 flex-1 border border-[#E1E1E1] p-6`}
          style={{
            backgroundColor: item.background,
          }}
        >
          <div className="!w-full">
            <div className="flex items-center justify-between w-full">
              <p className="text-base sm:text-lg lg:text-xl  font-medium mb-1  tracking-tight w-full text-nowrap">
                {item.name}
              </p>
              <p>{item?.icon}</p>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl  font-bold capitalize tracking-wider">
              {item.count}
            </p>
            <p className="text-sm sm:text-base lg:text-lg  font-medium capitalize tracking-wider">
              {item.message}
            </p>
            {/* <div className="bg-[#FAF4FF] p-3 rounded-full">{item.icon}</div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalOverviewCards;
