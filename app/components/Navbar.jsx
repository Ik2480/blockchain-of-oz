"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Wallet, Menu, X } from "lucide-react";

export default function Navbar({ setNavbarHeight }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    if (navRef.current && typeof setNavbarHeight === "function") {
      setNavbarHeight(navRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (navRef.current && typeof setNavbarHeight === "function") {
        setNavbarHeight(navRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setNavbarHeight]);

  const mainLinks = [
    { name: "Token", href: "/token" },
    { name: "Programs", href: "/programs" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  const subLinks = [
    { name: "White Paper", href: "/whitepaper" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b border-cyan-500/20 bg-[var(--color-bg)]"
    >
      {/* MAIN NAVBAR */}
      <div className="container mx-auto flex items-center justify-between px-6 md:py-2.5">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold text-cyan-400 drop-shadow-[0_0_6px_#00FFFF]"
        >
          BLOCKCHAIN OF OZ
        </Link>

        {/* Desktop Links + Wallet */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-[#E6E6E6] hover:text-cyan-400 hover:drop-shadow-[0_0_6px_#00FFFF] transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-400 text-cyan-400 hover:bg-cyan-500/20 hover:drop-shadow-[0_0_6px_#00FFFF] transition text-sm">
            <Wallet className="w-4 h-4" />
            Connect Wallet
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-1.5 text-cyan-400 hover:bg-cyan-500/20 rounded-lg hover:drop-shadow-[0_0_6px_#00FFFF] transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* SUB NAVBAR */}
      <div className="border-t border-cyan-500/10 bg-[#0D1117]">
        <div className="container mx-auto flex justify-center px-6 py-1.5">
          <nav className="flex gap-4">
            {subLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-gray-400 hover:text-cyan-400 hover:drop-shadow-[0_0_6px_#00FFFF] transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="md:hidden border-t border-cyan-500/20 bg-[var(--color-bg)]">
          <nav className="flex flex-col items-center gap-3 py-3">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base text-[#E6E6E6] hover:text-cyan-400 hover:drop-shadow-[0_0_6px_#00FFFF] transition"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="border-t border-cyan-500/10 w-full pt-3 flex flex-col items-center gap-1">
              {subLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button className="flex items-center gap-2 px-3 py-1.5 mt-3 rounded-lg bg-cyan-500/10 border border-cyan-400 text-cyan-400 hover:bg-cyan-500/20 hover:drop-shadow-[0_0_6px_#00FFFF] transition text-sm">
              <Wallet className="w-4 h-4" />
              Connect Wallet
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
