import React from "react";
import Timer from "../components/Timer/Timer";
import Footer from "../components/Footer";
import WaveBackground from "../components/WaveBackground";

const Meditate = () => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center text-center bg-mist-800 px-7 relative overflow-hidden">
        <WaveBackground />

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
