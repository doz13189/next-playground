import { useEffect, useState } from "react";

type DebounceState = "idle" | "debouncing" | "ready";
export const useDebounce = <T>(value: T, delay: number): [T, DebounceState] => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const [state, setState] = useState<DebounceState>("idle");

  useEffect(() => {
    setState("debouncing");
    const timer = setTimeout(() => {
      setDebouncedValue(value);
      setState("ready");
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return [debouncedValue, state];
};
