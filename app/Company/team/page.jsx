 "use client";

 import React, { useState } from "react";
import Link from "next/link";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },

    {
      name: "Sarah Smith",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },

    {
      name: "Michael Lee",
      role: "Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-center mb-10">
        Our Team
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            {/* Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
            />

            {/* Name */}
            <h2 className="text-2xl font-semibold">
              {member.name}
            </h2>

            {/* Role */}
            <p className="text-gray-500 mt-2">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}