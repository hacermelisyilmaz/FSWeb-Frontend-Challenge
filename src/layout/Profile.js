import { useContext } from "react";
import { TextContext } from "../context/TextProvider";
import { ModeLangContext } from "../context/ModeLangProvider";

function Profile() {
  const textData = useContext(TextContext);
  const { lang } = useContext(ModeLangContext);

  const componentTexts = textData[lang].profile;
  const infoTexts = componentTexts.basicinfo;
  const aboutTexts = componentTexts.aboutme;

  return (
    <div className="Profile">
      <h2>{componentTexts.title}</h2>
      <div id="basic-info">
        <h3>{infoTexts.title}</h3>
        <div>
          <p className="info-key">{infoTexts.birthdatekey} </p>
          <p className="info-value">{infoTexts.birthdate} </p>
        </div>
        <div>
          <p className="info-key">{infoTexts.locationkey} </p>
          <p className="info-value">{infoTexts.location} </p>
        </div>
        <div>
          <p className="info-key">{infoTexts.edukey} </p>
          <p className="info-value">{infoTexts.edu} </p>
        </div>
        <div>
          <p className="info-key">{infoTexts.rolekey} </p>
          <p className="info-value">{infoTexts.role} </p>
        </div>
      </div>
      <div className="about-me">
        <h3>{aboutTexts.title}</h3>
        <p>{aboutTexts.p1} </p>
        <p>{aboutTexts.p2} </p>
      </div>
    </div>
  );
}

export default Profile;
