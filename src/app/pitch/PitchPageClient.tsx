"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PITCH_SCENARIOS } from "@/data/pitchScenarios";
import { useGameStore } from "@/hooks/useGameState";
import { calculatePitchResult, XP_REWARDS } from "@/lib/gameEngine";
import { BADGE_DEFINITIONS, getBadgeById } from "@/data/badges";
import { checkBadgeUnlocks } from "@/lib/gameEngine";
import type { PitchScenario, PitchResult } from "@/types";

type Phase = "select" | "briefing" | "pitching" | "results";

export default function PitchPageClient() {
  const [phase, setPhase] = useState<Phase>("select");
  const [scenario, setScenario] = useState<PitchScenario | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [result, setResult] = useState<PitchResult | null>(null);

  const submittingRef = useRef(false);

  const addXP = useGameStore((s) => s.addXP);
  const recordPitchScore = useGameStore((s) => s.recordPitchScore);
  const unlockBadge = useGameStore((s) => s.unlockBadge);
  const pitchScores = useGameStore((s) => s.pitchScores);

  function selectScenario(s: PitchScenario) {
    submittingRef.current = false;
    setScenario(s);
    setSelected([]);
    setResult(null);
    setPhase("briefing");
  }

  function startPitch() {
    setPhase("pitching");
  }

  function togglePoint(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  function submitPitch() {
    if (!scenario || submittingRef.current) return;
    submittingRef.current = true;
    const res = calculatePitchResult(selected, scenario);
    setResult(res);
    recordPitchScore(scenario.id, res.score);
    if (res.passed) {
      addXP(XP_REWARDS.pitchPass);
    }
    setTimeout(() => {
      const state = useGameStore.getState();
      checkBadgeUnlocks(state, BADGE_DEFINITIONS).forEach((id) => unlockBadge(id));
    }, 200);
    setPhase("results");
  }

  const difficultyColors: Record<string, string> = {
    Beginner: "#10b981",
    Intermediate: "#f59e0b",
    Advanced: "#ef4444",
  };

  // ── SELECT ───────────────────────────────────────────────────
  if (phase === "select") {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center mb-10">
            <div className="text-5xl mb-3">💼</div>
            <h1 className="text-3xl font-bold text-white mb-2">Pitch Simulator</h1>
            <p style={{ color: "rgba(255,255,255,0.5)" }}>
              Select the best talking points to win the sale. Choose wisely — wrong choices cost points.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PITCH_SCENARIOS.map((s, i) => {
              const prevScore = pitchScores[s.id];
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <button
                    onClick={() => selectScenario(s)}
                    className="w-full text-left p-6 rounded-2xl group transition-all hover:-translate-y-1"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${difficultyColors[s.difficulty]}15`, color: difficultyColors[s.difficulty], fontFamily: "var(--font-space-mono)" }}>
                        {s.difficulty}
                      </span>
                      {prevScore !== undefined && (
                        <span className="text-xs font-bold" style={{ color: prevScore >= 80 ? "#10b981" : "#ef4444", fontFamily: "var(--font-space-mono)" }}>
                          {prevScore}%
                        </span>
                      )}
                    </div>
                    <div className="text-2xl mb-2">✈️</div>
                    <h3 className="font-bold text-white mb-1">{s.title}</h3>
                    <p className="text-xs mb-3" style={{ color: "#f59e0b" }}>{s.airline} · {s.region}</p>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {s.customerStatement.slice(0, 80)}...
                    </p>
                    <div className="mt-4 text-sm font-medium" style={{ color: "#f59e0b" }}>Start Scenario →</div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    );
  }

  if (!scenario) return null;

  // ── BRIEFING ─────────────────────────────────────────────────
  if (phase === "briefing") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <button onClick={() => setPhase("select")} className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
            ← Back to scenarios
          </button>
          <div className="p-6 rounded-2xl mb-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🤝</div>
              <div>
                <h2 className="text-xl font-bold text-white">{scenario.title}</h2>
                <p className="text-sm" style={{ color: "#f59e0b" }}>{scenario.airline} · {scenario.region}</p>
              </div>
            </div>
            <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>{scenario.context}</p>
            <div className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="text-xs font-bold mb-2" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-space-mono)" }}>THE CLIENT SAYS:</p>
              <p className="text-base italic" style={{ color: "rgba(255,255,255,0.85)" }}>&ldquo;{scenario.customerStatement}&rdquo;</p>
            </div>
          </div>
          <div className="p-4 rounded-xl mb-6" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)" }}>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
              🎯 <strong style={{ color: "#f59e0b" }}>Your goal:</strong> Select the strongest talking points from your sales arsenal. Each correct selection earns points. Each wrong selection costs -15%.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            onClick={startPitch}
            className="w-full py-4 rounded-xl font-bold text-lg"
            style={{ background: "#f59e0b", color: "#000" }}
          >
            Begin Pitch →
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // ── PITCHING ─────────────────────────────────────────────────
  if (phase === "pitching") {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">{scenario.title}</h2>
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-space-mono)" }}>
              {selected.length} selected
            </span>
          </div>
          <div className="p-4 rounded-xl mb-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-sm italic" style={{ color: "rgba(255,255,255,0.7)" }}>&ldquo;{scenario.customerStatement}&rdquo;</p>
          </div>
          <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
            Select the talking points that best address this airline&apos;s needs:
          </p>
          <div className="space-y-3 mb-8">
            {scenario.points.map((point, i) => {
              const isSelected = selected.includes(point.id);
              return (
                <motion.button
                  key={point.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => togglePoint(point.id)}
                  className="w-full text-left p-4 rounded-xl transition-all"
                  style={{
                    background: isSelected ? "rgba(245,158,11,0.12)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${isSelected ? "rgba(245,158,11,0.4)" : "rgba(255,255,255,0.08)"}`,
                    color: isSelected ? "#ffffff" : "rgba(255,255,255,0.65)",
                    cursor: "pointer",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded shrink-0 mt-0.5 flex items-center justify-center"
                      style={{ background: isSelected ? "#f59e0b" : "rgba(255,255,255,0.1)", border: `1px solid ${isSelected ? "#f59e0b" : "rgba(255,255,255,0.2)"}` }}
                    >
                      {isSelected && <span className="text-xs text-black font-bold">✓</span>}
                    </div>
                    <span className="text-sm">{point.text}</span>
                  </div>
                </motion.button>
              );
            })}
          </div>
          <motion.button
            whileHover={{ scale: selected.length > 0 ? 1.02 : 1 }}
            whileTap={{ scale: selected.length > 0 ? 0.98 : 1 }}
            onClick={submitPitch}
            disabled={selected.length === 0}
            className="w-full py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-40"
            style={{ background: "#f59e0b", color: "#000" }}
          >
            Submit Pitch →
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // ── RESULTS ──────────────────────────────────────────────────
  if (phase === "results" && result) {
    const scoreColor = result.score >= 80 ? "#10b981" : result.score >= 60 ? "#f59e0b" : "#ef4444";
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-28 h-28 rounded-full mb-4"
              style={{ background: `${scoreColor}15`, border: `3px solid ${scoreColor}` }}
            >
              <span className="text-3xl font-bold" style={{ color: scoreColor, fontFamily: "var(--font-space-mono)" }}>
                {result.score}%
              </span>
            </motion.div>
            <h2 className="text-2xl font-bold text-white mb-1">
              {result.passed ? "🎉 Pitch Passed!" : "📋 Keep Practicing"}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)" }}>
              {result.correctSelected.length} correct · {result.wrongSelected.length} wrong · {result.missedCorrect.length} missed
            </p>
          </div>

          {/* Point breakdown */}
          <div className="space-y-3 mb-8">
            {scenario.points.map((point) => {
              const wasSelected = selected.includes(point.id);
              let status: "correct-selected" | "wrong-selected" | "missed" | "avoided" = "avoided";
              if (wasSelected && point.isCorrect) status = "correct-selected";
              else if (wasSelected && !point.isCorrect) status = "wrong-selected";
              else if (!wasSelected && point.isCorrect) status = "missed";

              if (status === "avoided") return null;

              const colors = {
                "correct-selected": { bg: "rgba(16,185,129,0.12)", border: "#10b981", label: "✓ Great point!", color: "#10b981" },
                "wrong-selected": { bg: "rgba(239,68,68,0.12)", border: "#ef4444", label: "✗ Wrong choice", color: "#ef4444" },
                "missed": { bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.4)", label: "○ Missed opportunity", color: "#f59e0b" },
              }[status];

              return (
                <div key={point.id} className="p-4 rounded-xl" style={{ background: colors.bg, border: `1px solid ${colors.border}` }}>
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-sm font-bold" style={{ color: colors.color }}>{colors.label}</span>
                  </div>
                  <p className="text-sm mb-2" style={{ color: "rgba(255,255,255,0.8)" }}>{point.text}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{point.explanation}</p>
                </div>
              );
            })}
          </div>

          <div className="flex gap-3">
            <button onClick={() => { setSelected([]); setResult(null); setPhase("briefing"); }}
              className="flex-1 py-3 rounded-xl text-sm font-medium"
              style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}>
              Try Again
            </button>
            <button onClick={() => setPhase("select")}
              className="flex-1 py-3 rounded-xl text-sm font-bold"
              style={{ background: "#f59e0b", color: "#000" }}>
              Other Scenarios →
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
}
