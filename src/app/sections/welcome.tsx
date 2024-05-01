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
    <section className=" shadow-2xl h-[100svh]  flex justify-around items-center sm:items-start flex-col rounded-b-[40px] sm:rounded-b-[72px]  bg-backgroundLight relative">
      <div className="absolute w-screen h-full z-[-1] bg-gradient-to-r from-secondaryBold to-secondary bottom-0" />
      <div className="flex justify-start px-4 sm:px-12 xl:px-24 2xl:px-52 ">
        <div className="absolute  top-[5%] sm:top-[15%] left-[15%] sm:left-auto sm:right-10 overflow-clip sm:overflow-visible sm:scale-110 2xl:scale-150 2xl:top-[20%] 2xl:right-[10%]">
          <div className="h-full w-full  bg-gradient-to-bl from-transparent via-backgroundLight  via-[70%] to-backgroundLight  absolute"></div>
          <Image
            src={Me}
            alt={"A nice photo of me"}
            priority
            className="opacity-1 rounded-full"
          />
          <div className=" h-24 w-24  border-4 rounded-full bg-gradient-to-tr from-cyan-400 via-secondary via-95%  to-primaryBold absolute top-[60%] right-[-10%] sm:right-[12%] sm:top-[80%] z-0 sm:h-40 sm:w-40 sm:border-8 border-backgroundLight" />
        </div>
        <div className="flex flex-col justify-center gap-[24px] h-full relative pt-[60%] sm:pt-[20%]  ">
          <div className="flex flex-col gap-[16px] 2xl:gap-[32px]">
            <div className="text-xl sm:text-3xl 2xl:text-5xl">
              Hello there, I'm{" "}
              <span className="nameMain font-bold">Fernando</span>
            </div>
            <div className="font-medio xl:text-8xl md:text-7xl 2xl:text-9xl text-5xl flex flex-col w-[280px] md:w-[550px] xl:w-[720px] 2xl:w-[1000px]">
              <div className="partialUnder text-cyan-500 relative">
                Full-Stack
              </div>
              <div className=" text-right">Developer</div>
            </div>
            <div className="text-sm font-normal sm:max-w-2xl sm:text-xl 2xl:max-w-5xl">
              Embarking on the coding journey – showcasing my full stack
              developer portfolio, ready to collaborate and create wonders
              together
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-2 sm:gap-6">
            <button
              onClick={downloadPdf}
              className="text-sm sm:text-lg hover:shadow-lg hover:shadow-cyan-300/70 transition-shadow duration-500 rounded-2xl p-4  bg-cyan-400 w-full 2xl:w-96 text-white">
              Download CV
            </button>
            <button
              onClick={() => {
                onClick("contact");
              }}
              className="  text-sm sm:text-lg font-semibold  text-cyan-500 rounded-3xl border-4  border-cyan-400 p-4 w-full 2xl:w-96 hover:shadow-inner">
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
