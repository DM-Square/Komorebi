import { useState, useRef, useCallback } from "react";

export const useAudioManager = () => {
  const [selectedSound, setSelectedSound] = useState(null);
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  const stopAmbienceSound = useCallback(() => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    setSelectedSound(null);
  }, []);

  const setAmbienceSound = useCallback((src, isActive) => {
    if (isActive) return;
    stopAmbienceSound();
    audioRef.current = new Audio(src);
    audioRef.current.volume = 0;
    audioRef.current.loop = true;
    audioRef.current.play();

    // Fade in del volume
    let volume = 0;
    fadeIntervalRef.current = setInterval(() => {
      volume += 0.02;
      if (volume >= 1) {
        audioRef.current.volume = 1;
        clearInterval(fadeIntervalRef.current);
      } else {
        audioRef.current.volume = volume;
      }
    }, 50);

    setSelectedSound(src);
  }, [stopAmbienceSound]);

  const cleanup = useCallback(() => {
    stopAmbienceSound();
  }, [stopAmbienceSound]);

  return {
    selectedSound,
    setAmbienceSound,
    stopAmbienceSound,
    cleanup,
  };
};
