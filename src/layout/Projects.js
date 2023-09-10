import { useContext } from "react";
import Project from "../components/Project";
import { TextContext } from "../context/TextProvider";
import { ModeLangContext } from "../context/ModeLangProvider";

function Projects() {
  const textData = useContext(TextContext);
  const { lang } = useContext(ModeLangContext);

  const componentTexts = textData[lang].projects;

  return (
    <div className="Projects component">
      <div className="w-4/5 mx-auto">
        <h2>{componentTexts.title}</h2>
        {componentTexts.projectarray.map((pNo) => {
          return (
            <Project project={componentTexts[`project${pNo}`]} key={pNo} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
