import projectsObj from "../../../assets/json/projects.json";

export default function ProjectBar() {
  return (
    <div className=" w-[90%] gap-5 justify-start md:flex-col row-span-1 hidden md:flex">
      {projectsObj.projects.map((project) => {
        return (
          <div
            className="cursor-pointer hover:text-primaryLight"
            key={project.name}>
            {project.name}
          </div>
        );
      })}
    </div>
  );
}
