import React from "react";
import Timer from "../components/Timer/Timer";
import Footer from "../components/Footer";

const Meditate = () => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center text-center bg-mist-800 px-7 relative overflow-hidden">
        {/* Animated waves background */}
        <div className="waves absolute inset-0 opacity-20 z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ animation: "wave1 15s ease-in-out infinite" }}
          >
            <path
              d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
              fill="rgba(16, 185, 129, 0.3)"
            />
          </svg>
        </div>
        <div
          className="waves absolute inset-0 opacity-20 z-0"
          style={{ marginTop: "10px" }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ animation: "wave2 10s ease-in-out infinite" }}
          >
            <path
              d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
              fill="rgba(16, 185, 129, 0.2)"
            />
          </svg>
        </div>
        <div
          className="waves absolute inset-0 opacity-20 z-0"
          style={{ marginTop: "20px" }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ animation: "wave3 8s ease-in-out infinite" }}
          >
            <path
              d="M0,40 Q300,10 600,40 T1200,40 L1200,120 L0,120 Z"
              fill="rgba(16, 185, 129, 0.1)"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Timer />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Meditate;
