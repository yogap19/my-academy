"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser, checkEmailExists } from "./action";
import { CircleCheck, CircleX, Loader2 } from "lucide-react";
import type { FormState } from "./types";

const initialForm: FormState = {
  name: "",
  email: "",
  password: "",
  kelas: "",
  tingkat: "",
};

let debounceTimer: NodeJS.Timeout;

export default function RegisterForm() {
  const router = useRouter();

  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailChecking, setEmailChecking] = useState(false);

  useEffect(() => {
    clearTimeout(debounceTimer);

    if (!form.email) {
      setErrors((prev) => ({ ...prev, email: "Email wajib diisi" }));
      return;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      setErrors((prev) => ({ ...prev, email: "Format email tidak valid" }));
      return;
    }

    setEmailChecking(true);
    debounceTimer = setTimeout(async () => {
      const exists = await checkEmailExists(form.email);
      if (exists) {
        setErrors((prev) => ({ ...prev, email: "Email sudah terdaftar" }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
      setEmailChecking(false);
    }, 500);
  }, [form.email]);

  useEffect(() => {
    if (!form.password) {
      setErrors((prev) => ({ ...prev, password: "Password wajib diisi" }));
    } else if (form.password.length < 6) {
      setErrors((prev) => ({ ...prev, password: "Minimal 6 karakter" }));
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  }, [form.password]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ email: true, password: true });

    if (errors.email || errors.password) {
      toast.error("Periksa kembali form yang diisi.");
      return;
    }

    if (!form.kelas || !form.tingkat) {
      toast.error("Kelas dan Tingkat wajib diisi!");
      return;
    }

    setIsSubmitting(true);
    const result = await registerUser(form);
    setIsSubmitting(false);

    if (result.success) {
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Akun berhasil dibuat. Silakan login.",
      }).then(() => {
        router.push("/login");
      });
    } else {
      toast.error(result.message || "Terjadi kesalahan saat registrasi.");
    }
  }

  function getInputClass(name: keyof typeof errors) {
    if (!touched[name]) return "border-gray-300 focus:ring-blue-500";
    return errors[name]
      ? "border-red-500 focus:ring-red-500"
      : "border-green-500 focus:ring-green-500";
  }

  function renderIcon(name: keyof typeof errors) {
    if (name === "email" && emailChecking) {
      return (
        <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5 animate-spin" />
      );
    }
    if (!touched[name]) return null;
    return errors[name] ? (
      <CircleX className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 w-5 h-5" />
    ) : (
      <CircleCheck className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 space-y-5 w-full max-w-lg mt-5 text-black"
      >
        <ToastContainer position="top-right" autoClose={3000} />

        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Form Registrasi
        </h2>

        {/* Nama */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nama
          </label>
          <input
            type="text"
            placeholder="Nama lengkap"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>

        {/* Email */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Alamat email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            onBlur={() => setTouched({ ...touched, email: true })}
            className={`w-full mt-1 p-3 pr-10 rounded-md focus:outline-none text-black ${getInputClass(
              "email"
            )}`}
            required
          />
          {renderIcon("email")}
          {touched.email && errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Kata sandi"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            onBlur={() => setTouched({ ...touched, password: true })}
            className={`w-full mt-1 p-3 pr-10 rounded-md focus:outline-none text-black ${getInputClass(
              "password"
            )}`}
            required
          />
          {renderIcon("password")}
          {touched.password && errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>

        {/* Kelas */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Kelas
          </label>
          <select
            value={form.kelas}
            onChange={(e) => setForm({ ...form, kelas: e.target.value })}
            className="w-full mt-1 p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Pilih Kelas</option>
            <option value="RPL 1">RPL 1</option>
            <option value="RPL 2">RPL 2</option>
          </select>
        </div>

        {/* Tingkat */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tingkat
          </label>
          <select
            value={form.tingkat}
            onChange={(e) => setForm({ ...form, tingkat: e.target.value })}
            className="w-full mt-1 p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Pilih Tingkat</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-md text-white font-medium flex items-center justify-center gap-2 bg-black hover:bg-slate-700 transition disabled:bg-gray-400"
          disabled={isSubmitting}
        >
          {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" />}
          {isSubmitting ? "Memproses..." : "Daftar"}
        </button>
      </form>
    </div>
  );
}
