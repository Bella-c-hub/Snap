"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Planning() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);  
  
   const [task, setTask] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">

 
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-6">
      <div className="w-full max-w-xl border border-black rounded-3xl p-6 shadow-2xl">
        <h1 className="text-4xl font-bold text-center mb-2">
          Planning App
        </h1>

        <p className="text-center text-gray-400 mb-6">
          Simple black & white daily planner
        </p>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Write a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 bg-white border border-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white"
          />

          <button
            onClick={addTask}
            className="bg-white text-black px-5 py-3 rounded-xl font-semibold hover:opacity-80 transition"
          >
            Add
          </button>
        </div>

        <div className="space-y-3">
          {tasks.length === 0 ? (
            <div className="text-center text-gray-500 py-10 border border-dashed border-gray-700 rounded-2xl">
              No tasks yet
            </div>
          ) : (
            tasks.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border border-gray-700 rounded-2xl px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleTask(item.id)}
                    className="w-5 h-5"
                  />

                  <p
                    className={`text-lg ${
                      item.completed
                        ? "line-through text-gray-500"
                        : "text-white"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>

                <button
                  onClick={() => deleteTask(item.id)}
                  className="border border-white px-3 py-1 rounded-lg hover:bg-white hover:text-black transition"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
