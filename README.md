# Copilot at GitHub: From Context to Contribution

A dependency-free, Pages-hosted workshop kit for Marta Lacasta's 45-minute Copilot session for new Hubbers. The normal spoken sequence is a short five-slide opening, a dedicated demo transition slide, a live end-to-end demonstration, and questions without a separate closing slide. Deeper product material remains available as a clearly labeled appendix.

**View the deck:** <https://martalacasta.github.io/copilot-101-marta/>

## Workshop shape

| Segment | Time | Focus |
| --- | ---: | --- |
| Opening slides | 8 min | Copilot evolution, assistant/agent/platform, multi-model/multi-surface/multi-agent, and the surface expansion |
| End-to-end demo | 29 min | Use the SE agent with WorkIQ, Slack, and GitHub context, then carry the outcome through the complete Universe Explorer repository workflow |
| Questions | 8 min | Current setup pointers, appendix references, or time back |

The common flow is **Question → SE agent → connected evidence → project → specialized repository agent → plan → implementation → visual and code review → Actions evidence → bounded follow-up**. The agents, repository instructions, reusable skill, connections, checkpoints, and workflows are prepared before the session; the live demo inspects and uses them rather than creating them.

The main deck is **6 slides**. The remaining **9 slides** are reference material: appendix guide, models/Fusion, autonomy, agents/workflows, MCP, skills/customization, what is new, use cases, and guardrails.

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
| `End` | DEMO slide |
| `Shift+End` | Last appendix slide |
| `A` | First appendix slide |
| `N` | Toggle speaker notes |

Scroll vertically with a mouse, trackpad, or touch. The deck snaps gently to each section, the on-screen controls are clickable, every slide has a URL hash, and the header and progress bar count the main sequence and appendix separately.

## Presenting and printing

- Presenter notes are embedded in every slide and hidden by default. Press `N` to show or hide them.
- Use the browser's print dialog to export a landscape PDF with one slide per page.
- Turn notes on before printing if you want a notes overlay included in the PDF.
- See [`session-script.md`](session-script.md) for room questions, the concise slide talk track, and the condensed fallback.
- See [`facilitator-runbook.md`](facilitator-runbook.md) for preparation and delivery logistics.
- See [`demo-guide.md`](demo-guide.md) for exact prompts, timeboxes, recovery paths, and demo selection.
- See [`demo-session-plan.md`](demo-session-plan.md) for the canonical 45-minute presentation and demo script, including the SE-agent grounding, exact talk track, prompts, canvas checkpoint, transitions, and cutoffs.
- See [`demo-repository-kickoff.md`](demo-repository-kickoff.md) for the reusable prompt that prepares the separate Universe Explorer demonstration repository.
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
