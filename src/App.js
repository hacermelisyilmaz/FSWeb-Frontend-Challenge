import { useContext, useEffect, useState } from "react";
import { ModeLangContext } from "./context/ModeLangProvider";

import Header from "./layout/Header";
import Introduction from "./layout/Introduction";
import Skills from "./layout/Skills";
import Profile from "./layout/Profile";
import Projects from "./layout/Projects";
import Footer from "./layout/Footer";

import "./style/reset.css";
import "./App.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextContext } from "./context/TextContext";
import { data } from "./data/data";

function App() {
  const { darkMode } = useContext(ModeLangContext);
  const [textData, setTextData] = useState({});
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .post("https://reqres.in/api/workintech", data)
      .then((response) => {
        setTextData({ ...response.data });
        setLoaded(true);
      })
      .catch((error) => {
        toast(error.message);
      });
  }, []);

  return (
    isLoaded && (
      <div className={darkMode ? "App" : "App dark"}>
        <TextContext.Provider value={textData}>
          <div className="dark:text-dark-white">
            <Header />
            <Introduction />
            <Skills />
            <Profile />
            <Projects />
            <Footer />
          </div>
          <ToastContainer />
        </TextContext.Provider>
      </div>
    )
  );
}

export default App;
