"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    title: "Q4 2025 Roadmap Update",
    date: "September 2025",
    summary: "Updates on our milestones, partnerships, and upcoming features for Q4 2025.",
    slug: "q4-2025-roadmap-update"
  },
  {
    title: "Gaming Mission Preview",
    date: "October 2025",
    summary: "Sneak peek into the upcoming Dominoes and Chess gaming experiences.",
    slug: "gaming-mission-preview"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6E6E6] px-4 sm:px-8 lg:px-20 py-12">
      {/* Page Title */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
        Blog & News
      </h1>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-[#161B22] p-6 rounded-lg shadow-lg hover:shadow-[0_0_15px_#00FFFF] transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-[#66B2FF] mb-4">{post.date}</p>
            <p className="text-[#E6E6E6]">{post.summary}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-[#00FFFF] hover:underline font-medium"
            >
              Read More →
            </Link>
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
