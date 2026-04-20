import React, { useState, useEffect } from "react";
//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { BREATHING_CYCLES, BREATHING_CIRCLE } from "../../../constants/theme";

const BreathingCircle = ({ isActive }) => {
  const [phase, setPhase] = useState("inhale");

  useEffect(() => {
    if (!isActive) return;

    const startTime = Date.now();

    const updatePhase = () => {
      const elapsed = (Date.now() - startTime) % BREATHING_CYCLES.totalDuration;

      if (elapsed < BREATHING_CYCLES.inhaleDuration) setPhase("inhale");
      else if (elapsed < BREATHING_CYCLES.holdEndTime) setPhase("hold");
      else setPhase("exhale");

      requestAnimationFrame(updatePhase);
    };

    const frameId = requestAnimationFrame(updatePhase);
    return () => cancelAnimationFrame(frameId);
  }, [isActive]);

  if (!isActive) return null;

  // Animazione 4-7-8: inhale 4s, hold 7s, exhale 8s
  const breathingAnimation = {
    scale: BREATHING_CYCLES.scale,
    opacity: BREATHING_CYCLES.opacity,
    transition: {
      duration: BREATHING_CYCLES.totalDuration / 1000,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, BREATHING_CYCLES.inhalePercent, BREATHING_CYCLES.holdPercent, 1],
    },
  };

  return (
    <div className={BREATHING_CIRCLE.gap}>
      <motion.div
        className={BREATHING_CIRCLE.container}
        animate={breathingAnimation}
      />
      <div className={BREATHING_CIRCLE.labelContainer}>
        <motion.p
          className={BREATHING_CIRCLE.label}
          animate={{ opacity: phase === "inhale" ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          Inhale
        </motion.p>
        <motion.p
          className={BREATHING_CIRCLE.label}
          animate={{ opacity: phase === "hold" ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          Hold
        </motion.p>
        <motion.p
          className={BREATHING_CIRCLE.label}
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
