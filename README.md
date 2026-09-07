# Danny Albatross Portfolio

This portfolio is data-driven and component-based. Most content updates should be done in `lib/data.js` without touching layout code.

## Personal image setup

Use this folder for your real photos/screenshots:

- `public/images/personal/`
- See `public/images/personal/README.md` for exact filenames.

Main image groups:

- `profile/` for your hero/profile photo
- `projects/` for AEGIS, TournaHub, and other project screenshots
- `workspace/` for Behind the Build photos
- `brand/` for optional future brand visuals

## Main content source

Edit `lib/data.js` to update:

- Identity and contact (`siteConfig`)
- Main projects (`projects`)
- Currently Building (`currentlyBuilding`)
- Featured Work (`featuredWork`)
- Services (`services`)
- Work process (`workProcess`)
- Learning topics (`currentlyLearning`)
- Journey milestones (`journeyMilestones`)
- Testimonial placeholders (`testimonials`)

## Sections in use

Homepage sections are assembled in `pages/index.js` using components in `components/`.

## Development

- Install: `npm install`
- Run local: `npm run dev`
- Production check: `npm run build`
