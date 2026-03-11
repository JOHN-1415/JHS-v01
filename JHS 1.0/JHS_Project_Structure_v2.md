# JHS Project — Jeya Hyper Store Website v2.0
## Complete Project Structure & Build Guide for Claude Opus (Antigravity)

---

## 🏪 Store Identity

| Field | Value |
|-------|-------|
| Store Name | Jeya Hyper Store |
| Location | Somarasampettai, Srirangam, Trichy, Tamil Nadu — 620102 |
| Address | 3, 75F, Ganapathy Nagar, Somarasampettai, Opp. Holy Cross School, Vayalur Road, Shanmuga Nagar, Srirangam |
| Rating | 4.6 ⭐ (Google Maps) |
| WhatsApp | +91 98765 43210 (placeholder — replace with real number before launch) |
| Hours | 7:00 AM – 10:00 PM, Daily |
| Google Maps | https://share.google/qNUCjZ6BnqU81Mlpa |

---

## 🎨 Design System — Color Palette

> **Reference:** Country Fresh brand identity — dark forest green dominant, bright lime accent, golden yellow highlight.

```css
/* ── Core Brand Colors ── */
--forest-green:  #1B6B3A   /* PRIMARY — dominant background, navbar, hero */
--lime-green:    #7DC832   /* ACCENT — buttons, highlights, active states */
--gold:          #F5C518   /* HIGHLIGHT — stats, badges, special callouts */
--mint-bg:       #F0FAF0   /* PAGE BACKGROUND — light mint for main sections */
--light-lime:    #E8F5D0   /* SECTION BG — alternate light sections (FAQ, Contact) */
--deep-forest:   #0A2E18   /* FOOTER background */

/* ── Utility ── */
--whatsapp:      #25D366   /* WhatsApp green — all WA buttons */
--whatsapp-dark: #128C7E   /* WhatsApp dark — gradients */
--white:         #FFFFFF
--dark:          #1A1A1A   /* Body text */
--text-gray:     #555555   /* Secondary text */
```

**Section background mapping:**

| Section | Background |
|---------|-----------|
| Navbar | `#1B6B3A` solid forest green |
| Hero | `linear-gradient(135deg, #1B6B3A, #0F4023)` |
| About | `#F0FAF0` mint |
| Products | `#1B6B3A` forest green |
| Why Us | `linear-gradient(135deg, #1B6B3A, #0F4023)` |
| Testimonials | `#F0FAF0` mint |
| FAQ | `#E8F5D0` light lime |
| Location | `#F0FAF0` mint |
| Contact | `#E8F5D0` light lime |
| Footer | `#0A2E18` deep forest |

### Typography
```
Headings / Display: Syne (Google Fonts) — weight 700, 800
Body / UI text:     DM Sans (Google Fonts) — weight 400, 500, 600
```
Import in `index.html`:
```
https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap
```

---

## 🌿 Background Sketch Decoration

> **Reference:** The grocery website reference image shows faint outline sketches of vegetables as a watermark pattern floating behind each section's content.

**Rule:** Every section must have a subtle SVG sketch layer behind the content at low opacity.

**Implementation:** Create one reusable `<SketchBackground />` component in `src/components/SketchBackground.jsx`.

```jsx
// Props: color (string, default "#1B6B3A"), opacity (number, default 0.05)
// Returns an <svg> that is:
//   position: absolute, inset: 0, width: 100%, height: 100%
//   pointerEvents: none, zIndex: 0
// Contains inline SVG stroke-only paths (no fill) for store-relevant items
// strokeWidth: 1.2 to 1.5, distributed across canvas corners + midpoints
```

**Sketches to include (all drawn as SVG paths/shapes — no external files):**
- 🥕 Carrot — top-left area
- 🍅 Tomato with stem — top-right area
- 🥦 Broccoli — center-left area
- 🧅 Onion — bottom-right area
- 🌶️ Chilli pepper — left-mid area
- 🌿 Herb / leaf — far right corner
- ✴️ Star anise — upper-left corner
- 👟 Shoe outline — center-right (nod to shoe department)

**Color rule per section type:**

