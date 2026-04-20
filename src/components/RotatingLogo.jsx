import React, { useState, useEffect } from "react";
//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { ASSETS } from "../constants/theme";

const RotatingLogo = () => {
  const [logoIndex, setLogoIndex] = useState(0);
  const logos = [ASSETS.img.komorebiLogo, ASSETS.img.komorebiLogoJp];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoIndex((prev) => (prev + 1) % logos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <motion.img
      key={logoIndex}
      src={logos[logoIndex]}
      alt="Komorebi Logo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3.5 }}
      className="flex px-3 object-contain w-30 h-10 md:w-40"
    />
  );
};

export default RotatingLogo;
