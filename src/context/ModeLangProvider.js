import { createContext, useState } from "react";

export const ModeLangContext = createContext();

const ModeLangProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("eng");

  return (
    <ModeLangContext.Provider value={{ darkMode, setDarkMode, lang, setLang }}>
      {children}
    </ModeLangContext.Provider>
  );
};

export default ModeLangProvider;
