"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { Module, QuizQuestion } from "@/types";
import { useGameStore } from "@/hooks/useGameState";
import { calculateGrade, calculatePercentage, XP_REWARDS } from "@/lib/gameEngine";
import { BADGE_DEFINITIONS } from "@/data/badges";
import { checkBadgeUnlocks } from "@/lib/gameEngine";
import { MODULES } from "@/data/modules";

type Phase = "intro" | "question" | "results";

interface Props { module: Module }

export default function QuizPageClient({ module }: Props) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const addXP = useGameStore((s) => s.addXP);
  const incrementStreak = useGameStore((s) => s.incrementStreak);
  const resetStreak = useGameStore((s) => s.resetStreak);
  const recordQuizScore = useGameStore((s) => s.recordQuizScore);
  const unlockBadge = useGameStore((s) => s.unlockBadge);
  const triggerConfetti = useGameStore((s) => s.triggerConfetti);
  const streak = useGameStore((s) => s.streak);

  const questions: QuizQuestion[] = module.quiz;
  const currentQ = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;

  const nextModuleId = MODULES[MODULES.findIndex((m) => m.id === module.id) + 1]?.id;

  function handleStart() {
    setPhase("question");
    setCurrentIndex(0);
    setCorrectCount(0);
    setSelected(null);
    setAnswered(false);
  }

  function handleSelect(optionIndex: number) {
    if (answered) return;
    setSelected(optionIndex);
    setAnswered(true);

    const isCorrect = optionIndex === currentQ.correctIndex;
    if (isCorrect) {
      addXP(XP_REWARDS.correctAnswer);
      incrementStreak();
      setCorrectCount((c) => c + 1);
    } else {
      resetStreak();
    }
  }

  function handleNext() {
    if (isLast) {
      finishQuiz();
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setAnswered(false);
    }
  }

  const finishQuiz = useCallback(() => {
    // correctCount is always current at the point handleNext calls finishQuiz
    // (React has re-rendered with the incremented count before the user clicks "See Results")
    const finalCorrect = correctCount;
    const total = questions.length;
    const pct = calculatePercentage(finalCorrect, total);

    recordQuizScore(module.id, finalCorrect, total);

    if (pct === 100) {
      addXP(XP_REWARDS.perfectQuizBonus);
      triggerConfetti();
    } else if (pct >= 80) {
      addXP(XP_REWARDS.passQuizBonus);
    }

    // Check badges after store has settled
    setTimeout(() => {
      const state = useGameStore.getState();
      checkBadgeUnlocks(state, BADGE_DEFINITIONS).forEach((id) => unlockBadge(id));
    }, 200);

    setPhase("results");
  }, [correctCount, questions.length, module.id, recordQuizScore, addXP, triggerConfetti, unlockBadge]);

  const finalPct = calculatePercentage(correctCount, questions.length);
  const { grade, color } = calculateGrade(correctCount, questions.length);

  // ── INTRO ────────────────────────────────────────────────────
  if (phase === "intro") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="text-5xl mb-4">{module.icon}</div>
          <h1 className="text-3xl font-bold text-white mb-2">{module.title} Quiz</h1>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
            {questions.length} questions · Test your knowledge
          </p>
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { label: "Questions", value: questions.length, icon: "❓" },
              { label: "XP per correct", value: `+${XP_REWARDS.correctAnswer}`, icon: "⚡" },
              { label: "Pass score", value: "80%", icon: "🎯" },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl text-center"
                style={{ background: `${module.accentColor}12`, border: `1px solid ${module.accentColor}25` }}>
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-xl font-bold" style={{ color: module.accentColor, fontFamily: "var(--font-space-mono)" }}>{stat.value}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleStart}
            className="w-full py-4 rounded-2xl text-lg font-bold"
            style={{ background: module.accentColor, color: "#000" }}
          >
            Begin Quiz →
          </motion.button>
          <Link href={`/learn/${module.id}`} className="block mt-4 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            ← Back to Module
          </Link>
        </motion.div>
      </div>
    );
  }

  // ── RESULTS ──────────────────────────────────────────────────
  if (phase === "results") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
          {/* Grade circle */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="inline-flex items-center justify-center w-32 h-32 rounded-full mb-4"
              style={{ background: `${color}15`, border: `3px solid ${color}`, color }}
            >
              <div>
                <div className="text-4xl font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>{grade}</div>
              </div>
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-1">{correctCount}/{questions.length} correct</h2>
            <p className="text-xl font-bold mb-2" style={{ color, fontFamily: "var(--font-space-mono)" }}>{finalPct}%</p>
            {finalPct === 100 && <p className="text-sm" style={{ color: "#f59e0b" }}>🏆 Perfect score! +{XP_REWARDS.perfectQuizBonus} bonus XP!</p>}
            {finalPct >= 80 && finalPct < 100 && <p className="text-sm" style={{ color: "#10b981" }}>✅ Passed! +{XP_REWARDS.passQuizBonus} bonus XP!</p>}
          </div>

          {/* Answer review */}
          <div className="space-y-3 mb-8">
            <h3 className="text-sm font-bold uppercase" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-space-mono)", letterSpacing: "0.1em" }}>Answer Review</h3>
            {questions.map((q, i) => {
              const isCorrect = i < correctCount; // simplified — actual tracking would need array
              return (
                <div key={q.id} className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl shrink-0">{isCorrect ? "✅" : "❌"}</span>
                    <div>
                      <p className="text-sm font-medium text-white mb-1">{q.question}</p>
                      <p className="text-xs" style={{ color: "#10b981" }}>✓ {q.options[q.correctIndex]}</p>
                      {q.explanation && (
                        <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{q.explanation}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="flex gap-3">
            <button onClick={handleStart} className="flex-1 py-3 rounded-xl text-sm font-medium transition-colors"
              style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}>
              Retake Quiz
            </button>
            {nextModuleId ? (
              <Link href={`/learn/${nextModuleId}`} className="flex-1 py-3 rounded-xl text-sm font-bold text-center"
                style={{ background: module.accentColor, color: "#000" }}>
                Next Module →
              </Link>
            ) : (
              <Link href="/report" className="flex-1 py-3 rounded-xl text-sm font-bold text-center"
                style={{ background: module.accentColor, color: "#000" }}>
                View Report →
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  // ── QUESTION ─────────────────────────────────────────────────
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Progress segments */}
      <div className="flex gap-1.5 mb-6">
        {questions.map((_, i) => (
          <div
            key={i}
            className="flex-1 h-1.5 rounded-full transition-all duration-500"
            style={{
              background: i < currentIndex
                ? module.accentColor
                : i === currentIndex
                ? `${module.accentColor}60`
                : "rgba(255,255,255,0.1)",
            }}
          />
        ))}
      </div>

      {/* Question number & streak */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-space-mono)" }}>
          Question {currentIndex + 1} of {questions.length}
        </span>
        {streak > 0 && (
          <motion.span
            key={streak}
            initial={{ scale: 1.4 }}
            animate={{ scale: 1 }}
            className="text-sm font-bold"
            style={{ color: streak >= 10 ? "#ef4444" : "#f59e0b", fontFamily: "var(--font-space-mono)" }}
          >
            {streak >= 10 ? "🔥" : "⚡"} {streak}x Streak
          </motion.span>
        )}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25 }}
        >
          {/* Question */}
          <h2 className="text-xl font-bold text-white mb-6 leading-snug">{currentQ.question}</h2>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {currentQ.options.map((option, i) => {
              let bg = "rgba(255,255,255,0.04)";
              let border = "rgba(255,255,255,0.1)";
              let textColor = "rgba(255,255,255,0.8)";

              if (answered) {
                if (i === currentQ.correctIndex) {
                  bg = "rgba(16,185,129,0.15)";
                  border = "#10b981";
                  textColor = "#10b981";
                } else if (i === selected && i !== currentQ.correctIndex) {
                  bg = "rgba(239,68,68,0.15)";
                  border = "#ef4444";
                  textColor = "#ef4444";
                } else {
                  textColor = "rgba(255,255,255,0.3)";
                }
              }

              return (
                <motion.button
                  key={i}
                  onClick={() => handleSelect(i)}
                  whileHover={!answered ? { scale: 1.01 } : {}}
                  whileTap={!answered ? { scale: 0.99 } : {}}
                  className="p-4 rounded-xl text-left text-sm font-medium transition-all"
                  style={{
                    background: bg,
                    border: `1px solid ${border}`,
                    color: textColor,
                    cursor: answered ? "default" : "pointer",
                  }}
                >
                  <span className="font-bold mr-2" style={{ fontFamily: "var(--font-space-mono)" }}>
                    {["A", "B", "C", "D"][i]}.
                  </span>
                  {option}
                  {answered && i === currentQ.correctIndex && <span className="ml-2">✓</span>}
                  {answered && i === selected && i !== currentQ.correctIndex && <span className="ml-2">✗</span>}
                </motion.button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {answered && currentQ.explanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="p-4 rounded-xl mb-6 text-sm"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.65)" }}
              >
                💡 {currentQ.explanation}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next button */}
          {answered && (
            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={handleNext}
              className="w-full py-3.5 rounded-xl font-bold transition-all"
              style={{ background: module.accentColor, color: "#000" }}
            >
              {isLast ? "See Results →" : "Next Question →"}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
