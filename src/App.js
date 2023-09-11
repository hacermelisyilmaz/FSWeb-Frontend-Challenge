import Header from "./layout/Header";
import Introduction from "./layout/Introduction";
import Skills from "./layout/Skills";
import Profile from "./layout/Profile";
import Projects from "./layout/Projects";
import Footer from "./layout/Footer";

import "./style/reset.css";
import "./App.css";
import { useContext } from "react";
import { ModeLangContext } from "./context/ModeLangProvider";

function App() {
  const { darkMode } = useContext(ModeLangContext);

  return (
    <div className={darkMode ? "App" : "App dark"}>
      <div className="dark:text-dark-white">
        <Header />
        <Introduction />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
