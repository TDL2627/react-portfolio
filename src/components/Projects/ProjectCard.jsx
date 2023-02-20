const ProjectCard = (props) => {
  const { project } = props;
  return (
    <>
      <div className="border border-black my-5 w-[250px]">
        <p>{project.title}</p>
        <p>{project.description}</p>
        <p>{project.image}</p>
        <p>{project.linkLive}</p>
        <p>{project.linkGithub}</p>
      </div>
    </>
  );
};
export default ProjectCard;
