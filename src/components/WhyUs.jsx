import React from 'react';
import SketchBackground from './SketchBackground';

function WhyUs() {
    const features = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
            ),
            title: '10+ Categories',
            desc: 'Everything from groceries to jewels, all under one roof.',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
            ),
            title: 'Honest Prices',
            desc: 'Best value in Srirangam, no hidden charges.',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <polyline points="16 11 18 13 22 9"/>
                </svg>
            ),
            title: 'Friendly Service',
            desc: 'Our staff is always ready to help you find what you need.',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
            ),
            title: 'Loyalty Rewards',
            desc: 'Earn points on every purchase — the more you shop, the more you save!',
        },
    ];

    return (
        <section id="why-us" className="why-us section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <SketchBackground color="#1E3A8A" opacity={0.02} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="text-center reveal">
                    <span className="section-label">Our Strengths</span>
                    <h2 className="section-title">Why Shop at Jeya Hyper Store</h2>
                </div>

                <div className="features-grid reveal">
                    {features.map((feat, i) => (
                        <div className="feature-card" key={i}>
                            <div className="feat-icon">
                                {feat.icon}
                            </div>
                            <h4 className="feat-title">{feat.title}</h4>
                            <p className="feat-desc">{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyUs;
