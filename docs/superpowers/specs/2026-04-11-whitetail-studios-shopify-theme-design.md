# Whitetail Studios — Custom Shopify Theme Design Spec

## Context

Whitetail Studios is a custom wood business specializing in live-edge slabs, epoxy resin tables, wood rounds, fireplace mantels, and floating shelves. They need an e-commerce website to showcase their products, attract customers, and capture quote requests. The site will run on Shopify with a custom theme built from scratch using Shopify's Online Store 2.0 architecture.

The owner doesn't have a Shopify account yet — setup instructions will be included. All product images (19 total) have been optimized and renamed with SEO-friendly descriptive names.

---

## Approach

**Custom Shopify 2.0 Theme from scratch** — JSON templates, modular sections, no dependency on existing themes. This gives full design control and drag-and-drop editing in Shopify's theme editor.

**Implementation phases:**
1. Build interactive HTML/CSS mockups first (viewable in browser for approval)
2. Convert approved mockups into Shopify Liquid theme
3. Shopify store setup guide + product catalog configuration

---

## Pages & Sections

### 1. Home Page
- **Hero Banner:** Full-width image (use `walnut-epoxy-coffee-table-living-room.jpg`) with overlay text: business name, tagline, CTA button ("Shop Now" or "Request a Quote")
- **Featured Products:** 3-4 product cards in a row, linking to product detail pages
- **Our Process:** 3-step horizontal strip with icons/photos — Raw Wood > Milling > Finished Piece
- **Gallery Teaser:** 2x3 image grid pulling from best finished product shots, links to full Gallery
- **Testimonials:** Placeholder carousel section for future customer reviews
- **Newsletter Signup:** Email capture bar above the footer

### 2. Shop / Products Page
- **Filter Bar:** Category filters — Slabs, Tables, Shelves & Mantels, Rounds
- **Product Grid:** Responsive grid of product cards (2 columns mobile, 3-4 desktop)
- **Product Card:** Image, product name, "From $X" pricing, hover zoom effect
- **Product Detail Page:** Image gallery (thumbnails + main), description, dimensions, wood species, "Request a Quote" button, related products section

### 3. Gallery Page
- **Masonry Grid:** Mixed-size image layout showing finished pieces, raw materials, and process shots
- **Lightbox:** Click-to-expand full-size image viewing
- **Category Tabs:** Finished Pieces, Raw Materials, Process (optional filter)

### 4. About Page
- **Hero Image:** Workshop/sawmill photo (`large-walnut-slab-on-sawmill.jpg`)
- **Our Story:** Placeholder text block for business history and philosophy
- **Our Process:** Reuses the process-steps section from Home
- **The Team:** Placeholder for owner bio and photo

### 5. Contact / Custom Orders Page
- **Quote Request Form:** Name, email, message/description — simple 3-field form
- **Business Info:** Location, hours, phone number, email
- **Google Map Embed:** Optional, placeholder for address

---

## Visual Design

### Color Palette
| Role | Color | Hex |
|------|-------|-----|
| Primary Background | White | `#FFFFFF` |
| Secondary Background | Warm Light Grey | `#F5F3F0` |
| Heading Text | Near Black | `#1A1A1A` |
| Body Text | Dark Grey | `#4A4A4A` |
| Buttons / CTA | Warm Charcoal | `#2C2C2C` |
| Accent (hovers, borders) | Muted Tan | `#C4A882` |

### Typography
- **Headings:** Inter or Montserrat — uppercase, letter-spaced, bold
- **Body:** Same family, regular weight, 16px base size
- **Buttons:** Uppercase, letter-spaced, medium weight

### Design Principles
- Large product photography is the centerpiece — minimal surrounding UI
- Generous white space between all sections
- No busy patterns or textures — wood grain in photos provides all the texture
- Subtle hover animations: slight image zoom on product cards, color transitions on buttons
- Dark charcoal accents echo the black metal bases seen in the finished furniture
- Mobile-first responsive design

### Product Cards
- White card with subtle box shadow
- Product image fills top portion (aspect ratio preserved)
- Below image: product name, "From $X" price, subtle "View Details" link
- Hover: image zooms slightly, shadow deepens

---

## Product Catalog Structure

### Collections (4)
1. **Slabs** — Raw and live-edge wood slabs
2. **Tables** — Epoxy river tables, coffee tables, end tables, side tables
3. **Shelves & Mantels** — Floating wall shelves, fireplace mantels
4. **Rounds** — Cross-cut wood rounds for tabletops

### Product Fields
- Title
- Description (wood species, dimensions, finish)
- Price ("Starting at" display, actual price field for Shopify)
- Images (multiple per product)
- Collection assignment
- "Request a Quote" metafield or tag

### Pricing Model
- All products display "Starting at $X" pricing
- Primary CTA is "Request a Quote" button (links to contact form with product name pre-filled)
- Can be switched to direct Add to Cart / Shopify checkout later by toggling a theme setting

---

## Shopify Theme Architecture

### Directory Structure
```
whitetail-studios-theme/
  assets/
    theme.css            # Main stylesheet
    theme.js             # Minimal JS (mobile nav, lightbox, animations)
    logo.png             # Converted logo
  config/
    settings_schema.json # Theme editor settings (colors, fonts, etc.)
    settings_data.json   # Default setting values
  layout/
    theme.liquid         # Base layout (head, header, footer, content)
  templates/
    index.json           # Home page
    collection.json      # Shop / collection page
    product.json         # Product detail page
    page.about.json      # About page
    page.contact.json    # Contact page
    page.gallery.json    # Gallery page
  sections/
    header.liquid         # Site header with nav
    footer.liquid         # Site footer
    hero-banner.liquid    # Full-width hero image + text overlay
    featured-products.liquid
    product-grid.liquid
    product-card.liquid
    gallery-masonry.liquid
    process-steps.liquid
    quote-form.liquid
    testimonials.liquid
    newsletter-signup.liquid
    contact-info.liquid
  snippets/
    product-card.liquid   # Reusable product card partial
    responsive-image.liquid
    icon.liquid
  locales/
    en.default.json       # English translations
```

