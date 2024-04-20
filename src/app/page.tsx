"use client";
import { useRef } from "react";
import Navbar from "./navbar";
import ExperienceSection from "./sections/experoence";
import ReachOutSection from "./sections/reachOut";
import WelcomeSection from "./sections/welcome";
import AboutSection from "./sections/skills";

export default function Home() {
  const contactFormRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsormRef = useRef<HTMLElement | null>(null);
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

  return (
    <main className=" overflow-hidden">
      <Navbar onClick={scrollToSection} />

      <div className="p-4 sm:px-10 lg:px-16 xl:py-48 flex flex-col h-fit">
        <WelcomeSection onClick={scrollToSection} />
        <AboutSection forwardedRef={aboutRef} />
        <ExperienceSection forwardedRef={projectsormRef} />
        <ReachOutSection forwardedRef={contactFormRef} />
      </div>
    </main>
  );
}
