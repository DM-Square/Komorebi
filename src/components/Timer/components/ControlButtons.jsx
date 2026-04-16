import React from "react";
import { motion } from "motion/react";

const ControlButtons = ({
  timer,
  isActive,
  selectedSound,
  onStartPause,
  onReset,
}) => {
  return (
    <>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
        onClick={onStartPause}
        className={`px-6 py-3 bg-emerald-400 text-mist-800 rounded-lg hover:bg-emerald-600 transition-all duration-400 cursor-pointer active:bg-emerald-700 active:scale-95 active:outline-none focus:outline-none focus:ring-3 focus:ring-emerald-600 ${timer <= 0 ? "bg-transparent border-emerald-600 border-2 disabled:text-emerald-600 disabled:cursor-default disabled:hover:bg-transparent disabled:hover:border-emerald-500 disabled:hover:text-emerald-500" : ""} `}
        disabled={timer <= 0 || !selectedSound}
      >
        {isActive
          ? "Pause"
          : timer > 0
            ? selectedSound
              ? "Meditate"
              : "Select Sound"
            : "Select Timer"}
      </motion.button>
      <div className="">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeIn" }}
          onClick={onReset}
          className={`${isActive ? "bg-transparent disabled:cursor-default text-transparent hover:bg-transparent active:bg-transparent" : ""}  px-4 py-2 bg-emerald-700 text-mist-800 rounded-lg hover:bg-emerald-600 transition-all duration-400 cursor-pointer active:bg-emerald-700 active:scale-95 active:outline-none focus:outline-none focus:ring-3 focus:ring-emerald-600 mt-4 ${timer <= 0 && !selectedSound ? "bg-transparent border-emerald-600 border-2 disabled:text-emerald-600 disabled:cursor-default disabled:hover:bg-transparent disabled:hover:border-emerald-500 disabled:hover:text-emerald-500" : ""} `}
          disabled={isActive || (timer <= 0 && !selectedSound)}
        >
          Reset
        </motion.button>
      </div>
    </>
  );
};

export default ControlButtons;
