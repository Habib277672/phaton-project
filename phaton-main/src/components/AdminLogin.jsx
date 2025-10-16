import React, { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin Login:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden px-4">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        <div className="flex flex-col items-center justify-center bg-blue-50 w-full md:w-1/2 p-6 md:p-8 flex-shrink-0">
          <img
            src="/signup.png"
            alt="Admin Illustration"
            className="w-3/4 max-w-xs mb-4 md:mb-6"
          />
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 text-center">
            Welcome, Admin!
          </h2>
          <p className="text-gray-500 text-center mt-1 md:mt-2 px-4">
            Log in to manage your dashboard and settings.
          </p>
        </div>

        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center flex-shrink-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-blue-700">Admin Login</h1>
            <button className="text-blue-700 cursor-pointer font-medium border border-blue-700 px-3 py-1 rounded hover:bg-blue-50 transition">
              Sign In
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
            >
              Log In
            </button>
          </form>

          <p className="text-center text-gray-500 mt-4">Or login with</p>
          <div className="flex justify-center gap-4 mt-3">
            <button className="p-2 cursor-pointer rounded-full border border-gray-300 hover:bg-gray-100 transition">
              <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
            </button>
            <button className="p-2 cursor-pointer rounded-full border border-gray-300 hover:bg-gray-100 transition">
              <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            </button>
            <button className="p-2 cursor-pointer rounded-full border border-gray-300 hover:bg-gray-100 transition">
              <img src="/google.png" alt="Google" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
