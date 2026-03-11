import React from 'react';
import SketchBackground from './SketchBackground';

function Footer() {
    return (
        <footer className="footer" style={{ position: 'relative', overflow: 'hidden' }}>
            <SketchBackground color="#7DC832" opacity={0.04} />
            <div className="container footer-container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="footer-col">
                    <a href="#" className="footer-logo">
                        <span className="lime">Jeya</span> <span className="gold">Hyper</span> Store
                    </a>
                    <p className="footer-desc">
                        Your trusted neighbourhood store in Srirangam, Trichy. Quality products, honest prices, and warm service — all under one roof.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="social-icon" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                        <a
                            href="https://wa.me/919876543210?text=Hi%20Jeya%20Hyper%20Store!"
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
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#location">Location</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Departments</h4>
                    <ul className="footer-dept-list">
                        <li>🛒 Groceries</li>
                        <li>👟 School Shoes</li>
                        <li>🎁 Gifts</li>
                        <li>🧸 Toys</li>
                        <li>💍 Jewels</li>
                        <li>📚 Stationeries</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom" style={{ position: 'relative', zIndex: 1 }}>
                <p>&copy; 2026 Jeya Hyper Store, Srirangam, Trichy. All rights reserved.</p>
                <span>Made with ❤️ in Tamil Nadu</span>
            </div>
        </footer>
    );
}

export default Footer;
