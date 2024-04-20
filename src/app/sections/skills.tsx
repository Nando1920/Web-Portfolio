"use client";
import { LegacyRef, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FaCode } from "react-icons/fa";
import skillsImage from "../../../public/aboutme.jpg";
import experienceImage from "../../../public/exp.webp";
import educationImage from "../../../public/education.jpg";
import "../styles/aboutMe.css";

export default function AboutSection({
  forwardedRef,
}: {
  forwardedRef: LegacyRef<HTMLElement> | undefined;
}) {
  const [section, setSection] = useState("skills");
  const [mask, setMask] = useState("");

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

  useEffect(() => {
    const images = document.querySelectorAll(
      ".masked:not(.hiddenImg), .unmasked"
    );
    console.log(images);

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
  console.log("fades in: ", section, "fades out: ", mask);
  return (
    <section ref={forwardedRef} className="h-fit p-2">
      <div className="grid grid-rows-2 gap-4 h-full ">
        <div className=" row-span-2 flex flex-col h-48 relative aspect-auto">
          <Image
            src={skillsImage}
            alt="56564"
            className={`h-full ${
              section === "skills" ? "unmasked " : "masked"
            } ${mask !== "skills" ? "hiddenImg" : ""}   inset-0 absolute `}
          />
          <Image
            src={experienceImage}
            alt="56564"
            className={`h-full ${
              section === "experience" ? "unmasked  " : "masked "
            }   ${mask !== "experience" ? "hiddenImg " : ""} inset-0 absolute `}
          />
          <Image
            src={educationImage}
            alt="56564"
            className={`h-full ${
              section === "education" ? "unmasked  " : "masked "
            } ${
              mask !== "education" && section !== "education"
                ? "hiddenImg "
                : ""
            } inset-0  absolute `}
          />
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
                  onClick={() => handleSectionChange(item.section)}>
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