### Key Theme Settings (editable in Shopify admin)
- Logo upload
- Color overrides (primary, accent, text)
- Font selection
- Hero image and text per page
- Social media links
- Contact information
- Google Maps embed code
- Quote form toggle (show/hide per product)

### Sections Architecture
All pages use JSON templates with section references. Every section is independently configurable in the theme editor with its own settings (images, text, colors, visibility toggle).

---

## Technical Requirements

### Performance
- Lazy-loaded images with `loading="lazy"`
- Responsive images with `srcset` for multiple sizes
- Minified CSS and JS
- No external CSS frameworks (no Bootstrap) — custom lightweight CSS
- Target: < 3s load time on mobile

### SEO
- Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Descriptive meta titles and descriptions per page (editable in Shopify)
- Structured data (JSON-LD) for products
- Image alt text pulled from product descriptions
- Clean URL structure via Shopify defaults

### Mobile Responsiveness
- Mobile-first CSS approach
- Hamburger navigation menu
- Stacked single-column layout on mobile
- Touch-friendly form inputs and buttons
- Product grid: 1-2 columns on mobile, 3-4 on desktop

### Accessibility
- Proper heading hierarchy (h1 > h2 > h3)
- Alt text on all images
- Keyboard navigable
- Sufficient color contrast ratios (WCAG AA)
- Focus indicators on interactive elements

---

## HTML Mockups (Pre-Shopify Phase)

Before converting to Liquid, we'll build interactive HTML/CSS mockup pages that can be opened directly in a browser. These use the actual optimized product images and let you click through the full site experience.

### Mockup Pages
1. `mockup-home.html` — Full home page with all sections
2. `mockup-shop.html` — Product grid with category filters
3. `mockup-product.html` — Product detail page with image gallery
4. `mockup-gallery.html` — Masonry image gallery with lightbox
5. `mockup-about.html` — About page with placeholder copy
6. `mockup-contact.html` — Contact/quote request form

Each mockup is a self-contained HTML file with embedded CSS — open in any browser to preview. Uses the images from `sources/img/optimized/`.

---

## Image Inventory

| Filename | Description | Suggested Use |
|----------|-------------|---------------|
| `whitetail-studios-logo.jpg` | Logo — deer with American flag | Header, favicon |
| `walnut-epoxy-coffee-table-living-room.jpg` | Coffee table in styled living room | Home hero, featured |
| `walnut-epoxy-resin-coffee-table-workshop.jpg` | Coffee table in workshop | Product detail |
| `walnut-end-table-metal-base-styled.jpg` | End table styled by couch | Product / gallery |
| `epoxy-resin-end-table-metal-base.jpg` | End table with metal base | Product detail |
| `round-wood-epoxy-table-black-resin.jpg` | Round table, black epoxy | Product / featured |
| `round-epoxy-table-grey-resin.jpg` | Round table, grey epoxy | Product detail |
| `round-live-edge-side-table-metal-base.jpg` | Round side table | Product / gallery |
| `rustic-hand-hewn-fireplace-mantel.jpg` | Installed fireplace mantel | Product / gallery |
| `live-edge-floating-wall-shelves.jpg` | Wall shelves with decor | Product / featured |
| `walnut-live-edge-slabs-matched-set.jpg` | 3 matched walnut slabs | Product / process |
| `large-walnut-slab-on-sawmill.jpg` | Slab on Wood-Mizer sawmill | About hero, process |
| `walnut-slab-fresh-cut-sawmill.jpg` | Fresh cut slab side angle | Process / gallery |
| `live-edge-wood-slabs-lineup.jpg` | 5 slabs standing upright | Product / shop |
| `raw-cut-hardwood-slabs-workshop.jpg` | Slabs at the mill | Product / process |
| `hardwood-slab-collection-barn.jpg` | Full inventory in barn | About / gallery |
| `wood-rounds-cross-cut-tabletops.jpg` | 3 rounds on pallet | Product / featured |
| `natural-edge-driftwood-slabs.jpg` | Driftwood-style slabs | Product / gallery |

---

## Verification Plan

1. **HTML Mockups:** Open each mockup HTML file in Chrome and Firefox — verify layout, responsiveness (use DevTools mobile view), image loading, navigation links, and hover interactions
2. **Shopify Theme:** Upload to a Shopify development store, test all pages in theme preview, verify theme editor section customization works, test mobile on a real phone
3. **Product Setup:** Create test products in each collection, verify product cards display correctly, verify quote form submits, verify collection filtering works
4. **Performance:** Run Lighthouse audit — target 90+ on Performance, Accessibility, SEO
5. **Cross-browser:** Test in Chrome, Firefox, Safari, Edge

---

## Out of Scope (for now)
- Direct Shopify checkout / payment processing (quote-based initially)
- Customer accounts / order history
- Blog
- Multi-language support
- Inventory tracking system
- Integration with external tools (CRM, email marketing beyond Shopify's built-in)

---

## Cleanup Reminders
- Delete `optimize_images.py` before uploading theme to Shopify
- Delete `sources/img/optimized/` folder after images are uploaded to Shopify
- These are build tools, not part of the theme
