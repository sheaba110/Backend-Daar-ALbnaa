import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = { title: "دار البناء المصرية | Dar Al-Benaa Egypt", description: "شركة دار البناء المصرية للمقاولات والمباني التعليمية." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ar" dir="rtl"><body><Navbar />{children}<Footer /></body></html>; }
