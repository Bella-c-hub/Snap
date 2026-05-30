"use client";

import { useState } from "react";
import Link from "next/link";

export default function Features() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);    
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);

    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">

      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Todo List
        </h1>

        <div className="flex gap-2 mb-6">

          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border w-full p-3 rounded-lg outline-none"
          />

          <button
            onClick={addTodo}
            className="bg-black text-white px-5 rounded-lg"
          >
            Add
          </button>

        </div>

        <div>
          {todos.map((todo, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-200 p-3 rounded-lg mb-3"
            >

              <p>{todo}</p>

              <button
                onClick={() => deleteTodo(index)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                Delete
              </button>

            </div>
          ))}
        </div>

      </div>

    </div>
   
  );
}