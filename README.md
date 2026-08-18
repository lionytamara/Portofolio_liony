# 🚀 World-Class Fresh Graduate IT Portfolio Website

A high-converting, modern, interactive, and responsive portfolio website designed for **Fresh Graduates in Informatics Engineering / Computer Science / Front-End Engineering** seeking software engineering roles at top-tier tech companies.

Designed to captivate tech recruiters in **under 10 seconds** with an Awwwards-inspired dark glassmorphism aesthetic, clean typography, smooth scroll animations, dynamic typing hero title, interactive project modals, and 100% modular data configuration.

---

## ✨ Features & Highlights

- ⚡ **Hero Section**:
  - Rotating glowing profile portrait ring with floating stack badges.
  - Auto-typing job titles (`Fresh Graduate Informatics Engineering`, `Junior Front-End Developer`, `Software Engineer`).
  - Quick action buttons ("Download CV" & "Contact Me").
  - `🟢 Open to Work` status pill tag.
- 👨‍💻 **About Me**:
  - 2-column story layout with bio, career goals, personal values, and personality traits.
  - Dynamic stats counters grid (Projects 15+, Skills 20+, Certificates 8+, Cum Laude GPA 3.88/4.00).
- 🛠️ **Categorized Skills**:
  - Tabbed breakdown (Frontend, Backend, Database, Programming Languages, Tools & DevOps).
  - Skill cards with animated proficiency progress bars and level badges.
- 🎨 **Featured Projects (6+ Items)**:
  - Interactive category filter (All, Full Stack, Frontend).
  - High-res mockups, tech badges, live demo links, GitHub code buttons, and **interactive detail modals**.
- ⏳ **Experience Timeline**:
  - Vertical node timeline highlighting Bootcamps, Freelance contracts, Campus Lab Projects, and Student Organization Leadership.
- 🎓 **Education & Credentials**:
  - University info, Major, Cum Laude GPA highlight card, honors list, and relevant coursework pills.
- 📜 **Certificates**:
  - Verified credentials from Meta, AWS, Google, and Dicoding with modal proof inspector.
- 🏆 **Achievements**:
  - Hackathon 1st place wins, coding competition awards, and workshop speaking engagements.
- 💼 **Services & Testimonials**:
  - Professional web engineering service cards with deliverables checklists.
  - Endorsements from bootcamp leads, professors, and project clients.
- 📬 **Interactive Contact Form**:
  - Live field validation, status toast feedback, and direct contact cards (Email, WhatsApp, LinkedIn, GitHub, Location).
- 🌙 **Dark/Light Theme & UX Polish**:
  - Active section navbar highlighting with smooth scrolling.
  - Reading scroll progress bar at top of viewport.
  - Dynamic custom glowing cursor follower for desktop.
  - Complete OpenGraph SEO tags, `robots.txt`, and `sitemap.xml`.

---

## 🛠️ Technology Stack

- **Core**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS, Custom Glassmorphism, CSS Modules
- **Icons**: Lucide Icons React
- **Fonts**: Plus Jakarta Sans, Inter, Space Grotesk via Google Fonts
- **Deployment**: Vercel / Netlify / GitHub Pages ready

---

## 📁 Folder Structure

```text
portofolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Global Root Layout with Providers, Meta, SEO
│   │   ├── page.tsx              # Main Single-Page Portfolio Dashboard
│   │   ├── not-found.tsx         # Custom 404 Page
│   │   ├── robots.ts             # Dynamic SEO Robots.txt
│   │   └── sitemap.ts            # Dynamic SEO Sitemap.xml
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Active-section tracking navbar with blur
│   │   │   ├── Footer.tsx        # Modern footer with Back-to-Top button
│   │   │   ├── ScrollProgress.tsx# Reading scroll progress bar
│   │   │   └── CustomCursor.tsx  # Dynamic subtle cursor glow tracking
│   │   ├── ui/
│   │   │   ├── Badge.tsx         # Tech stack tags & pill badges
│   │   │   ├── Modal.tsx         # Reusable glassmorphic modal
│   │   │   └── SectionHeading.tsx# Standardized animated section title
│   │   └── sections/
│   │       ├── HeroSection.tsx   # Avatar, Typing Animation, Call-to-actions
│   │       ├── AboutSection.tsx  # Story, Values, Dynamic Stat Cards
│   │       ├── SkillsSection.tsx # Category grids & animated skill bars
│   │       ├── ProjectsSection.tsx# Project cards, filter tabs, detail modal
│   │       ├── ExperienceSection.tsx# Vertical timeline (Bootcamp, Freelance, Org)
│   │       ├── EducationSection.tsx # Academic info, GPA, Honors, Activities
│   │       ├── CertificatesSection.tsx# Grid cards with credential viewer modal
│   │       ├── AchievementsSection.tsx# Hackathons & Honors
│   │       ├── ServicesSection.tsx  # Web Dev, UI/UX services
│   │       ├── TestimonialsSection.tsx# Endorsement quotes
│   │       └── ContactSection.tsx# Form with toast feedback + Direct socials
│   ├── data/
│   │   └── portfolioData.ts      # SINGLE SOURCE OF TRUTH for all user information
│   ├── types/
│   │   └── portfolio.ts          # Type definitions for all data structures
│   ├── hooks/
│   │   ├── useActiveSection.ts   # Scroll spy for active navbar highlighting
│   │   └── useTypingEffect.ts    # Smooth text auto-typing for Hero title
│   └── styles/
│       └── globals.css           # Custom scrollbar, glassmorphic utilities, animations
├── public/                       # Favicon, robots.txt, sitemap.xml, assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## ⚙️ How to Customize Your Data

All portfolio content is decoupled from UI logic in **`src/data/portfolioData.ts`**.

Simply edit **`src/data/portfolioData.ts`** to update:
1. `personalInfo`: Name, job titles, bio, email, social links, resume URL.
2. `statItems`: Number of projects, skills, GPA score, and certificates.
3. `skillsData`: Add/remove skill names, categories, proficiency scores (0-100), and icons.
4. `projectsData`: Add project thumbnails, live URLs, GitHub URLs, metrics, and feature lists.
5. `experienceData`: Timeline roles, bootcamp achievements, and skills used.
6. `educationData`: University name, major, GPA, and coursework lists.
7. `certificatesData`: Issuer, credential ID, verification links, and skill tags.
8. `achievementsData`: Hackathon titles, dates, and ranks.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js version 18.x or 20.x+
- npm, yarn, or pnpm

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## ☁️ Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import your GitHub repository.
4. Keep framework preset as **Next.js**.
5. Click **Deploy**. Vercel will automatically build and deploy your site with global CDN performance.

### Deploying to Netlify
1. Connect your GitHub repository to Netlify.
2. Set Build Command: `npm run build`
3. Set Publish Directory: `.next`
4. Click **Deploy Site**.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
