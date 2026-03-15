import React from 'react';
import SketchBackground from './SketchBackground';

const BASE = import.meta.env.BASE_URL;

const galleryItems = [
    { src: `${BASE}gallery-exterior.jpg`, caption: 'Store Front Exterior', featured: true },
    { src: `${BASE}Groceries & Food/groceries-1.jpg`, caption: 'Groceries & Food', featured: false },
    { src: `${BASE}Household & Cleaning/cleaning-1.jpg`, caption: 'Household & Cleaning', featured: false },
    { src: `${BASE}Spices & Cooking Essentials/cooking-essentials-1.jpg`, caption: 'Spices & Cooking Essentials', featured: false },
    { src: `${BASE}Stationery & School Supplies/stationery-1.jpg`, caption: 'Stationery & School Supplies', featured: false },
    { src: `${BASE}Fashion & Accessories/fashion-1.webp`, caption: 'Fashion Accessories', featured: false },
    { src: `${BASE}School Shoes/shoes-1.jpg`, caption: 'School Shoes', featured: false },
    { src: `${BASE}Gift Items & Decor/gifts-1.jpg`, caption: 'Gift Items & Decor', featured: false },
    { src: `${BASE}Jewels/jewel-1.jpg`, caption: 'Jewels', featured: false },
    { src: `${BASE}Toys & Kids/toys-1.jpg`, caption: 'Toys & Kids', featured: false },
    { src: `${BASE}Pet Supplies/pet-1.webp`, caption: 'Pet Supplies', featured: false },
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
