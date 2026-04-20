import React from "react";
import Button from "../../ui/Button";
import { useTimerContext } from "../../../context/useTimerContext";
import { AMBIENCE_SOUNDS } from "../../../constants/theme";

const SoundButtons = () => {
  const { isActive, selectedSound, handleSoundToggle } = useTimerContext();

  return (
    <div className="mb-2">
      {AMBIENCE_SOUNDS.map((sound) => (
        <Button
          key={sound.src}
          variant="sound"
          onClick={() => handleSoundToggle(sound.src)}
          disabled={isActive}
          animated
          className={
            sound.src === selectedSound ? "ring-2 ring-emerald-200 shadow-lg shadow-emerald-500/50" : ""
          }
        >
          {sound.label}
        </Button>
      ))}
    </div>
  );
};

export default SoundButtons;
