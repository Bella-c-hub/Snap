 "use client";

 import React, { useState } from "react";
import Link from "next/link";

export default function HistoryPage() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Our History
      </h1>

      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl mx-auto">
        <p className="text-lg leading-8 mb-6">
          Our company started with a simple dream — to make technology
          easier and more accessible for everyone. What began as a small
          idea quickly grew into a passionate team dedicated to creating
          amazing digital experiences.
        </p>

        <p className="text-lg leading-8 mb-6">
          Over the years, we have worked on multiple projects, helping
          businesses and individuals bring their ideas to life through
          creativity and innovation.
        </p>

        <p className="text-lg leading-8">
          Today, we continue to grow while staying true to our mission:
          building modern solutions that inspire people around the world.
        </p>
      </div>
    </div>
  );
}