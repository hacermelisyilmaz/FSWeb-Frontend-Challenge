import { useContext } from "react";
import { TextContext } from "../context/TextContext";
import { ModeLangContext } from "../context/ModeLangProvider";

function Footer() {
  const textData = useContext(TextContext);
  const { lang } = useContext(ModeLangContext);

  const componentTexts = textData[lang].footer;

  return (
    <div className="Footer component dark:bg-dark-bggray2">
      <footer className="relative mx-auto pt-12 pb-24 flex items-center justify-between sm:flex-col sm:w-3/4">
        <h1 className="text-right sm:text-center">{componentTexts.title}</h1>
        <div
          id="footer-links"
          className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:mt-8"
        >
          <a className="text-light-cerulean dark:text-dark-ornamentblue">
            {componentTexts.links.git}{" "}
          </a>
          <a>{componentTexts.links.blog} </a>
          <a className="text-light-blue dark:text-dark-turquoise">
            {componentTexts.links.linkedin}{" "}
          </a>
          <a className="text-light-textdarkpink dark:text-dark-textdarkpink">
            {componentTexts.links.email}{" "}
          </a>
        </div>
        <img
          className="ornament absolute -z-[1] top-[33%] left-[26%]"
          src="../../img/ornaments/Rectangle 40.svg"
        />
      </footer>
    </div>
  );
}

export default Footer;
