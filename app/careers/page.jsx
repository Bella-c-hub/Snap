
"use client";

import { useRouter } from "next/navigation";

export default function CareersPage() {
  const router = useRouter();

  const careers = [
    {
      title: "Frontend Developer",
      description: "Build beautiful and interactive websites.",
    },
    {
      title: "UI/UX Designer",
      description: "Design amazing user experiences.",
    },
    {
      title: "Backend Developer",
      description: "Work with servers and databases.",
    },
    {
      title: "Mobile App Developer",
      description: "Create Android and iOS applications.",
    },
  ];

  const handleCareerClick = (career) => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/register");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-center mb-10">
        Careers
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {careers.map((career, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition"
          >
            <h2 className="text-3xl font-bold mb-4">
              {career.title}
            </h2>

            <p className="text-gray-600 mb-6">
              {career.description}
            </p>

            <button
              onClick={() => handleCareerClick(career.title)}
              className="bg-black text-white px-6 py-3 rounded-xl"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


