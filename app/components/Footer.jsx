"use client";
import Image from "next/image";

export default function Footer() {
  const icons = [
    { href: "https://x.com", src: "/icons/x.svg", alt: "X" },
    { href: "https://discord.gg", src: "/icons/discord.svg", alt: "Discord" },
    { href: "https://t.me", src: "/icons/telegram.svg", alt: "Telegram" },
    { href: "https://youtube.com", src: "/icons/youtube.svg", alt: "YouTube" },
  ];

  return (
    <footer className="bg-[#161B22] text-[#E6E6E6] py-6 px-8">
      <div className="flex justify-center space-x-6">
        {icons.map((icon, idx) => (
          <a
            key={idx}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            className=" rounded-full p-2 hover:scale-110 hover:shadow-[0_0_10px_#00FFFF] transition-all duration-300"
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              width={24}
              height={24}
              className="invert"
            />
          </a>
        ))}
      </div>
    </footer>
  );
}
