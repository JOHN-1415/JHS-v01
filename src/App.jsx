import React, { useState, useEffect } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ServicePage from './components/ServicePage';
import HashTags from './components/HashTags';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    useEffect(() => {
        const revealOnScroll = () => {
            const reveals = document.querySelectorAll('.reveal');
            const windowHeight = window.innerHeight;
            const elementVisible = 100;

            reveals.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        setTimeout(revealOnScroll, 100);

        return () => window.removeEventListener('scroll', revealOnScroll);
    }, []);

    // Handle browser back button
    useEffect(() => {
        const handlePopstate = (event) => {
            if (currentPage !== 'home') {
                setCurrentPage('home');
                window.scrollTo(0, 0);
            }
        };

        window.addEventListener('popstate', handlePopstate);
        
        // Push state when changing to a subpage to enable back button
        if (currentPage !== 'home') {
            window.history.pushState({ page: currentPage }, '');
        }

        return () => window.removeEventListener('popstate', handlePopstate);
    }, [currentPage]);

    // Re-trigger reveal on page change
    useEffect(() => {
        setTimeout(() => {
            const reveals = document.querySelectorAll('.reveal');
            const windowHeight = window.innerHeight;
            reveals.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                if (elementTop < windowHeight - 100) {
                    element.classList.add('active');
                }
            });
        }, 100);
    }, [currentPage]);

    return (
        <div>
            <Navbar setCurrentPage={setCurrentPage} />
            {currentPage === 'home' ? (
                <>
                    <Hero />
                    <About />
                    <Services setCurrentPage={setCurrentPage} />
                    <WhyUs />
                    <Gallery />
                    <Testimonials />
                    <FAQ />
                    <Location />
                    <Contact />
                </>
            ) : (
                <ServicePage
                    deptId={currentPage}
                    onBack={() => {
                        setCurrentPage('home');
                        window.scrollTo(0, 0);
                    }}
                />
            )}
            {currentPage === 'home' && <HashTags setCurrentPage={setCurrentPage} />}
            <Footer setCurrentPage={setCurrentPage} />
            <FloatingButtons />
        </div>
    );
}

export default App;
