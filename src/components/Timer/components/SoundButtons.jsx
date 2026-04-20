import React from "react";
import Button from "../../ui/Button";

const SoundButtons = ({ ambienceSounds, isActive, selectedSound, onSoundToggle }) => {
  return (
    <div className="mb-2">
      {ambienceSounds.map((sound) => (
        <Button
          key={sound.src}
          variant="sound"
          onClick={() => onSoundToggle(sound.src)}
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
