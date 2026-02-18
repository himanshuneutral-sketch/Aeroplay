"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MODULES } from "@/data/modules";
import { useGameStore } from "@/hooks/useGameState";
import { calculateGrade, calculatePercentage, fisherYatesShuffle, XP_REWARDS } from "@/lib/gameEngine";
import type { QuizQuestion } from "@/types";

type Phase = "intro" | "playing" | "results";

const TIME_PER_QUESTION = 15;
const QUESTIONS_PER_ROUND = 10;

function getAllQuestions(): QuizQuestion[] {
  return MODULES.flatMap((m) => m.quiz);
}

export default function SpeedRoundPageClient() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [localStreak, setLocalStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [totalXP, setTotalXP] = useState(0);

  const addXP = useGameStore((s) => s.addXP);

  function startRound() {
    const all = getAllQuestions();
    const shuffled = fisherYatesShuffle(all).slice(0, QUESTIONS_PER_ROUND);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setCorrectCount(0);
    setLocalStreak(0);
    setBestStreak(0);
    setTotalXP(0);
    setSelected(null);
    setAnswered(false);
    setTimeLeft(TIME_PER_QUESTION);
    setPhase("playing");
  }

  const handleAnswer = useCallback((optionIndex: number | null) => {
    if (answered) return;
    setSelected(optionIndex);
    setAnswered(true);

    const q = questions[currentIndex];
    const isCorrect = optionIndex !== null && optionIndex === q.correctIndex;

    if (isCorrect) {
      const xpEarned = XP_REWARDS.speedRoundCorrect;
      addXP(xpEarned);
      setTotalXP((t) => t + xpEarned);
      setCorrectCount((c) => c + 1);
      setLocalStreak((s) => {
        const newS = s + 1;
        setBestStreak((b) => Math.max(b, newS));
        return newS;
      });
    } else {
      setLocalStreak(0);
    }
  }, [answered, questions, currentIndex, addXP]);

  // Timer countdown
  useEffect(() => {
    if (phase !== "playing" || answered) return;
    if (timeLeft <= 0) {
      handleAnswer(null); // timeout = wrong
      return;
    }
    const t = setInterval(() => setTimeLeft((tl) => tl - 1), 1000);
    return () => clearInterval(t);
  }, [phase, timeLeft, answered, handleAnswer]);

  // Auto-advance after answer
  useEffect(() => {
    if (!answered) return;
    const t = setTimeout(() => {
      if (currentIndex >= QUESTIONS_PER_ROUND - 1) {
        setPhase("results");
      } else {
        setCurrentIndex((i) => i + 1);
        setSelected(null);
        setAnswered(false);
        setTimeLeft(TIME_PER_QUESTION);
      }
    }, 1200);
    return () => clearTimeout(t);
  }, [answered, currentIndex]);

  const finalPct = calculatePercentage(correctCount, QUESTIONS_PER_ROUND);
  const { grade, color } = calculateGrade(correctCount, QUESTIONS_PER_ROUND);

  // Arc for timer
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const timerProgress = timeLeft / TIME_PER_QUESTION;
  const timerColor = timeLeft <= 5 ? "#ef4444" : "#f59e0b";

  // ── INTRO ────────────────────────────────────────────────────
  if (phase === "intro") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-6xl mb-4">⚡</div>
          <h1 className="text-3xl font-bold text-white mb-2">Speed Round</h1>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
            10 questions. 15 seconds each. No time to think — just know it.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { label: "Questions", value: QUESTIONS_PER_ROUND, icon: "❓" },
              { label: "Seconds each", value: TIME_PER_QUESTION, icon: "⏱" },
              { label: "XP per correct", value: `+${XP_REWARDS.speedRoundCorrect}`, icon: "⚡" },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-xl text-center" style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.25)" }}>
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-xl font-bold" style={{ color: "#8b5cf6", fontFamily: "var(--font-space-mono)" }}>{s.value}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
              </div>
            ))}
          </div>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={startRound}
            className="w-full py-4 rounded-2xl font-bold text-lg"
            style={{ background: "#8b5cf6", color: "#ffffff" }}>
            Start Speed Round ⚡
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // ── RESULTS ──────────────────────────────────────────────────
  if (phase === "results") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-28 h-28 rounded-full mb-6"
            style={{ background: `${color}15`, border: `3px solid ${color}` }}
          >
            <span className="text-4xl font-bold" style={{ color, fontFamily: "var(--font-space-mono)" }}>{grade}</span>
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-2">{correctCount}/{QUESTIONS_PER_ROUND} correct</h2>
          <p className="text-xl font-bold mb-8" style={{ color, fontFamily: "var(--font-space-mono)" }}>{finalPct}%</p>
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { label: "Accuracy", value: `${finalPct}%`, icon: "🎯" },
              { label: "Best Streak", value: `${bestStreak}x`, icon: "🔥" },
              { label: "XP Earned", value: `+${totalXP}`, icon: "⚡" },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-space-mono)" }}>{s.value}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
              </div>
            ))}
          </div>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={startRound}
            className="w-full py-4 rounded-xl font-bold"
            style={{ background: "#8b5cf6", color: "#ffffff" }}>
            Play Again ⚡
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // ── PLAYING ──────────────────────────────────────────────────
  const q = questions[currentIndex];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* HUD */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-space-mono)" }}>
          {currentIndex + 1} / {QUESTIONS_PER_ROUND}
        </span>
        {localStreak > 0 && (
          <motion.span key={localStreak} initial={{ scale: 1.4 }} animate={{ scale: 1 }}
            className="text-sm font-bold" style={{ color: localStreak >= 5 ? "#ef4444" : "#f59e0b", fontFamily: "var(--font-space-mono)" }}>
            {localStreak >= 5 ? "🔥" : "⚡"} {localStreak}x
          </motion.span>
        )}
        {/* Circular timer */}
        <div className="relative w-12 h-12">
          <svg width="48" height="48" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
            <motion.circle
              cx="40" cy="40" r={radius}
              fill="none"
              stroke={timerColor}
              strokeWidth="6"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - timerProgress)}
              strokeLinecap="round"
              style={{ transform: "rotate(-90deg)", transformOrigin: "40px 40px" }}
              transition={{ duration: 0.5, ease: "linear" }}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-sm font-bold"
            style={{ color: timerColor, fontFamily: "var(--font-space-mono)" }}>
            {timeLeft}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="flex gap-1 mb-6">
        {questions.map((_, i) => (
          <div key={i} className="flex-1 h-1 rounded-full"
            style={{ background: i < currentIndex ? "#8b5cf6" : i === currentIndex ? "rgba(139,92,246,0.5)" : "rgba(255,255,255,0.08)" }} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={currentIndex}
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
          <h2 className="text-xl font-bold text-white mb-6 leading-snug">{q.question}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {q.options.map((opt, i) => {
              let bg = "rgba(255,255,255,0.04)";
              let border = "rgba(255,255,255,0.1)";
              let textColor = "rgba(255,255,255,0.8)";

              if (answered) {
                if (i === q.correctIndex) { bg = "rgba(16,185,129,0.15)"; border = "#10b981"; textColor = "#10b981"; }
                else if (i === selected) { bg = "rgba(239,68,68,0.15)"; border = "#ef4444"; textColor = "#ef4444"; }
                else { textColor = "rgba(255,255,255,0.25)"; }
              }

              return (
                <motion.button key={i}
                  onClick={() => handleSelect(i)}
                  whileHover={!answered ? { scale: 1.01 } : {}}
                  className="p-4 rounded-xl text-left text-sm font-medium transition-all"
                  style={{ background: bg, border: `1px solid ${border}`, color: textColor, cursor: answered ? "default" : "pointer" }}>
                  <span className="font-bold mr-2" style={{ fontFamily: "var(--font-space-mono)" }}>{["A","B","C","D"][i]}.</span>
                  {opt}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );

  function handleSelect(i: number) { handleAnswer(i); }
}
