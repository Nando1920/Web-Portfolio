import Navbar from "../components/navbar";
import ProjectContainer from "./components/projectContainer";
import ProjectBar from "./components/projectsBar";

export default function ProjectPage() {
  return (
    <>
      {" "}
      <Navbar hideSections returnArrow />
      <section className="h-screen flex flex-col pt-12 items-center gap-4 md:grid-rows-1 md:grid-cols-3  md:pt-8">
        {/* <ProjectBar /> */}
        <ProjectContainer />
      </section>
    </>
  );
}
