"use client";
import Image from "next/image";
import projectsObj from "../../../assets/json/projects.json";
import { useEffect, useMemo, useState } from "react";
import "../../styles/projectInfo.css";
import { getSkillBadge } from "@/app/utils/utils";
import StoreBadges from "./storeBadges";

export default function ProjectContainer() {
  const [queryString, setQueryString] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setQueryString(window.location.search);
    }
  }, []);

  const urlParams = new URLSearchParams(queryString);
  const [position, setPosition] = useState(0);

  const selectedProject: string | null = urlParams.get("project");

  const projectData = useMemo(() => {
    return (
      projectsObj.projects.find(
        (project) => project.name === selectedProject
      ) ?? projectsObj.projects[0]
    );
  }, [selectedProject, projectsObj.projects]);

  return (
    <div className="flex flex-col   items-center w-[90%] h-full">
      <div className="relative flex flex-col items-center w-[95%] h-fit">
        <div className="flex flex-col justify-center md:gap-12 w-full items-center relative ">
          <div className="text-xl md:text-3xl 4K:text-4xl w-[80%] font-semibold">
            {projectData?.name}
          </div>
          <div className=" bg-white p-2 relative w-full h-[30vh] md:h-[40vh] md:w-[60%] 4K:w-[80%] ">
            <Image
              src={projectData.images[position]}
              alt="Header Img"
              fill
              sizes="auto"
            />
          </div>
        </div>
        <div className="shapedividers_com-9562 h-12  w-screen -z-10 "></div>
      </div>

      <div className=" flex flex-col justify-center  h-full">
        <div className="bg-primary w-screen h-full   ">
          {projectData.images.length > 1 && (
            <div className="h-16 4K:h-24  flex  gap-2 overflow-auto overflow-y-hidden justify-center whitespace-nowrap 4K:gap-8 ">
              {projectData.images?.map((image, i) => {
                return (
                  <div
                    key={i}
                    className={`h-auto w-[64px] 4K:w-[128px]  relative bg-white flex-shrink-0 after:absolute  after:h-full after:w-full ${
                      position === i && "after:opacity-25 after:bg-black"
                    }`}
                    onClick={() => {
                      setPosition(i);
                    }}>
                    <Image
                      src={image}
                      alt="project img"
                      layout="fill"
                      sizes="auto"
                    />
                  </div>
                );
              })}
            </div>
          )}

          <div className=" flex py-4 px-8 text-backgroundLight justify-center items-center  ">
            <div className=" md:w-[60%] flex flex-col gap-4 4K:gap-8">
              <div className="text-sm 4K:text-2xl">{projectData?.text}</div>
              <div className="flex justify-between items-center font-semibold">
                <div className="text-md 4K:text-2xl">{projectData?.client}</div>
                <a
                  href={projectData?.link}
                  className="text-md font-semibold 4K:text-2xl">
                  Visit Site
                </a>
              </div>

              <div className="flex gap-4 md:gap-8 justify-center ">
                {projectData?.badges?.map((badge, index) => {
                  return (
                    <div key={index}>
                      {getSkillBadge({
                        skill: badge.icon,
                        className: `h-6 w-6 md:h-8 md:w-8 lg:h-14 lg:w-14 4K:h-18 4K:w-18 hover:text-${badge.colour}-500`,
                      })}{" "}
                    </div>
                  );
                })}
              </div>

              {projectData.usefulLinks && (
                <>
                  <div className="text-md">Also view:</div>
                  {projectData?.usefulLinks.stores && (
                    <>
                      <StoreBadges {...projectData.usefulLinks.stores} />
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
