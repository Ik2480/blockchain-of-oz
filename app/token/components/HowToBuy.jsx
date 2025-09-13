"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Copy } from "lucide-react";

const steps = [
  {
    text: "Install Phantom wallet (browser extension or mobile app).",
    linkText: "Phantom Wallet",
    link: "https://phantom.app/",
  },
  {
    text: "Fund wallet with SOL from a centralized exchange.",
    linkText: "Buy SOL",
    link: "https://www.binance.com/en/trade/SOL_USDT",
  },
  {
    text: "Go to Raydium and swap SOL for $BOOZ.",
    linkText: "Raydium Swap",
    link: "https://raydium.io/",
  },
  {
    text: "Alternatively, use Jupiter aggregator for best swap rates.",
    linkText: "Jupiter Aggregator",
    link: "https://jup.ag/",
  },
  {
    text: "Bridge $BOOZ to Algorand (if using rewards generator features).",
    linkText: "Bridge to Algorand",
    link: "https://bridge.example.com/", // replace with actual link
  },
  {
    title: "Token Address",
    address: "ExampleAddress1234567890ABCDEF",
    solscan: "https://solscan.io/token/ExampleAddress1234567890ABCDEF",
  },
];

export default function HowToBuy() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      className="bg-[var(--color-card)] p-6 sm:p-10 rounded-2xl shadow-lg mx-4 sm:mx-10 my-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">
        How to Buy $BOOZ
      </h2>

      {/* Steps as single column */}
      <div className="flex flex-col ml-10 mr-10 gap-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-cyan-500/10 rounded-xl p-5 flex flex-col gap-3 hover:shadow-[0_0_10px_#00FFFF] transition-shadow duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {/* Step 1-5 */}
            {step.linkText ? (
              <>
                <div className="flex gap-3 items-start">
                  <span className="font-bold text-lg text-cyan-400">
                    {index + 1}.
                  </span>
                  <p className="text-gray-300">{step.text}</p>
                </div>
                <div className="flex justify-end">
                  <a
                    href={step.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 font-semibold hover:underline flex items-center gap-1"
                  >
                    {step.linkText} <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </>
            ) : (
              // Last Step: Token Address
              <div className="flex flex-col gap-3">
                <span className="text-cyan-300 font-semibold text-lg">
                  {step.title}
                </span>
                <span className="text-gray-300 break-all">{step.address}</span>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => handleCopy(step.address)}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cyan-400/20 text-cyan-300 hover:bg-cyan-400/30 font-semibold transition"
                  >
                    <Copy className="w-4 h-4" />
                    {copied ? "Copied!" : "Copy Address"}
                  </button>
                  <a
                    href={step.solscan}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cyan-400/20 text-cyan-300 hover:bg-cyan-400/30 font-semibold transition"
                  >
                    View on Solscan <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
