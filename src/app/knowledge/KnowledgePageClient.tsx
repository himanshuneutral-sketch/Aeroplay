"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const TOPICS = [
  {
    slug: "companies",
    icon: "🏢",
    title: "Group Companies Directory",
    desc: "All 9 Aeroplay group companies — from AeroLab to Games in Motion.",
    accent: "#f59e0b",
    count: "9 companies",
  },
  {
    slug: "clients",
    icon: "✈️",
    title: "Client Portfolio",
    desc: "Current, past, and group clients — with Skytrax ratings and awards.",
    accent: "#8b5cf6",
    count: "30+ airlines",
  },
  {
    slug: "ife-matrix",
    icon: "🖥️",
    title: "IFE Systems Matrix",
    desc: "Complete compatibility matrix across 15+ OEM systems and IFE platforms.",
    accent: "#10b981",
    count: "22 systems",
  },
  {
    slug: "offices",
    icon: "🗺️",
    title: "Global Office Locations",
    desc: "Interactive world map with all 11 office locations across 9+ countries.",
    accent: "#3b82f6",
    count: "11 locations",
  },
  {
    slug: "leadership",
    icon: "👥",
    title: "Leadership Profiles",
    desc: "Full bios for the Board of Directors, Content Team, and Operations Team.",
    accent: "#ef4444",
    count: "18+ profiles",
  },
];

export default function KnowledgePageClient() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">📖 Knowledge Base</h1>
          <p style={{ color: "rgba(255,255,255,0.5)" }}>
            Deep-dive reference pages for research, study, and client presentations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TOPICS.map((topic, i) => (
            <motion.div
              key={topic.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/knowledge/${topic.slug}`} className="block group">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl h-full relative overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `radial-gradient(ellipse at top left, ${topic.accent}12, transparent 60%)` }}
                  />
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{topic.icon}</span>
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: `${topic.accent}15`, color: topic.accent, fontFamily: "var(--font-space-mono)" }}
                    >
                      {topic.count}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{topic.title}</h3>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{topic.desc}</p>
                  <div className="mt-4 text-sm font-medium" style={{ color: topic.accent }}>
                    Explore →
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
