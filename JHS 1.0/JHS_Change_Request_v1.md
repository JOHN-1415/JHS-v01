# JHS — Change Request v1 (Post-Build Fixes)
## Instructions for Antigravity / Claude Opus

This document lists **5 specific changes** to make to the existing built website.
Apply each change one at a time. Do not rebuild from scratch.

---

## 📁 Image File Reference — Confirmed Files in /public/

The owner has already placed all images in `/public/`. Reference exactly these filenames.

### Gallery Images — ALL 6 CONFIRMED ✅
```
/public/gallery-exterior.jpg
/public/gallery-gifts.jpg
/public/gallery-groceries.jpg
/public/gallery-jewels.jpg
/public/gallery-shoes.jpg
/public/gallery-stationary.jpg
```

### Product Tab Images — Use ONLY what exists, show placeholder for the rest

The code must build each tab's grid from the array below.
Only these files exist — do NOT reference any others.
Cards whose image file does not exist will show the clean placeholder automatically via `onError`.

```
Gifts:        cat-gifts-1.jpg, cat-gifts-2.jpg, cat-gifts-3.jpg, cat-gifts-4.jpg
Groceries:    cat-groceries-1.jpg, cat-groceries-2.jpg, cat-groceries-3.jpg,
              cat-groceries-4.jpg, cat-groceries-5.jpg
Jewels:       cat-jewels-1.jpg, cat-jewels-2.jpg
Shoes:        cat-shoes-1.jpg, cat-shoes-2.jpg, cat-shoes-3.jpg
Stationery:   cat-stationary-1.jpg, cat-stationary-2.jpg,
              cat-stationary-3.jpg, cat-stationary-4.jpg
Toys:         cat-toys-1.jpg, cat-toys-2.jpg, cat-toys-3.jpg
```

**Important:** The product data arrays in `Products.jsx` must still define all 6 items per tab
(for labels/names). Just set the `img` path to the file that exists.
For items beyond what's available, the `onError` handler will hide the broken img and show
the clean placeholder div instead. **No emoji. No stickers.**

**Updated product data arrays for Products.jsx:**

