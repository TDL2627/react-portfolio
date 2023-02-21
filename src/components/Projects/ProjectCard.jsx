const ProjectCard = (props) => {
  const { project } = props;
  return (
    <>
      <div className="border border-black my-5 w-[250px] bg-gray-400 grid justify-items-center text-center">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p>{project.image}</p>
        <p>{project.linkLive}</p>
        <p>{project.linkGithub}</p>
      </div>
    </>
  );
};
export default ProjectCard;
