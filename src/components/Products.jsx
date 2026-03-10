import React, { useState } from 'react';
import SketchBackground from './SketchBackground';

const WA_BASE = 'https://wa.me/919876543210';

const PRODUCTS = [
    {
        id: 'groceries',
        label: '🛒 Groceries',
        desc: 'From everyday staples to premium spices — all your kitchen needs in one place.',
        waMsg: 'Hi! I want to order Groceries from Jeya Hyper Store.',
        items: [
            { name: 'Rice & Grains', img: '/cat-groceries-1.jpg' },
            { name: 'Dals & Pulses', img: '/cat-groceries-2.jpg' },
            { name: 'Spices', img: '/cat-groceries-3.jpg' },
            { name: 'Oils & Ghee', img: '/cat-groceries-4.jpg' },
            { name: 'Packed Foods', img: '/cat-groceries-5.jpg' },
            { name: 'Salt & Sugar', img: '/cat-groceries-6.jpg' },
        ],
    },
    {
        id: 'shoes',
        label: '👟 School Shoes',
        desc: 'Durable school shoes for children from KG to Class 12, in all sizes.',
        waMsg: 'Hi! I want to enquire about School Shoes at Jeya Hyper Store.',
        items: [
            { name: 'Canvas Shoes', img: '/cat-shoes-1.jpg' },
            { name: 'Leather Shoes', img: '/cat-shoes-2.jpg' },
            { name: 'Sports Shoes', img: '/cat-shoes-3.jpg' },
            { name: "Boys' Sizes", img: '/cat-shoes-4.jpg' },
            { name: "Girls' Sizes", img: '/cat-shoes-5.jpg' },
            { name: 'School Bags', img: '/cat-shoes-6.jpg' },
        ],
    },
    {
        id: 'gifts',
        label: '🎁 Gifts',
        desc: 'Beautiful gift hampers, seasonal gifts and wrapping — perfect for any occasion.',
        waMsg: 'Hi! I am looking for Gift items at Jeya Hyper Store.',
        items: [
            { name: 'Gift Hampers', img: '/cat-gifts-1.jpg' },
            { name: 'Gift Wrapping', img: '/cat-gifts-2.jpg' },
            { name: 'Seasonal Gifts', img: '/cat-gifts-3.jpg' },
            { name: 'Greeting Cards', img: '/cat-gifts-4.jpg' },
            { name: 'Chocolates', img: '/cat-gifts-5.jpg' },
            { name: 'Candles & Décor', img: '/cat-gifts-6.jpg' },
        ],
    },
    {
        id: 'toys',
        label: '🧸 Toys',
        desc: 'Educational toys, board games and outdoor play items for all ages.',
        waMsg: 'Hi! I want to enquire about Toys at Jeya Hyper Store.',
        items: [
            { name: 'Stuffed Toys', img: '/cat-toys-1.jpg' },
            { name: 'Board Games', img: '/cat-toys-2.jpg' },
            { name: 'Car Toys', img: '/cat-toys-3.jpg' },
            { name: 'Puzzles', img: '/cat-toys-4.jpg' },
            { name: 'Outdoor Toys', img: '/cat-toys-5.jpg' },
            { name: 'Educational', img: '/cat-toys-6.jpg' },
        ],
    },
    {
        id: 'jewels',
        label: '💍 Jewels',
        desc: 'Elegant imitation jewellery, gold-plated sets, bangles and earrings.',
        waMsg: 'Hi! I am interested in Jewellery items at Jeya Hyper Store.',
        items: [
            { name: 'Rings & Sets', img: '/cat-jewels-1.jpg' },
            { name: 'Necklaces', img: '/cat-jewels-2.jpg' },
            { name: 'Gold-plated', img: '/cat-jewels-3.jpg' },
            { name: 'Bangles', img: '/cat-jewels-4.jpg' },
            { name: 'Earrings', img: '/cat-jewels-5.jpg' },
            { name: 'Chains', img: '/cat-jewels-6.jpg' },
        ],
    },
    {
        id: 'stationary',
        label: '📚 Stationeries',
        desc: 'Everything students need — notebooks, pens, geometry boxes and art supplies.',
        waMsg: 'Hi! I need Stationery items from Jeya Hyper Store.',
        items: [
            { name: 'Notebooks', img: '/cat-stationary-1.jpg' },
            { name: 'Pencils & Pens', img: '/cat-stationary-2.jpg' },
            { name: 'Geometry Box', img: '/cat-stationary-3.jpg' },
            { name: 'Art Supplies', img: '/cat-stationary-4.jpg' },
            { name: 'Craft Items', img: '/cat-stationary-5.jpg' },
            { name: 'Writing Tools', img: '/cat-stationary-6.jpg' },
        ],
    },
];

function Products() {
    const [activeTab, setActiveTab] = useState(null);
    const activeProduct = activeTab ? PRODUCTS.find(p => p.id === activeTab) : null;

    const handleImgError = (e) => {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
    };

    const waLink = (msg) => `${WA_BASE}?text=${encodeURIComponent(msg)}`;

    return (
        <section id="products" className="products section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <SketchBackground color="#7DC832" opacity={0.06} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="text-center reveal">
                    <span className="section-label">Our Services</span>
                    <h2 className="section-title">Services We Are Providing</h2>
                    <p className="section-desc">
                        From daily groceries to school essentials, gifts, jewellery and more —
                        explore what Jeya Hyper Store offers for your family.
                    </p>
                </div>

                <div className="product-tabs reveal">
                    {PRODUCTS.map((dept) => (
                        <button
                            key={dept.id}
                            className={`product-tab ${activeTab === dept.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(dept.id)}
                        >
                            {dept.label}
                        </button>
                    ))}
                </div>

                {/* Hint shown when no tab selected */}
                {!activeTab && (
                    <p className="tab-hint">👆 Select a service above to explore our products</p>
                )}

                {/* Grid shown only after tab click */}
                {activeTab && activeProduct && (
                    <div className="tab-content-area reveal">
                        <p className="product-tab-desc">{activeProduct.desc}</p>

                        <div className="product-grid">
                            {activeProduct.items.map((item, j) => (
                                <div className="product-card" key={`${activeProduct.id}-${j}`}>
                                    <div className="product-card-img">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            onError={handleImgError}
                                        />
                                        <div className="product-img-placeholder" style={{ display: 'none' }}>
                                            <span className="placeholder-name">{item.name}</span>
                                        </div>
                                    </div>
                                    <div className="product-card-label">{item.name}</div>
                                </div>
                            ))}
                        </div>

                        <div className="product-wa-btn">
                            <a
                                href={waLink(activeProduct.waMsg)}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-whatsapp"
                            >
                                💬 Order {activeProduct.label.split(' ').slice(1).join(' ')} on WhatsApp
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Products;
