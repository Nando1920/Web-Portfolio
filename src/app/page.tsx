"use client";
import { useRef } from "react";
import Navbar from "./components/navbar";
import ReachOutSection from "./sections/reachOut";
import WelcomeSection from "./sections/welcome";
import AboutSection from "./sections/about";
import { FaArrowUp } from "react-icons/fa";
import { useScrollContext } from "./scroll/scrollProvider";
import ProjectsSection from "./sections/projects";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const contactFormRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsormRef = useRef<HTMLElement | null>(null);
  const { scrollToTop } = useScrollContext();

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
      <WelcomeSection onClick={scrollToSection} />

      <div className="px-4  sm:px-10 lg:px-16 xl:py-48 flex flex-col ">
        <AboutSection forwardedRef={aboutRef} />
        <ProjectsSection forwardedRef={projectsormRef} />
        <ReachOutSection forwardedRef={contactFormRef} />
      </div>
      <div className="  bg-primary text-backgroundLight h-24 flex flex-col gap-2 items-center">
        <div>Thank you for visiting, find me on</div>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/fernando-tamayo-ferrer-706b6113b/">
            <CiLinkedin className="w-8 h-8" />
          </a>
          <a href="https://github.com/Nando1920">
            <FaGithub className="w-8 h-8" />
          </a>
        </div>
      </div>

      <div
        onClick={scrollTop}
        className={` z-50 transition-opacity duration-300 ${
          scrollToTop ? "opacity-100" : "opacity-0 pointer-events-none"
        } shadow-md shadow-black/50 fixed bottom-4 right-4 flex justify-center items-center h-12 w-12 rounded-full bg-cyan-500`}>
        <FaArrowUp className=" text-backgroundLight" />
      </div>
    </main>
  );
}
