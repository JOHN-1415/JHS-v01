import React, { useState, useEffect } from 'react';
import SketchBackground from './SketchBackground';

function Navbar() {
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

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#" className="logo">
                    <img src="/logo.png" alt="Jeya Hyper Store Logo" />
                    <span className="logo-text">
                        <span className="lime">Jeya</span> <span className="gold">Hyper</span> Store
                    </span>
                </a>

                <div className="hamburger" onClick={toggleMenu}>
                    <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>

                <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
                    <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
                    <a href="#products" className="nav-link" onClick={closeMenu}>Products</a>
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
