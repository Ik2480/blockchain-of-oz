"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex flex-col items-center justify-center bg-[var(--color-bg)]">
        {/* Top Heading Div */}
        <div className="container mx-auto px-2 py-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-4">
              Blockchain of Oz – $BOOZ Live
            </h1>
          </motion.div>
        </div>

        {/* Content Div */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-2 h-full">
          {/* Left Side (60%) */}
          <motion.div
            className="w-full md:w-3/5 text-left flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg ml-10 md:text-xl text-gray-300 mb-6">
              Democratizing blockchain through interconnected payments, business
              tools, and gaming rewards — anchored in the Blockchain of Oz.
            </p>

            {/* Buttons and Stats */}
            <div className="flex flex-col gap-4">
              <Link
                href="/whitepaper"
                className="px-4 ml-10 py-2 2xl bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition text-sm w-fit"
              >
                Read White Paper
              </Link>

              <div className="flex flex-row justify-center mt-12 gap-8">
                {[
                  { label: "Current Price", value: "$0.3039" },
                  { label: "Market Cap", value: "$1.21K" },
                  { label: "24h Volume", value: "$103.24" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-[var(--color-card)]  p-4 text-left shadow-lg hover:shadow-cyan-400/30 transition w-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                  >
                    <h3 className="text-gray-400 text-sm mb-1">{stat.label}</h3>
                    <p className="text-xl font-bold text-cyan-400">{stat.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 ml-10 mt-8">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/x.svg" alt="Twitter" width={24} height={24} className="filter invert opacity-75 hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="https://t.me/" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/telegram.svg" alt="Telegram" width={24} height={24} className="filter invert opacity-75 hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/discord.svg" alt="Discord" width={24} height={24} className="filter invert opacity-75 hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/youtube.svg" alt="YouTube" width={24} height={24} className="filter invert opacity-75 hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </motion.div>

          {/* Right Side (40%) - Hero Image */}
          <motion.div
            className="hidden md:flex w-full md:w-2/5 justify-center items-center mr-10"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/herocryptonomics01.webp"
              alt="Hero Illustration"
              width={500}
              height={500}
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}