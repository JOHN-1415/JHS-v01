import React, { useState, useEffect, useRef } from 'react';
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
    // pendingScrollTo: null = do nothing, 0 = go to top, number > 0 = restore to that position
    const pendingScrollTo = useRef(null);
    const isJumpedNavigation = useRef(false);

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
                if (isJumpedNavigation.current) {
                    const servicesEl = document.getElementById('services');
                    pendingScrollTo.current = servicesEl ? servicesEl.offsetTop : 0;
                } else {
                    const savedPos = event.state?.scrollPosition ?? 0;
                    pendingScrollTo.current = savedPos;
                }
                setCurrentPage('home');
            }
        };

        window.addEventListener('popstate', handlePopstate);
        return () => window.removeEventListener('popstate', handlePopstate);
    }, [currentPage]);

    // This useEffect fires AFTER React has rendered the new page content
    useEffect(() => {
        if (pendingScrollTo.current !== null) {
            const targetPos = pendingScrollTo.current;
            pendingScrollTo.current = null;

            if (targetPos > 0) {
                // Restoring to a saved position — pre-activate all reveals
                const reveals = document.querySelectorAll('.reveal');
                reveals.forEach(el => el.classList.add('active'));
            }

            window.scrollTo(0, targetPos);
        }

        // Also re-trigger reveals for visible elements
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
        if (currentPage === 'home') {
            const currentScrollY = window.scrollY;
            // Save current home scroll position in the current history entry
            window.history.replaceState({ page: 'home', scrollPosition: currentScrollY }, '');
            // Push a new entry for the service page
            window.history.pushState({ page: id }, '');
            setScrollPosition(currentScrollY);
            isJumpedNavigation.current = false;
        } else {
            // Jumping from one service to another — replace history instead of pushing
            window.history.replaceState({ page: id }, '');
            isJumpedNavigation.current = true;
        }
        pendingScrollTo.current = 0;
        setCurrentPage(id);
    };

    const handleBack = () => {
        // Use browser back to properly pop the history entry
        window.history.back();
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
