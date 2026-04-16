import React from "react";
import { motion } from "motion/react";

const PresetButtons = ({ presetTimers, isActive, onPresetSelect }) => {
  return (
    <div className="mt-4">
      {presetTimers.map((dSeconds) => (
        <motion.button
          key={dSeconds}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeIn" }}
          onClick={() => onPresetSelect(dSeconds)}
          className={`${isActive ? "bg-transparent disabled:cursor-default text-transparent hover:bg-transparent active:bg-transparent" : ""} px-4 py-2 bg-emerald-400 text-mist-800 rounded-lg hover:bg-emerald-600 transition-all duration-400 cursor-pointer active:bg-emerald-700 active:scale-95 active:outline-none focus:outline-none focus:ring-3 focus:ring-emerald-600 mx-2`}
          disabled={isActive}
        >
          {dSeconds / (60 * 10)} min
        </motion.button>
      ))}
    </div>
  );
};

export default PresetButtons;
