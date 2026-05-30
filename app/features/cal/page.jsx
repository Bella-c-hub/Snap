"use client";

import { useState } from "react";
import Link from "next/link";

export default function CalendarPage() {
    const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false); 
  const today = new Date();

  const [currentDate, setCurrentDate] = useState(today);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const calendarDays = [];

  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(
      <div key={`empty-${i}`} className="p-4"></div>
    );
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isToday =
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    calendarDays.push(
      <div
        key={day}
        className={`p-4 rounded-xl text-center cursor-pointer transition 
        ${
          isToday
            ? "bg-black text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        {day}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">

    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-4xl">

  
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={prevMonth}
            className="bg-black text-white px-4 py-2 rounded-xl"
          >
            ←
          </button>

          <h1 className="text-3xl font-bold">
            {months[month]} {year}
          </h1>

          <button
            onClick={nextMonth}
            className="bg-black text-white px-4 py-2 rounded-xl"
          >
            →
          </button>
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-4 mb-4">
          {days.map((day) => (
            <div
              key={day}
              className="text-center font-bold text-gray-500"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-7 gap-4">
          {calendarDays}
        </div>
      </div>
    </div>
    </div>
  );
}