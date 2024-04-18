"use client";
import Link from "next/link";
import "./styles/navbar.css";
import { useEffect, useState } from "react";
import HeaderLogo from "@/assets/img/headerLogo";
import { useScrollContext } from "./scroll/scrollProvider";

export default function Navbar({ onClick }: { onClick: Function }) {
  const { atTop, progress } = useScrollContext();
  const [isAtTop, setIsAtTop] = useState(atTop);
  const [hidden, setHidden] = useState(true);
  const [buttonClass, setButtonClass] = useState("bar unclicked");

  const navArray: any[] = [
    { name: "About", ref: "/home/about", scroll: "about" },
    { name: "Projects", ref: "/home", scroll: "projects" },
    { name: "Contact Me", ref: "/home/about", scroll: "contact" },
  ];

  useEffect(() => {
    const handleChange = (value: any) => {
      setIsAtTop(value);
    };

    handleChange(atTop);
  }, [atTop]);

  const burgerButton = () => {
    return (
      <div
        className="sm:hidden left-4 top-4 fixed z-50 text-red-500 flex flex-col gap-[4px]"
        onClick={() => {
          setButtonClass((curr) => {
            return curr.includes("unclicked") ? "bar clicked" : "bar unclicked";
          });
          setHidden(!hidden);
        }}>
        <div className={`${buttonClass}`} />
        <div className={`${buttonClass}`} />
        <div className={`${buttonClass}`} />
      </div>
    );
  };

  const horizontalPanel = () => {
    return (
      <div
        className={`sm:hidden bg-cyan-600/90 ${
          hidden ? "w-0" : "w-36 "
        } h-[100vh] fixed z-40 transition-all duration-100 overflow-hidden`}>
        <div className="px-4 pt-[15vh] h-[100%] flex flex-col gap-4 justify-start  ">
          {navArray.map((item) => {
            return (
              <div
                key={item.name}
                className={`text-white text-nowrap text-lg min-w-fit overflow-hidden`}
                onClick={() => {
                  onClick(item.scroll);
                  setHidden(true);
                  setButtonClass("bar unclicked");
                }}>
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      {burgerButton()}
      <nav
        className={`flex justify-end sm:justify-between  items-center lg:px-12 sm:px-8 px-4 py-2 ${
          !isAtTop
            ? "shadow-lg shadow-black-100 bg-white/80 "
            : "bg-transparent"
        }  text-lg fixed w-svw top-0 z-40 transition-shadow duration-300`}>
        <Link
          href={"/"}
          className=" text-cyan-500 scale-[200%] text-sm hover:text-cyan-600 transition-colors ">
          <HeaderLogo />
        </Link>
        <div className="gap-6 hidden sm:flex">
          {navArray.map((item) => {
            return (
              <div
                onClick={() => {
                  onClick(item.scroll);
                }}
                key={item.name}
                className="navOption">
                {item.name}
              </div>
            );
          })}
        </div>
      </nav>
      {horizontalPanel()}
    </>
  );
}
