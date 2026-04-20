import React, { useState, useEffect } from "react";
//eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import {
  validateMinuteInput,
  clampMinutes,
} from "../../../utils/timerValidation";
import { useTimerContext } from "../../../context/useTimerContext";

const TimerInput = ({ maxMinutes = 90 }) => {
  const { isActive, setPresetTimer } = useTimerContext();
  const [minuteInput, setMinuteInput] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handleMinuteInputChange = (e) => {
    const value = e.target.value;
    const { isValid, displayValue, isWarning } = validateMinuteInput(
      value,
      maxMinutes,
    );
    if (!isValid) return;
    setMinuteInput(displayValue);
    setShowWarning(isWarning);
  };

  useEffect(() => {
    if (showWarning) {
      const t = setTimeout(() => setShowWarning(false), 3000);
      return () => clearTimeout(t);
    }
  }, [showWarning]);

  const handleMinuteSubmit = () => {
    let minutes = parseInt(minuteInput, 10);
    if (!isNaN(minutes) && minutes > 0) {
      minutes = clampMinutes(minutes, maxMinutes);
      setPresetTimer(minutes * 60 * 10);
      setMinuteInput("");
    }
  };

  return (
    <div className="mb-3 flex flex-col gap-2 justify-center items-center">
      <div className="flex gap-2">
        <input
          type="text"
          inputMode="numeric"
          value={minuteInput}
          onChange={handleMinuteInputChange}
          placeholder="min"
          disabled={isActive}
          className="w-16 px-2 py-1 text-center bg-mist-700 text-emerald-400 border border-emerald-400 rounded placeholder-mist-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 disabled:opacity-50 disabled:cursor-default"
        />
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          onClick={handleMinuteSubmit}
          disabled={isActive || !minuteInput}
          className="px-3 py-1 bg-emerald-400 text-mist-800 rounded text-sm hover:bg-emerald-600 transition-colors duration-200 disabled:bg-mist-600 disabled:text-mist-400 cursor-pointer disabled:cursor-default disabled:opacity-50"
        >
          Set
        </motion.button>
      </div>
      <AnimatePresence>
        {showWarning && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-xs text-amber-400 absolute mt-16"
          >
            {`Max ${maxMinutes} minuti`}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TimerInput;
