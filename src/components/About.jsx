import React from 'react';
import SketchBackground from './SketchBackground';

function About() {
    return (
        <section id="about" className="about section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <SketchBackground color="#1B6B3A" opacity={0.05} />
            <div className="container about-container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="about-image reveal">
                    <img src="/gallery-exterior.jpg" alt="Jeya Hyper Store" />
                    <div className="experience-badge">
                        <span className="exp-number">10+</span>
                        <span className="exp-text">Years of<br />Trust</span>
                    </div>
                </div>
                <div className="about-content reveal">
                    <span className="section-label">Who We Are</span>
                    <h2 className="section-title">A Store Built on Trust & Value</h2>
                    <div className="about-text">
                        <p>
                            <strong>Jeya Hyper Store</strong> has been serving the families of Srirangam, Trichy for over a decade. Located in the heart of Somarasampettai, we bring you quality products across 6 departments — all at honest, everyday prices.
                        </p>
                    </div>

                    <div className="about-features">
                        <div className="feature-check">
                            <span className="check-icon"><i className="fa-solid fa-check"></i></span>
                            <span>Quality Products across 6 Departments</span>
                        </div>
                        <div className="feature-check">
                            <span className="check-icon"><i className="fa-solid fa-check"></i></span>
                            <span>Affordable, Honest Prices</span>
                        </div>
                        <div className="feature-check">
                            <span className="check-icon"><i className="fa-solid fa-check"></i></span>
                            <span>Friendly, Helpful Staff</span>
                        </div>
                        <div className="feature-check">
                            <span className="check-icon"><i className="fa-solid fa-check"></i></span>
                            <span>Loyalty Points Reward System</span>
                        </div>
                    </div>

                    <div className="vision-mission">
                        <div className="vm-card vision">
                            <h4>🎯 Our Vision</h4>
                            <p>To be the most trusted neighbourhood store in Trichy — where every family finds everything they need, at prices they can afford.</p>
                        </div>
                        <div className="vm-card mission">
                            <h4>🚀 Our Mission</h4>
                            <p>To offer a wide range of quality products — from daily groceries to school essentials, gifts, toys, jewellery and stationery — with warm service, honest pricing, and a shopping experience that feels like home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
