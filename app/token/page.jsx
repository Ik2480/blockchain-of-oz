"use client";

import { motion } from "framer-motion";
import LivePriceAndContract from "./components/LivePrice";
import TokenomicsSection from "./components/Tokenomics";
import HowToBuy from "./components/HowToBuy";

export default function TokenPage() {
  return (
    <div className="container max-w-[1200px] mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-cyan-400 text-center mb-10">
        $BOOZ Token Info
      </h1>

      {/* Top Section */}
      <div className="mb-8">
        <LivePriceAndContract />
      </div>

      {/* Tokenomics & Info Combined */}
      <div className="mb-8 mt-12">
        <TokenomicsSection /> {/* ✅ fixed reference */}
      </div>

      {/* How to Buy Section */}
      <HowToBuy />
    </div>
  );
}