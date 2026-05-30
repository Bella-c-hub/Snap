 "use client";

 import React, { useState } from "react";
import Link from "next/link";

export default function BlogPage() {
  const blogs = [
    {
      title: "How Technology is Changing the World",
      description:
        "Technology continues to transform the way we live and work every day.",
    },
    {
      title: "Why Learning React is Important",
      description:
        "React makes building modern and interactive websites easier and faster.",
    },
    {
      title: "Tips for Beginner Developers",
      description:
        "Consistency, practice, and curiosity are key to becoming a better developer.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-center mb-10">
        Blog
      </h1>

      <div className="space-y-8 max-w-4xl mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6"
          >
            <h2 className="text-3xl font-semibold mb-4">
              {blog.title}
            </h2>

            <p className="text-gray-600 text-lg">
              {blog.description}
            </p>

            <button className="mt-4 bg-black text-white px-5 py-2 rounded-lg">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}