| Section type | color prop | opacity prop |
|-------------|-----------|-------------|
| Dark green bg (Hero, Products, Why Us, Footer) | `#7DC832` | `0.06` |
| Light bg (About, Testimonials, Location) | `#1B6B3A` | `0.05` |
| Light lime bg (FAQ, Contact) | `#1B6B3A` | `0.04` |

**Usage in every section:**
```jsx
<section style={{ position: 'relative', overflow: 'hidden' }}>
  <SketchBackground color="#7DC832" opacity={0.06} />
  <div style={{ position: 'relative', zIndex: 1 }}>
    {/* actual section content here */}
  </div>
</section>
```

---

## 🖼️ Images — Local Files Only (No API)

> **No Unsplash API. No external image services.** The owner will provide actual product photos. Build the component so images are drop-in replaceable.

**For the Products section:** Use placeholder cards (emoji + name) until the owner places image files in `/public/`. The component must be structured so adding images later requires zero logic change.

**Image file naming convention** (owner adds these to `/public/`):
```
/public/
├── logo.png
├── store-exterior.jpg
├── store-interior.jpg
├── cat-groceries-1.jpg  through  cat-groceries-6.jpg
├── cat-shoes-1.jpg      through  cat-shoes-6.jpg
├── cat-gifts-1.jpg      through  cat-gifts-6.jpg
├── cat-toys-1.jpg       through  cat-toys-6.jpg
├── cat-jewels-1.jpg     through  cat-jewels-6.jpg
└── cat-stationary-1.jpg through  cat-stationary-6.jpg
```

**Product card build pattern:**
```jsx
// Each product item in the data array:
{ name: "Rice & Grains", emoji: "🍚", img: "/cat-groceries-1.jpg" }

// In JSX — show img if it loads, show emoji fallback if it errors:
<div className="product-card-img">
  <img
    src={item.img}
    alt={item.name}
    onError={e => {
      e.target.style.display = 'none';
      e.target.nextSibling.style.display = 'flex';
    }}
  />
  <span className="product-emoji-fallback">{item.emoji}</span>
</div>
```

---

## 🛍️ Product Categories (6 Departments)

| # | Department | 6 Grid Items |
|---|-----------|--------------|
| 1 | 🛒 Groceries | Rice & Grains · Dals & Pulses · Spices · Oils & Ghee · Packed Foods · Salt & Sugar |
| 2 | 👟 School Shoes | Canvas Shoes · Leather Shoes · Sports Shoes · Boys' Sizes · Girls' Sizes · School Bags |
| 3 | 🎁 Gifts | Gift Hampers · Gift Wrapping · Seasonal Gifts · Greeting Cards · Chocolates · Candles & Décor |
| 4 | 🧸 Toys | Stuffed Toys · Board Games · Car Toys · Puzzles · Outdoor Toys · Educational Toys |
| 5 | 💍 Jewels | Rings & Sets · Necklaces · Gold-plated · Bangles · Earrings · Chains |
| 6 | 📚 Stationeries | Notebooks · Pencils & Pens · Geometry Box · Art Supplies · Craft Items · Writing Tools |

---

## 🗂️ Final File Structure

```
d:\JHS\JHS\
├── index.html
├── package.json
├── vite.config.js
│
├── public/
│   ├── logo.png
│   ├── store-exterior.jpg
│   ├── store-interior.jpg
│   └── cat-[dept]-[1-6].jpg       ← owner provides these
│
├── server/
│   └── server.js                  ← no changes needed
│
└── src/
    ├── main.jsx
    ├── App.jsx                    ← imports + renders all components in order
    ├── index.css                  ← full design system
    │
    └── components/
        ├── SketchBackground.jsx   ← NEW: shared SVG sketch layer
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx              ← About + Vision & Mission
        ├── Products.jsx           ← 6-tab product showcase
        ├── WhyUs.jsx
        ├── Gallery.jsx
        ├── Testimonials.jsx       ← 3 real Google reviews
        ├── FAQ.jsx                ← NEW: accordion FAQ
        ├── Location.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── FloatingButtons.jsx
```

---

## 📋 Section-by-Section Specifications

---

### 0. SketchBackground.jsx (Shared Component — Build First)

