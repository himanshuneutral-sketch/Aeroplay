"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Module, Section } from "@/types";
import { useGameStore } from "@/hooks/useGameState";
import SectionRenderer from "@/components/SectionRenderer";

interface Props {
  module: Module;
}

export default function ModulePageClient({ module }: Props) {
  const router = useRouter();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const openModule = useGameStore((s) => s.openModule);
  const markSectionComplete = useGameStore((s) => s.markSectionComplete);
  const completedSections = useGameStore((s) => s.completedSections);

  useEffect(() => {
    openModule(module.id);
  }, [module.id, openModule]);

  const currentSection: Section = module.sections[currentSectionIndex];
  const isFirst = currentSectionIndex === 0;
  const isLast = currentSectionIndex === module.sections.length - 1;

  function goToSection(i: number) {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentSectionIndex(i);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setTransitioning(false), 350); // matches AnimatePresence duration
  }

  function handleNext() {
    markSectionComplete(currentSection.id);
    if (isLast) {
      router.push(`/quiz/${module.id}`);
    } else {
      goToSection(currentSectionIndex + 1);
    }
  }

  function handlePrev() {
    goToSection(currentSectionIndex - 1);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>›</span>
        <span style={{ color: module.accentColor }}>{module.title}</span>
      </div>

      <div className="flex gap-6">
        {/* ── Sidebar Section Navigator (Desktop) ── */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-20 space-y-1">
            <p className="text-xs font-bold uppercase mb-3" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-space-mono)", letterSpacing: "0.1em" }}>
              Sections
            </p>
            {module.sections.map((section, i) => {
              const done = completedSections[section.id];
              const active = i === currentSectionIndex;
              return (
                <button
                  key={section.id}
                  onClick={() => goToSection(i)}
                  className="w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all flex items-center gap-2"
                  style={{
                    background: active ? `${module.accentColor}15` : "transparent",
                    border: active ? `1px solid ${module.accentColor}30` : "1px solid transparent",
                    color: active ? module.accentColor : done ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.35)",
                  }}
                >
                  <span className="text-base shrink-0">{done ? "✅" : active ? "▶" : "○"}</span>
                  <span className="leading-tight">{section.title}</span>
                </button>
              );
            })}

            {/* Quiz link */}
            <div className="pt-3 mt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <Link
                href={`/quiz/${module.id}`}
                className="w-full block text-center text-sm font-bold py-2.5 rounded-xl transition-colors"
                style={{
                  background: `${module.accentColor}20`,
                  border: `1px solid ${module.accentColor}40`,
                  color: module.accentColor,
                }}
              >
                Take Quiz →
              </Link>
            </div>
          </div>
        </aside>

        {/* ── Main Content ── */}
        <div className="flex-1 min-w-0">
          {/* Module header */}
          <div
            className="rounded-2xl p-6 mb-6"
            style={{
              background: `linear-gradient(135deg, ${module.accentColor}15 0%, ${module.bgColor} 100%)`,
              border: `1px solid ${module.accentColor}20`,
            }}
          >
            <div className="flex items-center gap-3 mb-1">
              <span className="text-3xl">{module.icon}</span>
              <div>
                <h1 className="text-2xl font-bold text-white">{module.title}</h1>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{module.subtitle}</p>
              </div>
            </div>
            {/* Mobile progress dots */}
            <div className="flex gap-1.5 mt-4 lg:hidden">
              {module.sections.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goToSection(i)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{
                    background: i === currentSectionIndex
                      ? module.accentColor
                      : completedSections[s.id]
                      ? `${module.accentColor}60`
                      : "rgba(255,255,255,0.15)",
                    width: i === currentSectionIndex ? 24 : 8,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Section content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {/* Section header */}
              <div className="flex items-center gap-3 mb-6">
                {currentSection.icon && <span className="text-2xl">{currentSection.icon}</span>}
                <div>
                  <p className="text-xs font-medium mb-0.5" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-space-mono)" }}>
                    Section {currentSectionIndex + 1} of {module.sections.length}
                  </p>
                  <h2 className="text-xl font-bold text-white">{currentSection.title}</h2>
                </div>
              </div>

              <SectionRenderer content={currentSection.content} accentColor={module.accentColor} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <button
              onClick={handlePrev}
              disabled={isFirst || transitioning}
              className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all disabled:opacity-30"
              style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              ← Previous
            </button>

            <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-space-mono)" }}>
              {currentSectionIndex + 1} / {module.sections.length}
            </span>

            <motion.button
              onClick={handleNext}
              disabled={transitioning}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all disabled:opacity-60"
              style={{
                background: module.accentColor,
                color: "#000",
              }}
            >
              {isLast ? "Take Quiz →" : "Next Section →"}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
