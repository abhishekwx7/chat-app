import React from "react";
import { Routes, Route } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthStore } from "./store/useAuthStore";

const App = () => {
  const { authUser, isLoggedIn, login } = useAuthStore();

  console.log("auth user: ", authUser);
  console.log("isLoggedIn: ", isLoggedIn);

  return (
    <div className="relative z-0 min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* PREMIUM BLACK / WHITE BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:22px_22px]" />

        {/* TOP LEFT GLOW */}
        <div className="absolute -top-28 -left-28 h-[420px] w-[420px] rounded-full bg-white/10 blur-[120px]" />

        {/* BOTTOM RIGHT GLOW */}
        <div className="absolute -bottom-28 -right-28 h-[420px] w-[420px] rounded-full bg-white/10 blur-[120px]" />

        {/* CENTER LIGHT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_55%)]" />
      </div>

      <button onClick={login}>Log In</button>

      {/* PAGE CONTENT */}
      <main className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <Routes>
          <Route path="/" element={<ChatPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
