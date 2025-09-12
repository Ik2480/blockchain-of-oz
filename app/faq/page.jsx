"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const faqsData = [
  {
    question: "Wallet Setup",
    answer: "Instructions on setting up a Phantom or Solflare wallet to use with $BOOZ."
  },
  {
    question: "Rewards",
    answer: "Learn how $BOOZ rewards are calculated and how to claim them."
  },
  {
    question: "Bridges",
    answer: "Guide for transferring $BOOZ across chains using the bridging system."
  },
  {
    question: "Staking",
    answer: "Details on staking $BOOZ for rewards and governance participation."
  },
  {
    question: "DAO",
    answer: "Overview of DAO governance, proposals, and voting mechanisms."
  },
  {
    question: "Gas Fees",
    answer: "Information on transaction fees, how they are calculated, and tips to reduce costs."
  }
];

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs = faqsData.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6E6E6] px-4 sm:px-8 lg:px-20 py-12">
      {/* Page Title */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
        FAQ & Knowledge Base
      </h1>

      {/* Search Input */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 bg-[#161B22] border border-[#00FFFF] text-[#E6E6E6] px-4 py-2 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FFFF] transition"
        />
      </div>

      {/* Accordion */}
      <div className="space-y-4 max-w-3xl mx-auto">
        {filteredFaqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-[#161B22] border border-[#00FFFF] rounded-lg overflow-hidden cursor-pointer hover:shadow-[0_0_15px_#00FFFF] transition-shadow duration-300"
            onClick={() => toggleFaq(index)}
          >
            <div className="px-6 py-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="text-[#00FFFF]">{openIndex === index ? "-" : "+"}</span>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-4 text-[#E6E6E6] bg-[#0D1117]"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
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
