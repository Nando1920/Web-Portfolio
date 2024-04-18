"use client";
import {
  MutableRefObject,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

interface IScrollContext {
  atTop: boolean;
  setAtTop: (top: boolean) => void;
  progress: number;
  setProgress: (progress: number) => void;
}

const ScrollContext = createContext<IScrollContext>({
  atTop: true,
  setAtTop: (top: boolean) => {},
  progress: 0,
  setProgress: (progress: number) => {},
});

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [atTop, setAtTop] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  return (
    <ScrollContext.Provider value={{ atTop, setAtTop, progress, setProgress }}>
      {children}
    </ScrollContext.Provider>
  );
}

export const useScrollContext = () => useContext(ScrollContext);
