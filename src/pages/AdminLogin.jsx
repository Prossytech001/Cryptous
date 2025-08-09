import React, { useMemo, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../components/AdminContext.jsx";

const AdminLogin = () => {
  const [email, setEmail] = useState("");          // or default "admin"
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAdmin();
  const api = import.meta.env.VITE_API_URL;

  const timestamp = useMemo(() => new Date().toLocaleString(), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(`${api}/api/admin/login`, { email, password });
      const { token, admin } = res.data;
      login(token);
      console.log("Logged in as:", admin?.username || email);
      navigate("/admin/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="email-lead min-h-screen w-full bg-[#eaf3fb] relative overflow-hidden flex items-center justify-center p-4">
      {/* subtle blue polygons background */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-20 -left-24 h-72 w-72 rotate-12 rounded-3xl bg-[#cfe4f8]" />
        <div className="absolute top-16 right-[-40px] h-64 w-64 -rotate-6 rounded-3xl bg-[#d9ecff]" />
        <div className="absolute bottom-[-60px] left-24 h-80 w-80 rotate-3 rounded-3xl bg-[#d1e7ff]" />
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="email-lead rounded-3xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
          {/* Brand header */}
          <div className="flex items-center gap-3 px-7 pt-7">
            {/* logo (simple DA-style mark) */}
            <svg viewBox="0 0 48 48" className="h-10 w-10 text-[#39a0ff]">
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0%" stopColor="#39a0ff" />
                  <stop offset="100%" stopColor="#67b8ff" />
                </linearGradient>
              </defs>
              <path fill="url(#g)" d="M10 24L24 10l6 6-14 14-6-6zM28 14l6 6-14 14-6-6 14-14z" />
            </svg>
            <div className="leading-tight">
              <h1 className="text-xl font-semibold text-gray-800">DirectAdmin</h1>
              <p className="text-xs text-gray-500 -mt-0.5">web control panel</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-7 pb-6 pt-5">
            {error && (
              <div className="mb-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600 border border-red-200">
                {error}
              </div>
            )}

            {/* Username */}
            <label className="mb-3 block">
              <span className="mb-1 block text-sm text-gray-700">Username</span>
              <div className="flex email-lead items-center rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 focus-within:border-[#39a0ff]">
                <svg className="mr-2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0" />
                </svg>
                <input
                  type="text"
                  placeholder="admin"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                  required
                />
              </div>
            </label>

            {/* Password */}
            <label className="mb-4 block">
              <span className="mb-1 block text-sm text-gray-700">Password</span>
              <div className="flex email-lead items-center rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 focus-within:border-[#39a0ff]">
                <svg className="mr-2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V9a4.5 4.5 0 10-9 0v1.5M6.75 10.5h10.5A1.5 1.5 0 0118.75 12v6a1.5 1.5 0 01-1.5 1.5H6.75A1.5 1.5 0 015.25 18v-6a1.5 1.5 0 011.5-1.5z" />
                </svg>
                <input
                  type={showPwd ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  className="ml-2 rounded-md p-1 text-gray-500 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#39a0ff]"
                  aria-label={showPwd ? "Hide password" : "Show password"}
                >
                  {showPwd ? (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.58 10.58a3 3 0 104.24 4.24M16.68 16.68C14.98 17.78 13.08 18.4 12 18.4 7.03 18.4 3 12 3 12s1.45-2.22 3.68-3.96M9.88 6.62C10.56 6.5 11.27 6.4 12 6.4 16.97 6.4 21 12 21 12s-.71 1.1-1.9 2.3" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-6 9.75-6 9.75 6 9.75 6-3.75 6-9.75 6-9.75-6-9.75-6z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </label>

            {/* Sign in button */}
            <button
              type="submit"
              className=" email-lead mt-1 w-full rounded-xl bg-[#48a8ff] py-2.5 text-white font-medium shadow-sm hover:bg-[#379dff] focus:outline-none focus:ring-2 focus:ring-[#39a0ff]"
            >
              Sign in
            </button>

            {/* Footer row */}
            <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <span>Language:</span>
                <select className="rounded-md border border-gray-200 bg-white px-2 py-1 text-gray-600 focus:outline-none">
                  <option>English</option>
                  <option>Français</option>
                  <option>Español</option>
                </select>
              </div>
              <span className="tabular-nums">{timestamp}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
