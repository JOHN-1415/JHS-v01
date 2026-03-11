import React from 'react';
import SketchBackground from './SketchBackground';

function WhyUs() {
    const features = [
        {
            // icon: '🏬',
            title: '6 Departments',
            desc: 'Everything from groceries to jewels, all under one roof.',
        },
        {
            // icon: '💰',
            title: 'Honest Prices',
            desc: 'Best value in Srirangam, no hidden charges.',
        },
        {
            // icon: '😊',
            title: 'Friendly Service',
            desc: 'Our staff is always ready to help you find what you need.',
        },
        {
            // icon: '⭐',
            title: 'Loyalty Rewards',
            desc: 'Earn points on every purchase — the more you shop, the more you save!',
        },
    ];

    return (
        <section className="why-us section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <SketchBackground color="#1E3A8A" opacity={0.05} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="text-center reveal">
                    <span className="section-label">Our Strengths</span>
                    <h2 className="section-title">Why Shop at Jeya Hyper Store</h2>
                </div>

                <div className="features-grid reveal">
                    {features.map((feat, i) => (
                        <div className="feature-card" key={i}>
                            <div className="feat-icon" style={{ background: 'var(--white)', fontSize: '2rem' }}>
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
