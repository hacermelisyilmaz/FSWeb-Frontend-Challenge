import { createContext } from "react";
import { data } from "../data/data";
import axios from "axios";

export const TextContext = createContext();

const TextProvider = ({ children }) => {
  /*     const textData = {};

  axios.post("https://reqres.in/api/workintech", data).then((response) => {
    textData = response.data;
  }); */

  return <TextContext.Provider value={data}>{children}</TextContext.Provider>;
};

export default TextProvider;
