"use client"; // everything is client-side

import "./globals.css";
import { Inter } from "next/font/google";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-[var(--color-bg)] text-[var(--color-text)] flex flex-col min-h-screen`}
      >
        {/* Navbar with dynamic height */}
        <Navbar setNavbarHeight={setNavbarHeight} />

        {/* Main content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
