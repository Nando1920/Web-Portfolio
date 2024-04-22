"use client";
import { useRef } from "react";
import Navbar from "./navbar";
import ReachOutSection from "./sections/reachOut";
import WelcomeSection from "./sections/welcome";
import AboutSection from "./sections/about";
import { FaArrowUp } from "react-icons/fa";
import { useScrollContext } from "./scroll/scrollProvider";
import ProjectsSection from "./sections/projects";

export default function Home() {
  const contactFormRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsormRef = useRef<HTMLElement | null>(null);
  const { scrollToTop } = useScrollContext();

  console.log("reload");

  const scrollToSection = (section: string) => {
    switch (section) {
      case "contact":
        contactFormRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
      case "about":
        aboutRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
      case "projects":
        projectsormRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
    }
  };
  function scrollTop() {
    if (!scrollToTop) return;
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <main className=" overflow-hidden">
      <Navbar onClick={scrollToSection} />

      <div className="p-4 sm:px-10 lg:px-16 xl:py-48 flex flex-col h-fit">
        <WelcomeSection onClick={scrollToSection} />
        <AboutSection forwardedRef={aboutRef} />
        <ProjectsSection forwardedRef={projectsormRef} />
        <ReachOutSection forwardedRef={contactFormRef} />
      </div>

      <div
        onClick={scrollTop}
        className={` transition-opacity duration-300 ${
          scrollToTop ? "opacity-100" : "opacity-0 pointer-events-none"
        } shadow-md shadow-black/50 fixed bottom-4 right-4 flex justify-center items-center h-12 w-12 rounded-full bg-cyan-500`}>
        <FaArrowUp className=" text-backgroundLight" />
      </div>
    </main>
  );
}
