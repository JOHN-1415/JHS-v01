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
    const [scrollPosition, setScrollPosition] = useState(0);

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
                // Use a small timeout to let the DOM update before scrolling
                setTimeout(() => {
                    window.scrollTo(0, scrollPosition);
                }, 50);
            }
        };

        window.addEventListener('popstate', handlePopstate);
        
        // Push state when changing to a subpage to enable back button
        if (currentPage !== 'home') {
            window.history.pushState({ page: currentPage }, '');
        }

        return () => window.removeEventListener('popstate', handlePopstate);
    }, [currentPage, scrollPosition]);

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

    const navigateToService = (id) => {
        setScrollPosition(window.scrollY);
        setCurrentPage(id);
        window.scrollTo(0, 0);
    };

    const handleBack = () => {
        setCurrentPage('home');
        setTimeout(() => {
            window.scrollTo(0, scrollPosition);
        }, 50);
    };

    return (
        <div>
            <Navbar setCurrentPage={setCurrentPage} />
            {currentPage === 'home' ? (
                <>
                    <Hero />
                    <About />
                    <Services setCurrentPage={navigateToService} />
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
                    onBack={handleBack}
                />
            )}
            {currentPage === 'home' && <HashTags setCurrentPage={navigateToService} />}
            <Footer setCurrentPage={navigateToService} />
            <FloatingButtons />
        </div>
    );
}

export default App;
