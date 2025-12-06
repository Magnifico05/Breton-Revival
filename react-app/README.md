# Breton Revival — React App (dev)

This is a small Vite + React scaffold for the Breton Revival site.

Quick start (Windows PowerShell):

1. cd into the react app folder

```powershell
cd "c:\Users\Ali\Documents\Ali\University\Fall 25\Breton\react-app"
npm install
npm run dev
```

Open the local dev URL shown by Vite (usually http://localhost:5173).

Notes:

- This app is a front-end prototype. Forms currently navigate to a thank-you route; replace with a real API endpoint to persist signups.
- Assets (images) are referenced by CSS variable `--hero-img` in `src/styles.css`. Add an image to the project root or update the CSS variable to point to your image resources.
- I kept the existing static site files in the root in case you prefer them; this React app is an optional staged migration.
