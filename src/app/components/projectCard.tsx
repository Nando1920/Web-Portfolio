"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CgDetailsMore } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import Image from "next/image";
import { IProject } from "./projectCardWeb";
import { getProjectImg } from "../utils/utils";

export default function ProjectCard({
  project,
  index,
  position,
  setAuto,
  setPosition,
}: {
  project: IProject;
  index: number;
  position: number;
  setAuto: Function;
  setPosition: Function;
}) {
  return (
    <motion.div
      onClick={() => {
        setPosition(index);
        setAuto(false);
      }}
      className={`imageCard w-[100%]  flex-shrink-0 shadow-lg   rounded-lg overflow-hidden ${
        position === index && "selected sm:selected"
      } `}>
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
          View Project
        </a>
      </div>
    </motion.div>
  );
}
