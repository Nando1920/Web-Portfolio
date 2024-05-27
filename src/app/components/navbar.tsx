"use client";
import Link from "next/link";
import "../styles/navbar.css";
import { useEffect, useState } from "react";
import HeaderLogo from "@/assets/img/headerLogo";
import { useScrollContext } from "../scroll/scrollProvider";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Navbar({
  onClick,
  hideSections,
  returnArrow,
}: {
  onClick?: Function;
  hideSections?: boolean;
  returnArrow?: boolean;
}) {
  const { atTop } = useScrollContext();
  const [isAtTop, setIsAtTop] = useState(atTop);
  const [hidden, setHidden] = useState(true);
  const [buttonClass, setButtonClass] = useState("bar unclicked");
  const router = useRouter();

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
                  if (onClick) onClick(item.scroll);
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
      {!hideSections && burgerButton()}
      <nav
        className={`flex 
         sm: items-center px-4 py-2 sm:px-8 4K:px-12 4K:py-4  ${
           !isAtTop
             ? "shadow-lg shadow-black-100 bg-white/60 "
             : "bg-transparent"
         } ${
          returnArrow ? "justify-between" : "justify-between"
        } fixed w-svw top-0 z-40 transition-shadow duration-300`}>
        {returnArrow && (
          <dd
            onClick={() => {
              router?.back();
            }}>
            <FaArrowLeft />
          </dd>
        )}
        {!returnArrow && <div className="sm:hidden"></div>}
        <Link href={"/"} className="scale-[200%]  sm:scale-[250%]">
          <HeaderLogo />
        </Link>
        {!hideSections && (
          <div className="gap-6 hidden sm:flex sm:gap-10 4K:gap-16">
            {navArray.map((item) => {
              return (
                <div
                  onClick={() => {
                    if (onClick) onClick(item.scroll);
                  }}
                  key={item.name}
                  className="navOption sm:text-xl 2xl:text-2xl 4K:text-3xl">
                  {item.name}
                </div>
              );
            })}
          </div>
        )}
      </nav>
      {!hideSections && horizontalPanel()}
    </>
  );
}
