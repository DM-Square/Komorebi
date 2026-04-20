import React, { useEffect } from "react";
//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useTimerOrchestration } from "./hooks/useTimerOrchestration";
import SoundButtons from "./components/SoundButtons";
import TimerDisplay from "./components/TimerDisplay";
import ControlButtons from "./components/ControlButtons";
import { ASSETS, LAYOUTS } from "../../constants/theme";

const Timer = () => {
  const {
    timer,
    isActive,
    timerDisplay,
    selectedSound,
    handleSoundToggle,
    handleStartPause,
    handleReset,
    incrementTimer,
    decrementTimer,
    setPresetTimer,
  } = useTimerOrchestration();

  const ambienceSounds = [
    { label: "Forest", src: ASSETS.sounds.forest },
    { label: "Rain", src: ASSETS.sounds.rain },
    { label: "Waves", src: ASSETS.sounds.waves },
  ];

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
            <SoundButtons
              ambienceSounds={ambienceSounds}
              selectedSound={selectedSound}
              isActive={isActive}
              onSoundToggle={handleSoundToggle}
            />

            <motion.div
              animate={{ opacity: isActive ? 0 : 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={LAYOUTS.divider}
            />
          </>
        )}

        <TimerDisplay
          timerDisplay={timerDisplay}
          isActive={isActive}
          onIncrement={incrementTimer}
          onDecrement={decrementTimer}
          onSetTimer={setPresetTimer}
        />

        {!isActive && (
          <>
            <motion.div
              animate={{ opacity: isActive ? 0 : 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={LAYOUTS.divider}
            />
          </>
        )}

        <div className={isActive ? "mt-8" : ""}>
          <ControlButtons
            timer={timer}
            isActive={isActive}
            selectedSound={selectedSound}
            onStartPause={handleStartPause}
            onReset={handleReset}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Timer;
