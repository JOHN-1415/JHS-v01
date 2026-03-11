import React from 'react';
import SketchBackground from './SketchBackground';

function Location() {
    return (
        <section id="location" className="location section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <SketchBackground color="#1E3A8A" opacity={0.04} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="text-center reveal">
                    <span className="section-label">Find Us</span>
                    <h2 className="section-title">Visit Our Store</h2>
                </div>

                <div className="location-container reveal">
                    <div className="map-wrapper">
                        <iframe
                            src="https://www.google.com/maps?q=JEYA+HYPER+STORE+Somarasampettai+Srirangam&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Jeya Hyper Store Map"
                        ></iframe>
                    </div>

                    <div className="location-details">
                        <div className="info-card">
                            <div className="info-icon"><i className="fa-solid fa-location-dot"></i></div>
                            <div className="info-text">
                                <h4>Address</h4>
                                <p>Somarasampettai, Opp. Holy Cross School,<br />Vayalur Road, Srirangam — 620102</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon"><i className="fa-solid fa-phone"></i></div>
                            <div className="info-text">
                                <h4>Phone</h4>
                                <p>+91 93454 91984</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon"><i className="fa-brands fa-whatsapp"></i></div>
                            <div className="info-text">
                                <h4>WhatsApp</h4>
                                <p>+91 93454 91984</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon"><i className="fa-solid fa-clock"></i></div>
                            <div className="info-text">
                                <h4>Hours</h4>
                                <p>7:00 AM – 10:00 PM, All Days</p>
                            </div>
                        </div>

                        <div className="location-buttons">
                            <a
                                href="https://share.google/qNUCjZ6BnqU81Mlpa"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-outline-green"
                            >
                                <i className="fa-solid fa-location-dot"></i> Get Directions
                            </a>
                            <a
                                href="https://wa.me/919345491984?text=Hi!%20I%20want%20to%20visit%20the%20store."
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-whatsapp"
                            >
                                <i className="fa-brands fa-whatsapp"></i> Message on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Location;
