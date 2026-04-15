import React from "react";
import Timer from "../components/Timer/Timer";

const Meditate = () => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center text-center bg-mist-800 px-7">
        <Timer />
      </div>
    </>
  );
};

export default Meditate;
