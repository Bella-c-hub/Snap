"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-16">
      
      {/* HERO SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          Work Better, Together — From Anywhere
        </h1>

        <p className="text-lg text-gray-600 leading-8">
          Our platform is built for modern teams who don’t work in the same room,
          the same city, or even the same time zone — but still want to stay perfectly
          aligned.
        </p>
      </div>

      {/* MISSION SECTION */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10 mb-10">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-7">
          We believe productivity should not depend on location. Whether you're
          working from home, traveling, or collaborating across continents,
          your team should always feel connected, organized, and in control.
        </p>
      </div>

      {/* FEATURES SECTION */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-10">
        
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Real-Time Collaboration</h3>
          <p className="text-gray-600">
            Work together instantly with shared tasks, updates, and live syncing.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Task Organization</h3>
          <p className="text-gray-600">
            Keep projects structured with boards, lists, and smart prioritization.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Remote-Friendly</h3>
          <p className="text-gray-600">
            Designed for distributed teams working across different time zones.
          </p>
        </div>

      </div>

      {/* VISION SECTION */}
      <div className="max-w-4xl mx-auto text-center bg-black text-white rounded-2xl p-10">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p className="text-gray-300 leading-7">
          To create a world where distance is no longer a barrier to productivity,
          creativity, or teamwork.
        </p>
      </div>

    </div>
  );
}

