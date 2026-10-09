import React, { useRef } from 'react';
import './Projects.css';
import henryGameZone from "../../Assets/henry_game_zone.png";
import pokemons from "../../Assets/pokemon_landing.png";
import sistemas from "../../Assets/sistema_gestion.png";
import rv from "../../Assets/rv_landing.png";
import tarot from "../../Assets/tarot_landing.png";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards.js";
import { useLanguage } from "../LanguageContext";
import translations from "../translations.js";

// Cada proyecto en un solo lugar: para agregar uno nuevo, sumá una línea acá
const PROJECTS = [
    { key: "rv", img: rv, gh: "https://github.com/caroescalante/RV-WebC", demo: "https://rv-web-c.vercel.app/" },
    { key: "tarot", img: tarot, gh: "https://github.com/caroescalante/tarot-web", demo: "https://tarot-web-alpha.vercel.app/" },
    { key: "gamezone", img: henryGameZone, gh: "https://github.com/caroescalante/PF-Henry-GameZone-1", demo: "https://pf-henry-game-zone-1.vercel.app/" },
    { key: "pokemons", img: pokemons, gh: "https://github.com/caroescalante/PI-Pokemons", demo: "https://pi-pokemons-rose.vercel.app/" },
    { key: "sistemas", img: sistemas, gh: "https://github.com/caroescalante/distribuidora_dismarco", demo: "https://distribuidora-dismarco.vercel.app/" },
];

const Projects = () => {
    const { language } = useLanguage();
    const t = translations[language].projects;
    const trackRef = useRef(null);

    const slide = (direction) => {
        const track = trackRef.current;
        if (!track) return;

        const firstSlide = track.querySelector('.carousel-slide');
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        const step = firstSlide ? firstSlide.offsetWidth + gap : track.clientWidth;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const behavior = reduceMotion ? 'auto' : 'smooth';

        const maxScroll = track.scrollWidth - track.clientWidth;
        const atStart = track.scrollLeft <= 2;
        const atEnd = track.scrollLeft >= maxScroll - 2;

        // Al llegar al final (o al inicio) da la vuelta, así nunca queda trabado
        if (direction === 1 && atEnd) {
            track.scrollTo({ left: 0, behavior });
        } else if (direction === -1 && atStart) {
            track.scrollTo({ left: maxScroll, behavior });
        } else {
            track.scrollBy({ left: direction * step, behavior });
        }
    };

    return (
        <section className="projects-section" id="projects">
            <br /><br /><br />
            <h1 className='title'> {t.heading}</h1>

            <Container>
                <div className="projects-carousel">
                    <button
                        type="button"
                        className="carousel-arrow carousel-arrow-prev"
                        onClick={() => slide(-1)}
                        aria-label="Proyecto anterior"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M15 5l-7 7 7 7" />
                        </svg>
                    </button>

                    <div className="projects-track" ref={trackRef}>
                        {PROJECTS.map((p) => {
                            // si falta la traducción de un proyecto, lo saltea en vez de romper la página
                            const item = t.items?.[p.key];
                            if (!item) return null;

                            return (
                                <div className="carousel-slide project-card" key={p.key}>
                                    <ProjectCard
                                        imgPath={p.img}
                                        isBlog={false}
                                        title={item.title}
                                        description={item.description}
                                        ghLink={p.gh}
                                        demoLink={p.demo}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <button
                        type="button"
                        className="carousel-arrow carousel-arrow-next"
                        onClick={() => slide(1)}
                        aria-label="Proyecto siguiente"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default Projects;