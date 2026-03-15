import React from 'react';
import SketchBackground from './SketchBackground';
import ServiceCard from './ServiceCard';

const BASE = import.meta.env.BASE_URL;

const SERVICES = [
    {
        id: "groceries",
        label: "Groceries & Food",
        coverImg: `${BASE}Groceries & Food/groceries-1.jpg`,
        desc: "Daily grocery essentials including snacks, packaged foods, and kitchen ingredients.",
    },
    {
        id: "cleaning",
        label: "Household & Cleaning",
        coverImg: `${BASE}Household & Cleaning/cleaning-1.jpg`,
        desc: "Reliable cleaning and household products to keep your home fresh and hygienic.",
    },
    {
        id: "cooking",
        label: "Spices & Cooking Essentials",
        coverImg: `${BASE}Spices & Cooking Essentials/cooking-essentials-1.jpg`,
        desc: "Authentic spices and cooking ingredients that add rich flavor to every meal.",
    },
    {
        id: "stationery",
        label: "Stationery & School Supplies",
        coverImg: `${BASE}Stationery & School Supplies/stationery-1.jpg`,
        desc: "Essential stationery items and school supplies for students and offices.",
    },
    {
        id: "fashion",
        label: "Fashion & Accessories",
        coverImg: `${BASE}Fashion & Accessories/fashion-1.jpg`,
        desc: "Stylish fashion accessories including handbags and belts.",
    },
    {
        id: "shoes",
        label: "School Shoes",
        coverImg: `${BASE}School Shoes/shoes-1.jpg`,
        desc: "Comfortable and durable shoes for school students.",
    },
    {
        id: "gifts",
        label: "Gift Items & Decor",
        coverImg: `${BASE}Gift Items & Decor/gifts-1.jpg`,
        desc: "Beautiful gift items and decorative pieces for special occasions.",
    },
    {
        id: "jewels",
        label: "Jewels",
        coverImg: `${BASE}Jewels/jewel-1.jpg`,
        desc: "Elegant imitation jewellery designed for everyday wear and special occasions.",
    },
    {
        id: "toys",
        label: "Toys & Kids",
        coverImg: `${BASE}Toys & Kids/toys-1.jpg`,
        desc: "Fun and engaging toys for children of all ages.",
    },
    {
        id: "pets",
        label: "Pet Supplies",
        coverImg: `${BASE}Pet Supplies/pet-1.jpg`,
        desc: "Quality food and essentials for your furry companions.",
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
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
