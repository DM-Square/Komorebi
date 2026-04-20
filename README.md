# Komorebi 🌿

> **(木漏れ日)** — La bellezza della luce solare che filtra attraverso le foglie degli alberi.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Komorebi-10b981?style=for-the-badge)](https://dm-square.github.io/Komorebi)
[![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

Una web app moderna per facilitare la meditazione consapevole, con timer programmabile, suoni ambientali e un'interfaccia elegante.

![Screenshot di Komorebi](/public/assets/img/komorebi_home.png)

---

## 📋 Indice

- [Funzionalità](#-funzionalità)
- [Tech Stack](#-tech-stack)
- [Prerequisiti](#-prerequisiti)
- [Installazione](#-installazione)
- [Come usare](#-come-usare)
- [Architettura](#-architettura)
- [Personalizzazione](#-personalizzazione)
- [Comandi](#-comandi)
- [Test](#-test)
- [Info](#-info)

---

## ✨ Funzionalità

- **Timer programmabile** — Imposta i minuti tramite input
- **Controlli intuitivi** — Meditate, Pause, Reset
- **Suoni ambientali** — Forest, Rain, Waves
- **Breathing Circle** — Animazione visiva del ciclo respiratorio 4-7-8
- **Wave Background** — Animazione rilassante che aggiunge dinamicità allo sfondo
- **Design responsive** — Ottimizzato per mobile, tablet e desktop
- **Navigazione fluida** — Home, Meditate, About con animazioni
- **GitHub Pages ready** — Deploy con un comando

---

## 🛠️ Tech Stack

| Tecnologia | Utilizzo |
|---|---|
| **React 18** + Hooks | UI e logica custom hooks |
| **React Router v7** | Routing con HashRouter |
| **Context API** | State management globale |
| **Tailwind CSS** | Styling utility-first |
| **Framer Motion** | Animazioni fluide |
| **Vite** | Build tool |
| **Vitest** | Test runner |

---

## ✅ Prerequisiti

- Node.js >= 18.x
- npm >= 9.x

---

## 📦 Installazione

```bash
# Clona il repository
git clone https://github.com/DM-Square/Komorebi.git
cd Komorebi

# Installa le dipendenze e avvia il server di sviluppo
npm install
npm run dev
```

---

## 🚀 Come usare

### Home
Scopri Komorebi e i benefici della meditazione. Leggi il significato filosofico del progetto.

### Meditate
1. **Imposta il timer** — Digita minuti o utilizza i pulsanti +/-
2. **Scegli il suono** — Forest, Rain o Waves
3. **Inizia** — Clicca "Meditate"
4. **Segui il breathing circle** — Ciclo 4-7-8 (inhale → hold → exhale)
5. **Controlla la sessione** — Puoi mettere in pausa in ogni momento durante la meditazione

### About
Approfondimento sul termine Komorebi con breakdown del nome giapponese (Ko-Tree, More-Light, Bi-Sun) e call-to-action alla pagina di meditazione.

---

## 🎯 Architettura

```
src/
├── components/
│   ├── Timer/               # Componente principale (input, display, controlli)
│   │   ├── hooks/           # useTimerLogic, useAudioManager, useTimerOrchestration
│   │   └── components/      # TimerInput, ControlButtons, BreathingCircle...
│   ├── layout/              # Navbar, Hero, Footer, RotatingLogo
│   └── ui/                  # Card, Button, WaveBackground (riutilizzabili)
├── context/                 # TimerProvider, useTimerContext
├── pages/                   # Home, Meditate, About
├── constants/               # theme.js (colori, timing, assets)
├── utils/                   # timerValidation
└── test/                    # Test delle funzioni principali
```

Il Context API gestisce lo stato del timer globalmente; i custom hooks isolano la logica da React garantendo separazione dei concern e testabilità.

**Principi architetturali:** SRP, separazione dei concern, Context API, costanti centralizzate.

---

## 🎨 Personalizzazione

Tutti i valori sono centralizzati in `src/constants/theme.js`.

**Colori:**
```javascript
primary: "emerald-400"    // Verde principale
background: "mist-800"   // Grigio scuro
```

**Ciclo respiratorio:**
```javascript
totalDuration: 19000,     // 19 secondi totali
inhaleDuration: 4000,     // 4s inspirazione
holdDuration: 7000,       // 7s trattenimento
exhaleDuration: 8000,     // 8s espirazione
```

**Suoni:** Aggiungi file MP3 in `public/assets/sounds/` e aggiorna `theme.js`.

---

## 🎮 Comandi

```bash
npm run dev                  # Avvia il server di sviluppo
npm run build                # Build di produzione
npm run preview              # Preview locale (simula GitHub Pages)
npm run deploy               # Deploy su GitHub Pages
```

---

## 🧪 Test

Coverage attuale: `timerValidation.test.js`, `useTimerLogic.test.js`

```bash
npm run test                  # Esegui i test
```

---

## 👤 Info

Per qualsiasi domanda o curiosità, contattami qui → [dm-square.github.io](https://dm-square.github.io/)

**Buona meditazione! 🧘🏻**
