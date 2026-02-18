"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useGameStore } from "@/hooks/useGameState";
import { MODULES } from "@/data/modules";
import ModuleCard from "@/components/ModuleCard";
import XPBar from "@/components/XPBar";
import { useEffect } from "react";
import { BADGE_DEFINITIONS } from "@/data/badges";
import { checkBadgeUnlocks } from "@/lib/gameEngine";

const CHALLENGES = [
  {
    href: "/pitch",
    icon: "💼",
    title: "Pitch Simulator",
    desc: "Sell to 3 different airlines. Select the best talking points.",
    accent: "#f59e0b",
    tag: "Sales Training",
  },
  {
    href: "/flashcards",
    icon: "🧠",
    title: "Flashcards",
    desc: "20 key facts — flip and test your memory.",
    accent: "#10b981",
    tag: "Memory",
  },
  {
    href: "/speed-round",
    icon: "⚡",
    title: "Speed Round",
    desc: "10 questions, 15 seconds each. Can you keep up?",
    accent: "#8b5cf6",
    tag: "Speed Quiz",
  },
];

const QUICK_STATS = [
  { label: "Countries", value: "9+", icon: "🌍" },
  { label: "Airline Clients", value: "20+", icon: "✈️" },
  { label: "Hollywood Studios", value: "5", icon: "🎬" },
  { label: "Languages", value: "25+", icon: "🗣️" },
  { label: "Advertisers/Month", value: "250+", icon: "📢" },
  { label: "Debt Level", value: "Zero", icon: "💚" },
];

export default function HomePage() {
  const xp = useGameStore((s) => s.xp);
  const level = useGameStore((s) => s.level);
  const streak = useGameStore((s) => s.streak);
  const badges = useGameStore((s) => s.badges);
  const scores = useGameStore((s) => s.scores);
  const unlockBadge = useGameStore((s) => s.unlockBadge);

  // Check badge unlocks whenever relevant state changes
  useEffect(() => {
    const state = useGameStore.getState();
    const newBadges = checkBadgeUnlocks(state, BADGE_DEFINITIONS);
    newBadges.forEach((id) => unlockBadge(id));
  }, [unlockBadge, scores, xp]);

  const completedCount = Object.values(scores).filter(Boolean).length;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* ── Hero Section ── */}
      <section className="relative text-center mb-16 pt-4">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(245,158,11,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Airplane icon */}
        <motion.div
          className="text-6xl mb-4 inline-block"
          animate={{ y: [0, -8, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          ✈️
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold mb-3 tracking-tight"
        >
          <span className="text-gradient-hero">AEROPLAY</span>
          <br />
          <span className="text-white">ACADEMY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg mb-8"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Master the Art of In-Flight Entertainment
        </motion.p>

        {/* XP Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <XPBar variant="hero" />
        </motion.div>

        {/* Stats chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}>
            <span className="text-sm" style={{ fontFamily: "var(--font-space-mono)", color: "#f59e0b" }}>
              ⚡ LEVEL {level}
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <span className="text-sm" style={{ fontFamily: "var(--font-space-mono)", color: "rgba(255,255,255,0.6)" }}>
              🎓 {completedCount}/5 Modules
            </span>
          </div>
          {streak > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}>
              <span className="text-sm" style={{ fontFamily: "var(--font-space-mono)", color: "#ef4444" }}>
                {streak >= 10 ? "🔥" : "⚡"} {streak}x Streak
              </span>
            </div>
          )}
          {badges.length > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}>
              <span className="text-sm" style={{ fontFamily: "var(--font-space-mono)", color: "#8b5cf6" }}>
                ⭐ {badges.length} Badges
              </span>
            </div>
          )}
        </motion.div>
      </section>

      {/* ── Aeroplay Quick Stats ── */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-14"
      >
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {QUICK_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.06 }}
              className="text-center p-3 rounded-xl"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="text-xl mb-1">{stat.icon}</div>
              <div className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-space-mono)" }}>{stat.value}</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Learning Modules ── */}
      <section className="mb-14">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Learning Modules</h2>
            <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              Complete all 5 to earn the Aeroplay Graduate badge
            </p>
          </div>
          <Link
            href="/report"
            className="text-sm font-medium px-4 py-2 rounded-xl transition-colors"
            style={{ color: "#f59e0b", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}
          >
            View Report →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MODULES.map((module, i) => (
            <ModuleCard key={module.id} module={module} index={i} />
          ))}
        </div>
      </section>

      {/* ── Challenges ── */}
      <section className="mb-14">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">Challenges</h2>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Put your knowledge to the test</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CHALLENGES.map((ch, i) => (
            <motion.div
              key={ch.href}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <Link href={ch.href} className="block group">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl h-full relative overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `radial-gradient(ellipse at top left, ${ch.accent}12, transparent 60%)` }}
                  />
                  <span
                    className="inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-3"
                    style={{ color: ch.accent, background: `${ch.accent}15`, fontFamily: "var(--font-space-mono)" }}
                  >
                    {ch.tag}
                  </span>
                  <div className="text-4xl mb-3">{ch.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-1">{ch.title}</h3>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{ch.desc}</p>
                  <div className="mt-4 text-sm font-medium" style={{ color: ch.accent }}>
                    Start →
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Knowledge Base CTA ── */}
      <section className="mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div>
            <h3 className="text-lg font-bold text-white mb-1">📖 Knowledge Base</h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              Deep-dive reference: Group companies, client portfolio, IFE matrix, offices &amp; leadership
            </p>
          </div>
          <Link
            href="/knowledge"
            className="shrink-0 px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
            style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            Explore →
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
