"use client";

import { useGameStore } from "./useGameState";

export interface StreakDisplay {
  count: number;
  isHot: boolean;      // 3+ streak
  isOnFire: boolean;   // 10+ streak
  label: string;
  emoji: string;
}

export function useStreak(): StreakDisplay {
  const streak = useGameStore((s) => s.streak);

  const isOnFire = streak >= 10;
  const isHot = streak >= 3;

  return {
    count: streak,
    isHot,
    isOnFire,
    label: isOnFire
      ? "ON FIRE!"
      : isHot
      ? `${streak}x Streak!`
      : streak > 0
      ? `${streak}x`
      : "—",
    emoji: isOnFire ? "🔥" : isHot ? "⚡" : "○",
  };
}
