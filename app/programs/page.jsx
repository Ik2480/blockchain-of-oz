"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// ProgramCard Component
function ProgramCard({ title, description, badge, href }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className=" sections bg-[#161B22] border border-[#00FFFF] rounded-xl p-6 flex flex-col justify-between shadow-lg hover:shadow-[0_0_15px_#00FFFF] transition-shadow duration-300"
    >
      <div>
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-[#E6E6E6]">{description}</p>
      </div>
      {badge && (
        <span className="mt-4 inline-block bg-[#00FFFF] text-[#0D1117] text-xs font-bold px-2 py-1 rounded-full">
          {badge}
        </span>
      )}
      <Link
        href={href || "#"}
        className="mt-6 inline-block text-[#00FFFF] hover:underline font-medium"
      >
        Learn More →
      </Link>
    </motion.div>
  );
}

export default function ProgramsPage() {
  const programs = [
    {
      title: "Creators",
      description: "Payments",
      href: "/programs/creators",
    },
    {
      title: "Businesses",
      description: "Invoicing",
      href: "/programs/businesses",
    },
    {
      title: "Gaming",
      description: "Dominoes + Chess",
      badge: "Coming Q1 2026",
      href: "/programs/gaming",
    },
    {
      title: "Community",
      description: "DAO Governance & Proposals",
      href: "/programs/community",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6E6E6] px-4 sm:px-8 lg:px-20 py-16">
      {/* Heading with extra vertical space */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-16">
        Programs & Ecosystem
      </h1>

      {/* Two-column layout on all devices except mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        {programs.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </div>
    </div>
  );
}
