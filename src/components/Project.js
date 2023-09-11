import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Project({ project }) {
  return (
    <div className="Project">
      <h3 className="px-10 pt-11">{project.title}</h3>
      <div className="h-full flex flex-col justify-between gap-1">
        <p className="px-10">{project.p1}</p>
        <div id="tags" className="flex flex-wrap gap-[9px] px-10">
          {project.tags.map((tag, i) => {
            return (
              <span
                className="tag bg-light-white dark:bg-dark-ornamentdarkgray"
                key={i}
              >
                {tag}
              </span>
            );
          })}
        </div>
        <div id="links" className="flex justify-between px-10">
          <a href="#">{project.links.git}</a>
          <a href="#" className="flex items-center gap-1">
            <p>{project.links.redirect}</p>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-light-black dark:text-dark-white"
            />
          </a>
        </div>
        <img src={project.image} />
      </div>
    </div>
  );
}

export default Project;
