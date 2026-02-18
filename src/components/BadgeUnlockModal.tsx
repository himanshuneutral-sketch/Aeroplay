"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useGameStore } from "@/hooks/useGameState";
import { getBadgeById } from "@/data/badges";

export default function BadgeUnlockModal() {
  const pendingBadge = useGameStore((s) => s.pendingBadge);
  const dismissBadge = useGameStore((s) => s.dismissBadge);

  const badge = pendingBadge ? getBadgeById(pendingBadge) : null;

  return (
    <AnimatePresence>
      {badge && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            className="pointer-events-auto flex flex-col items-center gap-4 p-8 rounded-3xl"
            style={{
              background: "rgba(10,22,40,0.97)",
              border: `2px solid ${badge.accentColor}`,
              boxShadow: `0 0 60px ${badge.accentColor}40`,
              maxWidth: 320,
            }}
            onClick={dismissBadge}
          >
            <div className="text-xs font-bold tracking-widest uppercase" style={{ color: badge.accentColor, fontFamily: "var(--font-space-mono)" }}>
              Badge Unlocked!
            </div>
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.8, repeat: 2 }}
              className="text-7xl"
            >
              {badge.icon}
            </motion.div>
            <div className="text-center">
              <div className="text-xl font-bold text-white mb-1">{badge.name}</div>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{badge.description}</div>
            </div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Tap to dismiss</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
