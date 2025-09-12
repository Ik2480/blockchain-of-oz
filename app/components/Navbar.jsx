"use client";

import Link from "next/link";
import { useState } from "react";
import { Wallet, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

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

  const socialIcons = [
    { name: "X", href: "#", src: "/icons/x.svg" },
    { name: "Discord", href: "#", src: "/icons/discord.svg" },
    { name: "Telegram", href: "#", src: "/icons/telegram.svg" },
    { name: "YouTube", href: "#", src: "/icons/youtube.svg" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-[var(--color-bg)]">
      {/* MAIN NAVBAR */}
      <div className="container mx-auto flex items-center justify-between px-6  md:py-2.5">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold text-cyan-400 drop-shadow-[0_0_6px_#00FFFF]"
        >
          BLOCKCHAIN OF OZ
        </Link>

        {/* Desktop Main Links + Wallet */}
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
        <div className="container mx-auto flex justify-between px-6 py-1.5">
          {/* Social Icons (left-aligned) */}
          <div className="flex items-center gap-2">
            {socialIcons.map((icon) => (
              <Link
                key={icon.name}
                href={icon.href}
                className="w-5 h-5 opacity-80 hover:opacity-100 transition"
              >
                <Image
                  src={icon.src}
                  alt={icon.name}
                  width={20}
                  height={20}
                />
              </Link>
            ))}
          </div>

          {/* Sublinks (centered) */}
          <div className="flex gap-4 absolute left-1/2 transform -translate-x-1/2">
            {subLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-gray-400 hover:text-cyan-400 hover:drop-shadow-[0_0_6px_#00FFFF] transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
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

            {/* Sub-links */}
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
              {/* Social Icons in mobile menu */}
              <div className="flex justify-center gap-4 mt-3">
                {socialIcons.map((icon) => (
                  <Link
                    key={icon.name}
                    href={icon.href}
                   target="_blank"
                   rel="noopener noreferrer"
                  className=" rounded-full p-2 hover:scale-110 hover:shadow-[0_0_10px_#00FFFF] transition-all duration-300"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Image
                      src={icon.src}
                      alt={icon.name}
                      width={24}
                      height={24}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Wallet Button */}
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