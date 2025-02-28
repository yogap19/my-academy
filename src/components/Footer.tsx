import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-600 dark:bg-sky-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">SMK Negeri XYZ</h3>
          <p className="text-sm">
            Mencetak generasi emas dengan keterampilan programmer terbaik.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-yellow-400 hover:bg-gradient-to-t from-sky-400 to-sky-600 w-fit rounded-md cursor-pointer px-2 py-1"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-400 hover:bg-gradient-to-t from-sky-400 to-sky-600 w-fit rounded-md cursor-pointer px-2 py-1"
              >
                Profil Sekolah
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-400 hover:bg-gradient-to-t from-sky-400 to-sky-600 w-fit rounded-md cursor-pointer px-2 py-1"
              >
                Jurusan
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-400 hover:bg-gradient-to-t from-sky-400 to-sky-600 w-fit rounded-md cursor-pointer px-2 py-1"
              >
                Kontak
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Informasi</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-yellow-400 hover:bg-gradient-to-t from-sky-400 to-sky-600 w-fit rounded-md cursor-pointer px-2 py-1"
              >
                PPDB 2025
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-400 hover:bg-gradient-to-t from-sky-400 to-sky-600 w-fit rounded-md cursor-pointer px-2 py-1"
              >
                Prestasi
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-400 hover:bg-gradient-to-t from-sky-400 to-sky-600 w-fit rounded-md cursor-pointer px-2 py-1"
              >
                Galeri
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Hubungi Kami</h3>
          <p className="text-sm hover:text-yellow-400 hover:bg-gradient-to-t from-sky-400 to-sky-600 w-fit rounded-md cursor-pointer px-2 py-1">
            Jl. Pendidikan No. 45, Bandung
          </p>
          <p className="text-sm hover:text-yellow-400 hover:bg-gradient-to-t from-sky-400 to-sky-600 w-fit rounded-md cursor-pointer px-2 py-1">
            Email: info@smknxyz.sch.id
          </p>
          <p className="text-sm hover:text-yellow-400 hover:bg-gradient-to-t from-sky-400 to-sky-600 w-fit rounded-md cursor-pointer px-2 py-1">
            Telepon: (021) 1234-5678
          </p>
        </div>
      </div>
      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        © 2025 SMK Angkasa Husein Sastranegara - All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
