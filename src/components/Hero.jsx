import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center text-center bg-mist-800 px-7 relative overflow-hidden">
      {/* Animated waves background */}
      <div className="absolute inset-0 opacity-20 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ animation: "wave1 15s ease-in-out infinite" }}
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="rgba(16, 185, 129, 0.3)"
          />
        </svg>
      </div>
      <div
        className="absolute inset-0 opacity-20 z-0"
        style={{ marginTop: "10px" }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ animation: "wave2 10s ease-in-out infinite" }}
        >
          <path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="rgba(16, 185, 129, 0.2)"
          />
        </svg>
      </div>
      <div
        className="absolute inset-0 opacity-20 z-0"
        style={{ marginTop: "20px" }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ animation: "wave3 8s ease-in-out infinite" }}
        >
          <path
            d="M0,40 Q300,10 600,40 T1200,40 L1200,120 L0,120 Z"
            fill="rgba(16, 185, 129, 0.1)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <div className="text-3xl text-emerald-400 font-medium hover:text-shadow-emerald-600 hover:text-shadow-custom transition-all duration-400">
            木漏れ日
          </div>

          <h1
            className="text-6xl font-bold text-emerald-400 hover:text-shadow-emerald-600 hover:text-shadow-custom transition-all duration-400"
            style={{
              textShadow: "0 0 0px rgba(16, 185, 129, 0.5)",
              animation: "glow 3s ease-in-out infinite",
            }}
          >
            Komorebi
          </h1>
          <p className="mt-4 mb-7 text-lg text-mist-300">
            Experience the sounds of nature and find your inner peace with
            meditation.
          </p>
          <a
            className="text-lg mt-6 px-6 py-3 bg-emerald-400 text-neutral-900 rounded-lg hover:bg-emerald-600 cursor-pointer active:bg-emerald-700 active:scale-95 active:outline-none focus:outline-none focus:ring-3 focus:ring-emerald-600 transition-all duration-400"
            style={{ animation: "pulse-button 2s ease-in-out infinite" }}
            onClick={() => navigate("/meditate")}
          >
            Clear Your Mind
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
