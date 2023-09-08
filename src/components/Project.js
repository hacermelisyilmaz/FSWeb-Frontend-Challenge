function Project({ project }) {
  return (
    <div className="Project">
      <h3>{project.title}</h3>
      <p>{project.p1}</p>
      <div id="tags">
        {project.tags.map((tag, i) => {
          return (
            <span className="tag" key={i}>
              {tag.tag}
            </span>
          );
        })}
      </div>
      <div id="links">
        <a>{project.links.git}</a>
        <a>{project.links.redirect /* arrow icon */}</a>
      </div>
      <img src={project.image} />
    </div>
  );
}

export default Project;
