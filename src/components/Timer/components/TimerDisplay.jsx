import React from "react";
//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import BreathingCircle from "./BreathingCircle";
import { useTimerContext } from "../../../context/useTimerContext";

const TimerDisplay = () => {
  const { timerDisplay, isActive, incrementTimer, decrementTimer } = useTimerContext();

  return (
    <>
      <div className="flex items-center gap-6 mb-4">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          onClick={decrementTimer}
          disabled={isActive}
          className={`${isActive ? "text-transparent cursor-default" : "text-emerald-400 hover:text-emerald-300 cursor-pointer"} text-5xl transition-colors duration-200`}
        >
          -
        </motion.button>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="text-4xl font-mono text-mist-300"
        >
          {timerDisplay()}
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          onClick={incrementTimer}
          disabled={isActive}
          className={`${isActive ? "text-transparent cursor-default" : "text-emerald-400 hover:text-emerald-300 cursor-pointer"} text-4xl transition-colors duration-200`}
        >
          +
        </motion.button>
      </div>
      <BreathingCircle isActive={isActive} />
    </>
  );
};

export default TimerDisplay;
