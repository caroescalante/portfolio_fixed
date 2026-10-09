import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useLanguage } from '../LanguageContext'
import translations from '../translations'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch'
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { language } = useLanguage()
    const t = translations[language].nav

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className='header'>
            <nav className={`navbar${scrolled ? ' active' : ''}${click ? ' open' : ''}`}>
                <a href='/' className='logo'>
                    <span className="logo-text">{t.home}</span>
                </a>

                <div
                    className='hamburger'
                    onClick={handleClick}
                    role="button"
                    tabIndex={0}
                    aria-label={click ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={click}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            handleClick()
                        }
                    }}
                >
                    {click ? <FaTimes size={20} /> : <FaBars size={20} />}
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>{t.about}</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#proceso' onClick={closeMenu}>{t.process}</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#resume' onClick={closeMenu}>{t.cv}</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#projects' onClick={closeMenu}>{t.projects}</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contacto' onClick={closeMenu}>{t.contact}</a>
                    </li>
                    <li className='nav-item'>
                        <LanguageSwitch />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar