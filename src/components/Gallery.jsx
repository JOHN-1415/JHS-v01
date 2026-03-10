import React from 'react';
import SketchBackground from './SketchBackground';

const galleryItems = [
    { src: '/gallery-groceries.jpg', caption: 'Fresh Grocery Section', featured: true },
    { src: '/gallery-shoes.jpg', caption: 'School Shoes Corner', featured: false },
    { src: '/gallery-gifts.jpg', caption: 'Gifts & Toys Aisle', featured: false },
    { src: '/gallery-jewels.jpg', caption: 'Jewellery Collection', featured: false },
    { src: '/gallery-stationary.jpg', caption: 'Stationery Section', featured: false },
    { src: '/gallery-exterior.jpg', caption: 'Store Entrance', featured: false },
];

function Gallery() {
    return (
        <section id="gallery" className="gallery section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <SketchBackground color="#1B6B3A" opacity={0.04} />
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
                            <div className="gallery-overlay">
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
