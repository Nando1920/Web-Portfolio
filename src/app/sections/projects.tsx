"use client";
import { LegacyRef, useEffect, useState } from "react";
import projectsObj from "../../assets/json/projects.json";
import { FaChevronRight, FaCode } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import "../styles/projects.css";
import { useSwipeable } from "react-swipeable";
import ProjectCard from "../components/projectCard";
import ProjectCardWeb from "../components/projectCardWeb";

export default function ProjectsSection({
  forwardedRef,
}: {
  forwardedRef: LegacyRef<HTMLElement> | undefined;
}) {
  const [position, setPosition] = useState(0);
  const [auto, setAuto] = useState(true);
  const setNext = (manual?: boolean) => {
    if (manual) setAuto(false);

    setPosition((position) =>
      position === projectsObj.projects.length - 1 ? 0 : position + 1
    );
  };

  const setPrev = (manual?: boolean) => {
    if (manual) setAuto(false);
    setPosition(
      position === 0 ? projectsObj.projects.length - 1 : position - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => setNext(true),
    onSwipedRight: (eventData) => setPrev(true),
  });
  useEffect(() => {
    if (auto && window.innerWidth < 768) {
      const interval = setInterval(setNext, 3000);
      return () => clearInterval(interval);
    }
  });

  return (
    <section
      {...handlers}
      ref={forwardedRef}
      className=" relative flex flex-col items-center gap-8 h-fit justify-between pb-8 px-4 ">
      <div className="shapedividers_com-6562 h-12 w-screen"></div>

      <div className=" top-0 transform w-screen h-full absolute z-[-1] bg-primary" />
      <div className="text-2xl sm:text-4xl font-semibold text-white  static left-32">
        Projects
      </div>

      <div className="hidden md:grid  lg:grid-cols-auto gap-16  h-fit  ">
        {projectsObj.projects.map((project, index) => {
          return (
            <ProjectCardWeb
              key={project.name}
              project={project}
              index={index}
            />
          );
        })}
      </div>

      <div className="md:hidden flex items-center justify-center gap-4">
        <FaChevronLeft
          onClick={() => {
            setPrev(true);
          }}
          className=" shadow p-1 w-6 h-6  z-20 bg-backgroundLight text-primary rounded-full"
        />

        <div className=" w-[80%]">
          <div
            {...handlers}
            className="flex transition-transform  duration-500"
            style={{ transform: `translateX(-${position * 100}%)` }}>
            {projectsObj.projects.map((project, index) => {
              return (
                <ProjectCard
                  key={project.name}
                  project={project}
                  index={index}
                  position={position}
                  setAuto={setAuto}
                  setPosition={setPosition}
                />
              );
            })}
          </div>
        </div>
        <FaChevronRight
          className=" shadow p-1 w-6 h-6 z-20  bg-backgroundLight text-primary rounded-full"
          onClick={() => {
            setNext(true);
          }}
        />
      </div>
    </section>
  );
}
