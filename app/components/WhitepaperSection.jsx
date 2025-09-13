"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, FileDown } from "lucide-react";

const sections = [
  {
    title: "Tokenomics",
    content: `
Our tokenomics model ensures fair distribution and long-term sustainability.
- 40% Infrastructure & Treasury
- 30% Community Rewards
- 25% Development & Partnerships
- 5% Marketing
    `,
  },
  {
    title: "Programs",
    content: `
Our programs include:
- Staking rewards
- Community incentive campaigns
- Developer grants
    `,
  },
  {
    title: "Roadmap",
    content: `
Q1: Token launch and initial liquidity.
Q2: Staking and rewards programs.
Q3: Ecosystem partnerships and DAO governance rollout.
Q4: Expansion into gaming and DeFi integrations.
    `,
  },
];

export default function WhitepaperSection() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <section className="w-full bg-[var(--color-bg)] py-12 px-4 md:px-6">
      <div className="container mx-auto">
        {/* Page Header */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-cyan-400 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Blockchain of Oz – White Paper
        </motion.h1>

        {/* Two-Column Layout */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Column: Executive Summary */}
          <motion.div
            className="flex-1 bg-[var(--color-card)] rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-cyan-300 mb-4">
              Executive Summary
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The Blockchain of Oz ($BOOZ) is designed to democratize blockchain by
              providing interconnected payment solutions, developer tools, and
              rewards programs that foster real adoption. This whitepaper outlines
              our tokenomics, strategic programs, and future roadmap to empower both
              individuals and businesses.
            </p>
          </motion.div>

          {/* Right Column: Collapsible Sections + Download */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-4">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  className="bg-[var(--color-card)] rounded-2xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full flex justify-between items-center p-4 text-left text-cyan-300 font-semibold hover:bg-cyan-500/10 transition"
                  >
                    {section.title}
                    {openSection === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {openSection === index && (
                    <motion.div
                      className="px-4 pb-4 text-gray-300 whitespace-pre-line"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {section.content}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Download Button */}
            <div className="mt-4 flex justify-center">
              <a
                href="/whitepaper.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-400 hover:bg-cyan-500/30 transition"
              >
                <FileDown className="w-5 h-5" />
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <motion.div
          className="mt-12 bg-[var(--color-card)] rounded-2xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-lg font-semibold text-cyan-300 mb-2">Disclaimer</h2>
          <p className="text-gray-400 leading-relaxed whitespace-pre-line">
            Disclaimer: This white paper is for informational purposes only and does not constitute financial, investment, or legal advice. Participation in $BOOZ or the Blockchain of Oz ecosystem involves significant risks, including but not limited to market volatility, regulatory changes, and potential loss of capital. Always conduct your own research (DYOR) and consult with qualified professionals before making any decisions related to cryptocurrencies or blockchain projects. The team and affiliates are not liable for any losses incurred. Updates as of September 09, 2025.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
