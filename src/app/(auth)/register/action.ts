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

export async function registerUser(form: RegisterForm) {
  try {
    const hashedPassword = await bcrypt.hash(form.password, 10);

    await prisma.user.create({
      data: {
        name: form.name,
        email: form.email,
        password: hashedPassword,
        kelas: form.kelas,
        tingkat: form.tingkat,
      },
    });

    return { success: true };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { success: false, message: error.message };
    } else {
      return { success: false, message: "Terjadi kesalahan yang tidak diketahui." };
    }
  }
}
