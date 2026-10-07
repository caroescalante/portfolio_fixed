import React from "react";
import heart from "../../Assets/pink_heart.png";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import './Process.css';

const Process = () => {
  const { language } = useLanguage();
  const t = translations[language].process;

  return (
    <section className="process-section" id="proceso">
      <div className="process-title">
        <h1>
          <img src={heart} alt="heart" className="heart-icon" />
          {t.title}
          <img src={heart} alt="heart" className="heart-icon" />
        </h1>
        <p className="process-subtitle">{t.subtitle}</p>
      </div>

      <div className="process-steps">
        {t.steps.map((step, index) => (
          <div className="process-step" key={step.number}>
            <div className="process-number">{step.number}</div>
            <h3 className="process-step-title">{step.title}</h3>
            <p className="process-step-text">{step.text}</p>
            {index < t.steps.length - 1 && <div className="process-connector" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;