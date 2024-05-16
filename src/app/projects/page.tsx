import Navbar from "../components/navbar";
import ProjectContainer from "./components/projectContainer";
import ProjectBar from "./components/projectsBar";

export default function ProjectPage() {
  return (
    <>
      {" "}
      <Navbar hideSections />
      <section className="h-screen grid  items-center gap-16 md:grid-rows-1 md:grid-cols-3 md:justify-around">
        <ProjectBar />
        <ProjectContainer />
      </section>
    </>
  );
}
