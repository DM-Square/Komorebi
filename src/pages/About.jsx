import React from "react";
import { Link } from "react-router-dom";
import { FaTree, FaLeaf, FaSun } from "react-icons/fa";
//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import Footer from "../components/layout/Footer";
import WaveBackground from "../components/ui/WaveBackground";
import { TIMINGS, BUTTON_STYLES, COLORS } from "../constants/theme";

const komorebiContent = [
  {
    icon: <FaTree className={`w-16 h-16 text-${COLORS.primary}`} />,
    title: "木 Ko - The Tree",
    description:
      'In Japanese, "ko" (木) represents the tree, nature\'s vessel of life and wisdom. It symbolizes growth, strength, and the foundation of our meditation practice. Like a tree rooted in earth, we ground ourselves in the present moment.',
    gradient:
      "radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, rgba(24, 59, 50, 0) 70%)",
    glowColor: "rgba(16, 185, 129, 0.6)",
  },
  {
    icon: <FaLeaf className={`w-16 h-16 text-${COLORS.primary}`} />,
    title: "漏れ More - The Leaking Light",
    description:
      '"More" (漏れ) means "leaking" or "shining through". It represents the gentle filtering of light through leaves, a perfect metaphor for awareness seeping through the gaps in our mind. It\'s the moment when clarity breaks through the fog of daily life.',
    gradient:
      "radial-gradient(circle at center, rgba(254, 243, 199, 0.15) 0%, rgba(24, 59, 50, 0) 70%)",
    glowColor: "rgba(254, 243, 199, 0.6)",
  },
  {
    icon: <FaSun className={`w-16 h-16 text-${COLORS.primary}`} />,
    title: "日 Bi - The Sun",
    description:
      '"Bi" (日) is the sun, the source of all life and energy. It symbolizes enlightenment, warmth, and the inner light we discover through meditation. Together, komorebi represents the beautiful interplay of shadow and light, reminding us that peace exists in balance.',
    gradient:
      "radial-gradient(circle at center, rgba(250, 204, 21, 0.12) 0%, rgba(24, 59, 50, 0) 70%)",
    glowColor: "rgba(250, 204, 21, 0.6)",
  },
];

const About = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen bg-mist-800">
      {/* Card Header */}
      <div className="h-screen snap-start flex flex-col items-center justify-center text-center bg-mist-800 px-7 relative overflow-hidden">
        <WaveBackground />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <motion.h1
              className="text-6xl font-bold text-emerald-400 mb-6"
              style={{
                textShadow: "0 0 0px rgba(16, 185, 129, 0.5)",
                animation: `glow ${TIMINGS.glow} ease-in-out infinite`,
              }}
            >
              About the Project
            </motion.h1>
            <p className="text-xl text-mist-300 max-w-2xl">
              The beauty of sunlight filtering through tree leaves. Komorebi
              (木漏れ日) is a Japanese concept that embodies the essence of our
              meditation app.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Card su Komorebi */}
      {komorebiContent.map((content, index) => (
        <div
          key={index}
          className="h-screen snap-start flex flex-col items-center justify-center text-center bg-mist-800 px-7 relative"
          style={{
            "--gradient": content.gradient,
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: content.gradient,
              backgroundAttachment: "fixed",
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="max-w-2xl relative z-10"
          >
            <div className="mb-6 flex justify-center">{content.icon}</div>
            <motion.h2
              className="text-5xl font-bold text-emerald-400 mb-6"
              style={{
                animation: `glow ${TIMINGS.glow} ease-in-out infinite`,
                textShadow: `0 0 0px ${content.glowColor}`,
              }}
            >
              {content.title}
            </motion.h2>
            <p className="text-lg text-mist-300 leading-relaxed">
              {content.description}
            </p>
          </motion.div>
        </div>
      ))}

      {/* Footer */}
      <div className="h-screen snap-start flex flex-col items-center justify-center text-center bg-mist-800 px-7 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(16, 185, 129, 0.08) 0%, rgba(24, 59, 50, 0) 70%)",
            backgroundAttachment: "fixed",
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="flex flex-col items-center justify-center flex-1 relative z-10"
        >
          <h2 className="text-4xl font-bold text-emerald-400 mb-6">
            Begin Your Journey
          </h2>
          <p className="text-lg text-mist-300 mb-8 max-w-2xl">
            Experience the peace of komorebi through mindful meditation. Let the
            light filter through your body, one breath at a time.
          </p>
          <Link
            to="/meditate"
            className={BUTTON_STYLES.secondary}
            style={{
              animation: `pulse-button ${TIMINGS.pulseButton} ease-in-out infinite`,
            }}
          >
            Start Meditating
          </Link>
        </motion.div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
