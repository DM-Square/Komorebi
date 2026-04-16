import React from "react";
//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const SoundButtons = ({ ambienceSounds, isActive, onSoundToggle }) => {
  return (
    <div className="mb-6">
      {ambienceSounds.map((sound) => (
        <motion.button
          radioGroup="ambience"
          key={sound.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className={`${isActive ? "bg-transparent disabled:cursor-default border-none text-transparent hover:bg-transparent active:bg-transparent" : ""} px-4 py-2 bg-transparent border-2 border-emerald-400 text-emerald-400 rounded-lg hover:bg-emerald-600 transition-all duration-400 cursor-pointer active:bg-emerald-700 active:scale-95 active:outline-none focus:outline-none focus:ring-5 focus:ring-emerald-800 mx-2 hover:text-mist-800`}
          disabled={isActive}
          onClick={() => onSoundToggle(sound.src)}
        >
          {sound.label}
        </motion.button>
      ))}
    </div>
  );
};

export default SoundButtons;
