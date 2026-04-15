import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center bg-mist-700 px-7">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeIn" }}
        className="text-3xl text-emerald-400 font-medium hover:text-shadow-emerald-600 hover:text-shadow-custom transition-all duration-400"
      >
        木漏れ日
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeIn" }}
        className="text-6xl font-bold text-emerald-400 hover:text-shadow-emerald-600 hover:text-shadow-custom transition-all duration-400 "
      >
        Komorebi
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
        className="mt-4 text-lg text-mist-300"
      >
        Experience the sounds of nature and find your inner peace with
        meditation.
      </motion.p>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
        className="button mt-6 px-6 py-3 bg-emerald-400 text-neutral-900 rounded-lg hover:bg-emerald-600 transition-all duration-400 cursor-pointer active:bg-emerald-700 active:scale-95 active:outline-none focus:outline-none focus:ring-3 focus:ring-emerald-600"
      >
        Clear Your Mind
      </motion.a>
    </div>
  );
};

export default Hero;
