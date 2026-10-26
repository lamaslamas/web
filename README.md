# andreagreco – personal site

Static site, no build step: `index.html` + `img/`. Hosted on GitHub Pages.

## Adding work
Each project is a `<figure class="work">` inside `.grid` in `index.html`.
- `data-cat`: one or more of `motion illustration graphic web photo` (space-separated). Filters with no projects are hidden automatically.
- Images go in `img/work/` (photos in `img/photo/`), as WebP around 1800 px on the long side.
- `data-link` on the button adds a “Visit site” link in the viewer.
