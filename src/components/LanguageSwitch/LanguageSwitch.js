import React from "react";
import { useLanguage } from "../LanguageContext";
import "./LanguageSwitch.css";

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();
  const isEnglish = language === "en";

  return (
    <button
      type="button"
      className={`lang-switch ${isEnglish ? "is-en" : "is-es"}`}
      onClick={toggleLanguage}
      aria-label="Cambiar idioma / Switch language"
    >
      <span className="lang-switch-option">EN</span>
      <span className="lang-switch-knob" />
      <span className="lang-switch-option">ES</span>
    </button>
  );
};

export default LanguageSwitch;