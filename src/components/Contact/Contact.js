import React, { useState } from "react";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import './Contact.css';

const EMAIL = "cm.escalante59@gmail.com";

const Contact = () => {
    const { language } = useLanguage();
    const t = translations[language].contact;
    const [copied, setCopied] = useState(false);

    const handleEmailClick = (e) => {
        e.preventDefault();

        if (navigator.clipboard) {
            navigator.clipboard.writeText(EMAIL).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
        }

        window.location.href = `mailto:${EMAIL}`;
    };

    return (
        <section className="contact-section" id="contacto">
            <br /><br />
            <h1 className="title-contacto">
                {t.title}
            </h1>
            <br />

            <p className="info-contact">
                {t.p1_pre}<strong>{t.p1_role1}</strong>{t.p1_mid}<strong>{t.p1_role2}</strong>{t.p1_post}
            </p>
            <p className="info-contact">
                {t.p2}
            </p>

            <br />

            <div className="contact-cards">
                <a
                    className="contact-card"
                    href="https://wa.me/5491139467266"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp className="contact-icon" />
                    <span>{t.whatsapp}</span>
                </a>

                <button className="contact-card contact-card-button" onClick={handleEmailClick}>
                    <FaRegEnvelope className="contact-icon" />
                    <span>{copied ? t.emailCopied : t.email}</span>
                </button>

                <a
                    className="contact-card"
                    href="https://www.linkedin.com/in/carolina-escalante-548888201"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin className="contact-icon" />
                    <span>{t.linkedin}</span>
                </a>

                <a
                    className="contact-card"
                    href="https://www.instagram.com/_caroescalante_"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram className="contact-icon" />
                    <span>{t.instagram}</span>
                </a>
            </div>
        </section>
    );
}

export default Contact;