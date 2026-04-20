import { createContext, useContext } from "react";

export const TimerContext = createContext(null);

export const useTimerContext = () => useContext(TimerContext);
