import React, { useState, useEffect } from 'react';

function FloatingButtons() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    };

    return (
        <div className="floating-actions">
            <button
                className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <i className="fa-solid fa-angle-up"></i>
            </button>

            <a
                href="https://wa.me/919345491984?text=Hi!%20I%20have%20a%20query%20for%20Jeya%20Hyper%20Store."
                target="_blank"
                rel="noreferrer"
                className="floating-whatsapp"
                aria-label="Chat on WhatsApp"
            >
                <i className="fa-brands fa-whatsapp"></i>
                <span className="wa-tooltip">Chat with us on WhatsApp</span>
            </a>
        </div>
    );
}

export default FloatingButtons;
