# Academic Lab Website

A modern, elegant, and easily extensible academic research lab website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Stunning Homepage** with hero section, stats, featured research, and latest news
- **People Profiles** - Showcase lab members with detailed profile pages
- **Research Projects** - Display projects with filtering by tags
- **Publications** - Organized publication list with BibTeX citations
- **News & Blog** - Share updates and announcements
- **Contact Page** - Contact form and lab information
- **Markdown-based CMS** - Easy content management without a database
- **Responsive Design** - Beautiful on all devices
- **Smooth Animations** - Powered by Framer Motion
- **SEO Optimized** - Built with Next.js 14 App Router

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Content**: Markdown with Gray Matter
- **Deployment**: Vercel, Netlify, or any Node.js host

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Content Management

All content is managed through Markdown files in the `content/` directory. No database required!

### Directory Structure

```
content/
├── people/          # Lab members
├── projects/        # Research projects
├── news/           # News and blog posts
└── publications/   # Academic publications
```

### Adding a New Person

Create a new Markdown file in `content/people/`:

```markdown
---
name: "Dr. Jane Smith"
role: "Postdoctoral Researcher"
bio: "Expert in machine learning and computer vision"
image: "https://example.com/photo.jpg"  # Optional
email: "jane.smith@example.com"          # Optional
website: "https://janesmith.com"         # Optional
github: "janesmith"                      # Optional
linkedin: "janesmith"                    # Optional
twitter: "janesmith"                     # Optional
---

Dr. Jane Smith is a postdoctoral researcher specializing in...

## Education
- PhD in Computer Science, MIT, 2022
- MS in Computer Science, Stanford, 2018

## Research Interests
- Deep Learning
- Computer Vision
- Neural Architecture Search
```

### Adding a New Project

Create a new Markdown file in `content/projects/`:

```markdown
---
title: "Project Title"
description: "Brief description of the project"
image: "https://example.com/project-image.jpg"  # Optional
tags: ["Machine Learning", "Computer Vision"]   # Optional
date: "2024-03-15"                              # Optional
featured: true                                  # Optional - shows as featured
---

# Project Name

Full description of your research project...

## Overview
...

## Key Contributions
...

## Publications
...
```

### Adding a News Post

Create a new Markdown file in `content/news/`:

```markdown
---
title: "Paper Accepted at NeurIPS 2024"
date: "2024-03-15"
excerpt: "Brief summary that appears on the listing page"
author: "Dr. Jane Doe"                  # Optional
image: "https://example.com/news.jpg"   # Optional
---

Full content of your news article...
```

### Adding a Publication

Create a new Markdown file in `content/publications/`:

```markdown
---
title: "Paper Title"
authors: ["Jane Doe", "John Smith", "Alice Johnson"]
venue: "Conference Name (ACRONYM)"
year: 2024
pdf: "https://arxiv.org/pdf/xxxx.xxxxx.pdf"  # Optional
doi: "10.xxxx/xxxxx"                         # Optional
abstract: "Brief abstract..."                 # Optional
bibtex: |                                    # Optional
  @inproceedings{doe2024paper,
    title={Paper Title},
    author={Doe, Jane and Smith, John},
    booktitle={Conference Name},
    year={2024}
  }
---

Full paper details and additional content...
```

## Customization

### Colors and Branding

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    // Your primary color shades
  },
  accent: {
    // Your accent color shades
  }
}
```

### Site Metadata

Edit `app/layout.tsx` to update site title and description:

```typescript
export const metadata: Metadata = {
  title: "Your Lab Name",
  description: "Your lab description",
};
```

### Navigation Links

Edit `components/Navigation.tsx` to modify navigation menu items.

### Footer Information

Edit `components/Footer.tsx` to update contact information and social links.

### Contact Information

Edit `app/contact/page.tsx` to update your lab's contact details.

## Project Structure

```
labpage/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── people/            # People pages
│   ├── research/          # Research/projects pages
│   ├── publications/      # Publications pages
│   ├── news/              # News/blog pages
│   └── contact/           # Contact page
├── components/            # React components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── PersonCard.tsx
│   └── ...
├── content/               # Markdown content files
│   ├── people/
│   ├── projects/
│   ├── news/
│   └── publications/
├── lib/                   # Utility functions
│   └── content.ts        # Content loading utilities
└── public/               # Static assets

```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click!

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Other Platforms

Build the static site:

```bash
npm run build
```

The built files will be in the `.next` directory.

## Tips

1. **Images**: Use high-quality images from [Unsplash](https://unsplash.com) or your own photos
2. **Performance**: Images are automatically optimized by Next.js
3. **SEO**: Each page has customizable metadata for better search engine visibility
4. **Analytics**: Add Google Analytics or other tracking in `app/layout.tsx`
5. **Forms**: The contact form is frontend-only. Integrate with services like:
   - [Formspree](https://formspree.io)
   - [EmailJS](https://www.emailjs.com)
   - [Netlify Forms](https://www.netlify.com/products/forms)

## Advanced Features

### Adding Google Analytics

1. Get your GA tracking ID
2. Add it to `app/layout.tsx`:

```typescript
<Script src={`https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID`} />
```

### Custom Domain

Configure your custom domain in your hosting provider's dashboard.

### Environment Variables

Create a `.env.local` file for sensitive data:

```
NEXT_PUBLIC_SITE_URL=https://yourlab.edu
CONTACT_EMAIL=lab@yourlab.edu
```

## Support

For issues or questions:
- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review [Tailwind CSS Docs](https://tailwindcss.com/docs)
- Read [Framer Motion Docs](https://www.framer.com/motion/)

## License

MIT License - feel free to use this for your own lab website!

## Credits

Built with ❤️ using modern web technologies.
