import React from "react";
import { FaPray, FaHiking, FaMedium } from "react-icons/fa";

const cardContent = [
  {
    icon: <FaPray className="text-4xl text-emerald-300 mb-4 self-center" />,
    title: "Card Title 1",
    description: "Testo del card component 1.",
  },
  {
    icon: <FaHiking className="text-4xl text-emerald-300 mb-4 self-center" />,
    title: "Card Title 2",
    description: "Testo del card component 2.",
  },
  {
    icon: <FaMedium className="text-4xl text-emerald-300 mb-4 self-center" />,
    title: "Card Title 3",
    description: "Testo del card component 3.",
  },
];

const Cards = () => {
  return (
    <div className="flex flex-col bg-emerald-600 shadow-md w-full text-center md:flex-1 md:flex-row">
      {cardContent.map((card, index) => (
        <div
          key={index}
          className="p-6 flex flex-col bg-emerald-600 shadow-md w-full text-center md:flex-1"
        >
          {card.icon}
          <h3 className="text-2xl uppercase font-semibold text-mist-800 mb-2">
            {card.title}
          </h3>
          <p className="text-mist-300">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
