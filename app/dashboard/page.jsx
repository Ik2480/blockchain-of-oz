"use client";

import { useState } from "react";
import RewardSimulator from "../components/RewardSimulator";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function DashboardPage() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [balance, setBalance] = useState(null);

  const connectWallet = () => {
    setWalletConnected(true);
    setBalance("1234.56"); // mock balance
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6E6E6] px-4 sm:px-8 lg:px-20 py-12 space-y-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
        Wallet Dashboard
      </h1>

      {/* Main Dashboard Layout */}
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        {/* Left Side (30%) */}
        <div className="w-full md:w-3/10  ml-10 space-y-8">
          {/* Connected BOOZ Balance Card */}
          <div className="bg-[#161B22]  px-6 py-4 rounded-lg shadow-lg hover:shadow-[0_0_15px_#00FFFF] transition-shadow duration-300 w-full text-center">
            <h2 className="text-xl font-semibold">Connected BOOZ Balance</h2>
            <p className="mt-2 text-[#00FFFF] text-lg">$BOOZ Balance: {balance || "N/A"}</p>
          </div>

          {/* Reward Simulator Card */}
          <RewardSimulator />

          {/* DAO Teaser Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#161B22]  p-6 rounded-lg shadow-lg hover:shadow-[0_0_15px_#00FFFF] transition-shadow duration-300 w-full"
          >
            <h3 className="text-xl font-semibold mb-4">Vote on Next Feature?</h3>
            <ul className="space-y-2">
              <li className="bg-[#0D1117] p-3 rounded hover:bg-[#00FFFF]/10 transition">
                Proposal 1: Launch Gaming Beta
              </li>
              <li className="bg-[#0D1117] p-3 rounded hover:bg-[#00FFFF]/10 transition">
                Proposal 2: Add Cross-Chain Bridge
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Right Side (70%) */}
        <div className="hidden md:flex w-full md:w-7/10 justify-center items-center mt-8 md:mt-0">
          <Image
            src="/herocryptonomics.webp"
            alt="Hero Illustration"
            width={400}
            height={400}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Back to Home */}
      <div className="text-center mt-12">
        <Link
          href="/"
          className="text-[#00FFFF] hover:underline font-medium"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}