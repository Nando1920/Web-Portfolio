"use client";
import "../styles/welcome.css";
import Image from "next/image";
import Me from "/public/me.jpg";
import { TbArrowBadgeDown } from "react-icons/tb";
import { motion } from "framer-motion";
import { downloadPdf } from "../utils/utils";

export default function WelcomeSection({ onClick }: { onClick: Function }) {
  return (
    <section className=" shadow-2xl h-[100svh]  flex justify-around items-center sm:items-start flex-col rounded-b-[40px] sm:rounded-b-[72px]  bg-backgroundLight relative 2xl:px-[5%] 4K:px-[15%]">
      <div className="absolute w-screen h-full z-[-1] bg-gradient-to-r from-secondaryBold to-secondary bottom-0 left-0" />
      <div className="flex justify-start px-4 sm:px-12 xl:px-24 2xl:px-52 4K:px-24">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="absolute  top-[5%] sm:top-[15%] left-[15%] sm:left-auto sm:right-10 overflow-clip sm:overflow-visible sm:scale-110  2xl:top-[20%] 2xl:right-[15%] 4K:right-[20%] 4K:top-[25%]">
          <div className="h-[110%] w-full 4K:scale-150 z-10 bg-gradient-to-bl from-transparent via-backgroundLight  via-[70%] to-backgroundLight  absolute"></div>
          <Image
            src={Me}
            alt={"A nice photo of me"}
            priority
            className="opacity-1 rounded-full 4K:scale-150  -z-10"
          />
          <div className=" h-24 w-24 4K:scale-150 z-10 4K:top-[100%] 4K:right-[0%] border-4 rounded-full bg-gradient-to-tr from-cyan-400 via-secondary via-95%  to-primaryBold absolute top-[60%] right-[-10%] sm:right-[12%] sm:top-[80%]  sm:h-40 sm:w-40 sm:border-8 border-backgroundLight" />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="flex flex-col z-10 justify-center gap-[24px] h-full relative pt-[60%] sm:pt-[20%] 2xl:gap-16">
          <div className="flex flex-col gap-[16px] 2xl:gap-[32px]">
            <div className="text-xl sm:text-3xl 2xl:text-4xl 4K:text-5xl">
              Hello there, I&apos;m{" "}
              <span className="nameMain font-bold">Fernando</span>
            </div>
            <div className="font-medio xl:text-8xl md:text-7xl 2xl:text-8xl text-5xl flex flex-col w-[280px] md:w-[550px] xl:w-[720px] 2xl:w-[800px] 4K:w-[1000px] 4K:text-9xl">
              <div className="partialUnder text-cyan-500 relative">
                Full-Stack
              </div>
              <div className="text-right">Developer</div>
            </div>
            <div className="text-sm font-normal sm:max-w-2xl sm:text-xl 2xl:max-w-3xl 4K:text-3xl">
              Embarking on the coding journey – showcasing my full stack
              developer portfolio, ready to collaborate and create wonders
              together
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-2 sm:gap-6 4K:h-20">
            <button
              onClick={downloadPdf}
              className="text-sm sm:text-lg 4K:text-2xl hover:shadow-lg hover:shadow-cyan-300/70 transition-shadow duration-500 rounded-2xl p-4 bg-cyan-400 w-full 2xl:w-96 text-white">
              Download CV
            </button>
            <button
              onClick={() => {
                onClick("contact");
              }}
              className="contactButton relative flex items-center hover:text-backgroundLight border-2 hover:border-transparent border-cyan-400 justify-center text-sm sm:text-lg  4K:text-2xl font-semibold text-cyan-500 rounded-3xl bg-backgroundLight p-4 w-full 2xl:w-96  
      before:absolute  before:bg-gradient-to-r from-purple-600 to-teal-500 before:rounded-3xl before:w-[102%] before:h-[102%] before:opacity-0 before:transition-opacity before:duration-300 before:z-[-1] before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 hover:before:opacity-100 hover:z-0">
              Get in touch
            </button>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        className="flex flex-row justify-center w-full 2xl:scale-150">
        <div className="flex flex-col justify-between">
          <TbArrowBadgeDown className="scrollArrow" />
          <TbArrowBadgeDown className="scrollArrow" />
          <TbArrowBadgeDown className="scrollArrow" />
        </div>
      </motion.div>
    </section>
  );
}