```jsx
// Props: color="#1B6B3A", opacity=0.05
// SVG: position absolute, inset 0, width 100%, height 100%, pointerEvents none, zIndex 0
// All shapes: stroke only (fill="none"), strokeWidth 1.2–1.5
// 8 sketches distributed across canvas so no area is empty
// Shapes: carrot, tomato, broccoli, onion, chilli, herb/leaf, star anise, shoe
```

---

### 1. Navbar

- Background: `#1B6B3A` solid
- On scroll > 50px: add `backdrop-filter: blur(12px)` + slightly darker overlay
- Left: `logo.png` + "Jeya **Hyper** Store" in Syne — lime + gold accent
- Centre: nav links — Home · About · Products · Testimonials · FAQ · Location · Contact
- Right: **"💬 Order on WhatsApp"** pill button (`#25D366` bg, white text)
  - `href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20place%20an%20order%20at%20Jeya%20Hyper%20Store."`
- Mobile: hamburger toggle (existing behaviour — keep)

---

### 2. Hero Section

- Background: `linear-gradient(135deg, #1B6B3A 0%, #0F4023 60%)`
- `<SketchBackground color="#7DC832" opacity={0.08} />`
- Badge text: `"⭐ Trusted Since 10+ Years · Srirangam, Trichy"`
- H1: "Jeya" (lime `#7DC832`) + line break + "Hyper" (gold `#F5C518`) + " Store" (white)
- Subtitle: `"Your One-Stop Shop in Trichy"` — lime, 1.1rem
- Description: `"From fresh groceries to school shoes, gifts, toys, jewels and stationeries — everything your family needs, all under one roof in Srirangam."`
- CTA Button 1: `"📍 Visit Our Store"` — lime green bg → scrolls to `#location`
- CTA Button 2: `"💬 Chat on WhatsApp"` — `#25D366` bg → wa.me link
- Stats row (4 items, gold numbers in Syne):
  - `10+` Years of Trust
  - `6` Departments
  - `4.6★` Google Rating
  - `7AM–10PM` Open Daily

---

### 3. About Section

- Background: `#F0FAF0`
- `<SketchBackground color="#1B6B3A" opacity={0.05} />`
- Section label: "Who We Are" (lime, 0.78rem, uppercase, letter-spacing 2px)
- 2 columns desktop, 1 column mobile

**Left column:**
- `store-interior.jpg` in rounded container (border-radius 20px)
- Circular badge (absolute, bottom-right, overlapping): gold bg, Syne font
  - "10+" large + "Years of Trust" small

**Right column:**
- H2: "A Store Built on Trust & Value"
- Para: "Jeya Hyper Store has been serving the families of Srirangam, Trichy for over a decade. Located in the heart of Somarasampettai, we bring you quality products across 6 departments — all at honest, everyday prices."
- 4 check items (lime circle tick icon):
  - Quality Products across 6 Departments
  - Affordable, Honest Prices
  - Friendly, Helpful Staff
  - Loyalty Points Reward System
- Vision & Mission — 2 cards side by side:
  - 🎯 **Our Vision** (left border: `#7DC832`): "To be the most trusted neighbourhood store in Trichy — where every family finds everything they need, at prices they can afford."
  - 🚀 **Our Mission** (left border: `#F5C518`): "To offer a wide range of quality products — from daily groceries to school essentials, gifts, toys, jewellery and stationery — with warm service, honest pricing, and a shopping experience that feels like home."

---

### 4. Products Section ⭐

- Background: `#1B6B3A`
- `<SketchBackground color="#7DC832" opacity={0.06} />`
- Section label: "What We Offer" (lime)
- H2: "Shop By Department" (white, Syne)
- Subtitle: "Six departments, one address. Browse by category and order directly on WhatsApp." (white/65)

**Tab bar:**
- Inactive tab: `rgba(255,255,255,0.1)` bg · white/70 text · white/20 border · pill shape
- Active tab: `#7DC832` bg · `#1B6B3A` text
- Tabs: `🛒 Groceries` · `👟 School Shoes` · `🎁 Gifts` · `🧸 Toys` · `💍 Jewels` · `📚 Stationeries`

