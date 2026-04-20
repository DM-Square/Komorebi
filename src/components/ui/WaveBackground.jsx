import { WAVE_CONFIG } from "../../constants/theme";

const WaveBackground = () => {
  return (
    <>
      {WAVE_CONFIG.waves.map((wave, index) => (
        <div
          key={index}
          className="waves absolute inset-0 opacity-20 z-0"
          style={{ marginTop: wave.marginTop }}
        >
          <svg
            className="w-full h-full"
            viewBox={wave.viewBox}
            preserveAspectRatio="none"
            style={{
              animation: `${wave.animation} ${wave.duration} ease-in-out infinite`,
            }}
          >
            <path d={wave.path} fill={wave.fill} />
          </svg>
        </div>
      ))}
    </>
  );
};

export default WaveBackground;
