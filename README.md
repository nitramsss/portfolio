
# Portfolio

This repository contains a personal portfolio website built with React and Vite. It showcases projects, skills, experience, and other sections, and includes a responsive design powered by Tailwind CSS.

This README documents how to install and run the project locally, lists important dependencies and credits, and explains where to edit the portfolio content.

## Table of contents

- Project overview
- Getting started (install & run)
- Build & deploy
- Project structure
- Customization
- Credits
- License

---

## Project overview

This portfolio site is a single-page React application scaffolded with Vite. Key features include:

- Responsive hero, projects, timeline and about sections
- Modal dialogs for project details
- Background/parallax effects
- Animations driven by the `motion` library
- Styling with Tailwind CSS and utility classes

## Getting started

Prerequisites

- Node.js (recommended >= 18 LTS)
- npm (comes with Node) or an alternative package manager such as pnpm or yarn

Install and run locally

1. Clone the repository:

```bash
git clone https://github.com/nitramsss/Portfolio.git
cd Portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server with hot reload:

```bash
npm run dev
```

4. Open the app in your browser (usually http://localhost:5173). The terminal output from Vite will show the exact URL.

Notes

- If you use another package manager, replace `npm install` with `pnpm install` or `yarn` as appropriate.
- If you need a specific Node version, consider using nvm to switch versions.

## Build & deploy

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

You can deploy the contents of the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Project structure (important files)

- `src/` – React source files
	- `components/` – reusable components (Project, ProjectDetails, Timeline, etc.)
	- `sections/` – page sections (Hero, Projects, About, Skills, etc.)
	- `constants/` – static data such as `myProjects`
- `public/` (or `assets/`) – static assets like images and icons (the project references `/assets/...` from public)
- `index.html`, `package.json`, `tailwind.config.js`, `vite.config.js`

## Customize content

- Edit project data: `src/constants/index.js` (titles, descriptions, tags, GitHub links)
- Swap images: put files in `public/assets/` and reference them by `/assets/<name>`
- Update styles: `src/index.css` and `tailwind.config.js`

## Troubleshooting

- If the dev server shows CSS or plugin errors, ensure your `tailwind.config.js` `content` paths include `./src/**/*.{js,jsx,ts,tsx}`.
- If images do not appear, confirm they exist in `public/assets/` and the paths match (e.g., `/assets/sky.jpg`).

## Credits (libraries, frameworks, icons, and sources)

The following libraries, frameworks, components, and resources were used in this portfolio. These are the sources of icons, images, features, libraries, etc.

- React – UI library (https://reactjs.org)
- Vite – build tooling and dev server (https://vitejs.dev)
- Tailwind CSS – utility-first CSS framework (https://tailwindcss.com)
- react-icons – icon pack for React (https://react-icons.github.io/react-icons/)
- react-fast-marquee – marquee/scrolling text (https://github.com/justin-chu/react-fast-marquee)
- @headlessui/react – accessible UI primitives (https://headlessui.dev)
- motion – animation utilities (used via `motion/react`)
- @tabler/icons-react, lucide-react, react-icons – icon sets used in components
- primereact & react-bootstrap & bootstrap – UI components used in some places
- react-vertical-timeline-component / vertical-timeline-component-react – timeline utilities
- react-intersection-observer – viewport intersection handling
- ogl – WebGL helper used for visual/background effects
- class-variance-authority, clsx, tailwind-merge – small utilities used for class management
- reactbits, reactbits (mentioned), aceternity ui, Ali-Sanati (https://github.com/Ali-Sanati/) – resources or inspirations referenced by the project

If you contributed or used any third-party icons or images (for example from those repositories or from public icon sets), those assets are credited here as sources of icons, images, and features used in the site.

## A note about assets & attribution

- Replace placeholder GitHub links and image attributions in `src/constants/index.js` with your real URLs.
- If you include images or icons that require attribution, add proper attribution in this README or on an About/Credits page in the site.

## Contributing

If you want to contribute improvements (styling, accessibility, content), open a PR. Keep changes small and focused.

## License

This repository does not include a license file.
