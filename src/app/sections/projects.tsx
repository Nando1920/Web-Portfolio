"use client";
import { LegacyRef, useEffect, useState } from "react";
import Image from "next/image";
import projectsObj from "../../assets/json/projects.json";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import "../styles/projects.css";
import { useSwipeable } from "react-swipeable";
import { getProjectImg } from "../utils/utils";

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
  const translate = position * 100;
  const setNext = () => {
    setPosition((position) =>
      position === projectsObj.projects.length - 1 ? 0 : position + 1
    );
  };

  const setPrev = () => {
    // clearInterval(1000);
    setPosition(
      position === 0 ? projectsObj.projects.length - 1 : position - 1
    );
  };

  function ProjectCard({
    project,
    index,
  }: {
    project: IProject;
    index: number;
  }) {
    return (
      <div
        onClick={() => {
          setPosition(index);
        }}
        className={`imageCard w-[100%]  flex-shrink-0 shadow-md rounded-lg overflow-hidden ${
          position === index && "selected"
        }`}>
        <Image
          loading="lazy"
          src={getProjectImg(project.name)}
          alt="temp"
          placeholder="blur"
          className="absolute z-[-1] bg-cover"
        />
        <div className="flex flex-col gap-1 p-4 bg-backgroundLight mt-36 rounded-t-xl h-full">
          <div className=" font-bold text-xl">{project.name}</div>
          <div className=" text-primary">{project.client}</div>

          <div className="line-clamp-[8]">{project.text}</div>
          <a
            href={`/projects?project=${project.name}`}
            className="text-primaryBold underline">
            Find out more
          </a>
        </div>
      </div>
    );
  }

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => setNext(),
    onSwipedRight: (eventData) => setPrev(),
  });

  return (
    <section
      {...handlers}
      ref={forwardedRef}
      className=" relative flex flex-col items-center gap-4 h-fit py-4 sm:py-8">
      <div className=" top-0 transform w-screen h-full absolute z-[-1] bg-primary" />
      <div className="text-2xl font-semibold text-white w-full">Projects</div>
      <div className="flex items-center justify-center gap-4">
        <FaChevronLeft
          onClick={setPrev}
          className="shadow p-1 w-6 h-6  z-20 bg-backgroundLight text-primary rounded-full"
        />

        <div className=" w-[60%] ">
          <div
            {...handlers}
            className={`flex transform -translate-x-[${translate}%] transition-all duration-500`}>
            {projectsObj.projects.map((project, index) => {
              return <ProjectCard project={project} index={index} />;
            })}
          </div>
        </div>
        <FaChevronRight
          className="shadow p-1 w-6 h-6 z-20  bg-backgroundLight text-primary rounded-full"
          onClick={setNext}
        />
      </div>
    </section>
  );
}
