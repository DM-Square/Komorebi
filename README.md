# Komorebi 🌿

> **(木漏れ日)** — The beauty of sunlight filtering through the leaves of trees.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Komorebi-10b981?style=for-the-badge)](https://dm-square.github.io/Komorebi)
[![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

A modern web app to facilitate mindful meditation, featuring a programmable timer, ambient sounds, and an elegant interface.

![Komorebi Screenshot](/public/assets/img/komorebi_home.png)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [How to Use](#-how-to-use)
- [Architecture](#-architecture)
- [Customization](#-customization)
- [Commands](#-commands)
- [Tests](#-tests)
- [Info](#-info)

---

## ✨ Features

- **Programmable timer** — Set minutes via input
- **Intuitive controls** — Meditate, Pause, Reset
- **Ambient sounds** — Forest, Rain, Waves
- **Breathing Circle** — Visual animation of the 4-7-8 breathing cycle
- **Wave Background** — A relaxing animation that adds dynamism to the background
- **Responsive design** — Optimized for mobile, tablet, and desktop
- **Smooth navigation** — Home, Meditate, About with animations
- **GitHub Pages ready** — Deploy with a single command

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **React 18** + Hooks | UI and custom hooks logic |
| **React Router v7** | Routing with HashRouter |
| **Context API** | Global state management |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Smooth animations |
| **Vite** | Build tool |
| **Vitest** | Test runner |

---

## ✅ Prerequisites

- Node.js >= 18.x
- npm >= 9.x

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/DM-Square/Komorebi.git
cd Komorebi

# Install dependencies and start the development server
npm install
npm run dev
```

---

## 🚀 How to Use

### Home
Discover Komorebi and the benefits of meditation. Read the philosophical meaning behind the project.

### Meditate
1. **Set the timer** — Type a value or use the +/- buttons
2. **Choose a sound** — Forest, Rain, or Waves
3. **Start** — Click "Meditate"
4. **Follow the breathing circle** — 4-7-8 cycle (inhale → hold → exhale)
5. **Control the session** — You can pause at any time during meditation

### About
A deeper look at the term Komorebi, with a breakdown of the Japanese name (Ko-Tree, More-Light, Bi-Sun) and a call-to-action to the meditation page.

---

## 🎯 Architecture

```
src/
├── components/
│   ├── Timer/               # Main component (input, display, controls)
│   │   ├── hooks/           # useTimerLogic, useAudioManager, useTimerOrchestration
│   │   └── components/      # TimerInput, ControlButtons, BreathingCircle...
│   ├── layout/              # Navbar, Hero, Footer, RotatingLogo
│   └── ui/                  # Card, Button, WaveBackground (reusable)
├── context/                 # TimerProvider, useTimerContext
├── pages/                   # Home, Meditate, About
├── constants/               # theme.js (colors, timing, assets)
├── utils/                   # timerValidation
└── test/                    # Tests for main functions
```

The Context API manages the timer state globally; custom hooks isolate the logic from React, ensuring separation of concerns and testability.

**Architectural principles:** SRP, separation of concerns, Context API, centralized constants.

---

## 🎨 Customization

All values are centralized in `src/constants/theme.js`.

**Colors:**
```javascript
primary: "emerald-400"    // Main green
background: "mist-800"   // Dark grey
```

**Breathing cycle:**
```javascript
totalDuration: 19000,     // 19 seconds total
inhaleDuration: 4000,     // 4s inhale
holdDuration: 7000,       // 7s hold
exhaleDuration: 8000,     // 8s exhale
```

**Sounds:** Add MP3 files to `public/assets/sounds/` and update `theme.js`.

---

## 🎮 Commands

```bash
npm run dev                  # Start the development server
npm run build                # Production build
npm run preview              # Local preview (simulates GitHub Pages)
npm run deploy               # Deploy to GitHub Pages
```

---

## 🧪 Tests

Current coverage: `timerValidation.test.js`, `useTimerLogic.test.js`

```bash
npm run test                  # Run tests
```

---

## 👤 Info

For any questions or curiosities, reach out here → [dm-square.github.io](https://dm-square.github.io/)

**Breathe deeply. 🧘🏻**
