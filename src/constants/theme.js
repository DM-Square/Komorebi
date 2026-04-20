// Base URL per i file pubblici
const BASE_URL = import.meta.env.BASE_URL;

// Colori - classi Tailwind CSS
export const COLORS = {
  primary: "emerald-400",
  primaryHover: "emerald-600",
  primaryActive: "emerald-700",
  primaryFocus: "emerald-800",
  primaryLight: "emerald-300",
  background: "mist-800",
  backgroundLight: "mist-700",
  textPrimary: "mist-300",
  textInverse: "mist-800",
  textSecondary: "emerald-300",
  textDisabled: "mist-400",
  transparent: "transparent",
};

// Valori dei colori in RGB
export const COLOR_VALUES = {
  emerald400: "rgba(16, 185, 129, 1)",
  emeraldGlow: "rgba(16, 185, 129, 0.5)",
  emerald300: "rgba(52, 211, 153, 1)",
  emeraldScrollbar: "rgb(52, 211, 153)",
  mistGradientEnd: "rgba(24, 59, 50, 0)",
  amberGlow: "rgba(254, 243, 199, 0.6)",
  yellowGlow: "rgba(250, 204, 21, 0.6)",
};

// Livelli di opacità delle waves di background
export const WAVE_OPACITY = {
  primary: 0.3,
  secondary: 0.2,
  tertiary: 0.1,
};

// Breathing Circle
export const BREATHING_CIRCLE = {
  container:
    "w-32 h-32 mt-4 rounded-full border-4 border-emerald-400 bg-emerald-400 bg-opacity-10",
  label:
    "text-emerald-400 font-semibold text-lg absolute left-1/2 -translate-x-1/2 top-2",
  labelContainer: "relative h-8",
  gap: "flex flex-col items-center gap-6 mb-2",
};

// Animazione del breathing circle
export const BREATHING_CYCLES = {
  totalDuration: 19000, // ms - 4s inhale + 7s hold + 8s exhale
  inhaleDuration: 4000,
  holdEndTime: 11000, // 4s + 7s
  inhalePercent: 4 / 19,
  holdPercent: 11 / 19,
  scale: [0.8, 1.25, 1.25, 0.8],
  opacity: [0.3, 0.8, 0.55, 0.3],
};

// Typography
export const TYPOGRAPHY = {
  heading1: "text-6xl font-bold text-emerald-400",
  heading2: "text-5xl font-bold text-emerald-400 mb-6",
  heading3: "text-4xl font-bold text-emerald-400 mb-6",
  subheading: "text-xl text-mist-300 mb-6 leading-relaxed",
  body: "text-lg text-mist-300",
  bodyRelaxed: "text-lg text-mist-300 leading-relaxed",
  centered: "flex flex-col items-center justify-center text-center",
};

// Layout
export const LAYOUTS = {
  heroSection:
    "flex h-screen flex-col items-center justify-center text-center bg-mist-800 px-7 relative overflow-hidden",
  pageSection:
    "h-screen snap-start flex flex-col items-center justify-center text-center bg-mist-800 px-7 relative",
  divider: "w-full h-0.5 bg-emerald-400 bg-opacity-30 my-4",
};

// Durate animazioni
export const TIMINGS = {
  motionEnter: 1,
  transitionSmooth: "duration-400",
  transitionFast: "duration-200",
  transitionSmooth300: "duration-300",
  glow: "3s",
  pulseButton: "2s",
};

// Buttons
export const BUTTON_STYLES = {
  primary:
    "px-6 py-3 bg-emerald-400 text-mist-800 rounded-lg hover:bg-emerald-600 transition-all duration-400 cursor-pointer active:bg-emerald-700 active:scale-95 active:outline-none focus:outline-none focus:ring-3 focus:ring-emerald-800",
  small:
    "px-3 py-2 bg-emerald-400 text-mist-800 rounded-lg hover:bg-emerald-600 transition-all duration-400 cursor-pointer active:scale-95 active:outline-none focus:outline-none focus:ring-5 focus:ring-emerald-800",
  sound:
    "px-3 py-2 rounded-lg transition-all duration-400 active:scale-95 active:outline-none focus:outline-none focus:ring-5 focus:ring-emerald-800 mx-2 bg-emerald-400 text-mist-800 hover:bg-emerald-600 cursor-pointer",
  disabled:
    "px-6 py-3 bg-transparent border-emerald-600 border-2 text-emerald-600 rounded-lg hover:border-emerald-500 hover:text-emerald-500 cursor-not-allowed",
  secondary:
    "px-8 py-4 bg-emerald-400 text-mist-800 rounded-lg hover:bg-emerald-600 transition-all duration-400 font-semibold text-lg cursor-pointer active:bg-emerald-700 active:scale-95 active:outline-none focus:outline-none focus:ring-3 focus:ring-emerald-800",
};

// Control Buttons
export const CONTROL_BUTTON_STYLES = {
  startPause: {
    enabled: "bg-emerald-400 text-mist-800 hover:bg-emerald-600 cursor-pointer",
    disabled:
      "bg-transparent border-emerald-600 border-2 text-emerald-600 hover:border-emerald-500 hover:text-emerald-500 cursor-not-allowed",
    base: "px-6 py-3 rounded-lg hover:transition-all duration-400 active:scale-95 active:outline-none focus:outline-none focus:ring-3",
  },
  reset: {
    enabled:
      "px-4 py-2 bg-emerald-700 text-mist-800 rounded-lg hover:bg-emerald-600 transition-all duration-400 cursor-pointer active:bg-emerald-700 active:scale-95 active:outline-none focus:outline-none focus:ring-3 focus:ring-emerald-600 mt-4",
    disabled:
      "bg-transparent border-emerald-600 border-2 disabled:text-emerald-600 disabled:cursor-default disabled:hover:bg-transparent disabled:hover:border-emerald-500 disabled:hover:text-emerald-500",
  },
};

// Asset Paths
export const ASSETS = {
  sounds: {
    forest: `${BASE_URL}assets/sounds/forest.mp3`,
    rain: `${BASE_URL}assets/sounds/rain.mp3`,
    waves: `${BASE_URL}assets/sounds/waves.mp3`,
    bell: `${BASE_URL}assets/sounds/bell.mp3`,
  },
  img: {
    komorebiLogo: `${BASE_URL}assets/img/komorebi_logo.png`,
    komorebiLogoJp: `${BASE_URL}assets/img/komorebi_logo_jp.png`,
  },
};

// Suoni ambientali
export const AMBIENCE_SOUNDS = [
  { label: "Forest", src: ASSETS.sounds.forest },
  { label: "Rain", src: ASSETS.sounds.rain },
  { label: "Waves", src: ASSETS.sounds.waves },
];

// Config delle waves
export const WAVE_CONFIG = {
  waves: [
    {
      viewBox: "0 0 1200 120",
      path: "M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z",
      fill: `rgba(16, 185, 129, ${WAVE_OPACITY.primary})`,
      animation: "wave1",
      duration: "15s",
      marginTop: "0px",
    },
    {
      viewBox: "0 0 1200 120",
      path: "M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z",
      fill: `rgba(16, 185, 129, ${WAVE_OPACITY.secondary})`,
      animation: "wave2",
      duration: "10s",
      marginTop: "10px",
    },
    {
      viewBox: "0 0 1200 120",
      path: "M0,40 Q300,10 600,40 T1200,40 L1200,120 L0,120 Z",
      fill: `rgba(16, 185, 129, ${WAVE_OPACITY.tertiary})`,
      animation: "wave3",
      duration: "8s",
      marginTop: "20px",
    },
  ],
};
