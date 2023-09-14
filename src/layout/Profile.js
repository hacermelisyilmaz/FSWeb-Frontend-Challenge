import { useContext } from "react";
import { TextContext } from "../context/TextContext";
import { ModeLangContext } from "../context/ModeLangProvider";

function Profile() {
  const textData = useContext(TextContext);
  const { lang } = useContext(ModeLangContext);

  const componentTexts = textData[lang].profile;
  const infoTexts = componentTexts.basicinfo;
  const aboutTexts = componentTexts.aboutme;

  return (
    <div className="Profile component relative z-0 bg-light-bggray dark:bg-dark-bggray1">
      <h2>{componentTexts.title}</h2>
      <div className="w-4/5 mx-auto flex gap-7 grow sm:flex-col sm:justify-center sm:gap-9">
        <div
          id="basic-info"
          className="bg-light-white dark:bg-dark-ornamentdarkgray"
        >
          <h3 className="mb-8 text-light-headerlightpink">{infoTexts.title}</h3>
          <div id="info-grid" className="grid grid-cols-2 gap-y-5 gap-x-4">
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

        <div className="about-me w-2/3 p-10 relative z-0 flex flex-col gap-5 sm:w-full">
          <h3>{aboutTexts.title}</h3>
          <p>{aboutTexts.p1}</p>
          <p>{aboutTexts.p2}</p>
          <img
            className="ornament absolute -z-[1] top-[16.5%] left-[7%]"
            src="../../img/ornaments/Rectangle 39.svg"
          />
        </div>
      </div>
      <img
        className="ornament absolute -z-[1] -top-[7%] right-0"
        src="../../img/ornaments/Ellipse 12.svg"
      />
    </div>
  );
}

export default Profile;
