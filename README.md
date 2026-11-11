# hyprtk.github.io

The landing page for [hyprtk](https://github.com/hyprtk): the dotfiles that
install a themed Hyprland desktop on 18 Linux distributions, and hyprtk-bar-qt, the
Qt/QML suite built on Quickshell that replaces the rest of the shell.

Static HTML, CSS and a small amount of JavaScript. No build step, no framework.

## Local preview

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000>.

## Deploy

This is a GitHub Pages user site, so it serves from the apex:
`https://hyprtk.github.io/`, base path `""`.

Pushing to `main` runs `.github/workflows/pages.yml`. In the repository settings,
set **Pages → Build and deployment → Source** to **GitHub Actions**. The first
run publishes the site; later pushes redeploy it.

## Structure

```
index.html                  landing page
404.html                    not-found page
assets/css/fonts.css        self-hosted IBM Plex @font-face
assets/css/styles.css       tokens, layout, components
assets/js/main.js           theme toggle, copy buttons
assets/fonts/               IBM Plex woff2, latin subset
assets/img/                 screenshots and social card
.github/workflows/pages.yml GitHub Pages deploy
```

## Design notes

- Dark and light themes are token-driven; the toggle writes `data-theme` on the
  root and respects `prefers-color-scheme` on first load.
- Each project carries its own accent: cyan for the dotfiles, purple for the bar.
- IBM Plex Serif for display, IBM Plex Sans for body, IBM Plex Mono for labels
  and code.
- No third-party requests: fonts, images and scripts are all served from the
  repo.

## Credits

Screenshots are from the hyprtk desktop and hyprtk-bar-qt. IBM Plex is licensed
under the SIL Open Font License 1.1.
