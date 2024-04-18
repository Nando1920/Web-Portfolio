"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { FC, Fragment } from "react";
import { useScrollContext } from "./scrollProvider";

export const ScrollWrapper: FC<{ children: any }> = ({ children }) => {
  const { scrollY, scrollYProgress } = useScroll();
  const { setAtTop, setProgress } = useScrollContext();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    setProgress(latest);
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setAtTop(latest <= 0);
  });

  return <Fragment>{children}</Fragment>;
};
