"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Liquidity", value: 40 },
  { name: "Community", value: 30 },
  { name: "Team & Dev", value: 20 },
  { name: "Treasury", value: 10 },
];

const COLORS = ["#22d3ee", "#06b6d4", "#3b82f6", "#0ea5e9"];

export default function TokenomicsSection() {
  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-[var(--color-card)] shadow-lg p-6 md:p-10 mx-10">
        <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">Tokenomics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Tokenomics Pie Chart */}
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [`${value}%`]}
                  contentStyle={{
                    backgroundColor: "rgba(17, 24, 39, 0.9)",
                    border: "1px solid #22d3ee",
                    borderRadius: "6px",
                    padding: "6px 10px",
                    fontSize: "0.8rem",
                    color: "#e2e8f0",
                  }}
                  itemStyle={{ color: "#e2e8f0" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Right: Token Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold text-cyan-300 text-center md:text-left">
              Token Details
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-10 py-4">
                <span className="font-semibold text-cyan-300">Name:</span>
                <span className="text-right text-sm">BLOCKCHAIN OF OZ</span>
              </li>
              <li className="flex gap-10 items-center py-10">
                <span className="font-semibold text-cyan-300">Symbol:</span>
                <span className="text-right text-sm">BOOZ</span>
              </li>
              <li className="flex gap-10 items-center py-10">
                <span className="font-semibold text-cyan-300">Decimals:</span>
                <span className="text-right text-sm">9</span>
              </li>
              <li className="flex gap-10 items-center py-10">
                <span className="font-semibold text-cyan-300">Supply:</span>
                <span className="text-right text-sm">1,250,000</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}