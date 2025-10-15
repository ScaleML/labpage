# Quick Start Guide

Get your academic lab website up and running in minutes!

## 1. Install Dependencies

```bash
npm install
```

## 2. Start Development Server

```bash
npm run dev
```

Visit http://localhost:3000 to see your website!

## 3. Customize Your Lab Information

### Update Site Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Lab Name - AI Research",
  description: "Your lab's research focus and description",
};
```

### Update Navigation Logo

Edit `components/Navigation.tsx`:

```typescript
<span className="text-xl font-bold...">
  Your Lab Name  // Change this
</span>
```

### Update Footer Information

Edit `components/Footer.tsx` - update:
- Lab name and description
- Social media links
- Contact information
- Address

### Update Contact Page

Edit `app/contact/page.tsx` - update:
- Email address
- Phone number
- Physical address
- Office hours

## 4. Add Your Content

### Add Lab Members

Create files in `content/people/`:

**Example: `content/people/your-name.md`**

```markdown
---
name: "Your Name"
role: "Principal Investigator"
bio: "Brief bio"
image: "your-photo-url"
email: "you@university.edu"
---

Your full bio and research interests...
```

### Add Research Projects

Create files in `content/projects/`:

**Example: `content/projects/your-project.md`**

```markdown
---
title: "Project Name"
description: "Brief description"
tags: ["AI", "ML"]
date: "2024-03-15"
featured: true
---

Full project description...
```

### Add News Posts

Create files in `content/news/`:

**Example: `content/news/latest-update.md`**

```markdown
---
title: "News Title"
date: "2024-03-15"
excerpt: "Summary"
---

Full news content...
```

### Add Publications

Create files in `content/publications/`:

**Example: `content/publications/paper-2024.md`**

```markdown
---
title: "Paper Title"
authors: ["Author 1", "Author 2"]
venue: "Conference Name"
year: 2024
pdf: "link-to-pdf"
---

Paper details...
```

## 5. Customize Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your university colors
    600: '#yourcolor',
  },
}
```

## 6. Build for Production

```bash
npm run build
npm start
```

## 7. Deploy

### Deploy to Vercel (Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Done! Your site is live!

### Deploy to Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Click "Deploy"

## Tips

- **Images**: Use absolute URLs (https://...) or place images in `/public` folder
- **Markdown**: Supports headings, lists, links, code blocks, etc.
- **Updates**: Just edit markdown files and commit changes
- **No Database**: Everything is file-based for simplicity

## Need Help?

Check the full [README.md](./README.md) for detailed documentation.

## Quick Checklist

- [ ] Install dependencies (`npm install`)
- [ ] Update site metadata in `app/layout.tsx`
- [ ] Update navigation and footer
- [ ] Add at least one person in `content/people/`
- [ ] Add at least one project in `content/projects/`
- [ ] Add a news post in `content/news/`
- [ ] Customize colors in `tailwind.config.ts`
- [ ] Test locally (`npm run dev`)
- [ ] Deploy to Vercel or Netlify

## Next Steps

- Add Google Analytics
- Set up custom domain
- Add more lab members
- Populate research projects
- Add publications
- Customize styling

Enjoy your new lab website! 🎉
