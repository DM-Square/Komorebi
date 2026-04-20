import React, { useState, useEffect } from "react";
//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const BreathingCircle = ({ isActive }) => {
  const [phase, setPhase] = useState("inhale");

  useEffect(() => {
    if (!isActive) return;

    const startTime = Date.now();

    const updatePhase = () => {
      const elapsed = (Date.now() - startTime) % 19000; // 19 secondi in ms

      if (elapsed < 4000) setPhase("inhale");
      else if (elapsed < 11000) setPhase("hold");
      else setPhase("exhale");

      requestAnimationFrame(updatePhase);
    };

    const frameId = requestAnimationFrame(updatePhase);
    return () => cancelAnimationFrame(frameId);
  }, [isActive]);

  if (!isActive) return null;

  // Animazione 4-7-8: inhale 4s, hold 7s, exhale 8s
  const breathingAnimation = {
    scale: [1, 1.5, 1.5, 1],
    opacity: [0.3, 0.8, 0.6, 0.3],
    transition: {
      duration: 19,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 4 / 19, 11 / 19, 1],
    },
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-8 mb-8">
      <motion.div
        className="w-32 h-32 rounded-full border-4 border-emerald-400 bg-emerald-400 bg-opacity-10"
        animate={breathingAnimation}
      />
      <div className="relative h-8">
        <motion.p
          className="text-emerald-400 font-semibold text-lg absolute left-1/2 -translate-x-1/2 top-2"
          animate={{ opacity: phase === "inhale" ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          Inhale
        </motion.p>
        <motion.p
          className="text-emerald-400 font-semibold text-lg absolute left-1/2 -translate-x-1/2 top-2"
          animate={{ opacity: phase === "hold" ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          Hold
        </motion.p>
        <motion.p
          className="text-emerald-400 font-semibold text-lg absolute left-1/2 -translate-x-1/2 top-2"
          animate={{ opacity: phase === "exhale" ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          Exhale
        </motion.p>
      </div>
    </div>
  );
};

export default BreathingCircle;
