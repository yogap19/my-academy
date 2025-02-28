"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  // Menu dan linknya
  const menu = [
    { name: "Home", link: "/" },
    { name: "Profil Sekolah", link: "/profil" },
    { name: "Jurusan", link: "/jurusan" },
    { name: "Kontak", link: "/kontak" },
  ];

  // Load theme saat pertama kali render (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      }
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <nav className="navbar flex justify-between items-center px-4 py-2 bg-sky-600 transition duration-500">
      <div className="flex items-center gap-4">
        <Image src={assets.logo} alt="Logo" className="w-16 rounded-full" />
        <div>
          <h2 className="text-white">Sekolah Menengah Kejuruan</h2>
          <h2 className="text-white">Angkasa Hussein Sastranegara Bandung</h2>
        </div>
      </div>
      <ul className="flex justify-between items-center gap-8">
        {menu.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 bg-sky-600 rounded-md text-white transition-all duration-500 ease-in-out hover:bg-gradient-to-t hover:from-sky-400 hover:to-sky-600"
          >
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
        <li>
          <button
            onClick={toggleDarkMode}
            className="p-1 text-black dark:text-white transition duration-500"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </li>
        <li className="flex gap-2">
          <Link
            href="/login"
            className="p-1 rounded-md text-white transition-all duration-500 ease-in-out hover:bg-gradient-to-t hover:from-sky-400 hover:to-sky-600"
          >
            <button>Sign in</button>
          </Link>
          <Link
            href="/register"
            className="p-1 rounded-md text-white transition-all duration-500 ease-in-out hover:bg-gradient-to-t hover:from-sky-400 hover:to-sky-600"
          >
            <button>Sign up</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
