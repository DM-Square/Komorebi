import { useEffect, useRef } from "react";
import { useTimerLogic } from "./useTimerLogic";
import { useAudioManager } from "./useAudioManager";

export const useTimerOrchestration = () => {
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

  // Suona la bell quando il timer scade
  useEffect(() => {
    if (prevIsActiveRef.current && !isActive && timer === 0 && selectedSound) {
      stopAmbienceSound();
      playBellSound();
    }
    prevIsActiveRef.current = isActive;
  }, [timer, isActive, selectedSound, stopAmbienceSound, playBellSound]);

  // Cleanup all'unmount
  useEffect(() => {
    return () => {
      cleanupTimer();
      cleanupAudio();
    };
  }, [cleanupTimer, cleanupAudio]);

  // Event handlers
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
    if (newTimer <= 54000) setPresetTimer(newTimer); // Max 90 minuti
  };

  const decrementTimer = () => {
    if (isActive) return;
    const newTimer = timer - 600; // -1 minuto
    if (newTimer >= 0) setPresetTimer(newTimer);
  };

  return {
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
  };
};
