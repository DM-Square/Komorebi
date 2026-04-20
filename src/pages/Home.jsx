import React from "react";
import { Link } from "react-router-dom";
import { FaTree, FaCloudRain, FaWater } from "react-icons/fa";
import Hero from "../components/layout/Hero";
import Card from "../components/ui/Card";
import Footer from "../components/layout/Footer";
import { COLORS, BUTTON_STYLES, TIMINGS, TYPOGRAPHY } from "../constants/theme";

const cardContent = [
  {
    icon: <FaTree className={`text-4xl text-${COLORS.textSecondary}`} />,
    title: "Forest",
    description:
      "Immerse yourself in the calming sounds of nature. The gentle rustling of leaves and distant bird calls create a peaceful environment perfect for deep meditation.",
  },
  {
    icon: <FaCloudRain className={`text-4xl text-${COLORS.textSecondary}`} />,
    title: "Rain",
    description:
      "Experience the soothing rhythm of rainfall. The consistent patter of raindrops has a meditative quality that helps quiet the mind and reduce stress.",
  },
  {
    icon: <FaWater className={`text-4xl text-${COLORS.textSecondary}`} />,
    title: "Waves",
    description:
      "Listen to the gentle waves of the immense ocean. The rhythmic ebb and flow of water creates a natural soundtrack for relaxation and mindfulness.",
  },
];

const Home = () => {
  return (
    <div className="select-none">
      <Hero />

      {/* How it works */}
      <div className="w-full bg-mist-800 px-7 py-32 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className={TYPOGRAPHY.heading2}>How It Works</h2>
          <p className={TYPOGRAPHY.subheading}>
            Komorebi helps you meditate by guiding you through conscious
            breathing sessions. Choose a natural ambience sound you love between
            forest, rain, and waves, set your desired timer, and begin your
            journey toward awareness. Our guided 4-7-8 breathing technology will
            help you find calm.
          </p>
          <p className="text-lg text-emerald-300 italic">
            Tip: Use noise-canceling headphones for an optimal and fully
            immersive meditative experience.
          </p>
        </div>
      </div>

      {/* Suoni ambientali */}
      <div className="flex flex-col bg-emerald-600 shadow-md w-full text-center md:flex-row">
        {cardContent.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      <div className="w-full bg-mist-800 px-7 py-16 text-center">
        <p className={TYPOGRAPHY.subheading}>
          Want to know more about the Komorebi project?
        </p>
        <Link
          to="/about"
          style={{
            animation: `pulse-button ${TIMINGS.pulseButton} ease-in-out infinite`,
          }}
          className={`text-lg mt-6 ${BUTTON_STYLES.primary}`}
        >
          About Komorebi
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
