// Colors - Tailwind class names
export const COLORS = {
  primary: "emerald-400",
  primaryHover: "emerald-600",
  primaryActive: "emerald-700",
  primaryFocus: "emerald-800",
  background: "mist-800",
  backgroundLight: "mist-700",
  textPrimary: "mist-300",
  textInverse: "mist-800",
  transparent: "transparent",
};

// Animation Timings (seconds)
export const TIMINGS = {
  motionEnter: 1,
  transitionSmooth: "duration-400",
};

// Asset Paths
export const ASSETS = {
  sounds: {
    forest: "/src/assets/sounds/forest.mp3",
    rain: "/src/assets/sounds/rain.mp3",
    waves: "/src/assets/sounds/waves.mp3",
    bell: "/src/assets/sounds/bell.mp3",
  },
  img: {
    komorebiLogo: "/src/assets/img/komorebi_logo.png",
    komorebiLogoJp: "/src/assets/img/komorebi_logo_jp.png",
  },
};

// Wave Configuration
export const WAVE_CONFIG = {
  waves: [
    {
      viewBox: "0 0 1200 120",
      path: "M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z",
      fill: "rgba(16, 185, 129, 0.3)",
      animation: "wave1",
      duration: "15s",
      marginTop: "0px",
    },
    {
      viewBox: "0 0 1200 120",
      path: "M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z",
      fill: "rgba(16, 185, 129, 0.2)",
      animation: "wave2",
      duration: "10s",
      marginTop: "10px",
    },
    {
      viewBox: "0 0 1200 120",
      path: "M0,40 Q300,10 600,40 T1200,40 L1200,120 L0,120 Z",
      fill: "rgba(16, 185, 129, 0.1)",
      animation: "wave3",
      duration: "8s",
      marginTop: "20px",
    },
  ],
};
