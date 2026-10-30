# Nexus Enterprises - Pan-India Turnkey Commercial & Government Electrical EPC Website

A modern, responsive, high-performance website built with **Next.js (App Router)**, **React 19**, **Tailwind CSS**, and **Lucide Icons**, recreating the exact visual aesthetic, geometry, and color palette of the reference design while fully tailored for a premier electrical engineering enterprise executing commercial mega-projects and government infrastructure tenders across all 28+ Indian states.

---

## ⚡ Key Highlights & Features

1. **Exact 1:1 Visual Alignment with Reference Design**:
   - Dynamic curved golden-yellow wave background (`#FBBF24` / `#F59E0B`) with lightning watermark pattern.
   - Distinctive typography using **Outfit** and **Plus Jakarta Sans**, plus handwritten callout styling with **Caveat**.
   - Custom rotating black badge (`SAFE • RELIABLE • PROFESSIONAL •`) with lightning icon center.
   - Exact 3-card trust banner below hero buttons: `100% Safety First`, `Govt Approved Class-1 Contractor`, and `24/7 Pan-India Rapid Response`.
   - "WHAT WE DO" 3-card grid with pale yellow circular icon badges and golden arrow action pills.
   - "WHY CHOOSE US" section with the circular golden halo backdrop, dot matrix pattern, engineer cutout, handwritten `Powering India's Future ⚡` arrow annotation, and floating dark stat badge (`500+ Landmark Projects Pan-India`).
   - Deep slate/navy 4-column footer matching the reference design layout with copyright and Class-1 statutory license badge.

2. **Pan-India Commercial & Government Focus**:
   - **Pan-India Footprint & Scale**: Showcases coverage across 28+ states & UTs, ₹1,250+ Cr total project execution value, 450+ government tenders delivered, and 99.8% on-time commissioning rate.
   - **Regional Command Hubs**: New Delhi (HQ), Mumbai/MMR, Bengaluru, Hyderabad, Ahmedabad, and Kolkata.
   - **Filterable Landmark Projects Showcase**: Commercial towers & IT parks, central/state government mega-tenders (CPWD, PWD, Railways, Metro), 11-66kV HT/LT substations, and Smart City expressways.
   - **Statutory Accreditations & Empanelments**: Class-1 Government Electrical License, CPWD Composite Registration, GeM (Govt e-Marketplace) prime vendor status, and Triple ISO certifications (ISO 9001, 14001, 45001).
   - **Direct Tier-1 OEM Alliances**: Schneider Electric, ABB, Larsen & Toubro (L&T), Siemens, Polycab, Havells, Legrand.

3. **Interactive Capabilities**:
   - **Interactive RFP / Tender & Fast Quote Modal**: Allows potential government authorities and commercial clients to submit project scope, select budget tiers, pick project location by state, and receive an instant token receipt.
   - **Interactive Corporate Video Modal**: High-definition engineering showreel preview.
   - **Responsive Navigation**: With smooth anchor scrolling and mobile drawer menu.

---

## 🚀 Running the Project

### Development Server
The development server is already active and running:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the live website.

### Production Build
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
nexus-enterprises/
├── public/
│   └── images/
│       ├── engineer-hero.jpg          # Hero engineer photo cutout
│       └── engineer-project.jpg       # Project supervisor in safety gear
├── src/
│   ├── app/
│   │   ├── globals.css                # Tailwind CSS & custom keyframe animations
│   │   ├── layout.tsx                 # Root layout, Google Fonts & SEO metadata
│   │   └── page.tsx                   # Main homepage assembly & state management
│   └── components/
│       ├── Navbar.tsx                 # Sticky navigation with announcement bar & mobile menu
│       ├── HeroSection.tsx            # Golden curved wave hero with rotating badge
│       ├── WhatWeDoSection.tsx        # 3-Card services layout matching reference
│       ├── WhyChooseUsSection.tsx     # Halo backdrop, checklist, and floating stats
│       ├── PanIndiaFootprint.tsx      # 28-State coverage & regional engineering commands
│       ├── ProjectsSection.tsx        # Filterable commercial & govt project portfolio
│       ├── CredentialsSection.tsx     # Class-1 license, CPWD, GeM & ISO certifications
│       ├── QuoteModal.tsx             # Interactive RFP / Tender inquiry popup form
│       ├── VideoModal.tsx             # Corporate film preview popup
│       └── Footer.tsx                 # 4-Column dark navy footer with license info
├── package.json
├── tsconfig.json
├── next.config.mjs
└── postcss.config.mjs
```

