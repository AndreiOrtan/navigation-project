import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import axios from "axios";

// const URL = "https://translation.googleapis.com/language/translate/v2";
// const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const languages = [
  {
    description: "Romanian",
    value: "ro",
  },
  {
    description: "English",
    value: "en",
  },
  {
    description: "Espanol",
    value: "es",
  },
];

const Translate = () => {
  const [inputText, setInputText] = useState("");
  const [debouncedText, setDebouncedText] = useState(inputText);
  const [language, setLanguage] = useState(languages[0]);
  const [translatedWord, setTranslatedWord] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(inputText);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [inputText]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      console.log(data);
      setTranslatedWord(data.data.translations[0].translatedText);
    };
    search();
  }, [debouncedText, language]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter to translate</label>
          <input
            autoFocus
            className="input"
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        text="Select a language"
        options={languages}
        kind={language}
        setKind={setLanguage}
      />
      <h2>{translatedWord}</h2>
    </div>
  );
};
export default Translate;
