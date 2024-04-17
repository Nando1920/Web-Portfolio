"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FaCode } from "react-icons/fa";
import skillsImage from "../../../public/aboutme.jpg";
import experienceImage from "../../../public/exp.webp";
import educationImage from "../../../public/exp.webp";

export default function SkillsSection() {
  const [section, setSection] = useState("skills");
  const [image, setImage] = useState<StaticImageData>(skillsImage);

  const navArray: any[] = [
    { name: "Skills", section: "skills", image: skillsImage },
    { name: "Experience", section: "experience", image: experienceImage },
    { name: "Education", section: "education", image: educationImage },
  ];

  const getContent = (section: string) => {
    switch (section) {
      case "skills":
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

  const handleSectionChange = (
    selectedSection: string,
    selectedImage: StaticImageData
  ) => {
    setSection(selectedSection);
    setImage(selectedImage);
  };

  return (
    <section className="h-fit p-2">
      <div className="grid grid-rows-2 gap-4 h-full ">
        <div className=" row-span-2">
          <Image src={image} alt="56564" />
        </div>
        <div className="row-span-1 flex flex-col gap-4 bg-backgroundLight">
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
              {navArray.map((item) => (
                <li
                  key={item.section}
                  className={`cursor-pointer hover:text-violet-600 ${
                    section === item.section ? "font-semibold" : ""
                  }`}
                  onClick={() => handleSectionChange(item.section, item.image)}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div>{getContent(section)}</div>
        </div>
      </div>
    </section>
  );
}
