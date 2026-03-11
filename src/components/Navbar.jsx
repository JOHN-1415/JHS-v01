import React, { useState, useEffect } from 'react';

const BASE = import.meta.env.BASE_URL;

function Navbar({ setCurrentPage }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    const goHome = () => {
        setCurrentPage('home');
        window.scrollTo(0, 0);
        closeMenu();
    };

    const goServices = () => {
        setCurrentPage('home');
        closeMenu();
        setTimeout(() => {
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="logo" onClick={goHome}>
                    <img src={`${BASE}logo.png`} alt="Jeya Hyper Store Logo" />
                    <span className="logo-text">
                        <span className="lime">Jeya</span> <span className="gold">Hyper</span> Store
                    </span>
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>

                <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <a href="#home" className="nav-link" onClick={goHome}>Home</a>
                    <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
                    <span className="nav-link" onClick={goServices}>Services</span>
                    <a href="#testimonials" className="nav-link" onClick={closeMenu}>Testimonials</a>
                    <a href="#faq" className="nav-link" onClick={closeMenu}>FAQ</a>
                    <a href="#location" className="nav-link" onClick={closeMenu}>Location</a>
                    <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
                    <a
                        href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20place%20an%20order%20at%20Jeya%20Hyper%20Store."
                        target="_blank"
                        rel="noreferrer"
                        className="nav-link btn-wa-nav"
                        onClick={closeMenu}
                    >
                        💬 Order on WhatsApp
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
