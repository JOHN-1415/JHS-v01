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
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        
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
                const savedPos = event.state?.scrollPosition || scrollPosition;
                // Wait for React to render, then restore instantly
                requestAnimationFrame(() => {
                    restoreScroll(savedPos);
                });
            }
        };

        window.addEventListener('popstate', handlePopstate);
        
        // Push state when changing to a subpage to enable back button
        if (currentPage !== 'home') {
            window.history.pushState({ page: currentPage, scrollPosition: scrollPosition }, '');
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

    const restoreScroll = (pos) => {
        // 1. Disable smooth scrolling temporarily
        document.documentElement.style.scrollBehavior = 'auto';

        // 2. Pre-activate ALL reveal elements instantly so they don't
        //    cause layout shifts (opacity:0 + translateY would collapse sections)
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => el.classList.add('active'));

        // 3. Instantly jump to saved position
        window.scrollTo(0, pos);

        // 4. Re-enable smooth scrolling after a tick
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                document.documentElement.style.scrollBehavior = '';
            });
        });
    };

    const handleBack = () => {
        const savedPos = scrollPosition;
        setCurrentPage('home');
        // Use requestAnimationFrame to wait for React to render the home page DOM
        requestAnimationFrame(() => {
            restoreScroll(savedPos);
        });
    };

    return (
        <div>
            <Navbar setCurrentPage={navigateToService} currentPage={currentPage} />
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
            <Footer setCurrentPage={navigateToService} currentPage={currentPage} />
            <FloatingButtons />
        </div>
    );
}

export default App;
