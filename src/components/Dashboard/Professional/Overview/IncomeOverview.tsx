import Bar_Chart from "@/components/Chart/BarChart";
import YearOption from "@/utils/YearOption";
import { useState } from "react";

const IncomeOverview = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  console.log(year);

  return (
    <div className="w-full p-3 rounded-lg flex flex-col bg-primary-color">
      <div className="flex justify-between text-base-color mt-4">
        <p className=" text-base-color text-lg sm:text-xl lg:text-2xl font-bold mb-5">
          Earning
        </p>
        <div>
          <YearOption currentYear={currentYear} setThisYear={setYear} />
        </div>
      </div>
      <hr />
      <div>
        <Bar_Chart />
      </div>
    </div>
  );
};

export default IncomeOverview;
