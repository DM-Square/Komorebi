/**
 * Valida e normalizza l'input dei minuti
 * @param {string} value - Input value inserito dall'utente
 * @param {number} maxMinutes - Minuti massimi consentiti (default: 90)
 * @returns {object} { isValid, displayValue, isWarning }
 */
export const validateMinuteInput = (value, maxMinutes = 90) => {
  if (value === "") {
    return { isValid: true, displayValue: "", isWarning: false };
  }

  if (!/^\d+$/.test(value)) {
    return { isValid: false, displayValue: value, isWarning: false };
  }

  if (value.startsWith("0")) {
    return { isValid: false, displayValue: value, isWarning: false };
  }

  const numValue = parseInt(value, 10);

  if (isNaN(numValue)) {
    return { isValid: false, displayValue: value, isWarning: false };
  }

  if (numValue > maxMinutes) {
    return { isValid: true, displayValue: String(maxMinutes), isWarning: true };
  }

  return { isValid: true, displayValue: value, isWarning: false };
};

/**
 * Restringe il valore dei minuti ai limiti consentiti
 * @param {number} minutes - Minuti da restringere
 * @param {number} maxMinutes - Minuti massimi consentiti (default: 90)
 * @returns {number} Valore dei minuti ristretto
 */
export const clampMinutes = (minutes, maxMinutes = 90) => {
  if (minutes > maxMinutes) return maxMinutes;
  if (minutes < 0) return 0;
  return minutes;
};
