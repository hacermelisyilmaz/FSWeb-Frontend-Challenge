import { useContext } from "react";
import { TextContext } from "../context/TextProvider";
import { ModeLangContext } from "../context/ModeLangProvider";

function Footer() {
  const textData = useContext(TextContext);
  const { lang } = useContext(ModeLangContext);

  const componentTexts = textData[lang].footer;

  return (
    <div className="Footer component">
      <div className="w-4/5 mx-auto">
        <h1>{componentTexts.title}</h1>
        <div id="footer-links">
          <a>{componentTexts.links.git} </a>
          <a>{componentTexts.links.blog} </a>
          <a>{componentTexts.links.linkedin} </a>
          <a>{componentTexts.links.email} </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
