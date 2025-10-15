# Project Structure Overview

```
labpage/
│
├── 📁 app/                          # Next.js 14 App Router
│   ├── layout.tsx                   # Root layout with Navigation & Footer
│   ├── page.tsx                     # Homepage
│   ├── globals.css                  # Global styles & Tailwind
│   │
│   ├── 📁 people/                   # Team members
│   │   ├── page.tsx                 # People listing page
│   │   └── [slug]/                  # Dynamic person detail pages
│   │       └── page.tsx
│   │
│   ├── 📁 research/                 # Research projects
│   │   ├── page.tsx                 # Projects listing with filtering
│   │   └── [slug]/                  # Dynamic project detail pages
│   │       └── page.tsx
│   │
│   ├── 📁 publications/             # Academic publications
│   │   └── page.tsx                 # Publications listing by year
│   │
│   ├── 📁 news/                     # News & blog posts
│   │   ├── page.tsx                 # News listing page
│   │   └── [slug]/                  # Dynamic news detail pages
│   │       └── page.tsx
│   │
│   └── 📁 contact/                  # Contact information
│       └── page.tsx                 # Contact form & details
│
├── 📁 components/                   # Reusable React components
│   ├── Navigation.tsx               # Top navigation bar (sticky, animated)
│   ├── Footer.tsx                   # Site footer with links
│   ├── Hero.tsx                     # Homepage hero section
│   ├── Stats.tsx                    # Lab statistics showcase
│   ├── FeaturedResearch.tsx         # Featured projects on homepage
│   ├── LatestNews.tsx              # Recent news on homepage
│   ├── PersonCard.tsx              # Person preview card
│   ├── ProjectCard.tsx             # Project preview card
│   ├── NewsCard.tsx                # News preview card
│   └── PublicationCard.tsx         # Publication with citations
│
├── 📁 content/                      # Markdown content (CMS)
│   ├── 📁 people/                   # Lab member profiles
│   │   ├── jane-doe.md             # Example: Principal Investigator
│   │   └── john-smith.md           # Example: PhD Student
│   │
│   ├── 📁 projects/                 # Research project descriptions
│   │   └── neural-architecture-search.md
│   │
│   ├── 📁 news/                     # News posts and announcements
│   │   └── neurips-2024-acceptance.md
│   │
│   └── 📁 publications/             # Publication details
│       └── efficient-nas-2023.md
│
├── 📁 lib/                          # Utility functions
│   └── content.ts                   # Content loading & parsing utilities
│                                    # Functions: getPeople(), getProjects(),
│                                    # getNews(), getPublications()
│
├── 📁 public/                       # Static assets (images, etc.)
│
├── 📄 package.json                  # Dependencies & scripts
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 tailwind.config.ts           # Tailwind CSS configuration
├── 📄 next.config.js               # Next.js configuration
├── 📄 postcss.config.js            # PostCSS configuration
├── 📄 .gitignore                   # Git ignore rules
│
├── 📖 README.md                     # Full documentation
├── 📖 QUICKSTART.md                # Quick start guide
└── 📖 PROJECT_STRUCTURE.md         # This file

```

## Key Features by Section

### 🏠 Homepage (`app/page.tsx`)
- Hero section with animated background
- Lab statistics (members, publications, awards, projects)
- Featured research projects
- Latest news posts
- Smooth scroll animations

### 👥 People Section
- **Listing page**: Organized by role (Faculty, Students, Staff)
- **Detail pages**: Full bio, education, social links
- **PersonCard component**: Reusable card with photo and quick info

### 🔬 Research Section
- **Listing page**: Filterable by tags (e.g., "Deep Learning", "AutoML")
- **Detail pages**: Full project description with markdown support
- **ProjectCard component**: Image, description, tags, dates

### 📰 News Section
- **Listing page**: Chronological news feed
- **Detail pages**: Full article with author and date
- **NewsCard component**: Preview with excerpt

### 📚 Publications Section
- **Listing page**: Grouped by year, sorted newest first
- **PublicationCard component**: Authors, venue, BibTeX copy button

### 📧 Contact Section
- Contact form (ready for integration)
- Lab location and contact info
- Office hours
- Social media links

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Content | Markdown + Gray Matter |
| Rendering | React Server Components |

## Content Management Flow

```
1. Create/Edit Markdown file in content/
   ↓
2. Add frontmatter metadata (YAML)
   ↓
3. Write content in Markdown
   ↓
4. Save file
   ↓
5. Content automatically appears on site
   ↓
6. Deploy (Vercel/Netlify auto-deploys from Git)
```

## Responsive Design

- **Mobile**: Single column, hamburger menu
- **Tablet**: 2 columns for cards
- **Desktop**: 3 columns, full navigation
- All animations optimized for performance

## Performance Optimizations

- ✅ Static site generation (SSG)
- ✅ Image optimization via Next.js
- ✅ Code splitting
- ✅ CSS purging via Tailwind
- ✅ Lazy loading animations
- ✅ Optimized fonts

## Extensibility

### Adding a New Content Type

1. Create folder in `content/`
2. Add interface in `lib/content.ts`
3. Add getter function in `lib/content.ts`
4. Create page in `app/`
5. Create card component in `components/`

### Adding a New Page

1. Create folder in `app/`
2. Add `page.tsx`
3. Update navigation in `components/Navigation.tsx`
4. Add link in `components/Footer.tsx`

## Development Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment Ready

- ✅ SEO optimized
- ✅ Mobile responsive
- ✅ Fast loading
- ✅ Easy to maintain
- ✅ No database required
- ✅ Version controlled content
