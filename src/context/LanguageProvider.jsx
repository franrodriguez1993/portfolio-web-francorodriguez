import React, { useEffect, useState } from "react";
import { createContext } from "react";
//Importe languages:
import spanish from "../languages/spanish.json";
import english from "../languages/english.json";

const LanguageContext = createContext();

const LanguageProvider = (props) => {
  const [text, setText] = useState(spanish);

  useEffect(() => {
    const selectedLanguage = localStorage.getItem("language");
    if (!selectedLanguage) {
      setText(spanish);
    } else if (selectedLanguage === "es") {
      setText(spanish);
    } else if (selectedLanguage === "en") {
      setText(english);
    }
  }, []);

  /**   HANDLE LANGUAGE   **/
  const handleLanguage = (e) => {
    const selected = e.target.value;
    if (selected === "es") {
      localStorage.setItem("language", "es");
      setText(spanish);
    } else {
      localStorage.setItem("language", "en");
      setText(english);
    }
  };

  return (
    <LanguageContext.Provider value={{ text, handleLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext };
export default LanguageProvider;
