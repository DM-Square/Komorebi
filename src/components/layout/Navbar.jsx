import React, { useState, useEffect, useRef } from "react";
//eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import { COLORS } from "../../constants/theme";
import RotatingLogo from "./RotatingLogo";

const BASE_URL = import.meta.env.BASE_URL;

const links = [
  { label: "Home", href: `${BASE_URL}#/` },
  { label: "Meditate", href: `${BASE_URL}#/meditate` },
  { label: "About", href: `${BASE_URL}#/about` },
];

const linkClass = `hover:text-${COLORS.primary} px-2 transition-all duration-400 focus:outline-none focus:text-${COLORS.primaryHover} focus:text-shadow-sm focus:text-shadow-emerald-900`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      className={`${isOpen ? "bg-mist-700" : ""} md:bg-transparent navbar select-none flex fixed md:absolute w-full items-center justify-between p-4 bg-mist-800 z-50`}
      ref={ref}
    >
      <RotatingLogo />

      {/* Nav desktop */}
      <nav className="hidden md:flex md:justify-end md:px-3 space-x-4 py-2">
        {links.map((link) => (
          <a key={link.href} href={link.href} className={linkClass}>
            {link.label}
          </a>
        ))}
      </nav>

      {/* Nav mobile */}
      <div className="md:hidden ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-${COLORS.primary} rounded transition-all duration-400 ${isOpen ? "focus:ring-mist-800" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`block w-6 h-0.5 bg-${COLORS.primary} origin-center`}
          />
          <motion.span
            animate={
              isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
            }
            transition={{ duration: 0.2 }}
            className={`block w-6 h-0.5 bg-${COLORS.primary}`}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`block w-6 h-0.5 bg-${COLORS.primary} origin-center`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute overflow-hidden top-18 right-0 w-full bg-mist-800 z-50"
            >
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="last:border-b-2 last:border-emerald-400 "
                >
                  <a
                    href={link.href}
                    className={`block px-6 py-3 text-md text-right bg-mist-800 ${linkClass}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
