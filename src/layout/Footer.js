import { useContext } from "react";
import { TextContext } from "../context/TextContext";
import { ModeLangContext } from "../context/ModeLangProvider";

function Footer() {
  const textData = useContext(TextContext);
  const { lang, darkMode } = useContext(ModeLangContext);

  const componentTexts = textData[lang].footer;

  return (
    <div className="Footer component dark:bg-dark-bggray2">
      <footer className="relative z-0 mx-auto pt-12 pb-24 flex items-center justify-between sm:flex-col sm:w-3/4">
        <h1 className="text-right sm:text-center">{componentTexts.title}</h1>
        <div
          id="footer-links"
          className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:mt-8"
        >
          <a
            className="text-light-cerulean dark:text-dark-ornamentblue"
            href="https://github.com/hacermelisyilmaz"
          >
            {componentTexts.links.git}{" "}
          </a>
          <a>{componentTexts.links.blog} </a>
          <a
            className="text-light-blue dark:text-dark-turquoise"
            href="https://www.linkedin.com/in/hacermelisyilmaz/"
          >
            {componentTexts.links.linkedin}{" "}
          </a>
          <a className="text-light-textdarkpink dark:text-dark-textdarkpink">
            {componentTexts.links.email}{" "}
          </a>
        </div>
        <svg
          className="ornament absolute -z-[1] top-[33%] left-[26%]"
          width="275"
          height="18"
          viewBox="0 0 275 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="275"
            height="18"
            rx="4"
            fill={darkMode ? "#82BBFF" : "#3968A0"}
          />
        </svg>
      </footer>
    </div>
  );
}

export default Footer;
