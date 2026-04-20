import { describe, it, expect } from "vitest";
import { validateMinuteInput, clampMinutes } from "../utils/timerValidation";

describe("validateMinuteInput", () => {
  it("rifiuta input invalidi (lettere, zero iniziale, stringa vuota accettata)", () => {
    expect(validateMinuteInput("abc").isValid).toBe(false);
    expect(validateMinuteInput("0").isValid).toBe(false);
    expect(validateMinuteInput("05").isValid).toBe(false);
    expect(validateMinuteInput("").isValid).toBe(true);
  });

  it("accetta valori validi e corregge quelli oltre il limite", () => {
    expect(validateMinuteInput("45")).toEqual({
      isValid: true,
      displayValue: "45",
      isWarning: false,
    });
    expect(validateMinuteInput("91")).toEqual({
      isValid: true,
      displayValue: "90",
      isWarning: true,
    });
  });

  it("rispetta un maxMinutes personalizzato", () => {
    expect(validateMinuteInput("61", 60)).toEqual({
      isValid: true,
      displayValue: "60",
      isWarning: true,
    });
    expect(validateMinuteInput("60", 60)).toEqual({
      isValid: true,
      displayValue: "60",
      isWarning: false,
    });
  });
});

describe("clampMinutes", () => {
  it("clampa i valori correttamente ai limiti", () => {
    expect(clampMinutes(45)).toBe(45);
    expect(clampMinutes(100)).toBe(90);
    expect(clampMinutes(-5)).toBe(0);
    expect(clampMinutes(70, 60)).toBe(60);
  });
});
