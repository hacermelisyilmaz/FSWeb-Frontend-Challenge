import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Project({ project }) {
  return (
    <div className="Project">
      <h3>{project.title}</h3>
      <div className="h-full flex flex-col justify-between gap-1">
        <p>{project.p1}</p>
        <div id="tags" className="flex flex-wrap gap-1">
          {project.tags.map((tag, i) => {
            return (
              <span className="tag" key={i}>
                {tag.tag}
              </span>
            );
          })}
        </div>
        <div id="links" className="flex justify-between">
          <a href="#">{project.links.git}</a>
          <a href="#" className="flex items-center gap-1">
            <p>{project.links.redirect}</p>
            <FontAwesomeIcon icon={faArrowRight} style={{ color: "#000000" }} />
          </a>
        </div>
        <img src={project.image} />
      </div>
    </div>
  );
}

export default Project;
