"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useGameStore } from "@/hooks/useGameState";

const AVATARS = ["✈️", "🌍", "🎬", "⭐", "🚀", "💼", "🎓", "🏆"];

export default function SettingsPageClient() {
  const userName = useGameStore((s) => s.userName);
  const avatar = useGameStore((s) => s.avatar);
  const xp = useGameStore((s) => s.xp);
  const level = useGameStore((s) => s.level);
  const badges = useGameStore((s) => s.badges);
  const scores = useGameStore((s) => s.scores);
  const setUserName = useGameStore((s) => s.setUserName);
  const setAvatar = useGameStore((s) => s.setAvatar);
  const resetProgress = useGameStore((s) => s.resetProgress);

  const [nameInput, setNameInput] = useState(userName);
  const [confirmReset, setConfirmReset] = useState(false);
  const [resetInput, setResetInput] = useState("");

  const completedModules = Object.values(scores).filter(Boolean).length;

  function handleSaveName() {
    setUserName(nameInput.trim());
  }

  function handleReset() {
    if (resetInput === "RESET") {
      resetProgress();
      setConfirmReset(false);
      setResetInput("");
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>

        {/* ── Profile ── */}
        <section className="p-6 rounded-2xl mb-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <h2 className="text-lg font-bold text-white mb-5">Profile</h2>

          {/* Avatar picker */}
          <div className="mb-5">
            <p className="text-sm mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Choose your avatar</p>
            <div className="flex gap-2 flex-wrap">
              {AVATARS.map((a) => (
                <button
                  key={a}
                  onClick={() => setAvatar(a)}
                  className="w-12 h-12 rounded-xl text-2xl flex items-center justify-center transition-all"
                  style={{
                    background: a === avatar ? "rgba(245,158,11,0.2)" : "rgba(255,255,255,0.05)",
                    border: `2px solid ${a === avatar ? "#f59e0b" : "transparent"}`,
                  }}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          {/* Name input */}
          <div>
            <p className="text-sm mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Display name</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Your name..."
                className="flex-1 px-4 py-2.5 rounded-xl text-sm text-white"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", outline: "none" }}
              />
              <button
                onClick={handleSaveName}
                className="px-4 py-2.5 rounded-xl text-sm font-medium"
                style={{ background: "rgba(245,158,11,0.15)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.3)" }}
              >
                Save
              </button>
            </div>
          </div>
        </section>

        {/* ── Progress Overview ── */}
        <section className="p-6 rounded-2xl mb-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <h2 className="text-lg font-bold text-white mb-4">Your Progress</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Total XP", value: xp.toLocaleString(), icon: "⚡" },
              { label: "Level", value: level, icon: "🎖️" },
              { label: "Modules Done", value: `${completedModules}/5`, icon: "📚" },
              { label: "Badges", value: badges.length, icon: "⭐" },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.04)" }}>
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-space-mono)" }}>{s.value}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Danger Zone ── */}
        <section className="p-6 rounded-2xl mb-6" style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)" }}>
          <h2 className="text-lg font-bold mb-2" style={{ color: "#ef4444" }}>Danger Zone</h2>
          <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
            Resetting progress will delete all XP, scores, badges, and section completion data. This cannot be undone.
          </p>
          {!confirmReset ? (
            <button
              onClick={() => setConfirmReset(true)}
              className="px-5 py-2.5 rounded-xl text-sm font-medium"
              style={{ background: "rgba(239,68,68,0.15)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.3)" }}
            >
              Reset All Progress
            </button>
          ) : (
            <div className="space-y-3">
              <p className="text-sm font-medium" style={{ color: "#ef4444" }}>
                Type <strong>RESET</strong> to confirm:
              </p>
              <input
                type="text"
                value={resetInput}
                onChange={(e) => setResetInput(e.target.value)}
                placeholder="RESET"
                className="w-full px-4 py-2.5 rounded-xl text-sm text-white"
                style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.4)", outline: "none" }}
              />
              <div className="flex gap-2">
                <button
                  onClick={() => { setConfirmReset(false); setResetInput(""); }}
                  className="flex-1 py-2.5 rounded-xl text-sm"
                  style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)" }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleReset}
                  disabled={resetInput !== "RESET"}
                  className="flex-1 py-2.5 rounded-xl text-sm font-bold disabled:opacity-40"
                  style={{ background: "#ef4444", color: "#fff" }}
                >
                  Confirm Reset
                </button>
              </div>
            </div>
          )}
        </section>

        {/* ── About ── */}
        <section className="p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <h2 className="text-lg font-bold text-white mb-4">About</h2>
          <div className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            <p>📱 Aeroplay Academy</p>
            <p>📅 Version 1.0 · February 2026</p>
            <p>🏢 Built for Aeroplay Entertainment Pte. Ltd.</p>
            <p>📍 Singapore HQ · aeroplaymedia.com</p>
            <p>✉️ info@aeroplaymedia.com</p>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
