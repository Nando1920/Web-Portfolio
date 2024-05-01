"use client";
import { LegacyRef, useEffect, useState } from "react";
import Image from "next/image";
import projectsObj from "../../assets/json/projects.json";
import { FaChevronRight, FaCode } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import "../styles/projects.css";
import { useSwipeable } from "react-swipeable";
import { getProjectImg } from "../utils/utils";
import { CgDetailsMore } from "react-icons/cg";
import Link from "next/link";

interface IProject {
  name: string;
  client: string;
  text: string;
  link: string;
}

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

  function ProjectCard({
    project,
    index,
    transition,
  }: {
    project: IProject;
    index: number;
    transition: boolean;
  }) {
    if (!transition) {
      setAuto(false);
    }
    return (
      <div
        onClick={() => {
          if (transition) {
            setPosition(index);
            setAuto(false);
          } else {
          }
        }}
        className={`${
          transition
            ? "imageCard w-[100%]  flex-shrink-0 shadow-md rounded-lg overflow-hidden"
            : "w-[100%] overflow-hidden scale-100 md:min-w-[200px] lg:min-w-[250px] xl:min-w-[350px] "
        } ${position === index && transition && "selected sm:selected"} `}>
        <Image
          loading="lazy"
          src={getProjectImg(project.name)}
          alt="temp"
          placeholder="blur"
          className="absolute z-[-1] bg-cover "
        />
        <div className=" hidden opacity-0 md:flex justify-center items-center gap-10  absolute z-[1] bg-cover transition-color duration-300  hover:bg-black hover:opacity-60  w-full h-full">
          <Link
            href={`/projects?project=${project.name}`}
            className="rounded-full border-2  p-2">
            <CgDetailsMore className="w-10 h-10  text-white" />
          </Link>
          <Link href={project.link} className="rounded-full border-2 p-2">
            <FaCode className="w-10 h-10  text-white" />
          </Link>
        </div>
        <div className="flex flex-col gap-1 p-4 bg-backgroundLight mt-36 rounded-t-xl h-full  ">
          <div className=" font-bold text-xl md:text-xl">{project.name}</div>
          <div className=" text-primary md:text-lg">{project.client}</div>

          <div className="line-clamp-[8] md:hidden">{project.text}</div>
          <a
            href={`/projects?project=${project.name}`}
            className="text-primaryBold underline md:hidden">
            Find out more
          </a>
        </div>
      </div>
    );
  }

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => setNext(true),
    onSwipedRight: (eventData) => setPrev(true),
  });

  useEffect(() => {
    if (auto) {
      const interval = setInterval(setNext, 3000);
      return () => clearInterval(interval);
    }
  });

  return (
    <section
      {...handlers}
      ref={forwardedRef}
      className=" relative flex flex-col items-center gap-4 h-fit justify-between pb-8 px-4 ">
      <div className="shapedividers_com-6562 h-12 w-screen"></div>

      <div className=" top-0 transform w-screen h-full absolute z-[-1] bg-primary" />
      <div className="text-2xl sm:text-4xl font-semibold text-white w-full">
        Projects
      </div>

      <div className="md:grid md:grid-cols-3 gap-24 hidden h-fit  ">
        {projectsObj.projects.map((project, index) => {
          return (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              transition={false}
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

        <div className=" w-[60%]">
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
                  transition
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
