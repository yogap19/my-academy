// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value // cek token di cookie

  // Kalau akses halaman dashboard tanpa token -> redirect ke login
  if (req.nextUrl.pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next() // lanjut ke handler page/api
}
