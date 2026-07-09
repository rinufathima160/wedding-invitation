# Nihana & Riyas — Wedding Invitation

A premium, editorial-style Islamic wedding invitation website built with
React 19 + Vite and plain CSS (no Tailwind, Bootstrap, or Material UI).

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production files are output to `dist/`.

## Project structure

```
src/
  components/
    Navigation.jsx / .css        Minimal transparent nav with underline hover
    OpeningScreen.jsx / .css     Bismillah + names gate, "Open Invitation"
    Hero.jsx / .css              Bismillah, names, date, venue, QR
    Countdown.jsx / .css         Live countdown to the wedding date
    WeddingDetails.jsx / .css    Reception details card
    PrayerSection.jsx / .css     Marriage dua in Arabic + translation
    Venue.jsx / .css             Venue image + description
    Location.jsx / .css          Embedded map, QR, Get Directions
    Closing.jsx / .css           Thank-you + Qur'an 78:8 + couple names
    Footer.jsx / .css            Small credit line
    FloralCorner.jsx / .css      Reusable line-art corner illustration
  hooks/
    useReveal.js                 IntersectionObserver fade/slide-up reveal
  App.jsx / .css                 Page composition + opening-screen logic
  index.css                      Design tokens (colors, type, spacing)
```

## Customizing

- **Names / date / venue**: edit the text directly inside each component
  in `src/components/`.
- **Colors & fonts**: all design tokens live at the top of `src/index.css`
  as CSS custom properties (`--color-*`, `--font-*`).
- **Map & QR codes**: `Location.jsx` and `Hero.jsx` build the Google Maps
  embed URL and the QR code image URL from a single `MAP_QUERY` /
  destination string — update that string to change both at once.
- **Venue photo**: replace the `src` in `Venue.jsx` with your own image
  (place a local file in `src/assets/` and import it, or use another URL).
