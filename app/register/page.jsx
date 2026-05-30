"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    localStorage.setItem("user", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    router.push("/careers");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-100">

        <h1 className="text-4xl font-bold mb-6 text-center">
          Register
        </h1>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded-xl mb-6"
        />
<input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-3 rounded-xl mb-6" />
<input type="password" placeholder="*********" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border p-3 rounded-xl mb-6" />
        <button
          onClick={handleRegister}
          className="w-full bg-black text-white py-3 rounded-xl"
        >
          Register
        </button>
      </div>
    </div>
  );
}