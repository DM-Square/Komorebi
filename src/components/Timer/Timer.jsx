import React, { useEffect } from "react";
//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useTimerLogic } from "./hooks/useTimerLogic";
import { useAudioManager } from "./hooks/useAudioManager";
import SoundButtons from "./components/SoundButtons";
import TimerDisplay from "./components/TimerDisplay";
import ControlButtons from "./components/ControlButtons";
import PresetButtons from "./components/PresetButtons";

const Timer = () => {
  const { timer, isActive, timerDisplay, setPresetTimer, startMeditation, pauseMeditation, resetTimer, cleanup: cleanupTimer } = useTimerLogic();
  const { selectedSound, setAmbienceSound, stopAmbienceSound, cleanup: cleanupAudio } = useAudioManager();

  const presetTimers = [3000, 6000, 18000]; // 5 min, 10 min, 30 min
  const ambienceSounds = [
    { label: "Forest", src: "/src/assets/sounds/forest.mp3" },
    { label: "Rain", src: "/src/assets/sounds/rain.mp3" },
    { label: "Waves", src: "/src/assets/sounds/waves.mp3" },
  ];

  const handleSoundToggle = (src) => {
    if (selectedSound === src) {
      stopAmbienceSound();
    } else {
      setAmbienceSound(src, isActive);
    }
  };

  const handleStartPause = () => {
    if (isActive) {
      pauseMeditation();
    } else {
      startMeditation();
    }
  };

  const handleReset = () => {
    resetTimer();
    stopAmbienceSound();
  };

  useEffect(() => {
    document.body.classList.toggle("is-meditating", isActive);
  }, [isActive]);

  useEffect(() => {
    return () => {
      cleanupTimer();
      cleanupAudio();
    };
  }, [cleanupTimer, cleanupAudio]);

  return (
    <div className="flex select-none h-screen flex-col items-center justify-center text-center bg-mist-800 px-7">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
        className={`text-4xl text-emerald-400 font-bold mb-4 ${isActive ? "text-transparent" : ""} transition-all duration-400`}
      >
        Meditation Timer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
        className={`text-lg text-mist-300 mb-6 ${isActive ? "text-transparent" : ""} transition-all duration-400`}
      >
        Choose an ambience sound, set a timer, and begin your meditation.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
        className={`${isActive ? "border-transparent" : ""}  flex flex-col items-center border-2 border-emerald-400 transition-all duration-400 rounded-lg p-6`}
      >
        <SoundButtons
          ambienceSounds={ambienceSounds}
          selectedSound={selectedSound}
          isActive={isActive}
          onSoundToggle={handleSoundToggle}
        />

        <TimerDisplay timerDisplay={timerDisplay} isActive={isActive} />

        <ControlButtons
          timer={timer}
          isActive={isActive}
          selectedSound={selectedSound}
          onStartPause={handleStartPause}
          onReset={handleReset}
        />

        <PresetButtons
          presetTimers={presetTimers}
          isActive={isActive}
          onPresetSelect={setPresetTimer}
        />
      </motion.div>
    </div>
  );
};

export default Timer;
