import React from "react";
import { FaTree, FaCloudRain, FaWater } from "react-icons/fa";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

const cardContent = [
  {
    icon: <FaTree className="text-4xl text-emerald-300" />,
    title: "Forest",
    description:
      "Immerse yourself in the calming sounds of nature. The gentle rustling of leaves and distant bird calls create a peaceful environment perfect for deep meditation.",
  },
  {
    icon: <FaCloudRain className="text-4xl text-emerald-300" />,
    title: "Rain",
    description:
      "Experience the soothing rhythm of rainfall. The consistent patter of raindrops has a meditative quality that helps quiet the mind and reduce stress.",
  },
  {
    icon: <FaWater className="text-4xl text-emerald-300" />,
    title: "Waves",
    description:
      "Listen to the gentle waves of the immense ocean. The rhythmic ebb and flow of water creates a natural soundtrack for relaxation and mindfulness.",
  },
];

const Home = () => {
  return (
    <div className="select-none">
      <Hero />

      {/* How it works section */}
      <div className="w-full bg-mist-800 px-7 py-32 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold text-emerald-400 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-mist-300 mb-6 leading-relaxed">
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

      {/* Ambience sounds section */}
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
        <p className="text-xl text-mist-300 mb-6 leading-relaxed">
          Want to know more about the Komorebi project?
        </p>
        <a
          href="/about"
          style={{ animation: "pulse-button 2s ease-in-out infinite" }}
          className="text-lg mt-6 px-6 py-3 bg-emerald-400 text-neutral-900 rounded-lg hover:bg-emerald-600 cursor-pointer active:bg-emerald-700 active:scale-95 active:outline-none focus:outline-none focus:ring-3 focus:ring-emerald-600 transition-all duration-400"
        >
          About Komorebi
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
