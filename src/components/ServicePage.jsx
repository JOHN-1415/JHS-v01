import React from 'react';
import SketchBackground from './SketchBackground';

const WA_BASE = 'https://wa.me/919876543210';
const BASE = import.meta.env.BASE_URL;

const ALL_PRODUCTS = {
    groceries: {
        label: "Groceries",
        desc: "From everyday staples to premium spices — all your kitchen needs in one place.",
        waMsg: "Hi! I want to order Groceries from Jeya Hyper Store.",
        items: [
            { name: "Rice & Grains", img: `${BASE}cat-groceries-1.jpg` },
            { name: "Dals & Pulses", img: `${BASE}cat-groceries-2.jpg` },
            { name: "Spices", img: `${BASE}cat-groceries-3.jpg` },
            { name: "Oils & Ghee", img: `${BASE}cat-groceries-4.jpg` },
            { name: "Packed Foods", img: `${BASE}cat-groceries-5.jpg` },
        ],
    },
    shoes: {
        label: "School Shoes",
        desc: "Durable school shoes for children from KG to Class 12, in all sizes.",
        waMsg: "Hi! I want to enquire about School Shoes at Jeya Hyper Store.",
        items: [
            { name: "Canvas Shoes", img: `${BASE}cat-shoes-1.jpg` },
            { name: "Leather Shoes", img: `${BASE}cat-shoes-2.jpg` },
            { name: "Sports Shoes", img: `${BASE}cat-shoes-3.jpg` },
        ],
    },
    gifts: {
        label: "Gifts",
        desc: "Beautiful gift hampers, seasonal gifts and wrapping — perfect for any occasion.",
        waMsg: "Hi! I am looking for Gift items at Jeya Hyper Store.",
        items: [
            { name: "Gift Hampers", img: `${BASE}cat-gifts-1.jpg` },
            { name: "Gift Wrapping", img: `${BASE}cat-gifts-2.jpg` },
            { name: "Seasonal Gifts", img: `${BASE}cat-gifts-3.jpg` },
            { name: "Greeting Cards", img: `${BASE}cat-gifts-4.jpg` },
        ],
    },
    toys: {
        label: "Toys",
        desc: "Educational toys, board games and outdoor play items for all ages.",
        waMsg: "Hi! I want to enquire about Toys at Jeya Hyper Store.",
        items: [
            { name: "Stuffed Toys", img: `${BASE}cat-toys-1.jpg` },
            { name: "Board Games", img: `${BASE}cat-toys-2.jpg` },
            { name: "Car Toys", img: `${BASE}cat-toys-3.jpg` },
        ],
    },
    jewels: {
        label: "Jewels",
        desc: "Elegant imitation jewellery, gold-plated sets, bangles and earrings.",
        waMsg: "Hi! I am interested in Jewellery items at Jeya Hyper Store.",
        items: [
            { name: "Rings & Sets", img: `${BASE}cat-jewels-1.jpg` },
            { name: "Necklaces", img: `${BASE}cat-jewels-2.jpg` },
        ],
    },
    stationary: {
        label: "Stationeries",
        desc: "Everything students need — notebooks, pens, geometry boxes and art supplies.",
        waMsg: "Hi! I need Stationery items from Jeya Hyper Store.",
        items: [
            { name: "Notebooks", img: `${BASE}cat-stationary-1.jpg` },
            { name: "Pencils & Pens", img: `${BASE}cat-stationary-2.jpg` },
            { name: "Geometry Box", img: `${BASE}cat-stationary-3.jpg` },
            { name: "Art Supplies", img: `${BASE}cat-stationary-4.jpg` },
        ],
    },
};

function ServicePage({ deptId, onBack }) {
    const dept = ALL_PRODUCTS[deptId];
    if (!dept) return null;

    const waLink = (msg) => `${WA_BASE}?text=${encodeURIComponent(msg)}`;

    return (
        <div>
            {/* Header Banner */}
            <div className="service-page-header" style={{ position: 'relative', overflow: 'hidden' }}>
                <SketchBackground color="#2ECC71" opacity={0.04} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <button className="back-link" onClick={onBack}>
                        <i className="fa-solid fa-arrow-left"></i> Back to Home
                    </button>

                    <div className="breadcrumb">
                        <span className="breadcrumb-home" onClick={onBack}>Home</span>
                        <span> › </span>
                        <span>{dept.label}</span>
                    </div>

                    <span className="service-page-badge">{dept.items.length} Products</span>

                    <h1 className="service-page-title">{dept.label}</h1>
                    <p className="service-page-desc">{dept.desc}</p>

                    <a
                        href={waLink(dept.waMsg)}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-whatsapp"
                    >
                        💬 Order {dept.label} on WhatsApp
                    </a>
                </div>
            </div>

            {/* Product Grid */}
            <div className="service-product-grid">
                {dept.items.map((item, i) => (
                    <div className="service-product-card" key={i}>
                        <img
                            src={item.img}
                            alt={item.name}
                            onError={e => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        <div className="product-img-placeholder" style={{ display: 'none' }}>
                            <span className="placeholder-name">{item.name}</span>
                        </div>
                        <div className="service-product-card-body">
                            <p className="service-product-card-name">{item.name}</p>
                            <a
                                href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi! I want to enquire about ${item.name} from Jeya Hyper Store.`)}`}
                                target="_blank"
                                rel="noreferrer"
                                className="service-product-enquire"
                            >
                                <i className="fa-brands fa-whatsapp"></i> Enquire on WhatsApp
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicePage;