**Per tab — show:**
1. Short description (white/65)
2. 3–4 column grid of product cards (image + label, `rgba(255,255,255,0.08)` bg, hover lifts)
3. "💬 Order [Department] on WhatsApp" button (`#25D366`)

**WhatsApp link per tab (all prepend `https://wa.me/919876543210`):**
```
Groceries:    ?text=Hi!%20I%20want%20to%20order%20Groceries%20from%20Jeya%20Hyper%20Store.
School Shoes: ?text=Hi!%20I%20want%20to%20enquire%20about%20School%20Shoes.
Gifts:        ?text=Hi!%20I%20am%20looking%20for%20Gift%20items.
Toys:         ?text=Hi!%20I%20want%20to%20enquire%20about%20Toys.
Jewels:       ?text=Hi!%20I%20am%20interested%20in%20Jewellery%20items.
Stationeries: ?text=Hi!%20I%20need%20Stationery%20items.
```

---

### 5. Why Us Section

- Background: `linear-gradient(135deg, #1B6B3A, #0F4023)`
- `<SketchBackground color="#7DC832" opacity={0.05} />`
- 4 glassmorphism cards (`rgba(255,255,255,0.08)` bg, `backdrop-filter: blur(10px)`, border `rgba(255,255,255,0.15)`):
  1. 🏬 **6 Departments** — Everything from groceries to jewels, all under one roof
  2. 💰 **Honest Prices** — Best value in Srirangam, no hidden charges
  3. 😊 **Friendly Service** — Our staff is always ready to help you find what you need
  4. ⭐ **Loyalty Rewards** — Earn points on every purchase — the more you shop, the more you save!

---

### 6. Gallery Section

- Keep existing CSS grid layout (4 columns, first image 2×2 span)
- Images: `store-exterior.jpg`, `store-interior.jpg`, `store-groceries.jpg`, `store-household.jpg`, `store-gifts.jpg`
- Hover: dark gradient overlay + caption text
- Captions: "Fresh Grocery Section" · "School Shoes Corner" · "Gifts & Toys Aisle" · "Jewellery Collection" · "Store Entrance"

---

### 7. Testimonials Section ⭐

- Background: `#F0FAF0`
- `<SketchBackground color="#1B6B3A" opacity={0.04} />`
- 3 cards in a row (1 column on mobile)
- Top border per card: lime (1st) · gold (2nd) · `#1B6B3A` (3rd)
- Large decorative `"` mark top-right of card (lime, opacity 0.18, Georgia font)

**Use these exact reviews:**

```
Review 1:
  name:   "Yogesh 9965"
  initial: "Y"
  rating:  5
  meta:   "Google Review"
  text:   "The shopping experience here was smooth and enjoyable. The shop was
           well-maintained, and everything was easy to locate. What really stood
           out was the courteous and efficient service by the staff — they were
           approachable and quick to assist. The product selection was decent,
           with good value for money. The overall vibe of the shop was comfortable
           and stress-free, making it a place I'd definitely return to for future needs."

Review 2:
  name:   "Usha Saranraj"
  initial: "U"
  rating:  5
  meta:   "Google Review · 5 reviews · 1 photo"
  text:   "I have purchased for the past 2 years. All home needed products are
           available there — and they also provide loyalty points according to our
           purchase amount, which is very useful and attractive. I love that
           system 😍 Please visit here for your home needs!"

Review 3:
  name:   "Kirankumar B"
  initial: "K"
  rating:  5
  meta:   "Google Review · 3 reviews · 2 photos"
  text:   "Very kind employees — I always love to buy my things there. Customer
           service is good! The store has a great collection and the staff are
           always ready to help you find what you need."
```

- Avatar: circle with initial, gradient `#1B6B3A → #7DC832`
- Below each card: `"⭐ Leave a Review"` link → `https://share.google/qNUCjZ6BnqU81Mlpa`

---

### 8. FAQ Section ⭐ (New)

- Background: `#E8F5D0`
- `<SketchBackground color="#1B6B3A" opacity={0.05} />`
- Section centred, max-width 750px
- Accordion: CSS `max-height` transition for smooth expand/collapse
- Question row: forest green text · lime chevron circle (rotates 180° when open)

