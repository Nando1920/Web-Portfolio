import eventr from "../../../public/eventr.png";
import portfolio from "../../../public/Portfolio.png";
import tempImage from "../../../public/aboutme.jpg";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoCapacitor } from "react-icons/io5";

type SkillBadgeProps = {
  skill: string;
  className?: string; // Add className prop to apply CSS classes
};

export const getProjectImg = (name: string) => {
  switch (name) {
    case "EventR":
      return eventr;
    case "Portfolio":
      return portfolio;
    default:
      return tempImage;
  }
};

export const getSkillBadge = ({ skill, className }: SkillBadgeProps) => {
  switch (skill) {
    case "Next":
      return <SiNextdotjs className={className} />;
    case "React":
      return <FaReact className={className} />;
    case "HTML":
      return <FaHtml5 className={className} />;
    case "CSS":
      return <FaCss3Alt className={className} />;
    case "MySQL":
      return <GrMysql className={className} />;
    case "Tailwind":
      return <SiTailwindcss className={className} />;
    case "Typescript":
      return <SiTypescript className={className} />;
    case "Node":
      return <FaNodeJs className={className} />;
    case "Capacitor":
      return <IoLogoCapacitor className={className} />;
    case "PHP":
      return <FaPhp className={className} />;
    default:
      return null; // or you can return a default icon or a placeholder
  }
};

export const downloadPdf = () => {
  const pdfUrl = "/Fernando_TamayoCV2024.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = pdfUrl.split("/").pop() ?? "My_CV";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
