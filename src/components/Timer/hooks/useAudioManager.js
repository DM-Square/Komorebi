import { useState, useRef, useCallback, useEffect } from "react";
import { ASSETS, AMBIENCE_SOUNDS } from "../../../constants/theme";

export const useAudioManager = () => {
  const [selectedSound, setSelectedSound] = useState(null);
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);
  const preloadedAudios = useRef({});
  const bellAudioRef = useRef(null);

  // Precaricare i suoni al mount
  useEffect(() => {
    const audios = {};
    AMBIENCE_SOUNDS.forEach((sound) => {
      const audio = new Audio(sound.src);
      audio.volume = 0;
      audio.loop = true;
      audios[sound.src] = audio;
    });
    preloadedAudios.current = audios;

    // Carica il suono della bell
    const bellAudio = new Audio(ASSETS.sounds.bell);
    bellAudio.volume = 1;
    bellAudioRef.current = bellAudio;

    return () => {
      Object.values(audios).forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
      });
      if (bellAudioRef.current) {
        bellAudioRef.current.pause();
        bellAudioRef.current.currentTime = 0;
      }
    };
  }, []);

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

    // Usa l'audio precaricato
    audioRef.current = preloadedAudios.current[src];
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;
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

  const playBellSound = useCallback(() => {
    if (bellAudioRef.current) {
      bellAudioRef.current.currentTime = 0;
      bellAudioRef.current.play();
    }
  }, []);

  return {
    selectedSound,
    setAmbienceSound,
    stopAmbienceSound,
    cleanup,
    playBellSound,
  };
};
