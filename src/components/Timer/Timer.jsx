import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [selectedSound, setSelectedSound] = useState(null);
  const intervalId = useRef(null);
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  const presetTimers = [3000, 6000, 18000]; // 5 min, 10 min, 30 min
  const ambienceSounds = [
    { label: "Forest", src: "/src/assets/sounds/forest.mp3" },
    { label: "Rain", src: "/src/assets/sounds/rain.mp3" },
    { label: "Waves", src: "/src/assets/sounds/waves.mp3" },
  ];

  const timerDisplay = () => {
    const minutes = Math.floor(timer / 600);
    const seconds = Math.floor((timer % 600) / 10);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const setPresetTimer = (seconds) => {
    if (isActive) return;
    setTimer(seconds);
  };

  const resetTimer = () => {
    setTimer(0);
    setIsActive(false);
    clearInterval(intervalId.current);
    stopAmbienceSound();
  };

  const countdown = () => {
    if (timer <= 0) {
      clearInterval(intervalId.current);
      setIsActive(false);
      return;
    }
    setTimer((time) => time - 1);
  };

  const pauseMeditation = () => {
    setIsActive(false);
    clearInterval(intervalId.current);
  };

  const startMeditation = () => {
    if (isActive) return;
    setIsActive(true);
    intervalId.current = setInterval(countdown, 100);
  };

  const setAmbienceSound = (src) => {
    if (isActive) return;
    stopAmbienceSound();
    audioRef.current = new Audio(src);
    audioRef.current.volume = 0;
    audioRef.current.loop = true;
    audioRef.current.play();

    // Fade in del volume
    let volume = 0;
    fadeIntervalRef.current = setInterval(() => {
      volume += 0.1;
      if (volume >= 1) {
        audioRef.current.volume = 1;
        clearInterval(fadeIntervalRef.current);
      } else {
        audioRef.current.volume = volume;
      }
    }, 50);

    setSelectedSound(src);
  };

  const stopAmbienceSound = () => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    setSelectedSound(null);
  };

  useEffect(() => {
    document.body.classList.toggle("is-meditating", isActive);
  }, [isActive]);

  useEffect(() => {
    return () => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
      stopAmbienceSound();
      clearInterval(intervalId.current);
    };
  }, []);

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
      <div className="flex flex-col items-center border-2 border-emerald-400 rounded-lg p-6">
        <div className="mb-6">
          {ambienceSounds.map((sound) => (
            <motion.button
              radioGroup="ambience"
              key={sound.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeIn" }}
              className={`${isActive ? "bg-transparent disabled:cursor-default border-none text-transparent hover:bg-transparent active:bg-transparent" : ""} px-4 py-2 bg-transparent border-2 border-emerald-400 text-emerald-400 rounded-lg hover:bg-emerald-600 transition-all duration-400 cursor-pointer active:bg-emerald-700 active:scale-95 active:outline-none focus:outline-none focus:ring-5 focus:ring-emerald-800 mx-2 hover:text-mist-800`}
              disabled={isActive}
              onClick={() => {
                selectedSound === sound.src
                  ? stopAmbienceSound()
                  : setAmbienceSound(sound.src);
              }}
            >
              {sound.label}
            </motion.button>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeIn" }}
          className="text-4xl font-mono text-mist-300 mb-6"
        >
          {timerDisplay()}
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeIn" }}
          onClick={isActive ? pauseMeditation : startMeditation}
          className={`px-6 py-3 bg-emerald-400 text-mist-800 rounded-lg hover:bg-emerald-600 transition-all duration-400 cursor-pointer active:bg-emerald-700 active:scale-95 active:outline-none focus:outline-none focus:ring-3 focus:ring-emerald-600 ${timer <= 0 ? "bg-transparent border-emerald-600 border-2 disabled:text-emerald-600 disabled:cursor-default disabled:hover:bg-transparent disabled:hover:border-emerald-500 disabled:hover:text-emerald-500" : ""} `}
          disabled={timer <= 0}
        >
          {isActive ? "Pause" : timer > 0 ? "Meditate" : "Select Timer"}
        </motion.button>
        <div className="mt-4">
          {presetTimers.map((dSeconds) => (
            <motion.button
              key={dSeconds}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeIn" }}
              onClick={() => setPresetTimer(dSeconds)}
              className={`${isActive ? "bg-transparent disabled:cursor-default text-transparent hover:bg-transparent active:bg-transparent" : ""} px-4 py-2 bg-emerald-400 text-mist-800 rounded-lg hover:bg-emerald-600 transition-all duration-400 cursor-pointer active:bg-emerald-700 active:scale-95 active:outline-none focus:outline-none focus:ring-3 focus:ring-emerald-600 mx-2`}
              disabled={isActive}
            >
              {dSeconds / (60 * 10)} min
            </motion.button>
          ))}
        </div>
        <div className="">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            onClick={resetTimer}
            className={`${isActive ? "bg-transparent disabled:cursor-default text-transparent hover:bg-transparent active:bg-transparent" : ""}  px-4 py-2 bg-emerald-700 text-mist-800 rounded-lg hover:bg-emerald-600 transition-all duration-400 cursor-pointer active:bg-emerald-700 active:scale-95 active:outline-none focus:outline-none focus:ring-3 focus:ring-emerald-600 mt-4 ${timer <= 0 && !selectedSound ? "bg-transparent border-emerald-600 border-2 disabled:text-emerald-600 disabled:cursor-default disabled:hover:bg-transparent disabled:hover:border-emerald-500 disabled:hover:text-emerald-500" : ""} `}
            disabled={isActive || (timer <= 0 && !selectedSound)}
          >
            Reset
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
