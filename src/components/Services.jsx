import React from 'react';
import SketchBackground from './SketchBackground';
import ServiceCard from './ServiceCard';

const BASE = import.meta.env.BASE_URL;

const SERVICES = [
    {
        id: "groceries",
        label: "Groceries",
        coverImg: `${BASE}gallery-groceries.WEBP`,
        desc: "Rice, dals, spices, oils and all your daily kitchen essentials.",
    },
    {
        id: "shoes",
        label: "Shoes",
        coverImg: `${BASE}gallery-shoes.WEBP`,
        desc: "Canvas, leather and sports shoes for children from KG to Class 12.",
    },
    {
        id: "gifts",
        label: "Gifts",
        coverImg: `${BASE}gallery-gifts.WEBP`,
        desc: "Gift hampers, greeting cards, seasonal gifts and wrapping supplies.",
    },
    {
        id: "toys",
        label: "Toys",
        coverImg: `${BASE}cat-toys-1.WEBP`,
        desc: "Stuffed toys, board games, car toys and educational play items.",
    },
    {
        id: "jewels",
        label: "Jewels",
        coverImg: `${BASE}gallery-jewels.WEBP`,
        desc: "Gold-plated sets, bangles, earrings, necklaces and chains.",
    },
    {
        id: "stationary",
        label: "Stationeries",
        coverImg: `${BASE}gallery-stationary.WEBP`,
        desc: "Notebooks, pens, geometry boxes, art supplies and school bags.",
    },
];

function Services({ setCurrentPage }) {
    return (
        <section id="services" className="services section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <SketchBackground color="#1E3A8A" opacity={0.03} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="text-center reveal">
                    <span className="section-label">Our Services</span>
                    <h2 className="section-title">Services We Are Providing</h2>
                    <p className="section-desc">
                        From daily groceries to school essentials — explore what we offer for your family.
                    </p>
                </div>

                <div className="services-grid reveal">
                    {SERVICES.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            onClick={() => {
                                setCurrentPage(service.id);
                                window.scrollTo(0, 0);
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
