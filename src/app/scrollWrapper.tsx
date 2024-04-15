"use client";
import { signal, useSignal } from "@preact/signals";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { FC, Fragment } from "react";

export const atTop = signal<boolean>(true);
export const progress = signal<number>(0);

export const ScrollWrapper: FC<{ children: any }> = ({ children }) => {
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    progress.value = latest;
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    atTop.value = latest <= 0;
  });

  return <Fragment>{children}</Fragment>;
};
