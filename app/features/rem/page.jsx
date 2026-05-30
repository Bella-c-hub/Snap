"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ReminderPage() {
  const [reminder, setReminder] = useState("");
  const [date, setDate] = useState("");
  const [reminders, setReminders] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false); 
  const addReminder = () => {
    if (reminder.trim() === "" || date === "") return;

    const newReminder = {
      text: reminder,
      date: date,
    };

    setReminders([...reminders, newReminder]);

    setReminder("");
    setDate("");
  };

  const deleteReminder = (index) => {
    const updatedReminders = reminders.filter(
      (_, i) => i !== index
    );

    setReminders(updatedReminders);
  };

    return (
    <div className="min-h-screen bg-[#fafafa]">

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          Reminder App
        </h1>

   
        <div className="flex flex-col md:flex-row gap-4 mb-8">

          <input
            type="text"
            placeholder="Enter reminder..."
            value={reminder}
            onChange={(e) => setReminder(e.target.value)}
            className="border p-4 rounded-xl w-full outline-none"
          />

          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-4 rounded-xl outline-none"
          />

          <button
            onClick={addReminder}
            className="bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition"
          >
            Add
          </button>

        </div>

        <div className="flex flex-col gap-4">

          {reminders.length === 0 ? (
            <p className="text-center text-gray-500">
              No reminders yet.
            </p>
          ) : (
            reminders.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >

                <div>
                  <h2 className="font-semibold text-lg">
                    {item.text}
                  </h2>

                  <p className="text-gray-500 text-sm">
                    {new Date(item.date).toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => deleteReminder(index)}
                  className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition"
                >
                  Delete
                </button>

              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
}
