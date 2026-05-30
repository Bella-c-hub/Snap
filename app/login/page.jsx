"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    localStorage.setItem("user", email);

    router.push("/careers"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-10 rounded-2xl shadow-xl w-95">
        
        <h1 className="text-4xl font-bold mb-6 text-center">
          Login
        </h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-xl mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-xl mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4 text-gray-500">
          Don’t have an account?{" "}
          <span
            className="text-black cursor-pointer underline"
            onClick={() => router.push("/register")}
          >
            Register
          </span>
        </p>

      </div>
    </div>
  );
}