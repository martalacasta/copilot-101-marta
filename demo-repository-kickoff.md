# Universe Explorer demo repository kickoff

Use the following prompt to prepare the separate demonstration repository for the GitHub Copilot 101 session.

```text
Prepare this repository as a purpose-built demonstration for a 45-minute GitHub Copilot 101 session for new Hubbers.

The repository will contain a small static website called "Universe Explorer." The site should help a new Hubber understand selected GitHub Universe announcements and how they relate to day-to-day work.

This is not only a website task. The repository must be prepared to demonstrate:

- GitHub Copilot app projects and sessions;
- repository understanding;
- custom agents;
- repository instructions;
- skills;
- plugins and MCP connections;
- Plan and Agent modes;
- local sandboxes;
- browser/canvas preview;
- opening the same work in VS Code;
- GitHub Actions pipelines;
- pull request review;
- handing a bounded follow-up to a cloud sandbox;
- human approval and verification boundaries.

Start by inspecting the repository. If it is empty, scaffold it. Produce a concise implementation plan before editing, then implement the approved plan.

## Website

Build a dependency-light static HTML, CSS, and JavaScript application that can be hosted using GitHub Pages.

The application should:

- explain selected GitHub Universe announcements;
- use a local, prepared JSON dataset rather than depending on live APIs at runtime;
- organize announcements around practical outcomes:
  - Understand
  - Plan
  - Build
  - Review
  - Ship
- display the announcement date, availability status, summary, audience relevance, and official source;
- distinguish GA, public preview, experimental, and other availability states;
- include links to official GitHub changelog or documentation sources;
- be responsive and keyboard accessible;
- remain understandable if JavaScript is unavailable;
- contain no customer, employee, credential, or confidential information.

Use a polished GitHub/Copilot-inspired design, but keep the implementation understandable for new contributors.

## Prepared live-demo task

The initial demo state should have a functioning application, release cards, tests, documentation, and pipelines.

Leave one bounded feature for the presenter to implement live:

"Add role-based recommendations for Engineering, Product, Sales, and Operations. When a role is selected, recommend the most relevant announcements and explain why each one matters to that role."

The repository should make the safest implementation path discoverable, but the role-selector feature must not already be implemented in the starting state.

Also prepare a completed reference implementation that can be used if the live agent run is slow or fails. Do not rewrite history or use destructive Git operations. Document how the presenter can access the starting and completed checkpoints safely.

## Canvas integration

Prepare the demo so a canvas is a meaningful part of the implementation and review loop rather than a separate feature tour.

### Browser canvas

After the Universe Guide agent implements the role-selector feature:

1. Start the local preview server.
2. Open Universe Explorer in a browser canvas beside the Copilot conversation.
3. Test the Engineering and Sales role experiences.
4. Inspect keyboard navigation, focus visibility, default and empty states, source visibility, and narrow-screen behavior.
5. Ask Copilot to separate functional defects, accessibility concerns, visual improvements, and subjective preferences.
6. Select one small, high-confidence correction.
7. Implement the correction, run the relevant checks, and refresh the canvas.
8. Continue in VS Code to inspect the resulting code and diff.

Add this copy-ready prompt to `DEMO-PROMPTS.md`:

```text
Open the Universe Explorer preview in a browser canvas.

Review the rendered experience against the approved requirements.

Test:
- Engineering and Sales role selection;
- keyboard-only navigation;
- focus visibility;
- empty and default states;
- narrow-screen layout;
- whether each recommendation explains why it matters;
- whether release status, date, and official source remain visible.

Separate:
1. functional defects,
2. accessibility concerns,
3. visual improvements,
4. subjective design preferences.

Do not edit yet. Recommend only the smallest high-confidence correction suitable for this demo.
```

Add this follow-up prompt:

```text
Implement the highest-confidence correction.

