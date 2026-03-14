import React from 'react';
import SketchBackground from './SketchBackground';

const BASE = import.meta.env.BASE_URL;

const galleryItems = [
    { src: `${BASE}gallery-exterior.WEBP`, caption: 'Store Front Exterior', featured: true },
    { src: `${BASE}gallery-groceries.WEBP`, caption: 'Fresh Grocery Section', featured: false },
    { src: `${BASE}gallery-shoes.WEBP`, caption: 'School Shoes Corner', featured: false },
    { src: `${BASE}gallery-gifts.WEBP`, caption: 'Gifts & Toys Aisle', featured: false },
    { src: `${BASE}gallery-jewels.WEBP`, caption: 'Jewellery Collection', featured: false },
    { src: `${BASE}gallery-stationary.WEBP`, caption: 'Stationery Section', featured: false },
];

function Gallery() {
    return (
        <section id="gallery" className="gallery section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <SketchBackground color="#1E3A8A" opacity={0.04} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="text-center reveal">
                    <span className="section-label">Store Gallery</span>
                    <h2 className="section-title">Inside Our Store</h2>
                    <p className="section-desc">Take a visual tour of our spacious aisles, organized shelves, and clean layout.</p>
                </div>

                <div className="gallery-grid reveal">
                    {galleryItems.map((item, i) => (
                        <div key={i} className={`gallery-item${item.featured ? ' gallery-featured' : ''}`}>
                            <img src={item.src} alt={item.caption} />
                            <div className="gallery-info">
                                <span>{item.caption}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;
