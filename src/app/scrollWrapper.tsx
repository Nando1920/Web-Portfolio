import { signal, useSignal } from "@preact/signals";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { FC, Fragment } from "react";

export const atTop = signal<boolean>(true);

export const ScrollWrapper: FC<{ children: any }> = ({ children }) => {
  const { scrollY } = useScroll();

  console.log(atTop.value);

  useMotionValueEvent(scrollY, "change", (latest) => {
    atTop.value = latest <= 0;
  });

  return <Fragment>{children}</Fragment>;
};
