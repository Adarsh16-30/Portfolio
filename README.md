# Terminal Portfolio

A retro terminal-style developer portfolio website built with Vite, HTML, CSS, and Vanilla JavaScript.

Features a fully interactive command-line interface (CLI) to browse resume details, projects, education, certificates, and research, alongside custom themes and hidden secrets.

## Features

- **Interactive CLI**: Command parsing, autocomplete (Tab), suggestions dropdown, history navigation (Up/Down arrows), and clickable commands.
- **Multiple Themes**: Browse and switch themes on the fly:
  - `Dark` (Modern terminal theme)
  - `Light` (Clean developer theme)
  - `Retro` (Classic green CRT screen)
  - `Glass` (Sleek glassmorphism look)
- **Interactive Commands**:
  - `/about`, `/education`, `/work`, `/skills`, `/certs`, `/research`, `/achievements`
  - `/resume` (PDF viewer overlay), `/download` (Direct download)
  - `/linkedin`, `/github`, `/social`, `/contact`
  - `/matrix` (Secret Matrix digital rain screen)
  - `/clear` (Clears command execution output while preserving the header card)
- **Dynamic Projects & Certificates**: Custom detail pages load dynamically when clicking or typing projects/credentials.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server locally:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

The production assets will be generated in the `dist` directory, ready to be deployed to Vercel, Netlify, or GitHub Pages.
