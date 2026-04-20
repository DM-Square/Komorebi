import React from "react";
import Timer from "../components/Timer/Timer";
import Footer from "../components/layout/Footer";
import WaveBackground from "../components/ui/WaveBackground";
import { TimerProvider } from "../context/TimerProvider";

const Meditate = () => {
  return (
    <TimerProvider>
      <div className="flex h-fit flex-col items-center justify-center text-center bg-mist-800 px-7 relative overflow-hidden">
        <WaveBackground />
        <div className="relative z-10">
          <Timer />
          <Footer />
        </div>
      </div>
    </TimerProvider>
  );
};

export default Meditate;
