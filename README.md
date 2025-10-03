# Aesthetic Tile Website Template

This repository contains the static marketing site originally built for **Aesthetic Tile**. It now serves as a starting template for service-based businesses that need a fast, modern landing site. The repo also includes an example implementation for **Battery Fleet Solutions KC**, created from the template to show how quickly the design language can be adapted to a new industry.

## Repository structure

- `index.html`, `about.html`, `services.html`, etc. – the original Aesthetic Tile pages that make up the template.
- `css/` & `js/` – shared styling and behavior for the template.
- `battery-fleet-solutions-kc/` – a derivative site created from this template for an EV fleet services provider in Kansas City.

## How to use this template

1. **Duplicate the site content** – Copy the HTML, CSS, JS, and image assets into a new folder or project.
2. **Update branding** – Swap colors, typography, and imagery to match the new business. The CSS variables in `css/style.css` offer a convenient starting point.
3. **Revise copy & metadata** – Update page titles, descriptions, and body copy to reflect the services, location, and calls to action for the new brand.
4. **Adjust forms & integrations** – Replace example Formspree endpoints and contact links with production-ready services.
5. **Deploy** – Host on your preferred static site platform (Vercel, Netlify, GitHub Pages, etc.).

The `battery-fleet-solutions-kc` folder demonstrates each of these steps, including customized copy, navigation, and calls to action tailored for an electric fleet energy management company.

## Getting started locally

Open the HTML files directly in your browser or use any simple HTTP server for local development:

```bash
# from the repository root
python -m http.server 8000
```

Then navigate to `http://localhost:8000/` and browse either the Aesthetic Tile site or the `battery-fleet-solutions-kc` implementation.
