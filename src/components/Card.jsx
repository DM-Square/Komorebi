import React from "react";
import { FaPray } from "react-icons/fa";

const Card = () => {
  return (
    <div className="p-6 flex flex-col bg-emerald-600 shadow-md w-full text-center md:flex-1">
      <FaPray className="text-4xl text-emerald-300 mb-4 self-center" />
      <h3 className="text-2xl uppercase font-semibold text-mist-800 mb-2">
        Card Title
      </h3>

      <p className="text-mist-300">Testo del card component.</p>
    </div>
  );
};

export default Card;
