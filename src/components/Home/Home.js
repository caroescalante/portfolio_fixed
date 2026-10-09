import React from 'react';
import '../Home/Home.css';import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import compu from "../../Assets/computadora_home.png";


const Home = () => {

  const { language } = useLanguage();
  const t = translations[language].home;
 
  return (
    <section className="home-section" id="home">

      <h2 className="hero-role">
        data engineer and solutions architect
      </h2>

      <div className="hero-title">
        <span className="hero-port">PORT</span>
        <br/>
        <span className="hero-folio">FOLIO</span>
      </div>

      <div className="hero-main">
        <div className="hero-image">
          <img src={compu} alt="computadora" />
        </div>

        <div className="hero-content">
          <h1 className="hero-name">
            <span className="name-carolina">Carolina</span>
            <span className="name-escalante">Escalante</span>
          </h1>
        </div>
      </div>

      <div className="btn-conoceme-container">
        <button 
          className="btn-conoceme"
          onClick={() => {
            document.getElementById("contacto").scrollIntoView({
              behavior: "smooth"
            });
          }}
        >
          {t.cta}
        </button>
      </div>

    </section>
  );
};

export default Home;