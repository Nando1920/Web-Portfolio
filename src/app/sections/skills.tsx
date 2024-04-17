"use client";
import Image, { StaticImageData } from "next/image";
import { FaCode } from "react-icons/fa";
import skills from "../../../public/aboutme.jpg";
import experience from "../../../public/exp.webp";

import { useState } from "react";

export default function SkillsSection() {
  const [section, setSection] = useState("skills");
  const [image, setImage] = useState<StaticImageData>(skills);

  const navArray: any[] = [
    { name: "Skills", section: "skills" },
    { name: "Experience", section: "experience" },
    { name: "Education", section: "education" },
  ];

  const getContent = (section: string) => {
    switch (section) {
      case "skills":
        if (image !== skills) {
          setImage(skills);
        }

        return (
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
            lobortis scelerisque fermentum dui faucibus in ornare. Ac tortor
            dignissim convallis aenean et tortor at risus. Sit amet cursus sit
            amet dictum sit. Nisl tincidunt eget nullam non nisi est sit amet.
          </>
        );
      case "experience":
        if (image !== experience) {
          setImage(experience);
        }

        return (
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac
            habitasse platea dictumst vestibulum rhoncus est. Nullam ac tortor
            vitae purus faucibus ornare suspendisse sed. In vitae turpis massa
            sed elementum. Eu consequat ac felis donec et odio pellentesque.
          </>
        );
      case "education":
        return (
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            massa ultricies mi quis. Fusce id velit ut tortor pretium. Eu sem
            integer vitae justo eget magna. Semper risus in hendrerit gravida.
          </>
        );
      default:
        <>No Content Found</>;
    }
  };
  return (
    <section className="h-fit p-2">
      <div className="grid grid-rows-9 gap-4 h-full ">
        <div className=" row-span-2">
          <Image src={image} alt="56564" />
        </div>
        <div className="row-span-6 flex flex-col gap-4 bg-backgroundLight">
          <div className="flex flex-row justify-start text-2xl w-full items-center text-violet-600">
            <FaCode />
            <div className=" font-semibold ">About me</div>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Convallis convallis tellus id interdum velit laoreet. Ullamcorper
            eget nulla facilisi etiam dignissim. Lorem donec massa sapien
            faucibus et molestie ac feugiat sed.{" "}
          </div>
          <div>
            <ul className="flex gap-4 relative">
              {navArray.map((element) => {
                return (
                  <li
                    className="hover:text-violet-600"
                    onClick={() => {
                      setSection(element.section);
                    }}>
                    {element.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>{getContent(section)}</div>
        </div>
      </div>
    </section>
  );
}
