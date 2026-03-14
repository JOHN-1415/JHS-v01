import React from 'react';
import SketchBackground from './SketchBackground';

function Footer({ setCurrentPage, currentPage }) {
    const navigate = (id, targetId = null) => {
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
    };

    const goHome = () => navigate('home');

    return (
        <footer className="footer" style={{ position: 'relative', overflow: 'hidden' }}>
            <SketchBackground color="#1E3A8A" opacity={0.02} />
            <div className="container footer-container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="footer-col">
                    <div className="footer-logo" onClick={goHome} style={{ cursor: 'pointer' }}>
                        <img src={`${import.meta.env.BASE_URL}logo-store-name.png`} alt="Jeya Hyper Store" className="footer-logo-combined" />
                    </div>
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
                        <li><a href="#home" onClick={() => navigate('home')}>Home</a></li>
                        <li><a href="#about" onClick={() => navigate('home', 'about')}>About</a></li>
                        <li><a href="#services" onClick={() => navigate('home', 'services')}>Services</a></li>
                        <li><a href="#why-us" onClick={() => navigate('home', 'why-us')}>Strengths</a></li>
                        <li><a href="#testimonials" onClick={() => navigate('home', 'testimonials')}>Testimonials</a></li>
                        <li><a href="#faq" onClick={() => navigate('home', 'faq')}>FAQ</a></li>
                        <li><a href="#location" onClick={() => navigate('home', 'location')}>Location</a></li>
                        <li><a href="#contact" onClick={() => navigate('home', 'contact')}>Contact</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Departments</h4>
                    <ul className="footer-dept-list">
                        <li onClick={() => { setCurrentPage('groceries'); }} style={{ cursor: 'pointer' }}>Groceries</li>
                        <li onClick={() => { setCurrentPage('shoes'); }} style={{ cursor: 'pointer' }}>Shoes</li>
                        <li onClick={() => { setCurrentPage('gifts'); }} style={{ cursor: 'pointer' }}>Gifts</li>
                        <li onClick={() => { setCurrentPage('toys'); }} style={{ cursor: 'pointer' }}>Toys</li>
                        <li onClick={() => { setCurrentPage('jewels'); }} style={{ cursor: 'pointer' }}>Jewels</li>
                        <li onClick={() => { setCurrentPage('stationary'); }} style={{ cursor: 'pointer' }}>Stationeries</li>
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
