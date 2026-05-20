# Retro CLI Terminal Portfolio

A high-performance, retro-futuristic terminal-style developer portfolio website built with Vite, HTML5, CSS3, and Vanilla ES6 JavaScript. 

This website implements a fully interactive command-line interface (CLI) to browse resume details, project catalogs, credentials, and achievements, with a selection of bespoke themes, smooth animations, and hidden easter eggs.

---

## 🚀 Key Features

* **Interactive CLI Engine**: Custom parser supporting case-insensitive command execution, tab-completion, history navigation (Up/Down arrow keys), inline command execution links, and an auto-filtering suggestions dropdown.
* **Non-destructive Screen Clearing**: The `/clear` command clears command history and results while keeping the main header/ASCII portrait visible for persistent branding.
* **Bespoke Theme Engine**: Switch themes instantly via terminal commands:
  - `Dark` (Default) — Sleek, cyber-noir terminal.
  - `Light` (Developer) — Clean, high-contrast workspace.
  - `Retro` (CRT Screen) — Simulated scanline filters, slight screen flicker, phosphor bloom, and glowing green typography.
  - `Glass` (Glassmorphism) — Modern frosted-glass overlays with gradient backdrops.
* **Dynamic Content Routing**: Dynamically parses project slugs, certificates, and research papers from a central database to compile custom detailed views on demand.
* **Interactive Media**: Seamless `/resume` overlay viewer to preview files directly in-terminal, with completion messages.

---

## 📂 Project Architecture & Codebase Walkthrough

```text
├── index.html          # Core HTML wrapper with terminal viewport & inputs
├── vite.config.js      # Vite compilation configuration
├── public/
│   ├── resume.pdf      # Portfolio resume PDF
│   ├── fonts/          # Preloaded monospace fonts (JetBrains Mono)
│   └── images/         # High-resolution theme background assets
└── src/
    ├── main.js         # Orhchestrator: Event handlers, suggestions, initialization
    ├── terminal.js     # Rendering Engine: Print queues, line cascades, delay timers
    ├── data.js         # Core Data Store: Edit this file to customize details
    ├── effects.js      # Visual Effects: Canvas Matrix digital rain generator
    ├── themes.js       # Theme configuration and CSS hook binders
    ├── landing.js      # Layout builder for the landing cards and ASCII grids
    └── commands/       # CLI Command Implementations
        ├── index.js       # Router mapping command strings to handlers
        ├── navigation.js  # Renders main portfolio sections (about, work, skills, certs)
        ├── info.js        # Details, social redirect commands, and PDF overlay
        ├── theme-cmds.js  # Color palette swapping command controllers
        └── easter-eggs.js # Fun secrets, progress animations, terminal simulations
```

---

## ⌨️ Command Directory

### Core Navigation
* `/help` — Displays command listings grouped by section.
* `/about` — Who I am, background, and summary.
* `/education` — Degrees, institutions, and timeline.
* `/work` — Project listing with slugs to view details.
* `/skills` — Technical skillset groups and proficiency levels.
* `/certs` — List of earned certificates and slugs.
* `/research` — Published paper titles and research details.
* `/achievements` — Competitions, hackathons, and accomplishments.
* `/social` — Displays all available social profile links.
* `/contact` — How to reach me directly.
* `/clear` — Clears terminal history but preserves the welcome card.
* `/portfolio` — Re-prints the initial welcome/landing grid.

### Quick Info & Shortcuts
* `/linkedin` — Opens LinkedIn profile in a new tab.
* `/github` — Opens GitHub profile in a new tab.
* `/phone` — Displays phone number.
* `/email` — Launches system mail client with preset email.
* `/resume` — Opens interactive resume viewer overlay.
* `/download` — Triggers a direct download of the PDF resume.
* `/location` — Displays current base location.
* `/privacy` — Prints privacy policies and cookie practices.

### Themes
* `/themes` — Lists all available themes.
* `/dark` — Switched UI to dark, cyber-noir terminal.
* `/light` — Switched UI to light developer terminal.
* `/retro` — Switched UI to classic green phosphor CRT.
* `/glass` — Switched UI to frosted glassmorphism mode.

---

## 🛠️ Customizing Content

All data rendered by the terminal is stored centrally in [`src/data.js`](file:///c:/Users/adars/Downloads/Portfolio/src/data.js). To update details, modify the exports in that file:

1. **ASCII Art & Headers**: Update `BANNER` or `ASCII_PORTRAIT`.
2. **Projects**: Edit the `PROJECTS` array; adding an item automatically registers its unique `/cmd` detail viewer.
3. **Certificates**: Edit the `CERTIFICATES` array; registers corresponding `/cmd` views.
4. **Skills & Capabilities**: Modify `CAPABILITIES` or `SKILLS` objects.

---

## 🎨 Visual Mechanics & Animations

* **Asynchronous Cascade Rendering**: In [`src/terminal.js`](file:///c:/Users/adars/Downloads/Portfolio/src/terminal.js), `printLine` implements a macrotask yield using `setTimeout(resolve, 0)`. This forces the browser to commit a repaint cycle for each line before the next one is added, preventing synchronous batching.
* **Spring Easing**: Line entries slide 20px vertically using an overshoot cubic bezier curve defined in [`src/style.css`](file:///c:/Users/adars/Downloads/Portfolio/src/style.css):
  ```css
  animation: fadeSlideIn 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;
  ```
* **CRT Phosphor Screen**: Retro theme utilizes CSS scanning keyframes overlaying the screen, simulated CRT curvature, and text shadows to recreate vintage hardware styling.

---

## 💻 Local Development

### Prerequisites

Install [Node.js](https://nodejs.org/) (v16+ recommended).

### Commands

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Start Dev Server**:
   ```bash
   npm run dev
   ```
3. **Build Bundle**:
   ```bash
   npm run build
   ```

The compiled output will be generated inside the `dist/` directory, ready to deploy.
