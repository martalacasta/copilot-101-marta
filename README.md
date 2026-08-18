# GitHub Copilot 101

A polished, dependency-free presentation for Marta La Casta's 45-minute GitHub Copilot 101 session for new Hubbers on Tuesday, 25 August 2026.

**View the deck:** <https://martalacasta.github.io/copilot-101-marta/>

## Run of show

| Segment | Time | Focus |
| --- | ---: | --- |
| Understand + apply | 25 min | Mental model, autonomy, prompting, quality, and trust |
| Demo | 12 min | Ask, Plan, Agent, Review |
| Q&A + buffer | 8 min | First-week habits, questions, and parked detours |

Questions are welcome throughout. Deep detours can be parked for the final buffer.

## Local preview

The deck is plain HTML, CSS, and JavaScript. It works offline after cloning and requires no build step.

```bash
git clone https://github.com/martalacasta/copilot-101-marta.git
cd copilot-101-marta
python3 -m http.server 8000
```

Open <http://localhost:8000>. You can also open `index.html` directly in a browser.

## Keyboard shortcuts

| Key | Action |
| --- | --- |
| `ArrowRight`, `Space`, `PageDown` | Next slide |
| `ArrowLeft`, `Shift+Space`, `PageUp` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `N` | Toggle speaker notes |

The on-screen controls are clickable, every slide has a URL hash, and the progress bar tracks the current position.

## Presenting and printing

- Presenter notes are embedded in every slide and hidden by default. Press `N` to show or hide them.
- Use the browser's print dialog to export a landscape PDF with one slide per page.
- Turn notes on before printing if you want a notes overlay included in the PDF.
- See [`demo-guide.md`](demo-guide.md) for exact prompts, timing, fallback paths, alternative demos, seeded questions, and source links.

## Updating the deck

- Edit slide content and speaker notes in [`index.html`](index.html).
- Edit layout, theme, responsive behavior, or print styles in [`styles.css`](styles.css).
- Edit navigation behavior in [`script.js`](script.js).
- Keep the feature snapshot date visible when changing time-sensitive product claims.
- Verify plan, policy, client, and rollout caveats against the current [feature matrix](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/copilot-feature-matrix) and [Copilot changelog](https://github.blog/changelog/label/copilot/).
- Preserve 16 `.slide` sections unless the session timing and run of show are intentionally revised.

## Deployment

The workflow in [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) publishes the repository root to GitHub Pages after changes land on `main`. It uses GitHub's official Pages actions with read-only contents access and the minimum deployment permissions.
