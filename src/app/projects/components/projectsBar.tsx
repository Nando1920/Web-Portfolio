import projectsObj from "../../../assets/json/projects.json";

export default function ProjectBar() {
  return (
    <div className="flex gap-5 md:flex-col row-span-1">
      {projectsObj.projects.map((project) => {
        return <div>{project.name}</div>;
      })}
    </div>
  );
}
