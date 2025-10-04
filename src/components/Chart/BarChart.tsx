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
  earnings: number;
}

const data: ChartData[] = [
  { month: "Jan", earnings: 5000 },
  { month: "Feb", earnings: 6000 },
  { month: "Mar", earnings: 7000 },
  { month: "Apr", earnings: 8000 },
  { month: "May", earnings: 9000 },
  { month: "Jun", earnings: 10000 },
  { month: "Jul", earnings: 11000 },
  { month: "Aug", earnings: 12000 },
  { month: "Sep", earnings: 13000 },
  { month: "Oct", earnings: 1400 },
  { month: "Nov", earnings: 15000 },
  { month: "Dec", earnings: 16000 },
];

const Bar_Chart = () => {
  // Custom tooltip to display the information

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
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
            itemStyle={{ color: "#0a0a08" }}
            labelStyle={{ color: "#202020" }}
            formatter={(value: number): [string, string] => [
              `${value}€`,
              "Earning",
            ]}
            labelFormatter={(label: string) => `Month: ${label}`}
          />
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
            dataKey="earnings"
            fill="url(#incomeGradient)" // Bar color
            barSize={20} // Width of each bar
            radius={[10, 10, 10, 10]} // Rounded corners for bars
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
