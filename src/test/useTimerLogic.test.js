import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTimerLogic } from "../components/Timer/hooks/useTimerLogic";

describe("useTimerLogic", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("stato iniziale", () => {
    const { result } = renderHook(() => useTimerLogic());
    expect(result.current.timer).toBe(0);
    expect(result.current.isActive).toBe(false);
    expect(result.current.timerDisplay()).toBe("00:00");
  });

  it("setPresetTimer bloccato durante meditazione attiva", () => {
    const { result } = renderHook(() => useTimerLogic());
    act(() => result.current.setPresetTimer(6000));
    act(() => result.current.startMeditation());
    act(() => result.current.setPresetTimer(1200));
    expect(result.current.timer).toBe(6000);
  });

  it("flusso start - countdown - pause", () => {
    const { result } = renderHook(() => useTimerLogic());
    act(() => result.current.setPresetTimer(600));
    act(() => result.current.startMeditation());
    expect(result.current.isActive).toBe(true);
    act(() => vi.advanceTimersByTime(500));
    const frozen = result.current.timer;
    act(() => result.current.pauseMeditation());
    act(() => vi.advanceTimersByTime(500));
    expect(result.current.isActive).toBe(false);
    expect(result.current.timer).toBe(frozen);
  });

  it("reset e scadenza automatica", () => {
    const { result } = renderHook(() => useTimerLogic());
    act(() => result.current.setPresetTimer(600));
    act(() => result.current.startMeditation());
    act(() => result.current.resetTimer());
    expect(result.current.timer).toBe(0);
    expect(result.current.isActive).toBe(false);

    act(() => result.current.setPresetTimer(5));
    act(() => result.current.startMeditation());
    act(() => vi.advanceTimersByTime(1000));
    expect(result.current.timer).toBe(0);
    expect(result.current.isActive).toBe(false);
  });
});
