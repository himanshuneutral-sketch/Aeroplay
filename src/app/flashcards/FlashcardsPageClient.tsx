"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FLASHCARDS } from "@/data/flashcards";
import { useGameStore } from "@/hooks/useGameState";
import { BADGE_DEFINITIONS } from "@/data/badges";
import { checkBadgeUnlocks } from "@/lib/gameEngine";

export default function FlashcardsPageClient() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [direction, setDirection] = useState(1);

  const flashcardsReviewed = useGameStore((s) => s.flashcardsReviewed);
  const reviewFlashcard = useGameStore((s) => s.reviewFlashcard);
  const unlockBadge = useGameStore((s) => s.unlockBadge);

  const card = FLASHCARDS[index];
  const reviewed = flashcardsReviewed.includes(card.id);
  const reviewedCount = flashcardsReviewed.length;
  const progress = (reviewedCount / FLASHCARDS.length) * 100;

  function flip() {
    setFlipped((f) => !f);
    if (!reviewed) {
      reviewFlashcard(card.id);
      setTimeout(() => {
        const state = useGameStore.getState();
        checkBadgeUnlocks(state, BADGE_DEFINITIONS).forEach((id) => unlockBadge(id));
      }, 200);
    }
  }

  function navigate(dir: 1 | -1) {
    const next = Math.max(0, Math.min(FLASHCARDS.length - 1, index + dir));
    if (next === index) return;
    setDirection(dir);
    setFlipped(false);
    setIndex(next);
  }

  const categoryColors: Record<string, string> = {
    Brand: "#f59e0b",
    "Key Differentiators": "#10b981",
    Technology: "#3b82f6",
    Leadership: "#8b5cf6",
    Industry: "#ef4444",
    Business: "#10b981",
    "Group Companies": "#f59e0b",
    Marketing: "#ef4444",
    About: "#f59e0b",
  };
  const cardColor = categoryColors[card.category ?? ""] ?? "#f59e0b";

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Flashcards</h1>
        <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
          {reviewedCount} of {FLASHCARDS.length} reviewed · +2 XP per new card
        </p>
        {/* Progress bar */}
        <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: "#10b981" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        {progress === 100 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm mt-2" style={{ color: "#10b981" }}>
            🧠 Memory Master badge unlocked!
          </motion.p>
        )}
      </div>

      {/* Card counter */}
      <div className="flex justify-center mb-4">
        <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-space-mono)" }}>
          {index + 1} / {FLASHCARDS.length}
        </span>
      </div>

      {/* Flashcard */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: direction * 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -30 }}
          transition={{ duration: 0.2 }}
          className="mb-8"
        >
          <div
            className="perspective-1000 cursor-pointer"
            onClick={flip}
            style={{ height: 260 }}
          >
            <motion.div
              className="preserve-3d relative w-full h-full"
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.55, type: "spring", stiffness: 90, damping: 14 }}
            >
              {/* Front */}
              <div
                className="backface-hidden absolute inset-0 rounded-2xl p-8 flex flex-col justify-between"
                style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${cardColor}30` }}
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: `${cardColor}15`, color: cardColor, fontFamily: "var(--font-space-mono)" }}>
                    {card.category}
                  </span>
                  {reviewed && <span className="text-xs" style={{ color: "#10b981" }}>✓ Reviewed</span>}
                </div>
                <div className="text-center">
                  <p className="text-xs mb-3 font-bold uppercase" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", fontFamily: "var(--font-space-mono)" }}>
                    Question
                  </p>
                  <p className="text-lg font-bold text-white leading-snug">{card.front}</p>
                </div>
                <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Tap to reveal answer
                </p>
              </div>

              {/* Back */}
              <div
                className="backface-hidden rotate-y-180 absolute inset-0 rounded-2xl p-8 flex flex-col justify-between"
                style={{ background: `${cardColor}10`, border: `1px solid ${cardColor}40` }}
              >
                <div>
                  <p className="text-xs mb-3 font-bold uppercase" style={{ color: cardColor, letterSpacing: "0.1em", fontFamily: "var(--font-space-mono)" }}>
                    Answer
                  </p>
                </div>
                <p className="text-base text-white leading-relaxed">{card.back}</p>
                <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Tap to flip back
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={() => navigate(-1)}
          disabled={index === 0}
          className="flex-1 py-3 rounded-xl font-medium transition-all disabled:opacity-30"
          style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          ← Previous
        </button>

        {/* Dot indicators */}
        <div className="flex gap-1">
          {FLASHCARDS.map((fc, i) => (
            <button
              key={fc.id}
              onClick={() => { if (i === index) return; setDirection(i > index ? 1 : -1); setFlipped(false); setIndex(i); }}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                background: i === index ? "#f59e0b" : flashcardsReviewed.includes(fc.id) ? "rgba(245,158,11,0.4)" : "rgba(255,255,255,0.15)",
                width: i === index ? 16 : 8,
              }}
            />
          ))}
        </div>

        <button
          onClick={() => navigate(1)}
          disabled={index === FLASHCARDS.length - 1}
          className="flex-1 py-3 rounded-xl font-medium transition-all disabled:opacity-30"
          style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
