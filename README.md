# Breton Revival — React primary

This workspace was migrated from a static site to a React (Vite) app located in `react-app`.

## Run the development site (Windows PowerShell)

1. Open PowerShell and change to the project folder:

```powershell
cd "c:\Users\Ali\Documents\Ali\University\Fall 25\Breton"
```

2. Run the helper script (it installs dependencies if needed and starts Vite):

```powershell
./run-dev.ps1
```

3. The script will try to open `http://localhost:5173` in your browser. If not, open that URL manually.

## Build for production

1. Change into the React app folder:

```powershell
cd "c:\Users\Ali\Documents\Ali\University\Fall 25\Breton\react-app"
npm install
npm run build
```

2. After building, you'll find the static output in `react-app/dist`. Serve those files with any static host (Netlify, Vercel, GitHub Pages, or a simple static server).

## Notes

- The original static HTML files remain in the project root in case you want to keep or reuse them. The primary development workflow is now the React app in `react-app`.
- Signup forms in the React prototype navigate to a thank-you page; to persist data connect the form to a backend endpoint or Google Form.
- Social image templates are in `react-app/public/assets` as editable SVGs.

If you want, I can:

- Convert SVG templates to PNGs for direct posting (I can provide ImageMagick commands),
- Hook the signup to a Google Form and persist entries, or
- Deploy the built site to Netlify/Vercel and configure a domain.
