import React from 'react';
import './Projects.css';
import henryGameZone from "../../Assets/henry_game_zone.png";
import pokemons from "../../Assets/pokemon_landing.png";
import rv from "../../Assets/rv_landing.png";
import tarot from "../../Assets/tarot_landing.png";
import { Col, Row, Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards.js";
import { useLanguage } from "../LanguageContext";
import translations from "../translations.js";

const Projects = () => {
    const { language } = useLanguage();
    const t = translations[language].projects;

    return (
        <section className="projects-section" id="projects">
            <br /><br /><br />
            <h1 className='title'> {t.heading}</h1>

            <div>
                <Container>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col xs={12} sm={6} md={3}  className="project-card">
                        <ProjectCard
                        imgPath={rv}
                        isBlog={false}
                        title={t.items.rv.title}
                        description={t.items.rv.description}
                        ghLink="https://github.com/caroescalante/RV-WebC"
                        demoLink="https://rv-web-c.vercel.app/"              
                        />
                    </Col>

                    <Col xs={12} sm={6} md={3}  className="project-card">
                        <ProjectCard
                        imgPath={tarot}
                        isBlog={false}
                        title={t.items.tarot.title}
                        description={t.items.tarot.description}
                        ghLink="https://github.com/caroescalante/tarot-web"
                        demoLink="https://tarot-web-alpha.vercel.app/"              
                        />
                    </Col>

                    <Col xs={12} sm={6} md={3}  className="project-card">
                        <ProjectCard
                        imgPath={henryGameZone}
                        isBlog={false}
                        title={t.items.gamezone.title}
                        description={t.items.gamezone.description}
                        ghLink="https://github.com/caroescalante/PF-Henry-GameZone-1"
                        demoLink="https://pf-henry-game-zone-1.vercel.app/"
                        />
                    </Col>

                    <Col xs={12} sm={6} md={3} className="project-card">
                        <ProjectCard
                        imgPath={pokemons}
                        isBlog={false}
                        title={t.items.pokemons.title}
                        description={t.items.pokemons.description}
                        ghLink="https://github.com/caroescalante/PI-Pokemons"
                        demoLink="https://pi-pokemons-rose.vercel.app/"
                        />
                    </Col>

                    
                </Row>
                </Container> 
            </div>
        </section>

    );
}

export default Projects;