import Navbar from "../components/navbar";
import ProjectContainer from "./components/projectContainer";
import ProjectBar from "./components/projectsBar";

export default function ProjectPage() {
  return (
    <>
      {" "}
      <Navbar hideSections returnArrow />
      <section className="h-screen flex flex-col pt-12 items-center justify-center md:pt-8">
        {/* <ProjectBar /> */}
        <ProjectContainer />
      </section>
    </>
  );
}
