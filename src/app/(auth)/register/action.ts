"use server"; // Penting agar ini berjalan di server!

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  kelas: string;
  tingkat: string;
}

interface RegisterResult {
  success: boolean;
  message?: string;
}

export async function registerUser(form: RegisterForm): Promise<RegisterResult> {
  try {
    // Cek apakah email sudah terdaftar
    const existingUser = await prisma.user.findUnique({
      where: { email: form.email },
    });

    if (existingUser) {
      return {
        success: false,
        message: "Email sudah terdaftar. Silakan gunakan email lain.",
      };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(form.password, 10);

    // Buat user baru
    await prisma.user.create({
      data: {
        name: form.name,
        email: form.email,
        password: hashedPassword,
        kelas: form.kelas,
        tingkat: form.tingkat,
      },
    });

    return {
      success: true,
    };
  } catch (error) {
    // Handle error Prisma atau lainnya
    if (error instanceof Error) {
      console.error("Error saat registrasi:", error.message);
      return {
        success: false,
        message: "Terjadi kesalahan internal. Silakan coba lagi nanti.",
      };
    }

    return {
      success: false,
      message: "Terjadi kesalahan yang tidak diketahui.",
    };
  }
}

export async function checkEmailExists(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  return Boolean(user);
}
