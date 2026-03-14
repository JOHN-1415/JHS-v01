import React, { useState, useEffect } from 'react';

const BASE = import.meta.env.BASE_URL;

function Navbar({ setCurrentPage, currentPage }) {
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

    const goHome = (targetId = null) => {
        if (currentPage !== 'home') {
            setCurrentPage('home');
            if (targetId) {
                setTimeout(() => {
                    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                }, 150);
            }
        } else if (targetId) {
            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        closeMenu();
    };

    const goServices = () => {
        goHome('services');
    };

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="logo" onClick={goHome}>
                    <img src={`${BASE}logo-store-name.png`} alt="Jeya Hyper Store Logo" className="nav-logo-combined" />
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>

                <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    {isMobileMenuOpen && (
                        <div className="mobile-close-btn" onClick={closeMenu}>
                            <i className="fa-solid fa-times"></i>
                        </div>
                    )}
                    <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); goHome('home'); }}>Home</a>
                    <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); goHome('about'); }}>About</a>
                    <span className="nav-link" onClick={goServices}>Services</span>
                    <a href="#why-us" className="nav-link" onClick={(e) => { e.preventDefault(); goHome('why-us'); }}>Strengths</a>
                    <a href="#gallery" className="nav-link" onClick={(e) => { e.preventDefault(); goHome('gallery'); }}>Gallery</a>
                    <a href="#testimonials" className="nav-link" onClick={(e) => { e.preventDefault(); goHome('testimonials'); }}>Testimonials</a>
                    <a href="#faq" className="nav-link" onClick={(e) => { e.preventDefault(); goHome('faq'); }}>FAQ</a>
                    <a href="#location" className="nav-link" onClick={(e) => { e.preventDefault(); goHome('location'); }}>Location</a>
                    <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); goHome('contact'); }}>Contact</a>
                    <a
                        href="https://wa.me/919345491984?text=Hi!%20I%20want%20to%20place%20an%20order%20at%20Jeya%20Hyper%20Store."
                        target="_blank"
                        rel="noreferrer"
                        className="nav-link btn-wa-nav"
                        onClick={closeMenu}
                    >
                        <i className="fa-brands fa-whatsapp"></i> Order on WhatsApp
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
