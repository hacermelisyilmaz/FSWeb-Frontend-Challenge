import { useContext } from "react";
import { TextContext } from "../context/TextContext";
import { ModeLangContext } from "../context/ModeLangProvider";

function Header() {
  const textData = useContext(TextContext);
  const { darkMode, setDarkMode, lang, setLang } = useContext(ModeLangContext);
  const componentTexts = textData[lang].header;
  console.log("header:", textData);
  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changeLang = () => {
    lang === "tr" ? setLang("en") : setLang("tr");
  };

  return (
    <div className="Header component relative z-0 w-full pt-12 text-light-textlightgray bg-light-bggray dark:bg-dark-bggray1">
      <header className="w-4/5 mx-auto flex justify-end sm:flex-col sm:items-end">
        <label
          id="mode-toggler"
          className="relative inline-flex items-center mb-5 cursor-pointer"
        >
          <input
            type="checkbox"
            value={darkMode}
            onChange={changeDarkMode}
            className="sr-only peer"
          />
          <div className="w-8 h-3 rounded-full peer dark:bg-dark-black peer-checked:after:translate-x-4 after:content-[''] after:absolute after:top-[25%] after:left-[4px] after:bg-light-amber after:border-light-amber after:border after:rounded-full after:h-2 after:w-2 after:transition-all peer-checked:bg-light-primary"></div>
          <span className="ml-1">
            {darkMode ? componentTexts.darkmode : componentTexts.lightmode}
          </span>
        </label>

        <span className="ml-2 sm:hidden"> | </span>
        <span className="ml-2" onClick={changeLang}>
          {componentTexts.language}
        </span>
      </header>
      <img
        className="ornament absolute -z-[1] top-0 left-[33%] fill-ornamentgray dark:fill-dark-ornamentdarkgray"
        src="../../img/ornaments/Ellipse 10.svg"
      />
    </div>
  );
}

export default Header;
