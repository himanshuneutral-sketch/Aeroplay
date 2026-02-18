"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { calculateLevel, calculateGrade, calculatePercentage, XP_REWARDS } from "@/lib/gameEngine";
import type { GameState, GameActions } from "@/types";

const INITIAL_STATE: GameState = {
  xp: 0,
  level: 1,
  streak: 0,
  maxStreak: 0,
  badges: [],
  scores: {
    about: null,
    clients: null,
    differentiators: null,
    marketing: null,
    tech: null,
  },
  pitchScores: {},
  flashcardsReviewed: [],
  completedSections: {},
  openedModules: [],
  showConfetti: false,
  pendingBadge: null,
  userName: "",
  avatar: "✈️",
};

type GameStore = GameState & GameActions;

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      ...INITIAL_STATE,

      addXP: (amount: number) => {
        set((state) => {
          const newXP = state.xp + amount;
          const newLevel = calculateLevel(newXP);
          return { xp: newXP, level: newLevel };
        });
      },

      incrementStreak: () => {
        set((state) => {
          const newStreak = state.streak + 1;
          return {
            streak: newStreak,
            maxStreak: Math.max(state.maxStreak, newStreak),
          };
        });
      },

      resetStreak: () => set({ streak: 0 }),

      recordQuizScore: (moduleId: string, correct: number, total: number) => {
        const pct = calculatePercentage(correct, total);
        const { grade, color } = calculateGrade(correct, total);
        set((state) => ({
          scores: {
            ...state.scores,
            [moduleId]: { correct, total, percentage: pct, grade, gradeColor: color },
          },
        }));
      },

      recordPitchScore: (scenarioId: string, score: number) => {
        set((state) => ({
          pitchScores: { ...state.pitchScores, [scenarioId]: score },
        }));
      },

      reviewFlashcard: (cardId: string) => {
        const state = get();
        if (state.flashcardsReviewed.includes(cardId)) return;
        set((s) => ({
          flashcardsReviewed: [...s.flashcardsReviewed, cardId],
        }));
        get().addXP(XP_REWARDS.reviewFlashcard);
      },

      unlockBadge: (badgeId: string) => {
        const state = get();
        if (state.badges.includes(badgeId)) return;
        set((s) => ({
          badges: [...s.badges, badgeId],
          pendingBadge: badgeId,
        }));
      },

      markSectionComplete: (sectionId: string) => {
        const state = get();
        if (state.completedSections[sectionId]) return;
        set((s) => ({
          completedSections: { ...s.completedSections, [sectionId]: true },
        }));
        get().addXP(XP_REWARDS.completeSection);
      },

      openModule: (moduleId: string) => {
        const state = get();
        if (state.openedModules.includes(moduleId)) return;
        set((s) => ({
          openedModules: [...s.openedModules, moduleId],
        }));
        get().addXP(XP_REWARDS.openModule);
      },

      triggerConfetti: () => set({ showConfetti: true }),

      dismissConfetti: () => set({ showConfetti: false }),

      dismissBadge: () => set({ pendingBadge: null }),

      resetProgress: () => set({ ...INITIAL_STATE }),

      setUserName: (name: string) => set({ userName: name }),

      setAvatar: (avatar: string) => set({ avatar }),
    }),
    {
      name: "aeroplay-game-state",
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? localStorage : (null as unknown as Storage)
      ),
      skipHydration: true,
    }
  )
);

// Hydrate on client after mount
if (typeof window !== "undefined") {
  useGameStore.persist.rehydrate();
}
