import React, { useEffect } from "react";
//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import SoundButtons from "./components/SoundButtons";
import TimerDisplay from "./components/TimerDisplay";
import TimerInput from "./components/TimerInput";
import ControlButtons from "./components/ControlButtons";
import { LAYOUTS } from "../../constants/theme";
import { useTimerContext } from "../../context/useTimerContext";

const Timer = () => {
  const { isActive } = useTimerContext();

  useEffect(() => {
    document.body.classList.toggle("is-meditating", isActive);
  }, [isActive]);

  return (
    <div className="flex select-none h-screen flex-col items-center justify-center text-center bg-transparent">
      {!isActive && (
        <>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-5xl text-emerald-400 font-bold mt-3 mb-4"
          >
            Meditate
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-xl text-mist-300 mb-6"
          >
            Choose an ambience sound, set a timer, and begin your meditation.
          </motion.p>
        </>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          borderColor: isActive ? "transparent" : "#10b981",
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={`flex flex-col items-center justify-center border-2 border-emerald-400 rounded-lg ${
          isActive ? "bg-transparent border-none p-0" : "bg-mist-800 p-6"
        }`}
      >
        {!isActive && (
          <>
            <SoundButtons />
            <motion.div
              animate={{ opacity: isActive ? 0 : 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={LAYOUTS.divider}
            />
          </>
        )}

        <TimerDisplay />

        {!isActive && (
          <>
            <TimerInput />
            <motion.div
              animate={{ opacity: isActive ? 0 : 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={LAYOUTS.divider}
            />
          </>
        )}

        <div className={isActive ? "mt-8" : ""}>
          <ControlButtons />
        </div>
      </motion.div>
    </div>
  );
};

export default Timer;
