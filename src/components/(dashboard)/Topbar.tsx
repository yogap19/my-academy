"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-4 border-b">
      {/* Kiri: Nama Aplikasi atau Logo */}
      <div className="text-xl font-bold text-sky-600">My Dashboard</div>

      {/* Kanan: Search Bar + Profil */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 pl-8 border rounded-md"
          />
          <Search className="absolute top-2 left-2 text-gray-500" size={18} />
        </div>

        {/* Avatar + Nama User sebagai dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center gap-2 border rounded-full px-1 cursor-pointer"
          >
            <Image
              src={assets.logo}
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover"
              width={40}
              height={40}
            />
            <span className="text-sm font-medium text-black">Yoga Pramana</span>
            <ChevronDown size={16} />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 top-12 w-40 bg-white border shadow-md rounded-md overflow-hidden z-50 text-slate-700">
              <Link
                href="/profile"
                className="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              >
                Profile
              </Link>
              <button
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-600"
                onClick={() => {
                  // Logout logic di sini, contoh: remove token
                  console.log("Logout...");
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
