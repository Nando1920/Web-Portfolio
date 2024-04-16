"use client";
import "../styles/welcome.css";
import { TbArrowBadgeDown } from "react-icons/tb";
import Image from "next/image";
import Me from "/public/me.jpg";

export default function WelcomeSection() {
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
    <section className="h-screen">
      <div className="absolute scale-[80%] top-[2%] left-[15%] sm:left-auto sm:right-0  ">
        <div className=" h-full w-full  bg-gradient-radial from-transparent via-backgroundLight  via-[60%] to-backgroundLight  scale-105  z-20 absolute"></div>
        <Image
          src={Me}
          alt={"A nice photo of me"}
          priority
          className="opacity-1 rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center gap-[16px] h-full relative pt-[60%] sm:pt-[0%]">
        <div className="flex flex-col gap-[16px]">
          <div className="text-xl">
            Hello there, I'm{" "}
            <span className="nameMain font-bold">Fernando</span>{" "}
          </div>
          <div className="font-medio xl:text-8xl md:text-7xl text-5xl flex flex-col w-[280px] md:w-[550px] xl:w-[720px]">
            <div className=" partialUnder text-cyan-500 relative ">
              Full-Stack
            </div>

            <div className=" text-right">Developer</div>
          </div>
          <div className="text-xs font-extralight  sm:max-w-96">
            Lorem ipsum dolor sit amet, veritus euripidis sed ne, nam in illud
            fabulas. Id partem altera animal sit, platonem facilisis est in, ut
            vel eirmod epicuri.
          </div>
        </div>

        <div className="flex sm:flex-row flex-col gap-2 sm:gap-6">
          <button
            onClick={downloadPdf}
            className="text-sm hover:shadow-lg hover:shadow-cyan-300/50 transition-shadow duration-500 rounded-3xl p-4 sm:p-4 bg-cyan-300 sm:w-38 text-white">
            Download CV
          </button>
          <button className="text-sm text-cyan-300 rounded-3xl border-4 hover:bg-gradient-to-r from-red-700 to-yellow-600 border-cyan-300 p-4 w-38 hover:shadow-inner">
            Get in touch
          </button>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col justify-between">
            <TbArrowBadgeDown className="scrollArrow" />
            <TbArrowBadgeDown className="scrollArrow " />
            <TbArrowBadgeDown className="scrollArrow " />
          </div>
        </div>
      </div>
    </section>
  );
}
