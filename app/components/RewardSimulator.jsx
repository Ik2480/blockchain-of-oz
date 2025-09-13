"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RewardSimulator() {
  const [holdings, setHoldings] = useState("");
  const [reward, setReward] = useState(null);

  const generateReward = () => {
    if (!holdings || isNaN(holdings)) {
      setReward("❌ Enter valid $BOOZ holdings");
      return;
    }
    const mockReward = Array.from({ length: 6 }, () =>
      Math.random().toString(36).toUpperCase()[2]
    ).join("");
    setReward(mockReward);
  };

  return (
    <div className="bg-[#161B22]  p-6 rounded-lg shadow-lg space-y-4 hover:shadow-[0_0_15px_#00FFFF] transition-shadow duration-300">
      <h3 className="text-xl font-semibold">Reward Simulator</h3>
      <input
        type="text"
        placeholder="Enter your $BOOZ Holdings"
        value={holdings}
        onChange={(e) => setHoldings(e.target.value)}
        className="w-full bg-[#0D1117]  px-3 py-2 rounded text-[#E6E6E6] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
      />
      <button
        onClick={generateReward}
        className="px-4 py-2 bg-[#00FFFF] text-[#0D1117] rounded hover:scale-105 transition-transform duration-300"
      >
        Generate Reward Number
      </button>
      {reward && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-[#00FFFF] font-mono text-lg text-center"
        >
          ✨ {reward} ✨
        </motion.div>
      )}
    </div>
  );
}