**Questions & Answers:**
```
Q1: What are your store timings?
A1: We are open every day from 7:00 AM to 10:00 PM, including Sundays and public holidays.

Q2: Where is Jeya Hyper Store located?
A2: We are at Somarasampettai, opposite Holy Cross School, Vayalur Road, Shanmuga Nagar,
    Srirangam, Trichy — 620102.

Q3: What products do you sell?
A3: We sell across 6 departments: Groceries, School Shoes, Gifts, Toys, Jewels, and
    Stationeries. Truly a one-stop shop for your family!

Q4: Can I place orders on WhatsApp?
A4: Yes! Send your order or enquiry on WhatsApp at +91 98765 43210 and we'll reply shortly.

Q5: Do you offer home delivery?
A5: Please contact us on WhatsApp or call us to check delivery availability for your area.

Q6: Do you accept UPI and card payments?
A6: Yes! We accept cash, UPI (GPay, PhonePe, Paytm) and card payments for your convenience.

Q7: Do you have school shoes for all sizes?
A7: Yes! Our school shoes section covers all sizes from KG to Class 12, for boys and girls.

Q8: Do you have a loyalty/points system?
A8: Yes! We provide reward points based on your purchase amount — making every visit more rewarding.
```

**Bottom CTA block** (white card, centred, below the accordion):
```
"Still have questions? Chat with us instantly!"
[ 💬 Chat on WhatsApp ]
→ https://wa.me/919876543210?text=Hi!%20I%20have%20a%20question%20about%20Jeya%20Hyper%20Store.
```

---

### 9. Location Section

- Background: `#F0FAF0`
- `<SketchBackground color="#1B6B3A" opacity={0.04} />`
- 2 columns: map left · info right (1 column on mobile)

**Left:** Google Maps iframe embedded
```html
<iframe
  src="https://www.google.com/maps?q=JEYA+HYPER+STORE+Somarasampettai+Srirangam&output=embed"
  width="100%" height="320" style="border:0;" allowfullscreen loading="lazy"
></iframe>
```
Wrapped in `border-radius: 20px` container.

**Right — 4 info cards** (white, left-border lime):
- 📍 Address: Somarasampettai, Opp. Holy Cross School, Vayalur Road, Srirangam — 620102
- 📞 Phone: +91 98765 43210
- 💬 WhatsApp: +91 98765 43210
- ⏰ Hours: 7:00 AM – 10:00 PM, All Days

**Two CTA buttons below info cards:**
- `"📍 Get Directions"` — outline button → `https://share.google/qNUCjZ6BnqU81Mlpa`
- `"💬 Message on WhatsApp"` — `#25D366` button → `?text=Hi!%20I%20want%20to%20visit%20the%20store.`

---

### 10. Contact Section

- Background: `#E8F5D0`
- `<SketchBackground color="#1B6B3A" opacity={0.04} />`
- 2 columns: left (WA block + contact details) · right (form)

**Left column — WhatsApp Quick Contact block (top):**
```
Gradient card: linear-gradient(135deg, #128C7E, #25D366)
Title:   "💬 Quick Contact via WhatsApp"
Text:    "Skip the form — chat with us directly for instant replies!"
Button:  "💬 Open WhatsApp Chat" (white bg, teal text)
Link: https://wa.me/919876543210?text=Hi%20Jeya%20Hyper%20Store!%20I%20have%20an%20enquiry.
```

**Left column — 4 contact rows below (white cards):**
- 📞 Phone: +91 98765 43210
- 💬 WhatsApp: +91 98765 43210
- 📧 Email: jeyahyperstore@gmail.com
- 📍 Address: Somarasampettai, Srirangam, Trichy

**Right column — Contact Form (white card):**
- Fields: Name (text), Phone (tel), Message (textarea)
- Submit: forest green → lime on hover
- On submit: `POST /api/contact` with `{ name, phone, message }`
- Show spinner while submitting; show success message after

---

### 11. Footer

- Background: `#0A2E18`
- `<SketchBackground color="#7DC832" opacity={0.04} />`
- 3 columns:

