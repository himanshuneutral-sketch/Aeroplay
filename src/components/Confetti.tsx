"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGameStore } from "@/hooks/useGameState";
import { CONFETTI_COLORS } from "@/lib/gameEngine";

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  duration: number;
  rotation: number;
  size: number;
  shape: "square" | "circle" | "rect";
}

function generatePieces(count: number): ConfettiPiece[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    delay: Math.random() * 0.8,
    duration: 2 + Math.random() * 1.5,
    rotation: Math.random() * 720 - 360,
    size: 6 + Math.random() * 8,
    shape: (["square", "circle", "rect"] as const)[Math.floor(Math.random() * 3)],
  }));
}

export default function Confetti() {
  const showConfetti = useGameStore((s) => s.showConfetti);
  const dismissConfetti = useGameStore((s) => s.dismissConfetti);
  const piecesRef = useRef<ConfettiPiece[]>([]);

  useEffect(() => {
    if (showConfetti) {
      piecesRef.current = generatePieces(80);
      const t = setTimeout(dismissConfetti, 4000);
      return () => clearTimeout(t);
    }
  }, [showConfetti, dismissConfetti]);

  return (
    <AnimatePresence>
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
          {piecesRef.current.map((piece) => (
            <motion.div
              key={piece.id}
              initial={{
                y: -20,
                x: `${piece.x}vw`,
                rotate: 0,
                opacity: 1,
              }}
              animate={{
                y: "110vh",
                rotate: piece.rotation,
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: piece.duration,
                delay: piece.delay,
                ease: "easeIn",
              }}
              style={{
                position: "absolute",
                top: 0,
                width: piece.shape === "rect" ? piece.size * 1.5 : piece.size,
                height: piece.shape === "rect" ? piece.size * 0.5 : piece.size,
                borderRadius: piece.shape === "circle" ? "50%" : piece.shape === "rect" ? 2 : 2,
                backgroundColor: piece.color,
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
