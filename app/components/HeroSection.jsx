"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = ({ navbarHeight = 0 }) => {
  return (
    <section
      className="relative w-full h-auto min-h-[80vh] flex flex-col items-center justify-center bg-[var(--color-bg)] py-12 px-4 md:px-6"
      style={{ paddingTop: navbarHeight }} // Dynamic top offset
    >
      {/* Top Heading Div */}
      <div className="container mx-auto text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400  mt-8 mb-4">
            Blockchain of Oz – $BOOZ Live
          </h1>
        </motion.div>
      </div>

      {/* Content Div */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        {/* Left Side */}
        <motion.div
          className="w-full md:w-3/5 text-center md:text-left flex flex-col items-center md:items-start justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Democratizing blockchain through interconnected payments, business
            tools, and gaming rewards — anchored in the Blockchain of Oz.
          </p>

          <Link
            href="/whitepaper"
            className="px-6 py-3 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition text-sm font-semibold rounded-md shadow-lg w-fit"
          >
            Read White Paper
          </Link>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 w-full max-w-md md:max-w-none">
            {[
              { label: "Current Price", value: "$0.3039" },
              { label: "Market Cap", value: "$1.21K" },
              { label: "24h Volume", value: "$103.24" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-[var(--color-card)] p-5 text-center md:text-left shadow-lg hover:shadow-cyan-400/30 transition rounded-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <h3 className="text-gray-400 text-sm mb-1 font-medium">{stat.label}</h3>
                <p className="text-xl md:text-2xl font-bold text-cyan-400">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side (Hero Image) */}
        <motion.div
          className="hidden md:flex w-full md:w-2/5 justify-center items-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/herocryptonomics01.webp"
            alt="Hero Illustration"
            width={600}
            height={600}
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