**Column 1 — Brand:**
- Logo + "Jeya Hyper Store" (Syne — lime + gold)
- Tagline: "Your trusted neighbourhood store in Srirangam, Trichy."
- Social icons: Facebook · Instagram · WhatsApp (→ wa.me)

**Column 2 — Quick Links:**
Home · About · Products · Testimonials · FAQ · Location · Contact

**Column 3 — Departments:**
🛒 Groceries · 👟 School Shoes · 🎁 Gifts · 🧸 Toys · 💍 Jewels · 📚 Stationeries

**Bottom bar:**
- "© 2026 Jeya Hyper Store, Srirangam, Trichy. All rights reserved."
- "Made with ❤️ in Tamil Nadu"

---

### 12. Floating Buttons

```
Position: fixed, bottom: 28px, right: 24px, zIndex: 999
Stack (top to bottom):
  [↑]             ← scroll-to-top: appears after 500px scroll, forest green
  [💬 Chat]       ← WhatsApp: ALWAYS visible, pulsing glow
```

WhatsApp float link:
`https://wa.me/919876543210?text=Hi!%20I%20have%20a%20query%20for%20Jeya%20Hyper%20Store.`

Pulse animation:
```css
@keyframes waPulse {
  0%, 100% { box-shadow: 0 6px 25px rgba(37, 211, 102, 0.4); }
  50%       { box-shadow: 0 6px 40px rgba(37, 211, 102, 0.75); }
}
```

Tooltip on hover: `"Chat with us on WhatsApp"`

---

## 📱 WhatsApp Integration — All 13 Touch Points

| # | Location | Button Label | Pre-fill Message |
|---|----------|-------------|-----------------|
| 1 | Navbar | "💬 Order on WhatsApp" | `Hi! I want to place an order at Jeya Hyper Store.` |
| 2 | Hero | "💬 Chat on WhatsApp" | `Hi! I have a query for Jeya Hyper Store.` |
| 3 | Products — Groceries | "💬 Order Groceries on WhatsApp" | `Hi! I want to order Groceries from Jeya Hyper Store.` |
| 4 | Products — Shoes | "💬 Order School Shoes on WhatsApp" | `Hi! I want to enquire about School Shoes.` |
| 5 | Products — Gifts | "💬 Order Gifts on WhatsApp" | `Hi! I am looking for Gift items.` |
| 6 | Products — Toys | "💬 Order Toys on WhatsApp" | `Hi! I want to enquire about Toys.` |
| 7 | Products — Jewels | "💬 Order Jewels on WhatsApp" | `Hi! I am interested in Jewellery items.` |
| 8 | Products — Stationeries | "💬 Order Stationeries on WhatsApp" | `Hi! I need Stationery items.` |
| 9 | FAQ bottom CTA | "💬 Chat on WhatsApp" | `Hi! I have a question about Jeya Hyper Store.` |
| 10 | Contact section | "💬 Open WhatsApp Chat" | `Hi Jeya Hyper Store! I have an enquiry.` |
| 11 | Location section | "💬 Message on WhatsApp" | `Hi! I want to visit the store.` |
| 12 | Footer social | WhatsApp icon | `Hi Jeya Hyper Store!` |
| 13 | Floating button | "💬 Chat with us" | `Hi! I have a query for Jeya Hyper Store.` |

**Base URL:** `https://wa.me/919876543210`
**Number format for links:** `+91 98765 43210` → `919876543210` (no spaces, no +)

---

## 🔧 Backend — No Changes Needed

Keep existing `server.js` and `/api/contact` POST endpoint as-is.
All WhatsApp features are purely frontend HTML anchor links — zero backend needed.

---

## 🚀 Antigravity Prompt Template (Claude Opus)

Copy-paste this as the base context when building each component:

