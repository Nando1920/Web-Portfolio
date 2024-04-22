"use client";
import { LegacyRef, useEffect, useState } from "react";
import tempImage from "../../../public/aboutme.jpg";
import Image from "next/image";
import projectsObj from "../../assets/json/projects.json";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

interface IProject {
  name: string;
  client: string;
  text: string;
}

export default function ProjectsSection({
  forwardedRef,
}: {
  forwardedRef: LegacyRef<HTMLElement> | undefined;
}) {
  const [position, setPosition] = useState(0);

  const setNext = () => {
    clearInterval(1000);
    setPosition(
      position === projectsObj.projects.length - 1 ? 0 : position + 1
    );
  };

  const setPrev = () => {
    clearInterval(1000);
    setPosition(
      position === 0 ? projectsObj.projects.length - 1 : position - 1
    );
  };
  console.log(position);

  useEffect(() => {
    setInterval(setNext, 1000);

    return () => clearInterval(1000);
  }, []);

  function ProjectCard({
    project,
    index,
  }: {
    project: IProject;
    index: number;
  }) {
    return (
      <div
        className={`w-[100%] flex-shrink-0 shadow-md rounded-md overflow-hidden transition-all duration-500 ${
          position !== index
            ? "transform scale-75 opacity-65"
            : "transform scale-100 opacity-100"
        }`}>
        <Image src={tempImage} alt="temp" className="" />
        <div className="px-4 py-2">
          <div>{project.name}</div>
          <div>{project.client}</div>
          <div className="max-h-64 text-ellipsis">{project.text}</div>
        </div>
      </div>
    );
  }

  return (
    <section
      ref={forwardedRef}
      className="  flex flex-col items-center gap-4  h-full py-4">
      <div className="text-2xl font-semibold text-cyan-500 w-full">
        Projects
      </div>
      <div className="flex items-center justify-center gap-4">
        <FaChevronLeft
          onClick={setPrev}
          className="shadow p-1 w-6 h-6  z-20 text-backgroundLight bg-cyan-500 rounded-full"
        />

        <div className=" w-[60%] ">
          <div
            className={`flex  -translate-x-[${
              100 * position
            }%] transition-all duration-500`}>
            {projectsObj.projects.map((project, index) => {
              return <ProjectCard project={project} index={index} />;
            })}
          </div>
        </div>
        <FaChevronRight
          className="shadow p-1 w-6 h-6 z-20  text-backgroundLight bg-cyan-500 rounded-full"
          onClick={setNext}
        />
      </div>
    </section>
  );
}
