"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useGameStore } from "@/hooks/useGameState";
import { MODULES } from "@/data/modules";
import { BADGE_DEFINITIONS } from "@/data/badges";
import { calculateOverallScore, calculateGrade } from "@/lib/gameEngine";
import XPBar from "@/components/XPBar";

const AEROPLAY_STATS = [
  { label: "Countries", value: "9+", icon: "🌍" },
  { label: "Airline Clients", value: "20+", icon: "✈️" },
  { label: "Studio Relationships", value: "400+", icon: "🎬" },
  { label: "Languages", value: "25+", icon: "🗣️" },
  { label: "IFE Systems", value: "15+", icon: "🖥️" },
  { label: "Monthly Advertisers", value: "250+", icon: "📢" },
  { label: "Ad Experience (yrs)", value: "18+", icon: "📅" },
  { label: "Hollywood Studios", value: "5", icon: "⭐" },
  { label: "Debt Level", value: "Zero", icon: "💚" },
];

export default function ReportPageClient() {
  const xp = useGameStore((s) => s.xp);
  const level = useGameStore((s) => s.level);
  const badges = useGameStore((s) => s.badges);
  const scores = useGameStore((s) => s.scores);
  const maxStreak = useGameStore((s) => s.maxStreak);
  const flashcardsReviewed = useGameStore((s) => s.flashcardsReviewed);

  const overall = calculateOverallScore(scores as Parameters<typeof calculateOverallScore>[0]);
  const { grade, color } = calculateGrade(overall.percentage, 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-white mb-2">Report Card</h1>
        <p className="mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>Your Aeroplay Academy progress summary</p>

        {/* ── Overall Grade ── */}
        <div className="p-8 rounded-2xl mb-8 text-center"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.2 }}
            className="inline-flex items-center justify-center w-28 h-28 rounded-full mb-6"
            style={{ background: `${color}15`, border: `3px solid ${color}` }}
          >
            <span className="text-4xl font-bold" style={{ color, fontFamily: "var(--font-space-mono)" }}>{grade}</span>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            {[
              { label: "Overall Score", value: `${overall.percentage}%`, icon: "🎯" },
              { label: "Modules Done", value: `${overall.completed}/5`, icon: "📚" },
              { label: "Total XP", value: xp.toLocaleString(), icon: "⚡" },
              { label: "Badges Earned", value: `${badges.length}`, icon: "⭐" },
            ].map((s) => (
              <div key={s.label} className="p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.04)" }}>
                <div className="text-xl mb-1">{s.icon}</div>
                <div className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-space-mono)" }}>{s.value}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <XPBar variant="report" />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div style={{ color: "rgba(255,255,255,0.5)" }}>
              🔥 Best Streak: <span className="font-bold text-white">{maxStreak}x</span>
            </div>
            <div style={{ color: "rgba(255,255,255,0.5)" }}>
              🧠 Flashcards: <span className="font-bold text-white">{flashcardsReviewed.length}/20</span>
            </div>
          </div>
        </div>

        {/* ── Module Scores ── */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Module Scores</h2>
          <div className="space-y-4">
            {MODULES.map((module, i) => {
              const score = scores[module.id];
              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{module.icon}</span>
                      <div>
                        <h3 className="font-bold text-white text-sm">{module.title}</h3>
                        {score ? (
                          <span className="text-xs" style={{ color: score.gradeColor, fontFamily: "var(--font-space-mono)" }}>
                            {score.correct}/{score.total} · {score.grade}
                          </span>
                        ) : (
                          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Not completed</span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      {score && (
                        <span className="text-sm font-bold" style={{ color: score.gradeColor, fontFamily: "var(--font-space-mono)" }}>
                          {score.percentage}%
                        </span>
                      )}
                      <Link href={`/learn/${module.id}`} className="text-xs px-3 py-1.5 rounded-lg"
                        style={{ background: `${module.accentColor}15`, color: module.accentColor, border: `1px solid ${module.accentColor}30` }}>
                        {score ? "Review" : "Start"} →
                      </Link>
                    </div>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: module.accentColor }}
                      initial={{ width: 0 }}
                      animate={{ width: score ? `${score.percentage}%` : "0%" }}
                      transition={{ duration: 1, ease: "easeOut", delay: i * 0.1 + 0.3 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Badge Gallery ── */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Badge Gallery</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {BADGE_DEFINITIONS.map((badge, i) => {
              const earned = badges.includes(badge.id);
              return (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04 }}
                  title={`${badge.name}: ${badge.description}`}
                  className="flex flex-col items-center gap-1 p-3 rounded-xl text-center"
                  style={{
                    background: earned ? `${badge.accentColor}12` : "rgba(255,255,255,0.02)",
                    border: `1px solid ${earned ? badge.accentColor + "30" : "rgba(255,255,255,0.06)"}`,
                    filter: earned ? "none" : "grayscale(1) brightness(0.4)",
                  }}
                >
                  <span className="text-2xl">{badge.icon}</span>
                  <span className="text-xs font-medium leading-tight" style={{ color: earned ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)" }}>
                    {badge.name}
                  </span>
                  {!earned && (
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)", fontSize: "10px" }}>🔒</span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Aeroplay Quick Stats ── */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Aeroplay Quick Stats</h2>
          <div className="grid grid-cols-3 gap-3">
            {AEROPLAY_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                className="p-4 rounded-xl text-center"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-space-mono)" }}>{stat.value}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
