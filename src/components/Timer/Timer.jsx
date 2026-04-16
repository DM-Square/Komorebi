import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalId = useRef(null);

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
    const audio = new Audio(src);
    audio.loop = true;
    audio.play();
  };

  useEffect(() => {
    document.body.classList.toggle("is-meditating", isActive);
  }, [isActive]);

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
      <div className="mb-6">
        {ambienceSounds.map((sound) => (
          <motion.button
            radioGroup="ambience"
            key={sound.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            className={`${isActive ? "bg-transparent disabled:cursor-default border-none text-transparent hover:bg-transparent active:bg-transparent" : ""} px-4 py-2 bg-transparent border-2 border-emerald-400 text-emerald-400 rounded-lg hover:bg-emerald-600 transition-all duration-400 cursor-pointer active:bg-emerald-700 active:scale-95 active:outline-none focus:outline-none focus:ring-5 focus:ring-emerald-800 mx-2`}
            disabled={isActive}
            onClick={() => setAmbienceSound(sound.src)}
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
          className={`${isActive ? "bg-transparent disabled:cursor-default text-transparent hover:bg-transparent active:bg-transparent" : ""}  px-4 py-2 bg-emerald-700 text-mist-800 rounded-lg hover:bg-emerald-600 transition-all duration-400 cursor-pointer active:bg-emerald-700 active:scale-95 active:outline-none focus:outline-none focus:ring-3 focus:ring-emerald-600 mt-4 ${timer <= 0 ? "bg-transparent border-emerald-600 border-2 disabled:text-emerald-600 disabled:cursor-default disabled:hover:bg-transparent disabled:hover:border-emerald-500 disabled:hover:text-emerald-500" : ""} `}
          disabled={isActive || timer <= 0}
        >
          Reset
        </motion.button>
      </div>
    </div>
  );
};

export default Timer;