```js
const PRODUCTS = [
  {
    id: "groceries",
    label: "🛒 Groceries",
    desc: "From everyday staples to premium spices — all your kitchen needs in one place.",
    waMsg: "Hi! I want to order Groceries from Jeya Hyper Store.",
    items: [
      { name: "Rice & Grains",  img: "/cat-groceries-1.jpg" },
      { name: "Dals & Pulses",  img: "/cat-groceries-2.jpg" },
      { name: "Spices",         img: "/cat-groceries-3.jpg" },
      { name: "Oils & Ghee",    img: "/cat-groceries-4.jpg" },
      { name: "Packed Foods",   img: "/cat-groceries-5.jpg" },
      { name: "Salt & Sugar",   img: "/cat-groceries-6.jpg" },  // placeholder — file not yet added
    ],
  },
  {
    id: "shoes",
    label: "👟 School Shoes",
    desc: "Durable school shoes for children from KG to Class 12, in all sizes.",
    waMsg: "Hi! I want to enquire about School Shoes at Jeya Hyper Store.",
    items: [
      { name: "Canvas Shoes",   img: "/cat-shoes-1.jpg" },
      { name: "Leather Shoes",  img: "/cat-shoes-2.jpg" },
      { name: "Sports Shoes",   img: "/cat-shoes-3.jpg" },
      { name: "Boys' Sizes",    img: "/cat-shoes-4.jpg" },      // placeholder
      { name: "Girls' Sizes",   img: "/cat-shoes-5.jpg" },      // placeholder
      { name: "School Bags",    img: "/cat-shoes-6.jpg" },      // placeholder
    ],
  },
  {
    id: "gifts",
    label: "🎁 Gifts",
    desc: "Beautiful gift hampers, seasonal gifts and wrapping — perfect for any occasion.",
    waMsg: "Hi! I am looking for Gift items at Jeya Hyper Store.",
    items: [
      { name: "Gift Hampers",    img: "/cat-gifts-1.jpg" },
      { name: "Gift Wrapping",   img: "/cat-gifts-2.jpg" },
      { name: "Seasonal Gifts",  img: "/cat-gifts-3.jpg" },
      { name: "Greeting Cards",  img: "/cat-gifts-4.jpg" },
      { name: "Chocolates",      img: "/cat-gifts-5.jpg" },     // placeholder
      { name: "Candles & Décor", img: "/cat-gifts-6.jpg" },     // placeholder
    ],
  },
  {
    id: "toys",
    label: "🧸 Toys",
    desc: "Educational toys, board games and outdoor play items for all ages.",
    waMsg: "Hi! I want to enquire about Toys at Jeya Hyper Store.",
    items: [
      { name: "Stuffed Toys",    img: "/cat-toys-1.jpg" },
      { name: "Board Games",     img: "/cat-toys-2.jpg" },
      { name: "Car Toys",        img: "/cat-toys-3.jpg" },
      { name: "Puzzles",         img: "/cat-toys-4.jpg" },      // placeholder
      { name: "Outdoor Toys",    img: "/cat-toys-5.jpg" },      // placeholder
      { name: "Educational",     img: "/cat-toys-6.jpg" },      // placeholder
    ],
  },
  {
    id: "jewels",
    label: "💍 Jewels",
    desc: "Elegant imitation jewellery, gold-plated sets, bangles and earrings.",
    waMsg: "Hi! I am interested in Jewellery items at Jeya Hyper Store.",
    items: [
      { name: "Rings & Sets",    img: "/cat-jewels-1.jpg" },
      { name: "Necklaces",       img: "/cat-jewels-2.jpg" },
      { name: "Gold-plated",     img: "/cat-jewels-3.jpg" },    // placeholder
      { name: "Bangles",         img: "/cat-jewels-4.jpg" },    // placeholder
      { name: "Earrings",        img: "/cat-jewels-5.jpg" },    // placeholder
      { name: "Chains",          img: "/cat-jewels-6.jpg" },    // placeholder
    ],
  },
  {
    id: "stationary",
    label: "📚 Stationeries",
    desc: "Everything students need — notebooks, pens, geometry boxes and art supplies.",
    waMsg: "Hi! I need Stationery items from Jeya Hyper Store.",
    items: [
      { name: "Notebooks",       img: "/cat-stationary-1.jpg" },
      { name: "Pencils & Pens",  img: "/cat-stationary-2.jpg" },
      { name: "Geometry Box",    img: "/cat-stationary-3.jpg" },
      { name: "Art Supplies",    img: "/cat-stationary-4.jpg" },
      { name: "Craft Items",     img: "/cat-stationary-5.jpg" }, // placeholder
      { name: "Writing Tools",   img: "/cat-stationary-6.jpg" }, // placeholder
    ],
  },
];
```

---

## Change 1 — Section Color Variety (Premium Look)

**Problem:** All sections use the same two background colors (forest green or mint), making the page feel repetitive and flat.

**Fix:** Apply a distinct, alternating background to every section. No two adjacent sections share the same background.

**New section background mapping (replace existing):**

| Section | New Background | Text colour |
|---------|---------------|-------------|
| Navbar | `#1B6B3A` forest green | white |
| Hero | `linear-gradient(160deg, #0F3D22 0%, #1B6B3A 50%, #1A5C31 100%)` | white |
| About | `#FFFFFF` pure white | dark |
| Products | `linear-gradient(160deg, #143D24 0%, #1B6B3A 100%)` | white |
| Why Us | `#F7FDF2` very light green tint | dark |
| Gallery | `#FFFFFF` pure white | dark |
| Testimonials | `linear-gradient(160deg, #0C3019 0%, #1B6B3A 80%)` | white |
| FAQ | `#F7FDF2` very light green tint | dark |
| Location | `#FFFFFF` pure white | dark |
| Contact | `linear-gradient(160deg, #0C3019 0%, #1B6B3A 100%)` | white |
| Footer | `#071A0D` near-black green | white |