Keep the change narrowly scoped, run the relevant checks, and refresh the browser canvas so we can compare the result.
```

Prepare a screenshot or static rendered fallback for this canvas checkpoint in case the local preview cannot be opened during the session.

### Optional editor canvas

Document an optional short variation in which the agent's implementation plan is opened in an editor canvas before coding. The presenter can add or refine one acceptance criterion, such as:

```text
The experience must remain understandable when JavaScript is unavailable.
```

The agent should then treat the edited plan as the approved source for implementation. This should demonstrate that a canvas can be a shared, human-editable working artifact rather than only a rendered preview.

The default demo should prioritize the browser canvas. Do not require a custom canvas extension for the core session.

## Custom agent

Create a purpose-specific custom agent called "Universe Guide" using the currently supported repository format. Verify the format against current official GitHub documentation rather than inventing it.

The agent should:

- write for new Hubbers with mixed technical backgrounds;
- use official GitHub sources;
- preserve source URLs and publication dates;
- distinguish release status and availability;
- avoid unsupported claims about plans, policy, rollout, or universal availability;
- inspect repository instructions before making changes;
- preserve accessibility and the existing design;
- begin significant changes with a plan;
- make small, reviewable changes;
- run targeted checks;
- report changed files, validation evidence, and remaining risk;
- never deploy, merge, publish, change repository settings, or create credentials without explicit approval.

The agent must already exist before the live session. The presenter will open its definition, explain it, select it, and use it-not create it live.

## Repository instructions

Add repository-level Copilot instructions using the currently supported GitHub format.

Include:

- repository purpose and audience;
- architecture and important files;
- design and accessibility conventions;
- commands for local preview and validation;
- how release data is structured;
- requirements for official sources and dated claims;
- testing expectations;
- restrictions on dependencies;
- privacy and security boundaries;
- approval requirements for deployment and publication.

Keep the instructions concise enough to be useful to an agent.

## Reusable skill

Create a reusable skill using the currently supported repository format for researching and adding a Universe announcement.

The skill should define this method:

1. Identify the official GitHub changelog or documentation source.
2. Record the title, publication date, release status, source URL, and affected audience.
3. Separate sourced facts from interpretation.
4. Explain the announcement in language appropriate for new Hubbers.
5. Add or update the local release dataset.
6. Validate the data and rendered page.
7. Report evidence and unresolved availability questions.

The presenter should be able to open this skill and explain how a skill differs from repository instructions and a custom agent.

## Plugins and MCP documentation

Do not commit credentials, tokens, organization-specific endpoints, or personal configuration.

Add a short document explaining the demo's expected connections:

- GitHub tools for repository, issue, pull request, Actions, and changelog context;
- WorkIQ for permission-appropriate calendar, meeting, document, email, or Teams context;
- optional Slack tools for permission-appropriate conversation context;
- official GitHub documentation or changelog research tools.

Explain:

- MCP provides a connection to context and tools;
- a skill provides a reusable method;
- repository instructions provide repository-wide conventions;
- a custom agent provides a specialized role and boundaries;
- a plugin can package tools, skills, agents, and instructions.

The repository must still work when these external connections are unavailable.

## Pipelines

Create GitHub Actions workflows for:

### Pull request validation

Run fast, deterministic checks for:

- HTML structure;
- JavaScript behavior;
- release-data validity;
- required release fields;
- duplicate release identifiers;
- valid source URLs;
- accessibility checks that can run reliably in CI;
- formatting or linting if it does not add excessive complexity.

Use pinned or official actions and minimal permissions.

### GitHub Pages deployment

Deploy the static site from the default branch using official GitHub Pages actions and minimum required permissions.

Creating the workflow file is allowed. Do not enable Pages, modify repository settings, or publish anything without explicit approval.

### Optional content check

If it can be implemented safely and deterministically, add a manually triggered workflow that checks prepared release data for missing or stale source metadata. It must not automatically publish generated content.

## Demo assets and documentation

Add:

- `README.md` with setup, architecture and deployment information;
- `DEMO-RUNBOOK.md` with the precise live-demo sequence;
- `DEMO-PROMPTS.md` containing copy-ready prompts;
- a short architecture diagram, preferably Mermaid;
- a prepared expected-output screenshot or static fallback if practical;
- troubleshooting and recovery instructions;
- a clear explanation of the starting and completed demo checkpoints.

The runbook should support this sequence:

1. Ask Copilot to understand the repository.
2. Inspect repository instructions.
3. Open and explain the Universe Guide agent.
4. Open and explain the reusable skill.
5. Explain the configured tools/plugins/MCP connections.
6. Select the Universe Guide agent.
7. Ask it to plan the role-selector feature.
8. Optionally open the plan in an editor canvas, refine one acceptance criterion, and approve the bounded plan.
9. Implement in a local sandbox.
10. Run focused validation.
11. Open the result in a browser canvas.
12. Test the role experience, accessibility, sources, and narrow-screen layout.
13. Ask Copilot for a structured visual review without editing.
14. Approve and implement one small, high-confidence correction.
15. Refresh the canvas and compare the result.
16. Open the same repository in VS Code and review the diff.
17. Show the pull request validation pipeline.
18. Delegate an accessibility or responsive-design follow-up to a cloud sandbox.
19. Stop before merge or deployment and reinforce human approval.

Include presenter cut-off points. After one live failure or excessive delay, the presenter should switch to the prepared result rather than debugging.

## Validation

Use the smallest appropriate toolchain and avoid unnecessary dependencies.

Before completion:

- run all repository checks;
- test keyboard navigation and responsive behavior;
- verify the site works through a local HTTP server;
- validate workflow syntax where possible;
- confirm no secrets or personal data are present;
- verify every product claim has an official source and date;
- confirm the starting state does not already contain the live role-selector feature;
- confirm the completed fallback does contain and test that feature.

At the end, report:

- repository architecture;
- custom agent, instructions, skill, and connection documentation created;
- workflows created;
- exact demo-start and demo-finished procedure;
- validation commands and results;
- any setup that still requires explicit repository-owner approval.
```

The central boundary is that Copilot should prepare both a reliable starting state and a completed fallback while leaving deployment, repository settings, merging, and external authentication under the presenter's control.
