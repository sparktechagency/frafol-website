// components/EventCalendar.tsx
"use client";

import {
  addMonths,
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const upcomingEventDates = [new Date(2025, 4, 6), new Date(2025, 4, 24)]; // May 6 and 24, 2025

const ProfessionalOverviewCalender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 4, 1)); // May 2025

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(addMonths(currentMonth, -1));

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-4">
      <button onClick={prevMonth}>
        <ChevronLeft className="text-gray-600" />
      </button>
      <div className="text-center font-semibold text-gray-700">
        {format(currentMonth, "MMMM yyyy")}
      </div>
      <button onClick={nextMonth}>
        <ChevronRight className="text-gray-600" />
      </button>
    </div>
  );

  const renderDays = () => {
    const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    return (
      <div className="grid grid-cols-7 text-center text-sm font-semibold text-red-800 mb-2">
        {days.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;

        const isEvent = upcomingEventDates.some((d) => isSameDay(d, cloneDay));

        days.push(
          <div
            key={day.toString()}
            className={`text-sm h-10 w-10 flex items-center justify-center mx-auto rounded-full
              ${!isSameMonth(day, monthStart) ? "text-gray-400" : ""}
              ${isEvent ? "bg-red-700 text-white font-semibold" : ""}
            `}
          >
            {formattedDate}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 mb-1" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  return (
    <div className=" bg-white rounded-lg  p-4">
      <h2 className="text-center text-red-800 font-semibold mb-2 text-base sm:text-lg lg:text-xl xl:text-2xl ">
        Upcoming Events
      </h2>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default ProfessionalOverviewCalender;
