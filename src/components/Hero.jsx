import React from 'react';
import SketchBackground from './SketchBackground';

function Hero() {
    return (
        <section id="home" className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
            <SketchBackground color="#7DC832" opacity={0.08} />
            <div className="container hero-container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="hero-content reveal">
                    <div className="hero-badge">
                        ⭐ Trusted Since 10+ Years · Srirangam, Trichy
                    </div>
                    <h1 className="hero-title">
                        <span className="lime">Jeya</span><br />
                        <span className="gold">Hyper</span> <span className="white">Store</span>
                    </h1>
                    <p className="hero-subtitle">Your One-Stop Shop in Trichy</p>
                    <p className="hero-desc">
                        From fresh groceries to school shoes, gifts, toys, jewels and stationeries — everything your family needs, all under one roof in Srirangam.
                    </p>
                    <div className="hero-buttons">
                        <a href="#location" className="btn btn-lime">
                            📍 Visit Our Store <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a
                            href="https://wa.me/919876543210?text=Hi!%20I%20have%20a%20query%20for%20Jeya%20Hyper%20Store."
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-whatsapp"
                        >
                            💬 Chat on WhatsApp
                        </a>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Years of Trust</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">6</span>
                            <span className="stat-label">Departments</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">4.6★</span>
                            <span className="stat-label">Google Rating</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">7AM–10PM</span>
                            <span className="stat-label">Open Daily</span>
                        </div>
                    </div>
                </div>
                <div className="hero-image reveal">
                    <img src="/store-exterior.jpg" alt="Jeya Hyper Store Exterior" className="main-image" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
