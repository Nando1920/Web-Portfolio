import ExperienceSection from "./experoence";
import Navbar from "./navbar";
import { ScrollWrapper } from "./scrollWrapper";
import SkillsSection from "./skills";
import WelcomeSection from "./welcome";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ScrollWrapper>
        <div className="p-4 sm:px-10 lg:px-16 xl:py-48 flex flex-col h-fit">
          <WelcomeSection />
          <SkillsSection />
          <ExperienceSection />
        </div>
      </ScrollWrapper>
    </main>
  );
}
