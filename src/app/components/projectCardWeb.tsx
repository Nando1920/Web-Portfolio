"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { CgDetailsMore } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import Image from "next/image";
import { getProjectImg } from "../utils/utils";

export interface IProject {
  name: string;
  client: string;
  text: string;
  link: string;
}

export default function ProjectCardWeb({
  project,
  index,
}: {
  project: IProject;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const controller = useAnimation();

  const isEvenIndex: boolean = 2 % index === 0;

  useEffect(() => {
    if (inView) {
      controller.start("visible");
    }
  }, [inView, controller]);

  const imgContainer = () => {
    return (
      <div className=" relative w-1/2 ">
        <Image
          loading="lazy"
          src={getProjectImg(project.name)}
          alt="temp"
          fill
          placeholder="blur"
        />
        <div className=" hidden opacity-0 md:flex justify-center items-center gap-10  absolute z-[1] bg-cover transition-color duration-300  hover:bg-black hover:opacity-60  w-full h-full">
          <Link
            href={`/projects?project=${project.name}`}
            className="rounded-full border-2 p-2">
            <CgDetailsMore className="w-10 h-10  text-white" />
          </Link>
          <Link href={project.link} className="rounded-full border-2 p-2">
            <FaCode className="w-10 h-10  text-white" />
          </Link>
        </div>
      </div>
    );
  };

  const textContainer = () => {
    return (
      <div className=" w-1/2 flex-grow-0 flex flex-col justify-center items-start gap-4 p-4 overflow-hidden">
        <div className="flex justify-between w-full">
          <div className="text-xl text-primary font-semibold">
            {project.name}
          </div>
          <div className="text-xl font-light">{project.client}</div>
        </div>
        <div className="text-lg text-ellipsis line-clamp-[4] font-light">
          {project.text}
        </div>
      </div>
    );
  };

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: isEvenIndex ? -150 : 150 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={controller}
      transition={{ duration: 0.75, delay: 0.5 }}
      whileHover={{
        rotate: isEvenIndex ? -1 : 1,
        transition: { duration: 0.2 }, // Specify separate transition for hover effect
      }} // This adds the rotation on hover
      className=" bg-backgroundLight w-[700px] xl:w-[900px] h-[300px] 2xl:w-[1200px] 2xl:h-[400px] 4K:w-full 4K:h-[500px] flex justify-evenly rounded-xl overflow-hidden shadow-md gap-4 ">
      {isEvenIndex ? (
        <>
          {imgContainer()}
          {textContainer()}
        </>
      ) : (
        <>
          {textContainer()}
          {imgContainer()}
        </>
      )}
    </motion.div>
  );
}
