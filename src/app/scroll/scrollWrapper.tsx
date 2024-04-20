"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { FC, Fragment } from "react";
import { useScrollContext } from "./scrollProvider";

export const ScrollWrapper: FC<{ children: any }> = ({ children }) => {
  const { scrollY, scrollYProgress } = useScroll();
  const { setAtTop, setScrollToTop, scrollToTop } = useScrollContext();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log(latest);

    if (latest > 0.3) {
      setScrollToTop(true);
    } else if (latest < 0.3 && scrollToTop) {
      setScrollToTop(false);
    }
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setAtTop(latest <= 0);
  });

  return <Fragment>{children}</Fragment>;
};
