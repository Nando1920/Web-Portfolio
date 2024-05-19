"use client";
import { LegacyRef, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaCode } from "react-icons/fa";
import skillsImage from "../../../public/aboutme.jpg";
import experienceImage from "../../../public/exp.webp";
import educationImage from "../../../public/education.jpg";
import "../styles/aboutMe.css";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

export default function AboutSection({
  forwardedRef,
}: {
  forwardedRef: LegacyRef<HTMLElement> | undefined;
}) {
  const [section, setSection] = useState("skills");
  const [mask, setMask] = useState("");

  const navArray: any[] = [
    { name: "Skills", section: "skills" },
    { name: "Experience", section: "experience" },
    { name: "Education", section: "education" },
  ];

  const getContent = (section: string) => {
    switch (section) {
      case "skills":
        const skillList: string[] = [
          "React / Next.js",
          "Typescript",
          "Javascript",
          "PHP",
          "Node.js",
          "MySQL",
          "HTML / CSS",
          "Tailwind",
          "Capacitor",
          "REST APIs",
          "GraphQL",
          "WordPress",
          "Multi-lingual",
        ];
        return (
          <ul className="grid  grid-cols-2  gap-2 my-2 sm:grid-flow-col sm:grid-cols-3 sm:grid-rows-5">
            {skillList.map((skill, index) => {
              return (
                <li
                  key={index}
                  className="ml-2 mb-1 relative flex items-center gap-2 flex-nowrap text-nowrap">
                  <span className="before:left-0 before:w-2 before:h-2 before:bg-primaryBold before:rounded-full before:block"></span>
                  {skill}
                </li>
              );
            })}
          </ul>
        );
      case "experience":
        return (
          <ul className="py-4">
            <li>
              <div className="flex gap-2 items-center">
                <span className="before:left-0 before:w-2 before:h-2 before:bg-primaryBold before:rounded-full before:block"></span>
                Soft Pauer Ltd. - Software Developer
              </div>
              <div className="px-8">Aug 2022 - Present</div>
            </li>
          </ul>
        );
      case "education":
        return (
          <ul className="py-4 text-sm flex flex-col gap-4">
            <li className="flex flex-col gap-2">
              <div className=" font-semibold">
                Nottingham Trent University - Master&apos;s of Computer Science
              </div>
              <div className="px-4 flex gap-2 items-center">
                {" "}
                <span className="before:left-0 before:w-2 before:h-2 before:bg-primaryBold before:rounded-full before:block"></span>
                Upper Second Class Degree (2:1 High)
              </div>
            </li>
            <li className="flex flex-col gap-2">
              <div className="items-center font-semibold">
                City of Oxford College - ICT Level 3 Extended Diploma
              </div>
              <div className="flex gap-2  px-4 items-center">
                <span className="before:left-0 before:w-2 before:h-2 before:bg-primaryBold before:rounded-full before:block"></span>
                Tripple Distinction
              </div>
            </li>
          </ul>
        );
      default:
        <>No Content Found</>;
    }
  };

  useEffect(() => {
    const images = document.querySelectorAll(
      ".masked:not(.hiddenImg), .unmasked"
    );

    images.forEach((image) => {
      image.classList.add("masked-reset");
      setTimeout(() => {
        image.classList.remove("masked-reset");
      }, 10);
    });
  }, [section]);

  const handleSectionChange = (selectedSection: string) => {
    if (selectedSection !== section) setMask(section);
    setSection(selectedSection);
  };

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const controller = useAnimation();

  useEffect(() => {
    if (inView) {
      controller.start("visible");
    }
  }, [inView, controller]);

  return (
    <section
      ref={forwardedRef}
      className="relative h-fit py-8 sm:py-16 lg:px-20">
      <div className=" top-0 transform left-0 w-screen -translate-x-4 sm:-translate-x-10 h-full absolute z-[-1] bg-gradient-to-br from-secondaryBold via-secondary via-50% to-secondary" />
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={controller}
        transition={{ duration: 0.5, delay: 0.33 }}
        className="grid grid-rows-2 gap-2 h-full md:grid-cols-2 md:grid-rows-1 md:gap-12 md:min-h-[500px]  items-center">
        <div className=" row-span-2 flex flex-col h-48 sm:h-[300px] xl:h-[400px]  relative aspect-auto sm:row-span-1 ">
          <Image
            src={skillsImage}
            alt="Skills Image"
            placeholder="blur"
            layout="fill"
            className={`h-full ${
              section === "skills" ? "unmasked" : "masked"
            } ${mask !== "skills" ? "hiddenImg" : ""} absolute `}
          />

          <Image
            src={experienceImage}
            alt="Experience Image"
            placeholder="blur"
            layout="fill"
            className={`h-full ${
              section === "experience" ? "unmasked" : "masked"
            } ${mask !== "experience" ? "hiddenImg" : ""} absolute`}
          />

          <Image
            src={educationImage}
            alt="Education Image"
            placeholder="blur"
            layout="fill"
            className={`h-full ${
              section === "education" ? "unmasked" : "masked"
            } ${
              mask !== "education" && section !== "education" ? "hiddenImg" : ""
            } absolute`}
          />
        </div>
        <div className="row-span-1 flex flex-col gap-4 text-backgroundLight min-h-[550px]:">
          <div className="flex flex-row justify-start text-2xl w-full items-center ">
            <FaCode />
            <div className="text-2xl font-semibold ">About me</div>
          </div>
          <div>
            Hey, I&apos;m Fernando, a full-stack developer with a solid
            understanding of the software development life cycle and proficiency
            in multiple programming languages.
          </div>
          <div>
            I enjoy collaborating with teams or working independently,
            showcasing versatility in diverse projects. While I excel in React
            and Node, I&apos;m eager to expand into .Net, Spring, or Laravel.
            Continuous learning and growth drive my passion for web development.{" "}
          </div>
          <div>
            <div>
              <ul className="flex gap-4 relative">
                {navArray.map((item) => (
                  <li
                    key={item.section}
                    className={`cursor-pointer hover:text-primary ${
                      section === item.section ? "font-semibold" : ""
                    }`}
                    onClick={() => handleSectionChange(item.section)}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>{getContent(section)}</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
