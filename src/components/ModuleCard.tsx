"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Module } from "@/types";
import { useGameStore } from "@/hooks/useGameState";

interface ModuleCardProps {
  module: Module;
  index: number;
}

export default function ModuleCard({ module, index }: ModuleCardProps) {
  const scores = useGameStore((s) => s.scores);
  const completedSections = useGameStore((s) => s.completedSections);

  const score = scores[module.id];
  const sectionsDone = module.sections.filter((s) => completedSections[s.id]).length;
  const sectionProgress = (sectionsDone / module.sections.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
    >
      <Link href={`/learn/${module.id}`} className="block group">
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.2 }}
          className="relative rounded-2xl overflow-hidden h-full"
          style={{
            background: module.bgColor,
            border: `1px solid rgba(255,255,255,0.08)`,
          }}
        >
          {/* Hover glow */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
            style={{
              boxShadow: `0 20px 60px ${module.glowColor}`,
              background: `radial-gradient(ellipse at top, ${module.glowColor} 0%, transparent 70%)`,
            }}
          />

          {/* Header gradient */}
          <div
            className="px-5 pt-5 pb-4 relative"
            style={{
              background: `linear-gradient(135deg, ${module.accentColor}18 0%, transparent 60%)`,
              borderBottom: `1px solid rgba(255,255,255,0.05)`,
            }}
          >
            <div className="flex justify-between items-start">
              <span className="text-3xl">{module.icon}</span>
              {score && (
                <span
                  className="text-xs font-bold px-2 py-1 rounded-full"
                  style={{
                    background: `${module.accentColor}20`,
                    color: module.accentColor,
                    fontFamily: "var(--font-space-mono)",
                  }}
                >
                  {score.grade}
                </span>
              )}
            </div>
            <h3 className="text-base font-bold text-white mt-3 leading-tight">{module.title}</h3>
            <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>{module.subtitle}</p>
          </div>

          {/* Body */}
          <div className="px-5 py-4 space-y-3">
            {/* Meta */}
            <div className="flex items-center gap-3 text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-space-mono)" }}>
              <span>📖 {module.sections.length} sections</span>
              <span>•</span>
              <span>❓ {module.quiz.length} questions</span>
            </div>

            {/* Section Progress */}
            <div>
              <div className="flex justify-between text-xs mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                <span>Progress</span>
                <span style={{ fontFamily: "var(--font-space-mono)" }}>{sectionsDone}/{module.sections.length}</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: module.accentColor }}
                  initial={{ width: 0 }}
                  animate={{ width: `${sectionProgress}%` }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 + 0.3 }}
                />
              </div>
            </div>

            {/* Quiz score or CTA */}
            {score ? (
              <div className="flex justify-between items-center">
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>Quiz Score</span>
                <span
                  className="text-sm font-bold"
                  style={{ color: score.gradeColor, fontFamily: "var(--font-space-mono)" }}
                >
                  {score.correct}/{score.total} ({score.percentage}%)
                </span>
              </div>
            ) : (
              <div
                className="text-xs font-medium text-center py-1.5 rounded-lg transition-colors group-hover:text-white"
                style={{
                  color: module.accentColor,
                  background: `${module.accentColor}12`,
                  border: `1px solid ${module.accentColor}30`,
                }}
              >
                {sectionsDone > 0 ? "Continue →" : "Start Module →"}
              </div>
            )}
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
