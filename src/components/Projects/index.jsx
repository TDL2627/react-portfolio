import ProjectCard from "./ProjectCard";
import { projects } from "./project";
const Projects = () => {
  return (
    <>
      <div className="h-screen w-full grid justify-items-center">
        <h1>My Projects</h1>
        {projects.map((project) => (
          <ProjectCard key={project.title}  project={project}/>
        ))}
      </div>
    </>
  );
};
export default Projects;
