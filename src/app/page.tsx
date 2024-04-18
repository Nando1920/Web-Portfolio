"use client";
import { useRef } from "react";
import Navbar from "./navbar";
import ExperienceSection from "./sections/experoence";
import ReachOutSection from "./sections/reachOut";
import SkillsSection from "./sections/skills";
import WelcomeSection from "./sections/welcome";

export default function Home() {
  const contactFormRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsormRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (section: string) => {
    console.log(section);
    switch (section) {
      case "contact":
        contactFormRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
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
        <WelcomeSection />
        <SkillsSection forwardedRef={aboutRef} />
        <ExperienceSection forwardedRef={projectsormRef} />
        <ReachOutSection forwardedRef={contactFormRef} />
      </div>
    </main>
  );
}
