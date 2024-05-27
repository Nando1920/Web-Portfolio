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
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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

      <div className="px-4 sm:px-10 flex flex-col 2xl:px-[15%] ">
        <AboutSection forwardedRef={aboutRef} />
        <ProjectsSection forwardedRef={projectsormRef} />
        <ReachOutSection forwardedRef={contactFormRef} />
      </div>
      <div className="  bg-primary text-backgroundLight h-full flex flex-col gap-2 items-center">
        <div className="sm:text-lg">Thank you for visiting, find me on</div>
        <div className="flex gap-4 sm:gap-6">
          <a href="https://www.linkedin.com/in/fernando-tamayo-ferrer-706b6113b/">
            <CiLinkedin className="w-8 h-8 sm:w-10 sm:h-10" />
          </a>
          <a href="https://github.com/Nando1920">
            <FaGithub className="w-8 h-8 sm:w-10 sm:h-10" />
          </a>
        </div>
        <div className="flex flex-col justify-around w-full flex-nowrap p-4">
          <div className="flex items-center gap-2">
            <FaPhoneAlt />: +44 7478865765
          </div>
          <div className="flex items-center gap-2">
            <MdEmail />: ftamayo1998@gmail.com
          </div>
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
