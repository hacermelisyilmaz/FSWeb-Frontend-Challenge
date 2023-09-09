import { useContext } from "react";
import { TextContext } from "../context/TextProvider";
import { ModeLangContext } from "../context/ModeLangProvider";

function Introduction() {
  const textData = useContext(TextContext);
  const { lang } = useContext(ModeLangContext);

  const componentTexts = textData[lang].introduction;

  return (
    <div className="Introduction">
      <div id="intro-left">
        <div id="greeting">
          <h2>{componentTexts.greeting}</h2>
          <div>
            <h1>{componentTexts.p1}</h1>
            <h1>{componentTexts.p2}</h1>
          </div>
        </div>
        <div id="info-footer">
          {/* ikonlar buraya */}
          <p>{componentTexts.p3}</p>
          <div>
            <p>{componentTexts.p4}</p>
            {/* arrow ikonu */}
            <p>{componentTexts.p5}</p>
          </div>
        </div>
      </div>
      <img src={componentTexts.image} />
    </div>
  );
}

export default Introduction;
