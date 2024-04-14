import "./styles/welcome.css";
import { TbArrowBadgeDown } from "react-icons/tb";

export default function WelcomeSection() {
  return (
    <section className="flex flex-col justify-center gap-[48px]  h-screen">
      <div className="flex flex-col gap-[16px]">
        <div className="text-xl">
          Hello there, I'm <span className="nameMain font-bold">Fernando</span>{" "}
        </div>
        <div className="font-medio xl:text-8xl md:text-7xl text-5xl flex flex-col w-[280px] md:w-[550px] xl:w-[720px]">
          <div className=" partialUnder text-cyan-500 relative ">
            Full-Stack
          </div>
          <div className=" text-right">Developer</div>
        </div>
        <div className="text-xs font-extralight">
          Lorem ipsum dolor sit amet, veritus euripidis sed ne, nam in illud
          fabulas. Id partem altera animal sit, platonem facilisis est in, ut
          vel eirmod epicuri.
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-2 sm:gap-6">
        <button className="text-sm hover:shadow-lg hover:shadow-cyan-300/50 transition-shadow duration-500 rounded-3xl p-4 sm:p-4 bg-cyan-300 sm:w-38 text-white">
          Download CV
        </button>
        <button className="text-sm text-cyan-300 rounded-3xl border-4 hover:bg-gradient-to-r from-red-700 to-yellow-600 border-cyan-300 p-4 w-38 hover:shadow-inner">
          Get in touch
        </button>
      </div>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-col justify-between">
          <TbArrowBadgeDown className="scrollArrow animate-pulse" />
          <TbArrowBadgeDown className="scrollArrow " />
          <TbArrowBadgeDown className="scrollArrow " />
        </div>
      </div>
    </section>
  );
}
