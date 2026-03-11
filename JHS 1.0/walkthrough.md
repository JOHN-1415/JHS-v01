# JHS Project — Jeya Hyper Store Website

## What Is This Project?

A **single-page marketing website** for **Jeya Hyper Store**, a local supermarket in **Trichy, Tamil Nadu**. Built with **React 18 + Vite** (frontend) and **Express.js** (backend API).

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend Framework | React 18 (JSX) |
| Build Tool | Vite 5 |
| Backend | Express.js 4 |
| Styling | Vanilla CSS (1,357 lines) |
| Fonts | Google Fonts — Poppins + Inter |
| Icons | FontAwesome 6 |
| Dev Server | `npm run dev` (Vite) |
| Prod Server | `npm start` (Express, serves `/dist`) |

---

## Project Structure

```
d:\JHS\JHS\
├── index.html              ← HTML entry point (SEO meta tags)
├── package.json            ← Dependencies & scripts
├── vite.config.js          ← Vite + React plugin config
├── public/                 ← Static assets (7 store images)
│   ├── logo.jpg / logo.png
│   ├── store-exterior.jpg
│   ├── store-interior.jpg
│   ├── store-groceries.jpg
│   ├── store-household.jpg
│   └── store-gifts.jpg
├── server/
│   └── server.js           ← Express backend (1 API endpoint)
└── src/
    ├── main.jsx            ← React entry point
    ├── App.jsx             ← Entire website (575 lines, single component)
    ├── index.css           ← Full design system (1,357 lines)
    ├── components/         ← Empty (unused)
    └── assets/             ← Empty (unused)
```

---

## What's Built — Section by Section

### 1. **Navbar** (Fixed, Sticky)
- Logo image + navigation links (Home, About, Products, Gallery, Location, Contact)
- **Scroll effect**: transparent → frosted glass background with blur on scroll
- Hamburger menu for mobile (toggle open/close)
- Smooth underline hover animations on links

### 2. **Hero Section** (Full Viewport)
- "Trusted Since Years" badge
- **"Jeya Hyper Store"** heading with gradient text
- Subtitle: "Your Trusted Supermarket in Trichy"
- Description paragraph about the store
- Two CTA buttons: "Visit Our Store" + "Get Directions" (Google Maps link)
- Store exterior image with **floating animated cards** ("Best Prices", "100% Fresh")
- Animated background gradient blob shapes

### 3. **About Section**
- Store interior image with a circular **"10+ Years of Trust" badge**
- Description of the store and its values
- 4 feature checkmarks: Quality Products, Affordable Prices, Convenient Shopping, Wide Variety

### 4. **Products Section** (6 Categories)
- Grid cards for: Fresh Groceries, Vegetables & Fruits, Snacks & Beverages, Dairy Products, Household Essentials, Personal Care
- Each card has an icon, title, and description
- Hover effects: lift + green top-border animation

### 5. **Why Us Section** (Gradient Background)
- Green-to-blue gradient background with subtle texture overlay
- 4 glassmorphism cards: Quality Products, Affordable Prices, Friendly Service, Convenient Location
- Hover lift animation + backdrop blur effect

### 6. **Gallery Section** (Photo Grid)
- CSS Grid layout (4 columns) with 5 store photos
- First image spans 2 columns × 2 rows (large feature image)
- Hover reveals dark gradient overlay with caption text

### 7. **Reviews/Testimonials Section**
- 3 customer review cards with star ratings, review text, and reviewer avatar/name
- Reviewers: Ramesh Kumar, Priya S., Karthik N.

### 8. **Location Section**
- Embedded **Google Maps iframe** showing "JEYA HYPER" store location
- Info cards: Address, Phone (+91 98765 43210), Opening Hours (7 AM – 10 PM, daily)
- "Get Directions" button linking to Google Maps

### 9. **Contact Section**
- Contact methods listed: Phone, WhatsApp, Email, Store address
- **Contact form** (Name, Phone, Message) that submits to `/api/contact` POST endpoint
- Submit button shows spinner animation while sending

### 10. **Footer**
- Brand name, description, social links (Facebook, Instagram, Twitter)
- Quick links column
- Contact details column  
- "© 2026 Jeya Hyper Store" copyright

### 11. **Floating Elements**
- **WhatsApp chat button** (green, bottom-right corner)
- **Scroll-to-top button** (appears after 500px scroll)

---

## Backend (Express Server)

Single API endpoint:

| Method | Route | Purpose |
|--------|-------|---------|
| `POST` | `/api/contact` | Receives contact form submissions (name, phone, message) and logs them to console |

> [!NOTE]
> The contact endpoint only logs to console — no database or email integration yet.

In production mode, it also serves the Vite build output from `/dist`.

---

## CSS Design System Highlights

- **CSS Custom Properties**: Full design token system (colors, gradients, typography, spacing, shadows, transitions)
- **Brand Colors**: Peacock Green (`#1F8A4C`) + Royal Blue (`#2F4FA2`)
- **Animations**: Scroll-reveal, floating cards, hover lifts, gradient background blobs
- **Responsive**: Full mobile breakpoints with hamburger menu
- **Modern Effects**: Glassmorphism, backdrop blur, gradient text, shadow system

---

## What's NOT Done Yet

- `components/` and `assets/` folders are **empty** — everything lives in a single [App.jsx](file:///d:/JHS/JHS/src/App.jsx)
- No routing (single-page, anchor links only)
- No database — contact form just logs to console
- Social media links are placeholder (`#`)
- Phone/email are placeholder values
- No tests
