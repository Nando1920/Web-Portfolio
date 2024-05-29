"use client";
import Image from "next/image";
import projectsObj from "../../../assets/json/projects.json";
import { useEffect, useState } from "react";
import "../../styles/projectInfo.css";
import { getSkillBadge } from "@/app/utils/utils";

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

  useEffect(() => {}, [selectedProject]);

  const projectData =
    projectsObj.projects.find((project) => {
      return project.name === selectedProject;
    }) ?? projectsObj.projects[0];

  return (
    <div className="flex flex-col md:justify-between row-span-2 items-center w-[90%] h-full gap-4 relative ">
      <div className="text-xl md:text-3xl w-[60%]">{projectData?.name}</div>
      <div className="flex justify-center w-full">
        <div className="bg-white p-2 relative w-full h-[30vh] md:h-[40vh] md:w-[40%]">
          <Image
            src={projectData.images[position]}
            alt="Header Img"
            fill
            sizes="auto"
          />
        </div>
      </div>
      <div className="reltative flex flex-col  justify-center items-center relative">
        <div className="relative md:h-24 overflow-visible">
          <div className="shapedividers_com-9562 h-12 md:h-full absolute w-screen -z-10"></div>
        </div>
        {projectData.images.length > 1 && (
          <div className="h-16  flex flex-grow-0 flex-shrink-0 gap-2 overflow-auto overflow-y-hidden justify-center whitespace-nowrap before:bg-primary before:w-screen before:h-full before:absolute before:-z-10">
            {projectData.images?.map((image, i) => {
              return (
                <div
                  key={i}
                  className={`h-auto w-20 relative bg-white flex-shrink-0 after:absolute  after:h-full after:w-full ${
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

        <div className="relative flex py-4 px-8 text-backgroundLight justify-center items-center before:bg-primary before:w-screen before:h-full before:absolute before:-z-10  ">
          <div className=" md:w-[60%] flex flex-col gap-4">
            <div className="text-sm">{projectData?.text}</div>
            <div className="text-md">{projectData?.client}</div>

            <div className="flex gap-4 md:gap-8 justify-center ">
              {projectData?.badges?.map((badge, index) => {
                return (
                  <div key={index}>
                    {getSkillBadge({
                      skill: badge,
                      className:
                        "h-6 w-6 md:h-8 md:w-8 lg:h-14 lg:w-14 4K:h-18 4K:w-18",
                    })}{" "}
                  </div>
                );
              })}
            </div>
            <div className="text-md">{}</div>
            <a href={projectData?.link} className="text-md ">
              Visit Site
            </a>
            {projectData.usefulLinks && (
              <>
                <div className="text-md">Also view:</div>
                {projectData?.usefulLinks?.map((link, i) => {
                  return (
                    <a key={i + "link"} href={link.link} className="text-md ">
                      {link.text}
                    </a>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
