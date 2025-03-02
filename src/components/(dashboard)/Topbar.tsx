import { assets } from "@/assets/assets";
import Image from "next/image";
import { Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-4 border-b">
      {/* Kiri: Nama Aplikasi atau Logo */}
      <div className="text-xl font-bold text-sky-600">My Dashboard</div>

      {/* Tengah: Nama Halaman Aktif (Opsional, bisa auto dari router path) */}
      {/* <div className="text-lg font-medium text-gray-700">Dashboard</div> */}

      {/* Kanan: Profil dan Aksi */}
      <div className="flex items-center gap-4">
        {/* Search Bar (opsional, bisa tambahin icon search) */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 pl-8 border rounded-md"
          />
          <Search className="absolute top-2 left-2 text-gray-500" size={18} />
        </div>

        {/* Avatar + Nama User */}
        <div className="flex items-center gap-2 border rounded-full px-1">
          <Image
            src={assets.logo}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
            width={40}
            height={40}
          />
          <span className="text-sm font-medium text-black">Yoga Pramana</span>
        </div>

        {/* Tombol Logout / Setting */}
        <button className="p-2 bg-sky-600 text-white rounded-md text-sm">
          Logout
        </button>
      </div>
    </header>
  );
}
