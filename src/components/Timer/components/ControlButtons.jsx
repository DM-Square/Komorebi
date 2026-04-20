import React from "react";
//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { CONTROL_BUTTON_STYLES } from "../../../constants/theme";
import { useTimerContext } from "../../../context/useTimerContext";

const ControlButtons = () => {
  const { timer, isActive, selectedSound, handleStartPause, handleReset } = useTimerContext();

  const isDisabled = timer <= 0 || !selectedSound;
  const isResetDisabled = isActive || (timer <= 0 && !selectedSound);

  const getStartPauseClass = () => {
    const { base, enabled, disabled } = CONTROL_BUTTON_STYLES.startPause;
    const state = isDisabled ? disabled : enabled;
    return `${base} ${state}`;
  };

  const getResetClass = () => {
    const { enabled, disabled } = CONTROL_BUTTON_STYLES.reset;
    let classes = enabled;
    if (isResetDisabled) classes += ` ${disabled}`;
    return classes;
  };

  const getStartPauseLabel = () => {
    if (isActive) return "Pause";
    if (timer > 0) return selectedSound ? "Meditate" : "Select Sound";
    return "Select Timer";
  };

  return (
    <>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        onClick={handleStartPause}
        className={getStartPauseClass()}
        disabled={isDisabled}
      >
        {getStartPauseLabel()}
      </motion.button>
      <div className="">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 0 : 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onClick={handleReset}
          className={getResetClass()}
          disabled={isResetDisabled}
        >
          Reset
        </motion.button>
      </div>
    </>
  );
};

export default ControlButtons;
