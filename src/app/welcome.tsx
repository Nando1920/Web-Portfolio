import "./globals.css";

export default function WelcomeSection() {
  return (
    <section className="">
      <div className="nameMain">Fernando Tamayo </div>
      <div className="font-medio xl:text-8xl md:text-7xl text-5xl flex flex-col w-[280px] md:w-[550px] xl:w-[720px]">
        <div className="partialUnder text-cyan-500 relative "> Full-Stack</div>
        <div className=" text-right">Developer</div>
      </div>
      <div className="font-medium">Hello There. </div>
    </section>
  );
}
