

# NuRegen — Climate-Tech Landing Page

A premium, responsive single-page website for NuRegen Private Limited using the "Regen-Modernist" design system with deep forest greens, geometric typography (Outfit + Plus Jakarta Sans), and matte ceramic surfaces.

## Architecture

- **Data layer** (`src/data/content.ts`): All text, stats, services, process steps, and focus areas centralized for easy editing
- **Reusable UI components**: Button, Card, SectionHeader, StatCard — all following the design system
- **Section components**: Each website section as its own component for clean separation

## Sections (in order)

1. **Navbar** — Sticky, transparent-to-white on scroll, "NuRegen" wordmark, smooth scroll links, mobile hamburger menu, green "Contact" CTA button
2. **Hero** — Full-viewport with subtle cross-hatch pattern background, bold display heading ("Driving Impact Through Regenerative Innovation"), tagline, two CTAs, and 3 floating stat cards (50k+ Farmers, 15+ States, 1.2M Tons CO2e) with entrance animations
3. **Why Sustainability Matters** — 3-card grid: Reducing Carbon Emissions, Protecting Natural Ecosystems, Empowering Communities — each with icon, title, description
4. **Company Overview** — Split layout (text left, placeholder image right), covering NuRegen's mission, Bhubaneswar base, focus on carbon markets, regenerative agriculture, nature-based solutions, ESG
5. **Core Focus Areas** — 6-card responsive grid (Regenerative Agriculture, Carbon Farming, Nature-Based Solutions, Rice Carbon Projects, Agroforestry, Climate-Smart Agriculture) with hover effects and Lucide icons
6. **Implementation Strength** — Dark emerald section with large stat cards (100+ NPO Partners, 15+ States, Large-scale Mobilization)
7. **Technical Expertise** — Card/badge layout for GHG Accounting, Emission Modelling, Carbon Registry Coordination, Methane Reduction, Global Standards Compliance
8. **Services** — 7-card grid covering Baseline Development, PDD Preparation, Farmer Aggregation, Climate-smart Ag Implementation, MRV Systems, ESG Consulting, Climate Policy Advisory
9. **Process** — 4-step timeline on dark emerald background (Assessment → Design → Deployment → Verification) with connecting lines and step numbers
10. **Join the Movement CTA** — Full-width green gradient section with compelling headline and "Collaborate With Us" button
11. **Footer** — Contact info (phone, email), quick links, social placeholders, copyright

## Design System
- Colors: Deep Forest `#064E3B` primary, Vibrant Leaf `#22C55E` accent, Cool Slate `#F8FAFC` surface
- Typography: Outfit for headings, Plus Jakarta Sans for body (loaded via Google Fonts)
- Cards: `rounded-2xl`, subtle layered shadows, hover elevation
- Buttons: Pill-shaped (`rounded-full`), primary/outline variants with subtle lift on hover
- Motion: Framer Motion for scroll-triggered entrance animations using expo-out easing
- Fully responsive mobile-first layout with hamburger nav

