# Professional Portfolio

This portfolio is intentionally data-driven so you can update content without restructuring the project.

## Quick updates

### Update personal details

Edit [lib/data.js](/c:/Users/user/Desktop/albatross_portfolio/Albatross-dan.github.io/lib/data.js).

Key fields:

- `siteConfig.name`
- `siteConfig.title`
- `siteConfig.description`
- `siteConfig.email`
- `siteConfig.location`
- `siteConfig.social`
- `siteConfig.profileImage`
- `siteConfig.resumeUrl`

### Replace the profile image

1. Add your photo at `public/images/profile-photo.jpg`
2. If you want a different filename, update `siteConfig.profileImage` in `lib/data.js`

Best practice:

- Use a square image
- Keep it at least `800x800`
- Prefer `.jpg` or `.webp`

### Add new projects

Add a new object to the `projects` array in `lib/data.js`.

Each project supports:

- `title`
- `description`
- `longDescription` for featured projects
- `techStack`
- `github`
- `demo`
- `image`
- `category`
- `status`
- `featured`

Example structure:

```js
{
  id: 3,
  title: 'New Project',
  description: 'Short summary',
  longDescription: 'Longer summary for featured cards',
  techStack: ['Next.js', 'Tailwind CSS'],
  github: 'https://github.com/username/repo',
  demo: 'https://example.com',
  featured: false,
  image: '/images/new-project.jpg',
  category: 'Frontend',
  status: 'Live',
}
```

Notes:

- All projects are shown in the portfolio
- Category tabs update automatically from your project data
- If the list grows, the section reveals more projects with `Show More Projects`

### Change theme colors

The palette is controlled in two places:

- [tailwind.config.js](/c:/Users/user/Desktop/albatross_portfolio/Albatross-dan.github.io/tailwind.config.js) for `primary` and `accent` color scales
- [styles/globals.css](/c:/Users/user/Desktop/albatross_portfolio/Albatross-dan.github.io/styles/globals.css) for gradients, grid backgrounds, glow effects, and shared button/card styling

Recommended approach:

- Keep `primary` as your main brand color
- Keep `accent` subtle for highlights only
- Avoid changing component files unless you want section-specific styling

### Replace project images

1. Add screenshots to `public/images/`
2. Point each project's `image` field in `lib/data.js` to the new file

Recommended size:

- `1600x900`
- compressed `.jpg` or `.webp`

### Expand sections later

Current sections live in `components/` and are assembled in [pages/index.js](/c:/Users/user/Desktop/albatross_portfolio/Albatross-dan.github.io/pages/index.js).

To add a new section:

1. Create a component in `components/`
2. Import it into `pages/index.js`
3. Add a navigation link in `components/Navbar.js` and `components/Footer.js` if needed

## Development

Install and run:

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
```
