import React from 'react';
import SketchBackground from './SketchBackground';

const WA_BASE = 'https://wa.me/919345491984';
const BASE = import.meta.env.BASE_URL;

const ALL_PRODUCTS = {
    groceries: {
        label: "Groceries & Food",
        desc: "Daily grocery essentials including snacks, packaged foods, and kitchen ingredients for every household.",
        waMsg: "Hi! I want to order Groceries from Jeya Hyper Store.",
        items: [
            { name: "Packed Foods", img: `${BASE}Groceries & Food/groceries-1.WEBP` },
            { name: "Instant Foods", img: `${BASE}Groceries & Food/groceries-2.WEBP` },
            { name: "Biscuits and Snacks", img: `${BASE}Groceries & Food/groceries-3.webp` },
        ],
        subcategories: ["Biscuits & Cookies", "Snacks & Chips", "Instant Foods", "Packaged Food", "Cooking Ingredients"],
    },
    cleaning: {
        label: "Household & Cleaning",
        desc: "Reliable cleaning and household products to keep your home fresh, hygienic, and well maintained.",
        waMsg: "Hi! I want to enquire about Household & Cleaning products at Jeya Hyper Store.",
        items: [
            { name: "Dishwash Liquids", img: `${BASE}Household & Cleaning/cleaning-1.WEBP` },
            { name: "Bathroom Cleaners", img: `${BASE}Household & Cleaning/cleaning-2.WEBP` },
        ],
        subcategories: ["Toilet Cleaners", "Floor Cleaners", "Bathroom Cleaners", "Dishwash Liquids"],
    },
    cooking: {
        label: "Spices & Cooking Essentials",
        desc: "Authentic spices and cooking ingredients that add rich flavor and aroma to every meal.",
        waMsg: "Hi! I want to enquire about Spices & Cooking Essentials at Jeya Hyper Store.",
        items: [
            { name: "Food Ingredients", img: `${BASE}Spices & Cooking Essentials/cooking-essentials-1.WEBP` },
            { name: "Masala & Spice Powders", img: `${BASE}Spices & Cooking Essentials/cooking-essentials-2.WEBP` },
            { name: "Fries and Pickles", img: `${BASE}Spices & Cooking Essentials/cooking-essentials-3.WEBP` },
        ],
        subcategories: ["Masala & Spice Powders", "Cooking Mixes", "Food Ingredients"],
    },
    stationery: {
        label: "Stationery & School Supplies",
        desc: "Essential stationery items and school supplies for students, offices, and everyday use.",
        waMsg: "Hi! I want to enquire about Stationery at Jeya Hyper Store.",
        items: [
            { name: "Pen and Pencils", img: `${BASE}Stationery & School Supplies/stationery-2.WEBP` },
        ],
        subcategories: ["Pens & Pencils", "Erasers & Sharpeners", "Notebooks", "School Accessories"],
    },
    fashion: {
        label: "Fashion & Accessories",
        desc: "Stylish fashion accessories including handbags, belts, and everyday essentials for men and women.",
        waMsg: "Hi! I want to enquire about Fashion & Accessories at Jeya Hyper Store.",
        items: [
            { name: "Handbags", img: `${BASE}Fashion & Accessories/fashion-1.webp` },
            { name: "Belts", img: `${BASE}Fashion & Accessories/fashion-2.webp` },
        ],
        subcategories: ["Handbags", "Belts", "Fashion Accessories"],
    },
    shoes: {
        label: "School Shoes",
        desc: "Comfortable and durable shoes for school students.",
        waMsg: "Hi! I want to enquire about School Shoes at Jeya Hyper Store.",
        items: [
            { name: "School Shoes", img: `${BASE}School Shoes/shoes-1.WEBP` },
            { name: "Black Shoes", img: `${BASE}School Shoes/shoes-2.WEBP` },
            { name: "White Shoes", img: `${BASE}School Shoes/shoes-3.WEBP` },
        ],
        subcategories: ["School Shoes for all standards"],
    },
    gifts: {
        label: "Gift Items & Decor",
        desc: "Beautiful gift items and decorative pieces perfect for special occasions, celebrations, and home decoration.",
        waMsg: "Hi! I am looking for Gift Items at Jeya Hyper Store.",
        items: [
            { name: "Decorative Gifts", img: `${BASE}Gift Items & Decor/gifts-1.WEBP` },
            { name: "Mini Gift Sets", img: `${BASE}Gift Items & Decor/gifts-2.webp` },
            { name: "Showpieces", img: `${BASE}Gift Items & Decor/gifts-3.webp` },
            { name: "Wall Clock Collections", img: `${BASE}Gift Items & Decor/gifts-4.WEBP` },
            { name: "Birthday Candles", img: `${BASE}Gift Items & Decor/decors-1.webp` },
            { name: "Party Decorations", img: `${BASE}Gift Items & Decor/decors-2.WEBP` },
            { name: "Decorative Wall Art", img: `${BASE}Gift Items & Decor/decors-3.webp` },
        ],
        subcategories: ["Decorative Gifts", "Showpieces", "Mini Gift Sets", "Love Gifts", "Party Poppers", "Confetti", "Birthday Candles", "Party Decorations"],
    },
    jewels: {
        label: "Jewels",
        desc: "Elegant imitation jewellery and fashionable ornaments designed for everyday wear and special occasions.",
        waMsg: "Hi! I want to enquire about Jewellery at Jeya Hyper Store.",
        items: [
            { name: "Necklace Sets", img: `${BASE}Jewels/jewel-1.WEBP` },
            { name: "Wedding Jewellery", img: `${BASE}Jewels/jewel-2.WEBP` },
        ],
        subcategories: ["Premium Jewels"],
    },
    toys: {
        label: "Toys & Kids",
        desc: "Fun and engaging toys for children of all ages that inspire creativity, learning, and play.",
        waMsg: "Hi! I want to enquire about Toys at Jeya Hyper Store.",
        items: [
            { name: "Action Toys", img: `${BASE}Toys & Kids/toys-1.WEBP` },
            { name: "Teddy Bears", img: `${BASE}Toys & Kids/toys-2.WEBP` },
        ],
        subcategories: ["Action Toys", "Toy Vehicles", "Educational Toys", "Kids Toys", "Teddy Bears", "Plush Toys"],
    },
    pets: {
        label: "Pet Supplies",
        desc: "Quality food and essentials for pets, ensuring proper nutrition and care for your furry companions.",
        waMsg: "Hi! I want to enquire about Pet Supplies at Jeya Hyper Store.",
        items: [
            { name: "Pedigree and KitKat", img: `${BASE}Pet Supplies/pet-1.webp` },
            { name: "Pet Food & Care", img: `${BASE}Pet Supplies/pet-2.WEBP` },
        ],
        subcategories: ["Dog Food", "Cat Food", "Pet Treats"],
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

            {/* Subcategories */}
            {dept.subcategories && dept.subcategories.length > 0 && (
                <div className="service-subcategories">
                    <h3 className="subcategories-title">Subcategories</h3>
                    <div className="subcategories-list">
                        {dept.subcategories.map((sub, i) => (
                            <span className="subcategory-tag" key={i}>{sub}</span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ServicePage;
