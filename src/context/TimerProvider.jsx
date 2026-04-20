import { useTimerOrchestration } from "../components/Timer/hooks/useTimerOrchestration";
import { TimerContext } from "./useTimerContext";

export const TimerProvider = ({ children }) => {
  const orchestration = useTimerOrchestration();
  return (
    <TimerContext.Provider value={orchestration}>
      {children}
    </TimerContext.Provider>
  );
};
