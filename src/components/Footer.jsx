import React from 'react';
import SketchBackground from './SketchBackground';

function Footer({ setCurrentPage }) {
    const goHome = () => {
        if (setCurrentPage) {
            setCurrentPage('home');
            window.scrollTo(0, 0);
        }
    };

    return (
        <footer className="footer" style={{ position: 'relative', overflow: 'hidden' }}>
            <SketchBackground color="#1E3A8A" opacity={0.02} />
            <div className="container footer-container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="footer-col">
                    <span className="footer-logo" onClick={goHome} style={{ cursor: 'pointer' }}>
                        <span className="white">Jeya</span> <span className="gold">Hyper</span> Store
                    </span>
                    <p className="footer-desc">
                        Your trusted neighbourhood store in Srirangam, Trichy. Quality products, honest prices, and warm service — all under one roof.
                    </p>
                    <div className="social-links">
                        <a href="https://www.facebook.com/profile.php?id=61569404496169" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/jeyahyperstore?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                        <a
                            href="https://wa.me/919345491984?text=Hi%20Jeya%20Hyper%20Store!"
                            target="_blank"
                            rel="noreferrer"
                            className="social-icon"
                            aria-label="WhatsApp"
                        >
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="#home" onClick={goHome}>Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#location">Location</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Departments</h4>
                    <ul className="footer-dept-list">
                        <li onClick={() => { setCurrentPage('groceries'); window.scrollTo(0,0); }} style={{ cursor: 'pointer' }}>Groceries</li>
                        <li onClick={() => { setCurrentPage('shoes'); window.scrollTo(0,0); }} style={{ cursor: 'pointer' }}>Shoes</li>
                        <li onClick={() => { setCurrentPage('gifts'); window.scrollTo(0,0); }} style={{ cursor: 'pointer' }}>Gifts</li>
                        <li onClick={() => { setCurrentPage('toys'); window.scrollTo(0,0); }} style={{ cursor: 'pointer' }}>Toys</li>
                        <li onClick={() => { setCurrentPage('jewels'); window.scrollTo(0,0); }} style={{ cursor: 'pointer' }}>Jewels</li>
                        <li onClick={() => { setCurrentPage('stationary'); window.scrollTo(0,0); }} style={{ cursor: 'pointer' }}>Stationeries</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom" style={{ position: 'relative', zIndex: 1 }}>
                <p>&copy; 2026 Jeya Hyper Store, Srirangam, Trichy. All rights reserved.</p>
                <span>Crafted with passion in Trichy  |  Website by <a href="https://javia.studio/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>jAvia</a></span>
            </div>
        </footer>
    );
}

export default Footer;
