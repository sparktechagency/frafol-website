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
  isBefore,
} from "date-fns";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReuseButton from "@/components/ui/Button/ReuseButton";

const upcomingEventDates = [new Date(2025, 4, 6), new Date(2025, 4, 24)]; // May 6 and 24, 2025

const MyAvailabilitySection = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [selectedDatesMessage, setSelectedDatesMessage] = useState<string>("");

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(addMonths(currentMonth, -1));

  const handleDateSelect = (date: Date) => {
    const today = new Date();
    if (isBefore(date, today)) {
      return;
    }

    setSelectedDates((prev) =>
      prev.some((d) => isSameDay(d, date))
        ? prev.filter((d) => !isSameDay(d, date))
        : [...prev, date]
    );
  };

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
        const isSelected = selectedDates.some((d) => isSameDay(d, cloneDay));
        const isPastDate = isBefore(cloneDay, new Date());

        days.push(
          <div
            key={day.toString()}
            onClick={() => !isPastDate && handleDateSelect(cloneDay)}
            className={`text-sm h-10 w-10 flex items-center justify-center mx-auto rounded-full cursor-pointer
              ${!isSameMonth(day, monthStart) ? "text-gray-400" : ""}
              ${isEvent ? "bg-red-700 text-white font-semibold" : ""}
              ${isSelected ? "bg-blue-500 text-white" : ""}
              ${isPastDate ? "text-gray-300 cursor-not-allowed" : ""}
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

  const handleUpdate = () => {
    // Format the selected dates into a readable message

    console.log(selectedDates);
    setSelectedDatesMessage(
      `You have selected the following dates: ${selectedDates}`
    );
  };

  return (
    <div className="bg-white rounded-lg p-4">
      <h2 className="text-center text-red-800 font-semibold mb-2 text-base sm:text-lg lg:text-xl xl:text-2xl ">
        My Availability
      </h2>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      <div className="mt-10">
        <ReuseButton
          htmlType="submit"
          variant="secondary"
          className="mt-2"
          onClick={handleUpdate}
        >
          Update
        </ReuseButton>
        {selectedDatesMessage && (
          <div className="mt-4 text-green-600 font-semibold">
            {selectedDatesMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAvailabilitySection;
