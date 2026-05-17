# pranjal-srivas.github.io

Source for [pranjal-srivas.github.io](https://pranjal-srivas.github.io).

## Structure

- `index.html` — About / home
- `research.html` — Research interests
- `projects.html` — Projects & works
- `publications.html` — Publications
- `cv.html` — Education, experience, CV download
- `contact.html` — Contact
- `styles.css` — shared dark theme
- `assets/pranjal_srivastava_cv.pdf` — downloadable CV

No build step. Open any `.html` in a browser to preview locally.

## Deploy

Already initialized as a git repo on `main`. To publish:

1. Go to <https://github.com/new>. Create a public repo named exactly
   `pranjal-srivas.github.io` — no README, no .gitignore, no license.
2. From this directory:
   ```bash
   git remote add origin https://github.com/pranjal-srivas/pranjal-srivas.github.io.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment**. Source should auto-set
   to `Deploy from a branch`, branch `main` / `(root)`. Save.

Site is live at <https://pranjal-srivas.github.io> in 1–2 minutes.

## Updating

Edit a file, then:

```bash
git add <file>
git commit -m "Describe the change"
git push
```

GitHub Pages rebuilds automatically.

To replace the CV, drop the new PDF into `assets/` as `pranjal_srivastava_cv.pdf`,
then commit and push.
