import { useState, useRef, useCallback } from "react";

export const useTimerLogic = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalId = useRef(null);

  const timerDisplay = useCallback(() => {
    const minutes = Math.floor(timer / 600);
    const seconds = Math.floor((timer % 600) / 10);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }, [timer]);

  const countdown = useCallback(() => {
    setTimer((prevTimer) => {
      if (prevTimer <= 0) {
        clearInterval(intervalId.current);
        setIsActive(false);
        return 0;
      }
      return prevTimer - 1;
    });
  }, []);

  const setPresetTimer = useCallback((seconds) => {
    if (isActive) return;
    setTimer(seconds);
  }, [isActive]);

  const startMeditation = useCallback(() => {
    if (isActive) return;
    setIsActive(true);
    intervalId.current = setInterval(countdown, 100);
  }, [isActive, countdown]);

  const pauseMeditation = useCallback(() => {
    setIsActive(false);
    clearInterval(intervalId.current);
  }, []);

  const resetTimer = useCallback(() => {
    setTimer(0);
    setIsActive(false);
    clearInterval(intervalId.current);
  }, []);

  const cleanup = useCallback(() => {
    clearInterval(intervalId.current);
  }, []);

  return {
    timer,
    isActive,
    timerDisplay,
    setPresetTimer,
    startMeditation,
    pauseMeditation,
    resetTimer,
    cleanup,
  };
};
