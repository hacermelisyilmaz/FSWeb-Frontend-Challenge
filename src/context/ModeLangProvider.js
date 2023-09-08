import { createContext, useState } from "react";

export const ModeLangContext = createContext();

const ModeLangProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("tr");

  return (
    <ModeLangContext.Provider value={{ darkMode, lang }}>
      {children}
    </ModeLangContext.Provider>
  );
};

export default ModeLangProvider;