```
You are building a React 18 + Vite website for "Jeya Hyper Store",
a neighbourhood store in Srirangam, Trichy, Tamil Nadu, India.

TECH STACK: React 18, vanilla CSS (no Tailwind), FontAwesome 6 icons.
FONTS: Syne (headings 700/800) + DM Sans (body 400/500/600) — Google Fonts.

COLOR PALETTE:
  Forest Green  #1B6B3A  — primary, dominant dark bg
  Lime Green    #7DC832  — accent, active states, buttons
  Gold          #F5C518  — highlights, stats, badges
  Mint BG       #F0FAF0  — light section backgrounds
  Light Lime BG #E8F5D0  — alternate light sections
  Deep Forest   #0A2E18  — footer
  WhatsApp      #25D366  — all WhatsApp buttons

BACKGROUND SKETCHES:
  Every section uses <SketchBackground /> — an absolutely-positioned SVG with
  faint stroke-only outlines of vegetables + store items (carrot, tomato,
  broccoli, onion, chilli, herb, star anise, shoe). Content sits above at zIndex 1.
  Dark sections: color="#7DC832" opacity=0.06
  Light sections: color="#1B6B3A" opacity=0.05

IMAGES: No external APIs. Product cards use local /public/cat-[dept]-[n].jpg
files with emoji fallback (onError handler).

WHATSAPP: Number is 919876543210
All links: https://wa.me/919876543210?text=[url-encoded message]

Now build [COMPONENT NAME] following this spec:
[paste the relevant section spec from above]

Export as default React component. Fully responsive, mobile-first.
```

---

## 📝 Component Build Order

| Step | File | Notes |
|------|------|-------|
| 1 | `index.css` | CSS variables, base reset, reusable classes, animations |
| 2 | `SketchBackground.jsx` | Shared SVG layer — build once, reuse everywhere |
| 3 | `FloatingButtons.jsx` | WhatsApp pulse float + scroll-to-top |
| 4 | `Navbar.jsx` | Forest green, WA pill button, hamburger |
| 5 | `Hero.jsx` | Dark gradient bg, sketch, stats row |
| 6 | `About.jsx` | Vision & Mission cards, checklist |
| 7 | `Products.jsx` | 6 tabs, image grid with emoji fallback, per-tab WA btn ← most complex |
| 8 | `WhyUs.jsx` | 4 glassmorphism cards |
| 9 | `Gallery.jsx` | CSS grid, hover captions |
| 10 | `Testimonials.jsx` | 3 real reviews (exact text above) |
| 11 | `FAQ.jsx` | Accordion + WA CTA at bottom |
| 12 | `Location.jsx` | Maps iframe, info cards, dual CTAs |
| 13 | `Contact.jsx` | WA quick block + form |
| 14 | `Footer.jsx` | 3 columns + bottom bar |
| 15 | `App.jsx` | Import and render all in order |

---

## ✅ Completion Checklist

**Design**
- [ ] Colors match spec (#1B6B3A, #7DC832, #F5C518)
- [ ] Syne used for all headings
- [ ] DM Sans used for body text
- [ ] Sketch SVGs visible (faint) on every section
- [ ] All sections use correct background color per mapping table

**Sections**
- [ ] Navbar: WA pill button + hamburger
- [ ] Hero: lime/gold heading, stats row, 2 CTA buttons
- [ ] About: store image + badge, 4 checks, Vision & Mission cards
- [ ] Products: 6 tabs working, image grid with emoji fallback, per-tab WA button
- [ ] Why Us: 4 glassmorphism cards
- [ ] Gallery: hover captions
- [ ] Testimonials: all 3 real reviews (Yogesh, Usha, Kirankumar) with exact text
- [ ] FAQ: 8 Q&As, accordion works, WA CTA block at bottom
- [ ] Location: Maps iframe, 4 info cards, 2 CTA buttons
- [ ] Contact: WA quick block on left, form on right
- [ ] Footer: 3 columns, WA social icon, departments list
- [ ] Floating buttons: WA always visible with pulse, scroll-to-top appears at 500px

**WhatsApp (13 touch points)**
- [ ] Navbar WA button
- [ ] Hero WA button
- [ ] 6× product tab WA buttons (unique message each)
- [ ] FAQ bottom WA CTA
- [ ] Contact WA quick block
- [ ] Location WA button
- [ ] Footer WA social icon
- [ ] Floating WA bubble

**Functionality**
- [ ] Contact form POSTs to `/api/contact`
- [ ] Mobile responsive — all 2-col grids collapse to 1 col
- [ ] Tab bar wraps on small screens
- [ ] Scroll animations working
