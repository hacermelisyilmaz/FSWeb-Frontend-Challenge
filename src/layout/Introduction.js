import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { TextContext } from "../context/TextProvider";
import { ModeLangContext } from "../context/ModeLangProvider";

function Introduction() {
  const textData = useContext(TextContext);
  const { lang } = useContext(ModeLangContext);

  const componentTexts = textData[lang].introduction;

  return (
    <div className="Introduction component bg-light-bggray dark:bg-dark-bggray1">
      <div className="w-4/5 mx-auto flex place-content-between">
        <div id="intro-left">
          <div id="greeting">
            <p>{componentTexts.greeting}</p>
            <div>
              <h1>{componentTexts.p1}</h1>
              <h1>{componentTexts.p2}</h1>
            </div>
          </div>
          <div id="intro-footer">
            <div id="icons" className="flex">
              <a href="https://www.linkedin.com/in/hacermelisyilmaz/">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="2x"
                  style={{ color: "#0a0a14" }}
                />
              </a>
              <a href="https://github.com/hacermelisyilmaz">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  style={{ color: "#0a0a14" }}
                />
              </a>
            </div>
            <div id="intro-footer-text">
              <p>
                <span>{componentTexts.p31}</span>
                <span className="text-primary">{componentTexts.colored1}</span>
                <span>{componentTexts.p32}</span>
                <span className="text-primary">{componentTexts.colored2}</span>
                <span>{componentTexts.p33}</span>
              </p>
              <div className="flex flex-wrap items-center">
                <p>{componentTexts.p4}</p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#000000" }}
                />
                <p className="text-primary underline">{componentTexts.p5}</p>
              </div>
            </div>
          </div>
        </div>
        <img src={componentTexts.image} />
      </div>
    </div>
  );
}

export default Introduction;
