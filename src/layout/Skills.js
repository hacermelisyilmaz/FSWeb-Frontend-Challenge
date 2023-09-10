import { useContext } from "react";
import { TextContext } from "../context/TextProvider";
import { ModeLangContext } from "../context/ModeLangProvider";

function Skills() {
  const textData = useContext(TextContext);
  const { lang } = useContext(ModeLangContext);

  const componentTexts = textData[lang].skills;
  const skills = componentTexts.skillicons;

  return (
    <div className="Skills component w-full">
      <div className="w-4/5 mx-auto">
        <h2>{componentTexts.title} </h2>
        <div
          id="skill-icons"
          className="text-textlightgray w-4/5 mx-auto flex flex-wrap justify-between"
        >
          {skills.map((skill, i) => {
            return (
              <div className="skill-icon flex flex-col items-center" key={i}>
                <img src={skill.url} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
