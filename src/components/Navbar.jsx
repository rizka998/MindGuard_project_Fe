import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  User,
  LogOut,
  FileText,
  ShieldCheck,
  Headphones,
  ChevronDown,
} from "lucide-react";

import MyCustomIcon from "../assets/icon-mindguard.png";

export default function Navbar({ setOpen }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState("hari ini");

  const navigate = useNavigate();

  const dayOptions = [
    "Hari Ini",
    "Kemarin",
    "2 Hari Lalu",
    "3 Hari Lalu",
    "4 Hari Lalu",
    "5 Hari Lalu",
    "6 Hari Lalu",
    "7 Hari Lalu",
  ];

  // =========================
  // HANDLE DROPDOWN FILTER
  // =========================

  const handleSelectDay = (dayLabel, index) => {
    setSelectedDate(dayLabel.toLowerCase());
    setShowDropdown(false);

    // Navigate dengan filter tanggal
    navigate(`/history?filter=${index}`);
  };

  // =========================
  // HANDLE HISTORY BUTTON
  // =========================

  const handleHistoryClick = () => {
    setSelectedDate("semua riwayat");
    setShowDropdown(false);

    // Navigate TANPA filter
    navigate("/history");
  };

  return (
    <nav className="bg-[#345789] flex items-center justify-between sticky top-0 z-50 h-[60px]">
      {/* LEFT SIDE */}
      <div className="bg-[#00B4E5] h-full flex items-center px-6 pr-10 rounded-r-[40px] shadow-lg">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="block md:hidden text-white text-2xl"
          >
            ≡
          </button>

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={MyCustomIcon}
              alt="Logo"
              className="w-7 h-7 brightness-200"
            />

            <h1 className="!text-[20px] font-bold text-white hidden sm:block">
              Mind Guard
            </h1>
          </div>
        </div>
      </div>

      {/* CENTER MENU */}
      <div className="hidden lg:flex items-center gap-10 text-white font-semibold text-sm">
        <button
          onClick={handleHistoryClick}
          className="flex items-center gap-2 hover:opacity-80"
        >
          <FileText size={18} />
          HISTORY
        </button>

        <button
          onClick={() => navigate("/analysis")}
          className="flex items-center gap-2 hover:opacity-80"
        >
          <ShieldCheck size={18} />
          ANALISIS
        </button>

        <button
          onClick={() => navigate("/help")}
          className="flex items-center gap-2 hover:opacity-80"
        >
          <Headphones size={18} />
          BANTUAN
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4 px-6 relative">
        {/* NOTIFICATION */}
        <button className="text-white relative">
          <div className="bg-[#345789] border border-white/30 p-2 rounded-lg">
            <Bell size={18} />

            <span className="absolute top-0 right-0 bg-white text-[#345789] text-[8px] font-bold w-3 h-3 flex items-center justify-center rounded-full">
              +
            </span>
          </div>
        </button>

        {/* DATE DROPDOWN */}
        <div className="relative">
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="bg-[#005C99] text-white px-4 py-1.5 rounded-xl flex items-center gap-2 cursor-pointer hover:bg-[#004d80] transition-all min-w-[130px] justify-between"
          >
            <span className="text-[12px] font-semibold uppercase tracking-wider">
              {selectedDate}
            </span>

            <ChevronDown
              size={16}
              className={`transition-transform ${
                showDropdown ? "rotate-180" : ""
              }`}
            />
          </div>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border z-50">
              {dayOptions.map((day, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectDay(day, index)}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50"
                >
                  {day}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* PROFILE */}
        <div className="bg-white/20 p-2 rounded-full cursor-pointer hover:bg-white/30">
          <User size={18} />
        </div>

        {/* LOGOUT */}
        <button className="flex items-center gap-2 text-white font-semibold hover:opacity-80">
          <LogOut size={18} />
          LOGOUT
        </button>
      </div>
    </nav>
  );
}