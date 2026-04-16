import React from "react";
import { motion } from "motion/react";
import BreathingCircle from "./BreathingCircle";

const TimerDisplay = ({ timerDisplay, isActive }) => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
        className="text-4xl font-mono text-mist-300 mb-6"
      >
        {timerDisplay()}
      </motion.p>
      <BreathingCircle isActive={isActive} />
    </>
  );
};

export default TimerDisplay;
