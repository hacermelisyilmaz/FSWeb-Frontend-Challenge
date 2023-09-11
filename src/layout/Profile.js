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
    <div className="Profile component bg-light-bggray dark:bg-dark-bggray1">
      <h2>{componentTexts.title}</h2>
      <div className="w-4/5 mx-auto flex gap-7">
        <div
          id="basic-info"
          className="bg-light-white dark:bg-dark-ornamentdarkgray"
        >
          <h3 className="text-light-headerlightpink">{infoTexts.title}</h3>
          <div id="info-grid" className="grid grid-cols-2 gap-y-5">
            <p className="info-key">{infoTexts.birthdatekey}</p>
            <p className="info-value">{infoTexts.birthdate}</p>

            <p className="info-key">{infoTexts.locationkey}</p>
            <p className="info-value">{infoTexts.location}</p>

            <p className="info-key">{infoTexts.edukey}</p>
            <p className="info-value">{infoTexts.edu}</p>

            <p className="info-key">{infoTexts.rolekey}</p>
            <p className="info-value">{infoTexts.role}</p>
          </div>
        </div>

        <div className="about-me flex flex-col justify-center gap-5">
          <h3>{aboutTexts.title}</h3>
          <p>{aboutTexts.p1}</p>
          <p>{aboutTexts.p2}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
