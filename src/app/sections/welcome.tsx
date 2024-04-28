"use client";
import "../styles/welcome.css";
import Image from "next/image";
import Me from "/public/me.jpg";
import { TbArrowBadgeDown } from "react-icons/tb";

export default function WelcomeSection({ onClick }: { onClick: Function }) {
  const downloadPdf = () => {
    const pdfUrl = "/Fernando_TamayoCV2024.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = pdfUrl.split("/").pop() ?? "My_CV";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className=" shadow-2xl h-[100svh]  flex justify-around items-center flex-col rounded-b-[40px]  bg-backgroundLight relative">
      <div className="absolute w-screen h-full z-[-1] bg-gradient-to-r from-secondaryBold to-secondary bottom-0" />
      <div className="flex justify-start px-4">
        <div className="absolute  top-[5%] left-[15%] sm:left-auto sm:right-0 overflow-clip sm:overflow-visible">
          <div className="h-full w-full  bg-gradient-to-bl from-transparent via-backgroundLight  via-[70%] to-backgroundLight  absolute"></div>
          <Image
            src={Me}
            alt={"A nice photo of me"}
            priority
            className="opacity-1 rounded-full"
          />
          <div className=" h-24 w-24 border-4 rounded-full bg-gradient-to-tr from-cyan-400 via-secondary via-95%  to-primaryBold absolute top-[60%] right-[-10%] sm:right-[12%] sm:top-[80%] z-0 sm:h-32 sm:w-32 sm:border-8 border-backgroundLight" />
        </div>
        <div className=" flex flex-col justify-center gap-[24px] h-full relative pt-[60%] sm:pt-[0%] xl:pt-[0%]">
          <div className="flex flex-col gap-[16px]">
            <div className="text-xl">
              Hello there, I'm{" "}
              <span className="nameMain font-bold">Fernando</span>
            </div>
            <div className="font-medio xl:text-8xl md:text-7xl text-5xl flex flex-col w-[280px] md:w-[550px] xl:w-[720px]">
              <div className="partialUnder text-cyan-500 relative">
                Full-Stack
              </div>
              <div className=" text-right">Developer</div>
            </div>
            <div className="text-sm font-normal sm:max-w-96">
              Embarking on the coding journey – showcasing my full stack
              developer portfolio, ready to collaborate and create wonders
              together
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-2 sm:gap-6">
            <button
              onClick={downloadPdf}
              className="text-sm hover:shadow-lg hover:shadow-primary/50 transition-shadow duration-500 rounded-2xl p-4 sm:p-4 bg-cyan-400 sm:w-full text-white">
              Download CV
            </button>
            <button
              onClick={() => {
                onClick("contact");
              }}
              className="  text-sm font-semibold  text-cyan-400 rounded-3xl border-4  border-cyan-400 p-4 w-full hover:shadow-inner">
              Get in touch
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-col justify-between">
          <TbArrowBadgeDown className="scrollArrow" />
          <TbArrowBadgeDown className="scrollArrow" />
          <TbArrowBadgeDown className="scrollArrow" />
        </div>
      </div>
    </section>
  );
}
