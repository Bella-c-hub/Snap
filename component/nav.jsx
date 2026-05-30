"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
      const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
<div className=" bg-[#fafafa] p-6">
  
      <nav className="flex items-center justify-between">



       <Link href="/">
          <h1 className="text-4xl font-bold">snap</h1>
        </Link>

      <div className="hidden md:flex items-center gap-8 flex-1 ml-10">

          <ul className="flex items-center gap-8 text-gray-500">

            <li className="relative">

              <button
                onClick={() => setFeaturesOpen(!featuresOpen)}
                className="hover:text-black"
              >
                Features ▼
              </button>

              {featuresOpen && (
                <ul className="absolute top-10 left-0 bg-white shadow-xl rounded-2xl p-4 w-48 flex flex-col gap-4 z-50">

                  <li>
                    <Link
                      href="/features/todo"
                      className="flex items-center gap-2 hover:text-black"
                    >
                      <img src="/to.jpg" alt="" className="w-4 h-4" />
                      <span>Todo List</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/features/cal"
                      className="flex items-center gap-2 hover:text-black"
                    >
                      <img src="/Cal.jpg" alt="" className="w-4 h-4" />
                      <span>Calendar</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/features/rem"
                      className="flex items-center gap-2 hover:text-black"
                    >
                      <img src="/rem.jpg" alt="" className="w-4 h-4" />
                      <span>Reminders</span>
                    </Link>
                  </li>

          
                  <li>
                    <Link href="/features/plan" className="flex items-center gap-2 hover:text-black">
                      <img src="/plan.jpg" alt="" className="w-4 h-4" />
                      <span>Planning</span>
                    </Link>
                  </li>

                </ul>
              )}
            </li>

            <li className="relative">

              <button
                onClick={() => setCompanyOpen(!companyOpen)}
                className="hover:text-black"
              >
                Company ▼
              </button>

              {companyOpen && (
                <ul className="absolute top-10 left-0 bg-white shadow-xl rounded-2xl p-4 w-40 flex flex-col gap-4 z-50">
                  <li className="hover:text-black cursor-pointer">
                    <Link href="/Company/History">
                    History
                    </Link>
                  </li>

                  <li className="hover:text-black cursor-pointer">
                    <Link href="/Company/team">
                      Our Team
                    </Link>
                  </li>

                  <li className="hover:text-black cursor-pointer">
                    <Link href="/Company/blog">
                    Blog
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="hover:text-black cursor-pointer">
              <Link href="/careers">
              Careers
              </Link>
            </li>

            <li className="hover:text-black cursor-pointer">
              <Link href="/about">
              About
              </Link>
            </li>

          </ul>

         <div className="flex gap-5 ml-auto">

          <Link href="/login" className="text-gray-500 hover:text-black">
                <button className="text-gray-500">
                  Login
                </button>
              </Link>

        <Link href="/register">
        <button className="border border-black px-5 py-2 rounded-xl hover:bg-black hover:text-white transition">
           Register
        </button>
        </Link>

      </div>

        </div>
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>

      </nav>
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">

          <div className="fixed right-0 top-0 h-screen w-[70%] bg-white p-8">

            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-3xl"
              >
                ✕
              </button>
            </div>

            <ul className="flex flex-col gap-6 mt-10 text-lg text-gray-500">
              <li>

                <button
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                  className="hover:text-black"
                >
                  Features ▼
                </button>

                {featuresOpen && (
                  <ul className="ml-4 mt-4 flex flex-col gap-4 text-base">

                    <li>
                      <Link href="/features/todo" className="flex items-center gap-2 hover:text-black"
                      >
                        <img src="/to.jpg" alt="" className="w-4 h-4" />
                        <span>Todo List</span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/features/cal"
                        className="flex items-center gap-2 hover:text-black"
                      >
                        <img src="/Cal.jpg" alt="" className="w-4 h-4" />
                        <span>Calendar</span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/features/rem" className="flex items-center gap-2 hover:text-black">
                        <img src="/rem.jpg" alt="" className="w-4 h-4" />
                        <span>Reminders</span>
                      </Link>
                    </li>

                    <li>
                      <Link href="/features/plan" className="flex items-center gap-2 hover:text-black">
                        <img src="/plan.jpg" alt="" className="w-4 h-4" />
                        <span>Planning</span>
                      </Link>
                    </li>

                  </ul>
                )}
              </li>

              <li>

                <button
                  onClick={() => setCompanyOpen(!companyOpen)}
                  className="hover:text-black"
                >
                  Company ▼
                </button>

                {companyOpen && (
                  <ul className="ml-4 mt-4 flex flex-col gap-4 text-base">

                     <li className="hover:text-black cursor-pointer">
                    <Link href="/Company/History">
                    History
                    </Link>
                  </li>

                      <li className="hover:text-black cursor-pointer">
                    <Link href="/Company/Team">
                      Our Team
                    </Link>
                  </li>

                     <li className="hover:text-black cursor-pointer">
                    <Link href="/Company/Blog">
                    Blog
                    </Link>
                  </li>

                  </ul>
                )}
              </li>

              <li>
                <Link href="/careers">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/about">
                  About
                </Link>
              </li>

            </ul>

            <div className="flex flex-col gap-4 mt-10">

             <Link href="/login">
                <button className="text-gray-500">
                  Login
                </button>
              </Link>

              <Link href="/register">
                <button className="border border-black py-3 rounded-xl">
                  Register
                </button>
              </Link>

            </div>

          </div>
        </div>
      )}
      </div>
    )
    }
