"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa]">

      <section className="max-w-7xl mx-auto px-6 py-10 flex flex-col-reverse md:flex-row items-center gap-12">

        <div className="flex-1 text-center md:text-left">

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Make <br className="hidden md:block" />
            remote work
          </h1>

          <p className="text-gray-500 mt-6 text-lg leading-8">
            Get your team in sync, no matter your location.
            Streamline processes, create team rituals,
            and watch productivity soar.
          </p>

          <button className="bg-black text-white px-8 py-4 rounded-2xl mt-8 hover:bg-gray-800 transition">
            Learn more
          </button>

        </div>

        <div className="flex-1 flex justify-center">

          <img
            src="/image-hero-mobile.png"
            alt="Hero"
            className="w-full max-w-sm md:max-w-lg"
          />

        </div>

      </section>

      <div className="flex items-center justify-center gap-6 flex-wrap px-6 pb-10">

        <img
          src="/client-databiz.svg"
          alt=""
          className="w-20 md:w-28"
        />

        <img
          src="/client-audiophile.svg"
          alt=""
          className="w-20 md:w-28"
        />

        <img
          src="/client-meet.svg"
          alt=""
          className="w-20 md:w-28"
        />

        <img
          src="/client-maker.svg"
          alt=""
          className="w-20 md:w-28"
        />

      </div>

    </div>
  );
}