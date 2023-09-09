import { useContext } from "react";
import { TextContext } from "../context/TextProvider";
import { ModeLangContext } from "../context/ModeLangProvider";

function Skills() {
  const textData = useContext(TextContext);
  const { lang } = useContext(ModeLangContext);

  const componentTexts = textData[lang].skills;
  const skills = componentTexts.skillicons;

  return (
    <div className="Skills">
      <h2>{componentTexts.title} </h2>
      <div id="skill-icons">
        {skills.map((skill, i) => {
          return (
            <div className="skill-icon" key={i}>
              <img src={skill.url} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
