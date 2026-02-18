"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useGameStore } from "@/hooks/useGameState";
import { calculateXPInLevel } from "@/lib/gameEngine";

const NAV_LINKS = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/learn/about", label: "Modules", icon: "📚" },
  { href: "/pitch", label: "Challenges", icon: "⚡" },
  { href: "/report", label: "Report", icon: "📊" },
];

const MOBILE_LINKS = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/learn/about", label: "Modules", icon: "📚" },
  { href: "/pitch", label: "Challenges", icon: "⚡" },
  { href: "/report", label: "Report", icon: "📊" },
];

export default function Nav() {
  const pathname = usePathname();
  const xp = useGameStore((s) => s.xp);
  const level = useGameStore((s) => s.level);
  const streak = useGameStore((s) => s.streak);
  const badges = useGameStore((s) => s.badges);

  const prevXP = useRef(xp);
  const [xpDelta, setXpDelta] = useState<number | null>(null);

  useEffect(() => {
    if (xp > prevXP.current) {
      setXpDelta(xp - prevXP.current);
      const t = setTimeout(() => setXpDelta(null), 1500);
      prevXP.current = xp;
      return () => clearTimeout(t);
    }
    prevXP.current = xp;
  }, [xp]);

  const xpInLevel = calculateXPInLevel(xp);

  return (
    <>
      {/* ── Desktop Nav ── */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 h-16 items-center justify-between px-6"
        style={{ background: "rgba(8,8,16,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.span
            className="text-2xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            ✈️
          </motion.span>
          <span className="font-bold text-lg tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>
            <span className="text-white">AEROPLAY</span>
            <span style={{ color: "#f59e0b" }}> ACADEMY</span>
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{ color: isActive ? "#f59e0b" : "rgba(255,255,255,0.6)" }}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="flex items-center gap-4">
          {/* XP Counter */}
          <div className="flex items-center gap-2 relative">
            <div className="text-right">
              <div className="flex items-center gap-1">
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-space-mono)" }}>XP</span>
                <motion.span
                  key={xp}
                  className="text-sm font-bold"
                  style={{ color: "#f59e0b", fontFamily: "var(--font-space-mono)" }}
                  initial={{ scale: 1.4, color: "#ffffff" }}
                  animate={{ scale: 1, color: "#f59e0b" }}
                  transition={{ duration: 0.3 }}
                >
                  {xp.toLocaleString()}
                </motion.span>
              </div>
              {/* Mini XP bar */}
              <div className="w-20 h-1 rounded-full mt-0.5" style={{ background: "rgba(255,255,255,0.1)" }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "#f59e0b" }}
                  animate={{ width: `${xpInLevel}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </div>
            {/* XP gained popup */}
            <AnimatePresence>
              {xpDelta && (
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: -20 }}
                  exit={{ opacity: 0, y: -36 }}
                  className="absolute -top-2 right-0 text-xs font-bold pointer-events-none"
                  style={{ color: "#f59e0b", fontFamily: "var(--font-space-mono)" }}
                >
                  +{xpDelta}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Level */}
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg" style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>LVL</span>
            <span className="text-sm font-bold" style={{ color: "#f59e0b", fontFamily: "var(--font-space-mono)" }}>{level}</span>
          </div>

          {/* Streak */}
          {streak > 0 && (
            <motion.div
              key={streak}
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 px-2 py-1 rounded-lg"
              style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.25)" }}
            >
              <span>{streak >= 10 ? "🔥" : streak >= 3 ? "⚡" : "○"}</span>
              <span className="text-sm font-bold" style={{ color: "#ef4444", fontFamily: "var(--font-space-mono)" }}>{streak}x</span>
            </motion.div>
          )}

          {/* Badges count */}
          {badges.length > 0 && (
            <Link href="/report" className="flex items-center gap-1 px-2 py-1 rounded-lg transition-colors hover:bg-white/5">
              <span>⭐</span>
              <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-space-mono)" }}>{badges.length}</span>
            </Link>
          )}
        </div>
      </nav>

      {/* ── Mobile Top Banner (XP) ── */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 h-10 flex items-center justify-between px-4"
        style={{ background: "rgba(8,8,16,0.95)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span className="text-sm font-bold" style={{ fontFamily: "var(--font-outfit)" }}>
          <span className="text-white">AEROPLAY</span>
          <span style={{ color: "#f59e0b" }}> ACADEMY</span>
        </span>
        <div className="flex items-center gap-3">
          <span className="text-xs" style={{ color: "#f59e0b", fontFamily: "var(--font-space-mono)" }}>⚡ LVL {level}</span>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-space-mono)" }}>{xp} XP</span>
          {streak > 0 && <span className="text-xs" style={{ color: "#ef4444" }}>{streak >= 10 ? "🔥" : "⚡"}{streak}x</span>}
        </div>
      </div>

      {/* ── Mobile Bottom Tab Bar ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-16 flex items-center justify-around"
        style={{ background: "rgba(8,8,16,0.97)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        {MOBILE_LINKS.map((link) => {
          const isActive = link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className="flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl transition-colors"
            >
              <span className="text-xl">{link.icon}</span>
              <span className="text-xs font-medium" style={{ color: isActive ? "#f59e0b" : "rgba(255,255,255,0.4)" }}>
                {link.label}
              </span>
              {isActive && (
                <motion.div layoutId="mobile-nav-active" className="w-1 h-1 rounded-full" style={{ background: "#f59e0b" }} />
              )}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
