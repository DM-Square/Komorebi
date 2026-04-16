import React from "react";

const Card = ({ icon, title, description, bgColor = "bg-emerald-600" }) => {
  return (
    <div
      className={`p-6 flex flex-col ${bgColor} shadow-md w-full text-center md:flex-1`}
    >
      {icon && <div className="mb-4 flex justify-center">{icon}</div>}
      <h3 className="text-2xl uppercase font-semibold text-mist-800 mb-2">
        {title}
      </h3>
      <p className="text-mist-300">{description}</p>
    </div>
  );
};

export default Card;
