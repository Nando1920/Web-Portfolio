import Navbar from "./navbar";
import { ScrollWrapper } from "./scrollWrapper";
import ExperienceSection from "./sections/experoence";
import ReachOutSection from "./sections/reachOut";
import SkillsSection from "./sections/skills";
import WelcomeSection from "./sections/welcome";

export default function Home() {
  return (
    <main className=" overflow-hidden">
      <Navbar />
      <ScrollWrapper>
        <div className="p-4 sm:px-10 lg:px-16 xl:py-48 flex flex-col h-fit">
          <WelcomeSection />
          <SkillsSection />
          <ExperienceSection />
          <ReachOutSection />
        </div>
      </ScrollWrapper>
    </main>
  );
}
