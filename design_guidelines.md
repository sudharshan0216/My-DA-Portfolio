# Design Guidelines: Sudharshan S - Data Analyst Portfolio

## Design Approach

**Selected Approach:** Hybrid Reference-Based
- **Primary Reference:** Linear's clean typography and modern minimalism
- **Secondary Reference:** Observable/Tableau's data visualization clarity
- **Tertiary Influence:** Modern developer portfolios (Josh Comeau, Brittany Chiang)

**Core Principle:** Professional data-focused design that balances technical credibility with visual approachability. The interface should feel modern and trustworthy while showcasing analytical capabilities through interactive visualizations.

---

## Typography System

**Font Families:**
- **Headings:** Inter (Google Fonts) - weights 700, 600, 500
- **Body Text:** Inter - weights 400, 500
- **Data/Code:** JetBrains Mono - weight 400 (for technical elements, dashboard metrics)

**Type Scale:**
- Hero Title: text-5xl md:text-6xl lg:text-7xl (font-bold)
- Section Headings: text-3xl md:text-4xl (font-semibold)
- Subsection Headings: text-2xl md:text-3xl (font-semibold)
- Card Titles: text-xl md:text-2xl (font-semibold)
- Body Large: text-lg (font-normal)
- Body Regular: text-base (font-normal)
- Body Small: text-sm (font-normal)
- Captions/Labels: text-xs (font-medium, uppercase with tracking-wide)

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Component padding: p-6, p-8, p-12
- Section spacing: py-16, py-20, py-24
- Element gaps: gap-4, gap-6, gap-8

**Container Strategy:**
- Maximum width: max-w-7xl for content sections
- Text content: max-w-4xl for readability
- Dashboard sections: max-w-screen-2xl for chart real estate
- Grid layouts: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for cards

**Vertical Rhythm:**
- Mobile sections: py-12 to py-16
- Desktop sections: py-20 to py-24
- Hero section: min-h-screen with centered content

---

## Component Library

### Navigation
- **Sticky Header:** Fixed top navigation with backdrop blur (backdrop-blur-lg bg-white/80)
- Logo/name on left, navigation links center-aligned, CTA button (Download Resume) on right
- Mobile: Hamburger menu with slide-in drawer
- Active section indicator: Subtle underline or highlight on current section link
- Smooth scroll behavior to sections

### Hero Section
- **Layout:** Two-column asymmetric (60/40 split)
- **Left Column:** 
  - Large heading with name and role
  - Brief tagline/subtitle
  - Primary CTA buttons (View Projects, Contact Me) with glass-morphic backgrounds when overlaying any subtle background treatment
  - Social links (LinkedIn, GitHub) with icon buttons
- **Right Column:** 
  - Professional profile photo (Sudharshan_1762193049973.jpg) with subtle border treatment
  - Photo size: 400x400px equivalent on desktop, 300x300px on tablet, full-width on mobile
  - Subtle shadow and rounded corners (rounded-2xl)

### About Section
- Single column centered text with max-width for readability
- Profile summary extracted from resume
- Key highlights in a subtle grid (2-3 columns on desktop)

### Projects Section
- **Card Grid:** 2 columns on desktop, 1 on mobile
- **Sales Analysis Dashboard Card:** Featured larger card or highlighted with border treatment
- Each card includes: Project thumbnail/icon, title, short description, tech stack badges, "View Details" link
- Hover effect: Subtle lift with shadow increase

### Interactive Dashboard Page
- **Full-width layout** (max-w-screen-2xl) for chart real estate
- **Header:** Dashboard title, date range selector, key metrics row (4 KPI cards)
- **KPI Cards:** Grid of 4 cards showing Total Sales, Avg Order, Profit, Growth %
  - Large number (text-4xl font-bold)
  - Small label (text-sm text-gray-600)
  - Trend indicator icon
- **Chart Grid:** 2x2 grid on desktop, stacked on mobile
  - Each chart in a card with subtle border, padding p-6
  - Chart titles (text-lg font-semibold mb-4)
  - Interactive tooltips styled consistently
- **Data Table:** Full-width sortable table below charts with alternating row backgrounds

### Skills Section
- **Grid Layout:** 4-6 columns on desktop (grid-cols-2 md:grid-cols-4 lg:grid-cols-6)
- Skill badges with icons (from Heroicons)
- Badge style: Rounded rectangles with subtle background, icon + label

