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
    // Sixth box for contract address
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
    <motion.div
      className="bg-[var(--color-card)] p-12 shadow-lg rounded-2xl mx-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-xl font-semibold text-cyan-300 mb-6 text-center">
        How to Buy $BOOZ
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-4 rounded-lg bg-cyan-500/10"
          >
            {/* Steps 1-5 */}
            {step.linkText ? (
              <>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-xl text-cyan-400 flex-shrink-0">
                    {index + 1}.
                  </span>
                  <p className="text-gray-300">{step.text}</p>
                </div>
                <div className="flex justify-end items-center gap-1 mt-0">
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
              // Sixth box: Contract Address in 3 rows
              <div className="flex flex-col gap-3">
                {/* Row 1: Title */}
                <span className="text-cyan-300 font-semibold text-lg">
                  {step.title}
                </span>
                {/* Row 2: Address */}
                <span className="text-gray-300 break-all">{step.address}</span>
                {/* Row 3: Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCopy(step.address)}
                    className="flex items-center gap-1 px-3 py-1 rounded-lg bg-cyan-400/20 text-cyan-300 hover:bg-cyan-400/30 font-semibold transition"
                  >
                    <Copy className="w-4 h-4" />
                    {copied ? "Copied!" : "Copy Address"}
                  </button>
                  <a
                    href={step.solscan}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1 rounded-lg bg-cyan-400/20 text-cyan-300 hover:bg-cyan-400/30 font-semibold transition"
                  >
                    View on Solscan <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}