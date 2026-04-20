import React from "react";
//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import WaveBackground from "../ui/WaveBackground";
import {
  BUTTON_STYLES,
  TIMINGS,
  COLOR_VALUES,
  LAYOUTS,
} from "../../constants/theme";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center text-center bg-mist-800 px-7 relative overflow-hidden">
      <WaveBackground />

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
              textShadow: `0 0 0px ${COLOR_VALUES.emeraldGlow}`,
              animation: `glow ${TIMINGS.glow} ease-in-out infinite`,
            }}
          >
            Komorebi
          </h1>
          <p className="mt-4 mb-7 text-lg text-mist-300">
            Experience the sounds of nature and find your inner peace with
            meditation.
          </p>
          <a
            className={`text-lg mt-6 ${BUTTON_STYLES.primary}`}
            style={{
              animation: `pulse-button ${TIMINGS.pulseButton} ease-in-out infinite`,
            }}
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
