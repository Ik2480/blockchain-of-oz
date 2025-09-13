"use client";

import Image from "next/image";

export default function Footer() {
  const socials = [
    { name: "Twitter", icon: "/icons/x.svg", href: "https://twitter.com" },
    { name: "Discord", icon: "/icons/discord.svg", href: "https://discord.com" },
    { name: "Telegram", icon: "/icons/telegram.svg", href: "https://t.me" },
  ];

  const badges = [
    { name: "Rugproof", icon: "/icons/rugproof.svg" },
    { name: "Audit", icon: "/icons/audit.svg" },
    { name: "KYC Verified", icon: "/icons/kyc.svg" },
  ];

  return (
    <footer className="bg-[var(--color-card)] py-8 text-center text-gray-300">
      {/* Social Icons Row */}
      <div className="flex justify-center gap-6 mb-6">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:drop-shadow-[0_0_6px_var(--color-primary)]"
          >
            <Image
              src={social.icon}
              alt={social.name}
              width={28}
              height={28}
              className="invert brightness-200" // ✅ makes it visible on dark bg
            />
          </a>
        ))}
      </div>

      {/* Security Badges Row */}
      <div className="flex flex-wrap justify-center gap-8">
        {badges.map((badge) => (
          <div key={badge.name} className="flex items-center gap-2">
            <Image
              src={badge.icon}
              alt={badge.name}
              width={28}
              height={28}
              className="invert brightness-200" // ✅ keeps it visible
            />
            <span className="text-sm text-gray-300">{badge.name}</span>
          </div>
        ))}
      </div>
    </footer>
  );
}
