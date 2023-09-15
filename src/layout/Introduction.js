import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { TextContext } from "../context/TextContext";
import { ModeLangContext } from "../context/ModeLangProvider";

function Introduction() {
  const textData = useContext(TextContext);
  const { lang } = useContext(ModeLangContext);

  const componentTexts = textData[lang].introduction;

  return (
    <div className="Introduction component relative z-0 bg-light-bggray dark:bg-dark-bggray1">
      <div className="w-4/5 mx-auto flex content-between gap-11 sm:flex-col sm:items-center sm:text-center">
        <div id="intro-left" className="w-max-3/5 sm:w-full">
          <div id="greeting">
            <p>{componentTexts.greeting}</p>
            <div className="relative z-[1]">
              <h1>{componentTexts.p1}</h1>
              <h1>{componentTexts.p2}</h1>
            </div>
          </div>
          <div id="intro-footer">
            <div id="icons" className="flex gap-4 sm:justify-center">
              <a href="https://www.linkedin.com/in/hacermelisyilmaz/">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="2x"
                  className="text-light-textdarkgray dark:text-dark-ornamentgray"
                />
              </a>
              <a href="https://github.com/hacermelisyilmaz">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className="text-light-textdarkgray dark:text-dark-ornamentgray"
                />
              </a>
            </div>
            <div id="intro-footer-text">
              <p>
                <span>{componentTexts.p31}</span>
                <span className="text-light-textdarkpink">
                  {componentTexts.colored1}
                </span>
                <span>{componentTexts.p32}</span>
                <span className="text-light-textdarkpink">
                  {componentTexts.colored2}
                </span>
                <span>{componentTexts.p33}</span>
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:flex-col">
                <p>{componentTexts.p4}</p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-light-textdarkgray dark:text-dark-ornamentgray sm:hidden"
                />
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="text-light-textdarkgray dark:text-dark-ornamentgray hidden sm:block"
                />
                <p className="text-light-textdarkpink underline">
                  {componentTexts.p5}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={componentTexts.image} />
      </div>
      <svg
        className="ornament absolute -z-[1] top-[26%] left-[7.25rem]"
        width="148"
        height="31"
        viewBox="0 0 148 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="148" height="31" rx="4" fill="#E92577" />
      </svg>
      <svg
        className="ornament absolute -z-[1] top-[68%] right-0"
        width="124"
        height="59"
        viewBox="0 0 124 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="217" height="59" rx="29.5" fill="#EA2678" />
      </svg>
    </div>
  );
}

export default Introduction;
