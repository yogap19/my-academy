"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  ClipboardList,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

const menuItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Data Student", href: "/dashboard/student", icon: Users },
  { label: "Data Teacher", href: "/dashboard/teacher", icon: Users },
  { label: "Schedule", href: "/dashboard/schedule", icon: CalendarDays },
  { label: "Task", href: "/dashboard/task", icon: ClipboardList },
  { label: "Setting", href: "/dashboard/setting", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsOpen(window.innerWidth >= 768); // Desktop auto open, Mobile auto close
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleSidebar() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="relative">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full bg-sky-600 text-white z-40 transition-all duration-300 ease-in-out flex flex-col",
          isMobile
            ? isOpen
              ? "w-60 translate-x-0"
              : "-translate-x-full"
            : isOpen
            ? "w-60"
            : "w-16"
        )}
      >
        {/* Header Sidebar */}
        <div className="p-3 flex items-center justify-between">
          {/* Logo atau Nama Aplikasi */}
          <div
            className={cn(
              "text-xl font-bold transition-all",
              !isOpen && "opacity-0 w-0 overflow-hidden"
            )}
          >
            My Dashboard
          </div>

          {/* Tombol toggle (X/Menu) */}
          <button
            onClick={toggleSidebar}
            className="p-2 bg-white text-sky-600 rounded-full shadow-md"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Links */}
        <nav className="flex-1 space-y-2 mt-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg transition hover:bg-sky-700",
                  pathname === item.href && "bg-sky-800"
                )}
              >
                <Icon size={24} />
                {!isMobile && isOpen && <span>{item.label}</span>}
                {isMobile && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Backdrop khusus mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content Area */}
      <div
        className={cn(
          "transition-all duration-300 ease-in-out",
          !isMobile && isOpen ? "ml-60" : "ml-16"
        )}
      >
        {/* blank agar content menyesuaikan */}
      </div>
    </div>
  );
}
