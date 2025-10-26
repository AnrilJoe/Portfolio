How public files work (Vite + Vercel)

- Files placed in this `public/` folder are copied to the root of the built site. For example, `public/logo.svg` will be available at `/logo.svg` in the deployed app.
- Vercel (and Vite's dev server) will serve these files as static assets. Replacing or editing `public/logo.svg` is safe and won't change import paths in your compiled app as long as you keep the same filename and path.

Recommended usage

- Replace `logo.svg` with your own logo file. Keep the same filename (`logo.svg`) if you want existing references to continue working.
- Use the public URL in your React components: `<img src="/logo.svg" alt="Logo" />`.
- Avoid importing public files with `import logo from "../public/logo.svg"` — that treats them as module assets and triggers bundling behavior. If you want bundling instead, put the asset in `src/assets` and import it.

Recommended sizes & format

- Vector (SVG) is preferred for logos: it scales cleanly and keeps file size small.
- If using PNG, try to provide an appropriately sized image (e.g. 512×128 for wide header logo, or square 256×256 for icon). Provide 2x/3x variants only if you need them.

Troubleshooting

- If your site shows a 404 for `/logo.svg` after deployment:
  - Confirm the file exists in `public/` at build time.
  - Confirm you referenced it with an absolute path (`/logo.svg`) not a relative import that breaks after routing.

Example (React / Vite)

In a component file (e.g. `src/components/Navigation.tsx`):

<img src="/logo.svg" alt="Site logo" style={{height: 40}} />

This will work both in dev and after deploying to Vercel.

If you want me to update any component to use `/logo.svg` (for example `src/components/Navigation.tsx`), tell me which component and I'll update it safely.