### Education Section
- **Simple Card Layout:** Single centered card
- Display: "BCA" as title, "Hindustan College of Arts and Science" as subtitle, "Chennai" as location
- Icon or decorative element (graduation cap from Heroicons)

### Certificates Section
- **Card Layout:** 2 columns on desktop, 1 on mobile
- Each certificate card: Icon, title, issuing organization
- Subtle hover effect

### Contact Section
- **Two-column layout:** Form on left (60%), contact info on right (40%)
- **Form Fields:** Name, Email, Message textarea - all with floating labels
- Form styling: Clean borders, focus states with subtle glow
- **Contact Info:** Email, phone, location with icons
- Social links repeated
- Success toast notification on form submission

### Footer
- **Three-column layout:** About text, Quick Links, Connect section
- Minimal, clean with subtle top border
- Copyright and small print

---

## Interactive Elements

### Buttons
- **Primary:** Solid background, rounded-lg, px-6 py-3, font-medium
- **Secondary:** Border with transparent background, same padding
- **Glass-morphic (for hero over images):** Backdrop-blur-md with semi-transparent background, no hover color changes (only scale/shadow on hover)
- Hover states: Slight scale increase (scale-105) and shadow enhancement
- Icon buttons: p-3, rounded-full for social links

### Cards
- Border: border border-gray-200 (subtle)
- Background: bg-white
- Padding: p-6 or p-8
- Rounded corners: rounded-xl
- Hover: translate-y-[-4px] with shadow increase

### Chart Styling
- Clean axes with minimal grid lines
- Tooltips: White background, subtle shadow, rounded corners
- Interactive elements: Cursor pointer on hover
- Consistent spacing between chart elements

### Form Inputs
- Border: border-2 border-gray-300
- Focus: Ring effect (ring-2 ring-blue-500)
- Padding: px-4 py-3
- Rounded: rounded-lg
- Labels: Floating or top-aligned with text-sm text-gray-600

---

## Animations

**Scroll Animations (AOS or CSS):**
- Fade-in on scroll for section content
- Stagger animation for card grids (delay between items)
- Slide-up for headings

**Framer Motion Page Transitions:**
- Fade + slight slide for route changes
- Duration: 0.3-0.5s

**Micro-interactions:**
- Button hover: Scale and shadow
- Card hover: Lift effect
- Smooth scroll to sections
- Scroll-to-top button: Fade in after scrolling past first section

**Dashboard Specific:**
- Chart data animation on load (progressive reveal)
- Tooltip appears on hover with fade-in
- KPI counters: Animated count-up on scroll into view

---

## Images

### Profile Photo
- **Location:** Hero section, right column
- **Description:** Professional headshot of Sudharshan S from provided image (Sudharshan_1762193049973.jpg)
- **Treatment:** 
  - Rounded corners (rounded-2xl or rounded-full for circular treatment)
  - Subtle shadow (shadow-xl)
  - Border: Optional thin border in accent tone
  - Size: 400x400px on desktop, 300x300px on tablet, full-width on mobile
  - Position: Vertically centered in hero section

### Dashboard Project Thumbnails
- **Location:** Projects section cards
- **Description:** Placeholder for dashboard screenshot or chart visualization icon
- **Treatment:** Rounded corners matching card style, aspect ratio 16:9

**No large hero background image** - The hero uses the profile photo as the primary visual element with clean background.

---

## Accessibility

- All interactive elements keyboard navigable
- ARIA labels for icon-only buttons
- Focus indicators visible on all focusable elements
- Alt text for profile image
- Semantic HTML structure (nav, main, section, footer)
- Form labels associated with inputs
- Sufficient contrast ratios for all text

---

## Responsive Breakpoints

- **Mobile:** Base styles (< 768px)
- **Tablet:** md: prefix (768px - 1024px)
- **Desktop:** lg: prefix (1024px+)
- **Large Desktop:** xl: prefix (1280px+) for dashboard wide layouts

**Key Responsive Behaviors:**
- Navigation: Hamburger menu on mobile
- Hero: Stack columns on mobile (image above text)
- Grids: Reduce columns progressively (3→2→1)
- Typography: Scale down on smaller screens
- Dashboard: Stack charts vertically on mobile, 2-column on tablet, 2x2 on desktop