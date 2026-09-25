# Mallapu Kishor — personal portfolio

A responsive static website built with semantic HTML, Tailwind CSS 4, custom CSS, and vanilla JavaScript. Fonts are self-hosted. The delivered CSS is already compiled; visitors need no CDN or framework runtime.

## Run locally

With Node.js installed, open a terminal in this folder and run:

```sh
npm start
```

Open http://127.0.0.1:4173. No dependency installation is required just to view the completed site. Alternatively, open `dist/index.html` directly; clipboard copying requires localhost or HTTPS and is hidden when unavailable.

## File structure

```text
portfolio/
├── dist/                         Ready-to-host website
│   ├── index.html                Content and semantic page structure
│   └── assets/
│       ├── styles.css            Compiled Tailwind + custom CSS
│       ├── main.js               Menu, copy email, scroll reveals
│       ├── inter.woff2           Local body font
│       ├── space-grotesk.woff2    Local heading font
│       ├── inter-LICENSE.txt
│       ├── space-grotesk-LICENSE.txt
│       └── Mallapu_Kishor_Resume.pdf
├── src/styles.css                Editable Tailwind + custom styles
├── serve.mjs                     Small local preview server
├── package.json
├── package-lock.json
└── README.md
```

## Customize

Edit content and links in `dist/index.html`. Edit colors, typography, spacing, and responsive rules in `src/styles.css`. Edit interactions in `dist/assets/main.js`.

After changing styles or adding Tailwind classes, install the build dependencies and regenerate the CSS:

```sh
npm ci
npm run build
```

Publish the contents of `dist/` with any static web host. The development server is for local preview only. No backend, environment variables, API keys, or database are required.

## Content provenance and omissions

The supplied `Mallapu_Kishor_Resume.pdf` is the original source for names, roles, dates, projects, qualifications, and contact information. The owner subsequently supplied additional EZBuild details: microservices, Kafka, Redis Pub/Sub, and query optimization in a clone application that improved performance by 70% and reduced query load. No percentage reduction in query load was supplied or inferred. The original downloadable résumé PDF remains unchanged. Fintech career results belong to the AWG FinServ experience section. The EZBuild date is reproduced as “Jan 2026–Present” from the résumé and should be updated when that changes.

Project screenshots, individual repository links, dates and measured outcomes for the two commerce projects were not supplied, so none are invented. EZBuild’s tags reflect the capabilities and technologies supplied by the owner; no additional framework stack is inferred. Its visual panel illustrates listed capabilities; it is not an application screenshot. The ambiguous “Intermediate – MPC | SSC” education line was omitted. There is no invented portrait or location claim about current residence. No essential information is missing for the site to function.

Contact opens the visitor’s email or phone application. It does not submit a form. If adding a form later, connect a real server endpoint or form service with validation, abuse protection, and explicit delivery/error handling; show success only after delivery is confirmed.

## Validation

Checked in Chromium at 320, 390, 768, and 1440 CSS pixels, plus 200% text enlargement. Verified no horizontal overflow, functioning section anchors and local resources, mobile menu opening/closing and Escape handling, project disclosure, clipboard copying, and no JavaScript errors. Automated axe checks for WCAG A/AA reported no violations at the tested viewport sizes. Reviewed desktop and mobile screenshots. Reduced-motion users receive no smooth scrolling or reveal animations. Navigation and content remain available without JavaScript.

Automated checks are not a complete accessibility certification. External profile and project URLs are reproduced from the résumé; availability and ownership have not been independently verified.
