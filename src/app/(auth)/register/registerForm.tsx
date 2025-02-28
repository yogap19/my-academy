"use client";

import { useState } from "react";
import Swal from "sweetalert2"; // Pastikan install: npm install sweetalert2
import { registerUser } from "./action";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    kelas: "",
    tingkat: "",
  });

  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Validasi tambahan
    if (form.password.length < 6) {
      setMessage("Password minimal 6 karakter.");
      return;
    }

    if (!form.kelas.trim()) {
      setMessage("Kelas harus diisi.");
      return;
    }

    if (!form.tingkat.trim()) {
      setMessage("Tingkat harus diisi.");
      return;
    }

    const result = await registerUser(form);
    if (result.success) {
      Swal.fire({
        icon: "success",
        title: "Registrasi Berhasil!",
        text: "Silakan login untuk melanjutkan.",
      });
      // Reset form
      setForm({
        name: "",
        email: "",
        password: "",
        kelas: "",
        tingkat: "",
      });
    } else {
      setMessage(result.message || "Gagal melakukan registrasi.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 border rounded shadow-md w-full max-w-md"
    >
      <input
        type="text"
        placeholder="Nama"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Kelas"
        value={form.kelas}
        onChange={(e) => setForm({ ...form, kelas: e.target.value })}
        className="p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Tingkat"
        value={form.tingkat}
        onChange={(e) => setForm({ ...form, tingkat: e.target.value })}
        className="p-2 border border-gray-300 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Register
      </button>
      {message && <p className="text-red-500">{message}</p>}
    </form>
  );
}