**Additional premium styling rules:**

1. **Section top accent line:** Add `border-top: 3px solid #7DC832` to white/light sections — About, Gallery, Why Us, FAQ, Location.

2. **Headings on dark sections** (Hero, Products, Testimonials, Contact):
   - H2: white
   - Section label: `#7DC832` lime

3. **Headings on light/white sections** (About, Why Us, Gallery, FAQ, Location):
   - H2: `#1B6B3A` forest green
   - Section label: `#7DC832` lime

4. **Card backgrounds:**
   - On dark sections: `rgba(255,255,255,0.10)` bg + `1px solid rgba(255,255,255,0.15)` border
   - On light/white sections: `#FFFFFF` bg + `box-shadow: 0 4px 24px rgba(27,107,58,0.10)`

5. **Depth on dark sections:** Layer this on top of the gradient:
   ```css
   background-image: radial-gradient(circle at 20% 50%, rgba(125,200,50,0.06) 0%, transparent 60%);
   ```

---

## Change 2 — Products Section: Rename & Restructure

### 2a. Rename section heading

**In `Products.jsx`, replace:**
```jsx
<div className="section-label">What We Offer</div>
<h2 className="section-title white">Shop By Department</h2>
<p className="section-desc white">Six departments, one address...</p>
```

**With:**
```jsx
<div className="section-label">Our Services</div>
<h2 className="section-title white">Services We Are Providing</h2>
<p className="section-desc white">
  From daily groceries to school essentials, gifts, jewellery and more —
  explore what Jeya Hyper Store offers for your family.
</p>
```

### 2b. Tab-first behaviour — show only tabs on load

**Change initial state:**
```js
// FROM:
const [activeTab, setActiveTab] = useState("groceries");

// TO:
const [activeTab, setActiveTab] = useState(null);
```

**Wrap content area in conditional:**
```jsx
{/* Hint shown when no tab selected */}
{!activeTab && (
  <p className="tab-hint">👆 Select a service above to explore our products</p>
)}

{/* Grid shown only after tab click */}
{activeTab && (
  <div className="tab-content-area">
    <p className="product-cat-desc">{activeProduct.desc}</p>
    <div className="product-grid">
      {activeProduct.items.map(item => ( ... ))}
    </div>
    <a href={waLink(activeProduct.waMsg)} className="wa-order-btn">
      💬 Order {activeProduct.label.split(" ").slice(1).join(" ")} on WhatsApp
    </a>
  </div>
)}
```

**CSS to add:**
```css
.tab-hint {
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.88rem;
  margin-top: 24px;
  font-style: italic;
  text-align: center;
}

.tab-content-area {
  animation: fadeSlideUp 0.35s ease forwards;
}

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### 2c. Remove emoji — use real images with clean placeholder

**Product card image JSX:**
```jsx
<div className="product-card-img">
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
</div>
```

**CSS:**
```css
.product-card-img img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  display: block;
}

.product-img-placeholder {
  width: 100%;
  aspect-ratio: 1;
  background: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px 12px 0 0;
}

