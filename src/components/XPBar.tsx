"use client";

import { motion } from "framer-motion";
import { useGameStore } from "@/hooks/useGameState";
import { calculateXPInLevel, calculateXPToNextLevel } from "@/lib/gameEngine";

interface XPBarProps {
  variant?: "hero" | "compact" | "report";
}

export default function XPBar({ variant = "compact" }: XPBarProps) {
  const xp = useGameStore((s) => s.xp);
  const level = useGameStore((s) => s.level);
  const xpInLevel = calculateXPInLevel(xp);
  const toNext = calculateXPToNextLevel(xp);
  const progress = xpInLevel / 100;

  if (variant === "hero") {
    return (
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold" style={{ color: "#f59e0b", fontFamily: "var(--font-space-mono)" }}>
              LEVEL {level}
            </span>
          </div>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-space-mono)" }}>
            {toNext} XP to next level
          </span>
        </div>
        <div className="relative h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ background: "linear-gradient(90deg, #f59e0b, #fbbf24)" }}
            initial={{ width: 0 }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          />
          {/* Glow effect */}
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ background: "rgba(245,158,11,0.4)", filter: "blur(4px)" }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-space-mono)" }}>
            {xpInLevel} / 100
          </span>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-space-mono)" }}>
            Total: {xp.toLocaleString()} XP
          </span>
        </div>
      </div>
    );
  }

  if (variant === "report") {
    return (
      <div className="w-full">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-bold" style={{ color: "#f59e0b", fontFamily: "var(--font-space-mono)" }}>
            LEVEL {level}
          </span>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-space-mono)" }}>
            {xp} XP total
          </span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, #f59e0b, #fbbf24)" }}
            initial={{ width: 0 }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </div>
    );
  }

  // compact
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-bold" style={{ color: "#f59e0b", fontFamily: "var(--font-space-mono)" }}>
        L{level}
      </span>
      <div className="w-16 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: "#f59e0b" }}
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
