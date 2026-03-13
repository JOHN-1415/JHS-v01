import React, { useState, useEffect } from 'react';
import SketchBackground from './SketchBackground';

const BASE = import.meta.env.BASE_URL;

const slideshowImages = [
    'gallery-exterior.jpg',
    'gallery-groceries.jpg',
    'gallery-jewels.jpg',
    'gallery-shoes.jpg',
    'cat-gifts-3.png',
    'cat-stationary-3.jpg',
];

function Hero() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [prevSlide, setPrevSlide] = useState(-1);

    useEffect(() => {
        const timer = setInterval(() => {
            setPrevSlide(activeSlide);
            setActiveSlide((prev) => (prev + 1) % slideshowImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [activeSlide]);

    return (
        <section id="home" className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background slideshow */}
            <div className="hero-slideshow">
                {slideshowImages.map((img, i) => {
                    let slideClass = 'hero-slide';
                    if (i === activeSlide) slideClass += ' active slide-enter';
                    if (i === prevSlide) slideClass += ' active slide-exit';
                    
                    return (
                        <img
                            key={img}
                            src={`${BASE}${img}`}
                            alt=""
                            className={slideClass}
                        />
                    );
                })}
            </div>
            {/* Dark overlay for readability */}
            <div className="hero-overlay"></div>
            <SketchBackground color="#1E3A8A" opacity={0.03} />
            <div className="container hero-container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="hero-content reveal">
                    <div className="hero-badge">
                        <i className="fa-solid fa-star"></i> 4.6 Rating · 4+ Trusted Years
                    </div>
                    <div className="hero-logo-container">
                        <img src={`${BASE}header-logo.png`} alt="Jeya Hyper Store" className="hero-logo-img" />
                    </div>
                    <p className="hero-subtitle">Your One-Stop Shop in Trichy</p>
                    <p className="hero-desc">
                        From fresh groceries to school shoes, gifts, toys, jewels and stationeries — everything your family needs, all under one roof in Srirangam.
                    </p>
                    <div className="hero-buttons">
                        <a href="#location" className="btn btn-lime">
                            Visit Our Store <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a
                            href="https://wa.me/919345491984?text=Hi!%20I%20have%20a%20query%20for%20Jeya%20Hyper%20Store."
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-whatsapp"
                        >
                            <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                        </a>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">4+</span>
                            <span className="stat-label">Trusted</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">6</span>
                            <span className="stat-label">Depts</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">4.6</span>
                            <span className="stat-label">Rating</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">8AM–10PM</span>
                            <span className="stat-label">Open Daily</span>
                        </div>
                    </div>
                </div>
                <div className="hero-image reveal">
                    <img src={`${BASE}gallery-exterior.jpg`} alt="Jeya Hyper Store" className="hero-store-img" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
