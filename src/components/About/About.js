import React from 'react';
import lady from "../About/image_about.png";
import heart from "../../Assets/pink_heart.png";
import { useLanguage } from '../LanguageContext';
import translations from '../translations';
import './About.css';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section className="about-section" id="about">

      <div className="about-title">
        <br /><br />
        <h1>
            <img src={heart} alt="heart" className="heart-icon" />
                {t.title}
            <img src={heart} alt="heart" className="heart-icon" />
        </h1>
      </div>

      <div className="about-row">

        <div className="about-text">
          <p className="about-intro">{t.intro}</p>
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
        </div>

        <div className="about-image">
          <img src={lady} alt="about" className="about-img" />
        </div>

      </div>

    </section>
  );
};

export default About;