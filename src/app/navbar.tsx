"use client";
import Link from "next/link";
import "./globals.css";
import { atTop } from "./scrollWrapper";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isAtTop, setIsAtTop] = useState(atTop.value);
  const navArray: any[] = [
    { name: "Projects", ref: "/home" },
    { name: "About", ref: "/home/about" },
    { name: "Contact Me", ref: "/home/about" },
  ];

  useEffect(() => {
    const handleChange = (value: any) => {
      setIsAtTop(value);
    };

    atTop.subscribe(handleChange);
  }, []);

  return (
    <>
      <nav
        className={`flex justify-between  items-center lg:px-12 sm:px-8 xs:px-8 py-5 ${
          !isAtTop
            ? "shadow-lg shadow-black-100 bg-white/80 "
            : "bg-transparent"
        }  text-lg sticky top-0 z-50 transition-shdow duration-300`}>
        <Link
          href={"/"}
          className=" text-cyan-500 hover:text-cyan-600 transition-colors ">
          My Portfolio
        </Link>
        <div className="flex gap-6 ">
          {navArray.map((item) => {
            return (
              <Link href={item.ref} key={item.name} className="navOption">
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
