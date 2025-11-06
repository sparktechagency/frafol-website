/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// Define the structure of each data point in the chart
interface ChartData {
  month: string;
  totalEarnings: number;
}

const Bar_Chart = ({ data }: { data: ChartData[] }) => {
  // Custom tooltip to display the information
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const value = payload[0].payload.totalEarnings; // Access your data key
      return (
        <div
          style={{
            backgroundColor: "#fff",
            padding: "8px 12px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <p style={{ margin: 0, color: "#202020" }}>{`Month: ${label}`}</p>
          <p style={{ margin: 0, color: "#0a0a08" }}>{`Earnings: ${value}€`}</p>
        </div>
      );
    }
    return null;
  };

  // Custom tick style for X and Y axes
  const tickStyle = { fill: "#000" };

  return (
    <div className="w-full h-80">
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 0,
          }}
          barCategoryGap={30} // Adjust the gap between bars if necessary
        >
          {/* Use your custom tooltip */}
          <Tooltip content={<CustomTooltip />} />

          <XAxis dataKey="month" tick={{ ...tickStyle }} tickMargin={6} />
          <YAxis
            tick={{ ...tickStyle }}
            axisLine={{
              stroke: "#0861C500", // Y-axis line color
              strokeWidth: 2,
              strokeDasharray: "7 7",
            }}
            tickMargin={16}
          />
          {/* Add several horizontal black lines using ReferenceLine */}
          <ReferenceLine y={10} stroke="#20202055" />
          <ReferenceLine y={20} stroke="#20202055" />
          <ReferenceLine y={30} stroke="#20202055" />
          <ReferenceLine y={40} stroke="#20202055" />
          <ReferenceLine y={50} stroke="#20202055" />
          <ReferenceLine y={60} stroke="#20202055" />

          <Bar
            dataKey="totalEarnings" // Make sure this matches your data key
            fill="url(#incomeGradient)"
            barSize={20}
            radius={[10, 10, 10, 10]}
          />

          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#AD2B08" />
              <stop offset="100%" stopColor="#AD2B08" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Bar_Chart;
