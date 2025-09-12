"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const mockChartData = [
  { time: "1h", price: 0.0003 },
  { time: "2h", price: 0.00031 },
  { time: "3h", price: 0.00033 },
  { time: "4h", price: 0.00032 },
  { time: "5h", price: 0.00034 },
];

export default function LivePriceAndContract() {
  return (
    <motion.div
      className="bg-[var(--color-card)] p-8 shadow-lg flex flex-col mx-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-xl font-semibold text-cyan-300 mb-6 text-center">
        Live Price Chart
      </h2>

      <div className="flex-1">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockChartData}>
            <XAxis dataKey="time" stroke="#888" />
            <YAxis
              stroke="#888"
              domain={["dataMin - 0.00001", "dataMax + 0.00001"]}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#00FF00"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}