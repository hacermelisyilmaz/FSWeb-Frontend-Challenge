import { useContext } from "react";
import { TextContext } from "../context/TextProvider";
import { ModeLangContext } from "../context/ModeLangProvider";

function Footer() {
  const textData = useContext(TextContext);
  const { lang } = useContext(ModeLangContext);

  const componentTexts = textData[lang].footer;

  return (
    <div className="Footer component dark:bg-dark-bggray2">
      <footer className="mx-auto pt-12 pb-24 flex items-center justify-between">
        <h1>{componentTexts.title}</h1>
        <div id="footer-links" className="flex flex-col">
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
      </footer>
    </div>
  );
}

export default Footer;
