import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Salvatore — React + Firebase Developer",
  description:
    "I build fast, secure web apps with React on a Firebase backend—Auth, Firestore, Security Rules, and Cloud Functions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={`${inter.className} min-h-screen antialiased text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
