# AI Engineering Headquarters

React 18, TypeScript, Tailwind CSS, Framer Motion and Lucide. Single-page site, no backend.

## Setup
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build in dist/
npm run preview
```

## Make it yours
Edit `src/data/content.ts`: the `PROFILE` block (name, email, GitHub username, LinkedIn) drives the hero, terminal, contact section and every repository link. Repo slugs are listed in each project; add `demo: "https://..."` to show a Live demo button.

## Structure
```
src/
  data/content.ts      all copy: profile, projects, capabilities, pipeline, milestones
  components/          Nav, Hero, NeuralCanvas, About, Capabilities, Projects,
                       Architecture, Terminal, Research, Contact, Section, icons
  index.css            Tailwind layers and base styles
```

## Deploy
- **Vercel / Netlify**: import the repo, build command `npm run build`, output `dist`.
- **GitHub Pages**: set `base: "/<repo-name>/"` in `vite.config.ts`, run `npm run build`, publish `dist/` (for example with the `actions/deploy-pages` workflow).

## Notes
The contact form opens the visitor's email app (`mailto:`). For server-side delivery, post the form to a service such as Formspree or your own endpoint in `Contact.tsx`.
