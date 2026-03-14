import React from 'react';
import SketchBackground from './SketchBackground';

const WA_BASE = 'https://wa.me/919345491984';
const BASE = import.meta.env.BASE_URL;

const ALL_PRODUCTS = {
    groceries: {
        label: "Groceries",
        desc: "From everyday staples to premium spices — all your kitchen needs in one place.",
        waMsg: "Hi! I want to order Groceries from Jeya Hyper Store.",
        items: [
            { name: "Pulses and Dry Grains",   img: `${BASE}cat-groceries-1.WEBP` },
            { name: "Packaged Grocery Essentials",    img: `${BASE}cat-groceries-2.WEBP` },
            { name: "Instant Foods & Snacks Section",   img: `${BASE}cat-groceries-3.WEBP` },
            { name: "Spices and Masala Collection",     img: `${BASE}cat-groceries-4.WEBP` },
            { name: "Snacks and Confectionery Items", img: `${BASE}cat-groceries-5.WEBP` },
            { name: "Pet Food and Pet Care Supplies",      img: `${BASE}cat-groceries-6.WEBP` },
        ],
    },
    shoes: {
        label: "Shoes",
        desc: "Durable school shoes for children from KG to Class 12, in all sizes.",
        waMsg: "Hi! I want to enquire about Shoes at Jeya Hyper Store.",
        items: [
            { name: "School Shoes Collection", img: `${BASE}cat-shoes-1.WEBP` },
            { name: "Black School Shoes", img: `${BASE}cat-shoes-2.WEBP` },
            { name: "White School Shoes",       img: `${BASE}cat-shoes-3.WEBP` },
        ],
    },
    gifts: {
        label: "Gifts",
        desc: "Beautiful gift hampers, seasonal gifts and wrapping — perfect for any occasion.",
        waMsg: "Hi! I am looking for Gift items at Jeya Hyper Store.",
        items: [
            { name: "Gift Box Decoration",         img: `${BASE}cat-gifts-1.WEBP` },
            { name: "Assorted Gift & Decorative Items Collection",   img: `${BASE}cat-gifts-2.webp` },
            { name: "Couple Figurine Gift Frames",          img: `${BASE}cat-gifts-3.WEBP` },
            { name: "Wall Clock Collection",     img: `${BASE}cat-gifts-4.WEBP` },
        ],
    },
    toys: {
        label: "Toys",
        desc: "Educational toys, board games and outdoor play items for all ages.",
        waMsg: "Hi! I want to enquire about Toys at Jeya Hyper Store.",
        items: [
            { name: "Toys and Teddy Bear Collection",          img: `${BASE}cat-toys-1.WEBP` },
            { name: "Kids Toys",          img: `${BASE}cat-toys-2.WEBP` },
            { name: "Decorative Teddy Bear Gift Set",          img: `${BASE}cat-toys-3.WEBP` },
        ],
    },
    jewels: {
        label: "Jewels",
        desc: "Elegant imitation jewellery, gold-plated sets, bangles and earrings.",
        waMsg: "Hi! I am interested in Jewellery items at Jeya Hyper Store.",
        items: [
            { name: "Traditional Necklace Collection",     img: `${BASE}cat-jewels-1.WEBP` },
            { name: "Jewellery Display Set",     img: `${BASE}cat-jewels-2.WEBP` },
        ],
    },
    stationary: {
        label: "Stationeries",
        desc: "Everything students need — notebooks, pens, geometry boxes and art supplies.",
        waMsg: "Hi! I need Stationery items from Jeya Hyper Store.",
        items: [
            { name: "Bathroom & Toilet Cleaning Products", img: `${BASE}cat-stationary-1.WEBP` },
            { name: "Home Care and Daily Essentials Section",    img: `${BASE}cat-stationary-2.WEBP` },
            { name: "Birthday and Party Decoration Items",                img: `${BASE}cat-stationary-3.WEBP` },
            { name: "School Stationery",                                   img: `${BASE}cat-stationary-4.WEBP` },
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
                <SketchBackground color="#1E3A8A" opacity={0.03} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <button className="back-link" onClick={onBack}>
                        <i className="fa-solid fa-arrow-left"></i> Back to Home
                    </button>

                    <div className="breadcrumb">
                        <span className="breadcrumb-home" onClick={onBack}>Home</span>
                        <span> / </span>
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
                        <i className="fa-brands fa-whatsapp"></i> Order {dept.label} on WhatsApp
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
                            <h4 className="service-product-card-name">{item.name}</h4>
                            <a
                                href={`https://wa.me/919345491984?text=${encodeURIComponent(`Hi! I want to enquire about ${item.name} from Jeya Hyper Store.`)}`}
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
