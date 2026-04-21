# Codix Charity Foundation (CCF) — Website

A multi-page React + JavaScript marketing website for the **Codix Charity Foundation**, featuring program pages, a multi-step scholarship application, mentoring info, and a contact form.

> Built with **Vite + React 18 + JavaScript (JSX) + Tailwind CSS**.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Prerequisites](#prerequisites)
4. [Pulling the Project Into VS Code](#pulling-the-project-into-vs-code)
5. [Installation & Running Locally](#installation--running-locally)
6. [Available Scripts](#available-scripts)
7. [Recommended VS Code Extensions](#recommended-vs-code-extensions)
8. [Path Aliases](#path-aliases)
9. [Pages & Routes](#pages--routes)
10. [Design System](#design-system)
11. [Building for Production](#building-for-production)
12. [Deployment](#deployment)
13. [Troubleshooting](#troubleshooting)

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| **[Vite 5](https://vitejs.dev/)** | Lightning-fast dev server & bundler |
| **[React 18](https://react.dev/)** | UI library |
| **JavaScript (JSX)** | Language (no TypeScript) |
| **[React Router DOM 6](https://reactrouter.com/)** | Client-side routing |
| **[Tailwind CSS 3](https://tailwindcss.com/)** | Utility-first styling |
| **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** | Animation utilities |
| **[Radix UI](https://www.radix-ui.com/)** | Accessible primitives (tooltip, toast) |
| **[lucide-react](https://lucide.dev/)** | Icon library |
| **[@tanstack/react-query](https://tanstack.com/query)** | Async state management |
| **[sonner](https://sonner.emilkowal.ski/)** | Toast notifications |
| **[Vitest](https://vitest.dev/)** | Unit testing |
| **[ESLint](https://eslint.org/)** | Code linting |

---

## Project Structure

```
.
├── public/                 # Static assets (favicon, robots.txt)
├── src/
│   ├── assets/             # Images imported into components
│   ├── components/
│   │   ├── ui/             # Reusable UI primitives (toast, tooltip, sonner)
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── NavLink.jsx
│   │   └── SectionTag.jsx
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities (cn helper)
│   ├── pages/              # Route components
│   │   ├── Index.jsx
│   │   ├── About.jsx
│   │   ├── OurWork.jsx
│   │   ├── CodixAcademy.jsx
│   │   ├── Scholarship.jsx     # 5-step application form
│   │   ├── Mentoring.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── test/               # Vitest setup + examples
│   ├── App.jsx             # Root component & routes
│   ├── main.jsx            # React entry point
│   └── index.css           # Tailwind layers + design tokens
├── index.html
├── jsconfig.json           # Path aliases for JS
├── tailwind.config.js
├── vite.config.js
├── vitest.config.js
└── package.json
```

---

## Prerequisites

Install these before starting:

| Requirement | Version | Download |
|-------------|---------|----------|
| **Node.js** | ≥ 18.x (LTS recommended) | https://nodejs.org/ |
| **npm** | ≥ 9.x (bundled with Node) | — |
| **Git** | latest | https://git-scm.com/ |
| **VS Code** | latest | https://code.visualstudio.com/ |

Verify installations:

```bash
node -v
npm -v
git --version
```

---

## Pulling the Project Into VS Code

### Option A — Clone via terminal

```bash
# 1. Clone the repository
git clone <YOUR_REPO_URL>

# 2. Navigate into the project
cd <project-folder>

# 3. Open in VS Code
code .
```

### Option B — Clone via VS Code UI

1. Open VS Code.
2. Press **`Ctrl+Shift+P`** (or **`Cmd+Shift+P`** on Mac) → type **"Git: Clone"**.
3. Paste your repo URL.
4. Choose a folder on your machine.
5. Click **"Open"** when prompted.

### Option C — Download ZIP

1. Download the ZIP from your repo / Lovable export.
2. Extract it.
3. Open VS Code → **File → Open Folder…** → select the extracted folder.

---

## Installation & Running Locally

Inside the project root, run:

```bash
# 1. Install all dependencies
npm install

# 2. Start the dev server
npm run dev
```

The terminal will print a local URL — typically:

```
➜  Local:   http://localhost:8080/
```

Open it in your browser. The app supports **hot module replacement** — saved changes appear instantly.

---

## Available Scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Build a production bundle into `dist/` |
| `npm run build:dev` | Build in development mode (unminified) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint over the codebase |
| `npm run test` | Run all Vitest tests once |
| `npm run test:watch` | Run Vitest in watch mode |

---

## Recommended VS Code Extensions

Install these for the best DX:

| Extension | Why |
|-----------|-----|
| **ES7+ React/Redux/React-Native snippets** (`dsznajder.es7-react-js-snippets`) | JSX snippets |
| **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`) | Autocomplete & class previews |
| **Prettier** (`esbenp.prettier-vscode`) | Code formatting |
| **ESLint** (`dbaeumer.vscode-eslint`) | Inline lint warnings |
| **Path Intellisense** (`christian-kohler.path-intellisense`) | Autocomplete file imports |
| **Auto Rename Tag** (`formulahendry.auto-rename-tag`) | Sync JSX tag renames |
| **GitLens** (`eamodio.gitlens`) | Git insights |

Install all from the VS Code Extensions tab (`Ctrl+Shift+X`).

---

## Path Aliases

The project uses the `@` alias for the `src/` folder:

```js
import Navbar from "@/components/Navbar";
import logo from "@/assets/logo.png";
```

This is configured in:
- `vite.config.js` — for the bundler
- `jsconfig.json` — for VS Code IntelliSense

---

## Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Index.jsx` | Home — hero, pillars, impact, testimonials |
| `/about` | `About.jsx` | Mission, vision, board of trustees |
| `/our-work` | `OurWork.jsx` | Program initiatives |
| `/codix-academy` | `CodixAcademy.jsx` | Academy program details + cohort voice |
| `/scholarship` | `Scholarship.jsx` | **5-step application form** with progress indicator |
| `/mentoring` | `Mentoring.jsx` | Mentorship programme overview |
| `/contact` | `Contact.jsx` | Contact details + message form |
| `*` | `NotFound.jsx` | 404 fallback |

---

## Design System

All design tokens live in **`src/index.css`** as CSS variables (HSL format) and are exposed to Tailwind via **`tailwind.config.js`**.

### Brand Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | Brand green | CTAs, accents, links |
| `--navy` | Deep navy | Footer background |
| `--background` / `--foreground` | White / near-black | Surfaces & text |
| `--muted` / `--muted-foreground` | Soft greys | Secondary text |

### Typography

- **Headings:** `Playfair Display` (serif) — `font-heading`
- **Body:** `Inter` (sans-serif) — `font-body` (default)

⚠️ **Always use semantic tokens** (`bg-primary`, `text-foreground`) — never hardcoded colors like `bg-green-500`.

---

## Building for Production

```bash
npm run build
```

Output is written to `dist/`. Preview it locally with:

```bash
npm run preview
```

---

## Deployment

The `dist/` folder is a fully static site — deploy it anywhere:

| Platform | How |
|----------|-----|
| **Vercel** | Connect repo → auto-detects Vite |
| **Netlify** | Drag-and-drop `dist/` or connect repo |
| **GitHub Pages** | Push `dist/` to `gh-pages` branch |
| **Cloudflare Pages** | Connect repo, build cmd `npm run build`, output `dist` |
| **Lovable** | Click **Publish** in the Lovable editor |

For SPA routing to work on static hosts, configure a fallback to `index.html` (Netlify's `_redirects`, Vercel's defaults already handle it).

---

## Troubleshooting

**Port 8080 already in use**
```bash
# Kill the process or change the port in vite.config.js
```

**`npm install` fails with peer-dep errors**
```bash
npm install --legacy-peer-deps
```

**Tailwind classes not applying**
- Ensure the file extension is included in `tailwind.config.js` `content` glob.
- Restart the dev server after editing `tailwind.config.js`.

**Path alias `@/` not resolving in VS Code**
- Reload the window: `Ctrl+Shift+P` → **"Developer: Reload Window"**.
- Confirm `jsconfig.json` exists at the project root.

**Blank page after build**
- Check the browser console for asset-path errors.
- If hosting under a sub-path, set `base: "/sub-path/"` in `vite.config.js`.

---

## License

© Codix Charity Foundation 2026. All Rights Reserved.
