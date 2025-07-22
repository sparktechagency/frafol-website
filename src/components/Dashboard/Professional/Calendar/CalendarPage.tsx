"use client";

import { Calendar, Badge } from "antd";
import type { Dayjs } from "dayjs";

// Define the event interface
interface Event {
  type: "success" | "warning" | "error";
  content: string;
  time: string;
  more?: string;
}

// Empty events object since you don't want to show events
const events: Record<string, Event[]> = {};

const getListData = (value: Dayjs): Event[] => {
  const dateStr = value.format("YYYY-MM-DD");
  return events[dateStr] || [];
};

const dateCellRender = (value: Dayjs) => {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map((item, index) => (
        <li key={index} className="mb-1">
          <Badge
            status={item.type}
            text={
              <span className="flex justify-between">
                <span>
                  {item.time} {item.content}
                </span>
                {item.more && (
                  <span className="text-gray-500">{item.more}</span>
                )}
              </span>
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default function AppCalendar() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-10">
        Calendar
      </h1>
      <Calendar dateCellRender={dateCellRender} />
    </div>
  );
}
