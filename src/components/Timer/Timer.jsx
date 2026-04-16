import React, { useEffect, useRef } from "react";
//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useTimerLogic } from "./hooks/useTimerLogic";
import { useAudioManager } from "./hooks/useAudioManager";
import SoundButtons from "./components/SoundButtons";
import TimerDisplay from "./components/TimerDisplay";
import ControlButtons from "./components/ControlButtons";
import PresetButtons from "./components/PresetButtons";
import { ASSETS } from "../../constants/theme";

const Timer = () => {
  const {
    timer,
    isActive,
    timerDisplay,
    setPresetTimer,
    startMeditation,
    pauseMeditation,
    resetTimer,
    cleanup: cleanupTimer,
  } = useTimerLogic();
  const {
    selectedSound,
    setAmbienceSound,
    stopAmbienceSound,
    cleanup: cleanupAudio,
    playBellSound,
  } = useAudioManager();
  const prevIsActiveRef = useRef(false);

  const presetTimers = [3000, 6000, 18000]; // 5 min, 10 min, 30 min
  const ambienceSounds = [
    { label: "Forest", src: ASSETS.sounds.forest },
    { label: "Rain", src: ASSETS.sounds.rain },
    { label: "Waves", src: ASSETS.sounds.waves },
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

  const incrementTimer = () => {
    if (isActive) return;
    const newTimer = timer + 600; // +1 minuto
    if (newTimer <= 36000) setPresetTimer(newTimer); // Max 60 minuti
  };

  const decrementTimer = () => {
    if (isActive) return;
    const newTimer = timer - 600; // -1 minuto
    if (newTimer >= 0) setPresetTimer(newTimer);
  };

  useEffect(() => {
    document.body.classList.toggle("is-meditating", isActive);
  }, [isActive]);

  // Quando il timer scade, ferma il suono e suona la bell
  useEffect(() => {
    // Bell suona solo se la meditazione ERA attiva e ORA non lo è (transizione) e timer è 0
    if (prevIsActiveRef.current && !isActive && timer === 0 && selectedSound) {
      stopAmbienceSound();
      playBellSound();
    }
    prevIsActiveRef.current = isActive;
  }, [timer, isActive, selectedSound, stopAmbienceSound, playBellSound]);

  useEffect(() => {
    return () => {
      cleanupTimer();
      cleanupAudio();
    };
  }, [cleanupTimer, cleanupAudio]);

  return (
    <div className="flex select-none mt-3 h-screen flex-col items-center justify-center text-center bg-transparent px-7">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "linear" }}
        className={`text-4xl text-emerald-400 font-bold mb-4 ${isActive ? "text-transparent" : ""}`}
      >
        Meditate
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "linear" }}
        className={`text-lg text-mist-300 mb-6 ${isActive ? "text-transparent" : ""}`}
      >
        Choose an ambience sound, set a timer, and begin your meditation.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "linear" }}
        className={`${isActive ? "border-transparent" : ""} bg-mist-800 flex flex-col items-center border-2 border-emerald-400 rounded-lg p-6`}
      >
        <SoundButtons
          ambienceSounds={ambienceSounds}
          selectedSound={selectedSound}
          isActive={isActive}
          onSoundToggle={handleSoundToggle}
        />

        <TimerDisplay
          timerDisplay={timerDisplay}
          isActive={isActive}
          onIncrement={incrementTimer}
          onDecrement={decrementTimer}
        />

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
