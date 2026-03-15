import React, { useState } from 'react';
import SketchBackground from './SketchBackground';

function Contact() {
    const [formStatus, setFormStatus] = useState('idle'); // idle | sending | sent

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');

        fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: e.target.name.value,
                phone: e.target.phone.value,
                message: e.target.message.value,
            }),
        })
            .then((res) => res.json())
            .then(() => {
                setFormStatus('sent');
                e.target.reset();
                setTimeout(() => setFormStatus('idle'), 3000);
            })
            .catch(() => {
                setFormStatus('sent');
                e.target.reset();
                setTimeout(() => setFormStatus('idle'), 3000);
            });
    };

    return (
        <section id="contact" className="contact section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <SketchBackground color="#1E3A8A" opacity={0.02} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="text-center reveal">
                    <span className="section-label">Get In Touch</span>
                    <h2 className="section-title">Contact Us</h2>
                    <p className="section-desc">Have questions about our products or offers? Reach out to us!</p>
                </div>

                <div className="contact-wrapper reveal">
                    <div className="contact-left">
                        <div className="wa-quick-block">
                            <h3><i className="fa-brands fa-whatsapp"></i> Quick Contact via WhatsApp</h3>
                            <p>Skip the form — chat with us directly for instant replies!</p>
                            <a
                                href="https://wa.me/919345491984?text=Hi%20Jeya%20Hyper%20Store!%20I%20have%20an%20enquiry."
                                target="_blank"
                                rel="noreferrer"
                                className="btn-wa-white"
                            >
                                <i className="fa-brands fa-whatsapp"></i> Open WhatsApp Chat
                            </a>
                        </div>

                        <div className="contact-methods">
                            <div className="method-item">
                                <div className="method-icon"><i className="fa-solid fa-phone"></i></div>
                                <div className="method-text">
                                    <h4>Phone</h4>
                                    <a href="tel:+919345491984">+91 93454 91984</a>
                                </div>
                            </div>
                            <div className="method-item">
                                <div className="method-icon"><i className="fa-brands fa-whatsapp"></i></div>
                                <div className="method-text">
                                    <h4>WhatsApp</h4>
                                    <a href="https://wa.me/919345491984" target="_blank" rel="noreferrer">+91 93454 91984</a>
                                </div>
                            </div>
                            <div className="method-item">
                                <div className="method-icon"><i className="fa-solid fa-envelope"></i></div>
                                <div className="method-text">
                                    <h4>Email</h4>
                                    <a href="mailto:jeyahyperstore@gmail.com">jeyahyperstore@gmail.com</a>
                                </div>
                            </div>
                            <div className="method-item">
                                <div className="method-icon"><i className="fa-solid fa-location-dot"></i></div>
                                <div className="method-text">
                                    <h4>Address</h4>
                                    <span>RJ7P+37V, Vayalur Rd, Somarasempettai, Tiruchirappalli, Tamil Nadu 620102</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <h3 className="form-title">Send us a message</h3>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" placeholder="Enter your name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="4" placeholder="How can we help you?" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block" disabled={formStatus === 'sending'}>
                                {formStatus === 'sending' && <><i className="fa-solid fa-spinner fa-spin"></i> Sending...</>}
                                {formStatus === 'sent' && <><i className="fa-solid fa-check"></i> Message Sent!</>}
                                {formStatus === 'idle' && <>Send Message <i className="fa-solid fa-paper-plane"></i></>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
