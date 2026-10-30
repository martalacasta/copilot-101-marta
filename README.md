# Copilot at GitHub: From Context to Contribution

A dependency-free, Pages-hosted workshop kit for Marta Lacasta's 90-minute Copilot session for new Hubbers. The session is structured in two parts: Copilot fundamentals, followed by an end-to-end demonstration.

**View the deck:** <https://martalacasta.github.io/copilot-101-marta/>

## Workshop shape

| Segment | Time | Focus |
| --- | ---: | --- |
| Opening | 5 min | Facilitator-only room calibration questions |
| Copilot fundamentals | 30 min | What it is, multi-model routing, surfaces, coding agents, local and cloud sandboxes, workflows, MCPs, skills, code review, use cases, and guardrails |
| End-to-end demo | 40 min | Connected context, source validation, GitHub issue draft, and review |
| Questions + buffer | 15 min | Resources, current setup pointers, questions, or time back |

The common flow is **Question → grounded context → GitHub action → review → next step**. Prepare all demo paths, then select only two based on the room.

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
| `ArrowRight`, `ArrowDown`, `Space`, `PageDown` | Next slide |
| `ArrowLeft`, `ArrowUp`, `Shift+Space`, `PageUp` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `N` | Toggle speaker notes |

Scroll vertically with a mouse, trackpad, or touch. The deck snaps gently to each section, the on-screen controls are clickable, every slide has a URL hash, and the progress bar tracks the current position.

## Presenting and printing

- Presenter notes are embedded in every slide and hidden by default. Press `N` to show or hide them.
- Use the browser's print dialog to export a landscape PDF with one slide per page.
- Turn notes on before printing if you want a notes overlay included in the PDF.
- See [`session-script.md`](session-script.md) for the room questions, slide talk track, transitions, exact demo script, and current release sources.
- See [`facilitator-runbook.md`](facilitator-runbook.md) for preparation and delivery logistics.
- See [`demo-guide.md`](demo-guide.md) for exact prompts, timeboxes, recovery paths, and demo selection.
- Use [`demo-assets/`](demo-assets/) for permission-safe local fallbacks.

## Updating the deck

- Edit slide content and speaker notes in [`index.html`](index.html).
- Edit layout, theme, responsive behavior, or print styles in [`styles.css`](styles.css).
- Edit navigation behavior in [`script.js`](script.js).
- Prefer durable workflow guidance over time-sensitive feature inventories.
- Verify plan, policy, client, and rollout caveats against the current [feature matrix](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/copilot-feature-matrix) and [Copilot changelog](https://github.blog/changelog/label/copilot/).
- Keep the deck aligned with the current [participant overview](https://github.com/github/onboarding/blob/main/new-hubbers/week-1/copilot-101.md), [companion guide](https://github.com/github/onboarding/blob/main/new-hubbers/week-1/copilot-at-github-companion-guide.md), and facilitator guidance.

## Product visual sources

The deck uses official GitHub product visuals from dated changelog entries:

- [`assets/copilot-fusion-patterns.png`](assets/copilot-fusion-patterns.png): [Route and orchestrate models with GitHub Copilot Fusion](https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion)
- [`assets/vscode-copilot-harness.png`](assets/vscode-copilot-harness.png): [GitHub Copilot in VS Code Universe releases](https://github.blog/changelog/2026-10-28-github-copilot-in-vs-code-universe-releases)
- [`assets/copilot-app-projects.jpg`](assets/copilot-app-projects.jpg): [GitHub Copilot app Universe releases](https://github.blog/changelog/2026-10-28-github-copilot-app-universe-releases)

## Deployment

The workflow in [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) publishes the repository root to GitHub Pages after changes land on `main`. It uses GitHub's official Pages actions with read-only contents access and the minimum deployment permissions.
