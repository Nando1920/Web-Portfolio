import "./globals.css";

export default function WelcomeSection() {
  return (
    <section className="flex flex-col gap-[16px]">
      <div className="text-xl">
        Hello there, I'm <span className="nameMain font-bold">Fernando</span>{" "}
      </div>
      <div className="font-medio xl:text-8xl md:text-7xl text-5xl flex flex-col w-[280px] md:w-[550px] xl:w-[720px]">
        <div className=" partialUnder text-cyan-500 relative "> Full-Stack</div>
        <div className=" text-right">Developer</div>
      </div>
      <div className="flex flex-row gap-6">
        <button className=" hover:shadow-lg hover:shadow-cyan-300/50 transition-shadow duration-500 rounded-3xl p-4 bg-cyan-300 w-38 text-white">
          Download CV
        </button>
        <button className="text-cyan-300 rounded-3xl border-4 bg-gradient-linear from-red-700 to-yellow-600 border-cyan-300 p-4 w-38 hover:shadow-inner">
          Get in touch
        </button>
      </div>
    </section>
  );
}