.placeholder-name {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 600;
  text-align: center;
  padding: 0 10px;
}
```

---

## Change 3 — Gallery: Fix Image-Caption Mapping

**Replace the gallery data array in `Gallery.jsx` with:**

```js
const galleryItems = [
  { src: "/gallery-groceries.jpg",  caption: "Fresh Grocery Section",  featured: true },
  { src: "/gallery-shoes.jpg",      caption: "School Shoes Corner",    featured: false },
  { src: "/gallery-gifts.jpg",      caption: "Gifts & Toys Aisle",     featured: false },
  { src: "/gallery-jewels.jpg",     caption: "Jewellery Collection",   featured: false },
  { src: "/gallery-stationary.jpg", caption: "Stationery Section",     featured: false },
  { src: "/gallery-exterior.jpg",   caption: "Store Entrance",         featured: false },
];
```

**Map in JSX:**
```jsx
{galleryItems.map((item, i) => (
  <div key={i} className={`gallery-item${item.featured ? ' gallery-featured' : ''}`}>
    <img src={item.src} alt={item.caption} />
    <div className="gallery-overlay">
      <span>{item.caption}</span>
    </div>
  </div>
))}
```

`gallery-featured` applies only to the first item (index 0 = `gallery-groceries.jpg`) — this is the large 2×2 spanning image on the left. All others are normal size.

---

## Change 4 — Testimonials: Add Google Maps Review Links

**Update the REVIEWS array in `Testimonials.jsx` — add `reviewLink` to each:**

```js
const REVIEWS = [
  {
    name: "Yogesh 9965",
    initial: "Y",
    rating: 5,
    meta: "Google Review",
    text: "The shopping experience here was smooth and enjoyable. The shop was well-maintained, and everything was easy to locate. What really stood out was the courteous and efficient service by the staff — they were approachable and quick to assist. The product selection was decent, with good value for money. The overall vibe of the shop was comfortable and stress-free, making it a place I'd definitely return to for future needs.",
    reviewLink: "https://www.google.com/maps/contrib/104341981119329125988/reviews?hl=en",
  },
  {
    name: "Usha Saranraj",
    initial: "U",
    rating: 5,
    meta: "Google Review · 5 reviews · 1 photo",
    text: "I have purchased for the past 2 years. All home needed products are available there — and they also provide loyalty points according to our purchase amount, which is very useful and attractive. I love that system 😍 Please visit here for your home needs!",
    reviewLink: "https://www.google.com/maps/contrib/110925743305491292039/reviews?hl=en",
  },
  {
    name: "Kirankumar B",
    initial: "K",
    rating: 5,
    meta: "Google Review · 3 reviews · 2 photos",
    text: "Very kind employees — I always love to buy my things there. Customer service is good! The store has a great collection and the staff are always ready to help you find what you need.",
    reviewLink: "https://www.google.com/maps/contrib/104372412177104406630/reviews?hl=en",
  },
];
```

**In the review card JSX, add the link below the meta line:**
```jsx
<div className="review-author">
  <div className="review-avatar">{r.initial}</div>
  <div>
    <div className="review-name">{r.name}</div>
    <div className="review-meta">{r.meta}</div>
    <a
      href={r.reviewLink}
      target="_blank"
      rel="noreferrer"
      className="review-gmap-link"
    >
      View on Google Maps ↗
    </a>
  </div>
</div>
```

**CSS:**
```css
.review-gmap-link {
  font-size: 0.72rem;
  color: #7DC832;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  margin-top: 4px;
  transition: color 0.2s;
}
.review-gmap-link:hover {
  color: #F5C518;
  text-decoration: underline;
}
```

---

## Summary Table — What to Edit & Where

| # | File | Change |
|---|------|--------|
| 1 | `index.css` + all section components | New background per section, card styles, accent borders |
| 2a | `Products.jsx` | Heading → "Services We Are Providing" |
| 2b | `Products.jsx` | `activeTab = null` on load; grid only appears after tab click |
| 2c | `Products.jsx` | Remove emoji; clean placeholder div; update PRODUCTS data array (see top of doc) |
| 3 | `Gallery.jsx` | Replace gallery array with named files + correct captions |
| 4 | `Testimonials.jsx` | Add `reviewLink` to each review; render "View on Google Maps ↗" |

---

## ⚠️ Notes for Antigravity

1. **Do not rebuild from scratch.** These are targeted edits to existing files only.
2. **Apply in this order:** Changes 2c → 2b → 2a → 3 → 4 → 1 (colors last).
3. **Missing product images** (e.g. `cat-jewels-3.jpg`) are intentional — `onError` handles them silently with the clean placeholder. Do not add dummy files or emoji.
4. **Gallery featured image** = `gallery-groceries.jpg` (index 0, large slot). Do not change this assignment.
5. **Review links** open in `target="_blank"` with `rel="noreferrer"` — mandatory for security.
