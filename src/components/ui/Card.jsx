import React from "react";

const Card = ({ icon, title, description, bgColor = "bg-emerald-600" }) => {
  return (
    <div
      className={`p-12 flex flex-col ${bgColor} shadow-md w-full text-center md:flex-1 min-h-96`}
    >
      <div>
        {icon && <div className="mb-6 flex justify-center">{icon}</div>}
        <h3 className="text-2xl uppercase font-semibold text-mist-800 mb-6">
          {title}
        </h3>
      </div>
      <p className="text-mist-300 text-lg">{description}</p>
    </div>
  );
};

export default Card;
