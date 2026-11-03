# GitHub Copilot 101 session script

This is the facilitator talk track for the Pages deck. The presentation itself contains no audience-calibration questions.

## Session plan

| Time | Part | Outcome |
| --- | --- | --- |
| 0:00–0:08 | Main opening slides | Explain the shift in Copilot, the assistant/agent/platform frame, surfaces, and the control loop. |
| 0:08–0:37 | Live demonstration | Inspect prepared customization, select the pre-created agent, run the Universe Explorer task, and review the result. |
| 0:37–0:45 | Questions and close | Answer useful questions, use appendix references when helpful, or finish early. |

## Questions for the room

Ask no more than one of these while the cover slide is visible. Use a show of hands, chat, or a quick verbal response.

1. Is GitHub new to you, familiar, or central to your role?
2. Is your work primarily technical, nontechnical, or mixed?
3. Which Copilot surfaces have you used: GitHub.com, an IDE, CLI, the Copilot app, coding agent, or none?
4. What is one real question or task you would like Copilot to help with this week?

Say:

> I am asking because Copilot is much broader than code completion. I will keep the foundations consistent, but I will emphasize examples that match the room.

Do not ask participants to share confidential, customer, security-sensitive, HR, legal, or personal information.

## Main opening: slide-by-slide talk track

### Slide 1 — GitHub Copilot 101

Say:

> We will spend about eight minutes on a practical mental model, then use most of the session for a live workflow. We will keep the final eight minutes for questions.

> The goal is not to memorize every feature. The goal is to know what kind of help to ask for, where the relevant context comes from, and what you still need to review yourself.

### Slide 2 — From predicting code to coordinating work

Say:

> Copilot began with a narrow interaction: predict the next code.

> Chat added conversation. Model choice and customization expanded the platform. Agents moved into multi-step work. The current direction is coordinated workflows across repositories, connected tools, desktop applications, and repeatable processes.

> That changes the question we ask. Instead of only asking what code Copilot can generate, we ask what outcome it can help move forward safely.

### Slide 3 — Assistant + agent + platform

Say:

> I use three frames for Copilot.

> As an assistant, it helps in the foreground: complete this code, explain this repository, draft this text, or transform this content.

> As an agent, it can take multi-step action: inspect files, propose a plan, make edits, run tools, test the result, and iterate.

> As a platform, it connects models, context, tools, policies, extensions, and workflows. This is the frame that explains MCPs, skills, repository instructions, and automations.

> The level of autonomy changes. Accountability does not. We still own the goal, the review, and the final action.

### Slide 4 — One Copilot. Different surfaces for different work

Say:

> The best surface is normally where the work already has gravity and where you can review the result naturally.

> Use the IDE for a tight code-edit-run-test loop. Use GitHub.com when the work already lives in an issue, pull request, repository, or review. Use CLI when terminal commands, local files, GitHub, and connected tools need to work together. Use the Copilot app for longer sessions, multiple tasks, projects, delegation, and visual review. Mobile can help you steer or inspect work away from your desk.

> The screenshot shows the VS Code harness picker. It makes an important point: the IDE can be the place where you choose between local, cloud, and other agent harnesses rather than a single fixed execution mode.

> Sessions can increasingly move across clients, but do not assume every surface has identical tools, connections, permissions, or policy.

Source: [GitHub Copilot in VS Code Universe releases — 28 October 2026](https://github.blog/changelog/2026-10-28-github-copilot-in-vs-code-universe-releases) · [Backing issue](https://github.com/abirismyname/github-changelog-reader/issues/1414)

### Slide 5 — Start with a real question. Keep the evidence visible

Say:

> Start with the real question, not the name of a feature.

> Retrieve the smallest useful context. Turn it into an observable action. Keep the evidence visible: sources, checks, or a diff. Then make a deliberate decision to publish, delegate, ask a human, or stop.

> A useful prompt is a lightweight contract. State the scope, observable outcome, important boundaries, verification evidence, and any approval point.

Example:

> Inspect the report command and its tests. Plan the smallest change that adds CSV output while preserving the JSON default and public API. Add no dependency. Wait for approval before editing. Verify with targeted tests and summarize remaining risk.

> I will repeat this loop during the demonstration. Before the task starts, I will also show the prepared agent, repository instructions, reusable skill, and connections that shape how the work is done.

## Live demonstration

The 29-minute demo begins with a short inspection of prepared customization. It then selects the pre-created custom agent for the Universe Explorer task, validates the evidence, turns the result into a GitHub-shaped artifact, and reviews it.

### Demo setup

Before the session:

- Open the Copilot app or CLI and authenticate.
- Open the prepared Universe Explorer demo repository.
- Confirm the purpose-specific custom agent already exists and can be selected.
- Open the agent definition, repository-level Copilot instructions, reusable skill or equivalent workflow guidance, and connection/plugin documentation.
- Confirm GitHub and any documented MCP connections are available if the prepared task uses them.
- Open the participant overview, companion guide, and this presentation repository.
- Open the three fallback files under `demo-assets/`.
- Hide notifications and unrelated workplace content.
- Use a purpose-built repository if you plan to publish anything.
- Keep the issue draft unpublished during the default demo.
- Do not create or configure the custom agent, skill, plugin, MCP connection, or repository instructions live.

### Slide 6 — Live demo

Say:

> We have covered the pieces separately. I will now leave the deck and connect them in a live workflow.

> First I will show the customization that was prepared before the session. Then I will select the prepared agent and use it for the Universe Explorer task. The detailed checkpoints, approval boundaries, and fallback paths are in this facilitator script and the demo guide.

### Inspect the prepared customization

**Timebox:** 3 minutes

Open the artifacts rather than creating or editing them:

1. **Custom agent definition** — explain its purpose, instructions, available tools, boundaries, and expected output.
2. **Repository instructions** — explain that these conventions apply broadly to work in the repository.
3. **Reusable skill or workflow guidance** — explain the repeatable method it captures.
4. **MCP and plugin documentation** — explain which context and tools each connection provides, and that a plugin can package tools, skills, agents, and instructions.

Say:

> These artifacts were prepared and tested before the session. We are inspecting how the behavior is defined, not spending live time creating the configuration.

### Act 1 — Run the Universe Explorer task

**Timebox:** 9 minutes

Select the pre-created purpose-specific agent, such as **Universe Guide**, then use the prepared Universe Explorer task prompt from the demo repository. The checked-in prompt should include:

```text
Use the prepared Universe Explorer task and its acceptance criteria.
Use only the documented connections and repository context.
Keep source links and dates visible.
Separate sourced facts from interpretation.
Name missing access, conflicting information, and remaining human decisions.
Stop before publishing or changing external systems.
```

Narration:

1. Confirm the prepared custom agent is selected.
2. Point out which repository instructions and skill guidance apply.
3. Point out which connected tools the agent selects and why they are allowed.
4. Open at least one source behind an important claim.
5. Identify one fact, one interpretation, and one gap.

If the prepared task cannot run safely, switch to the saved Universe Explorer output in the demo repository. If that is unavailable, use `demo-assets/orientation-context.md` as the permission-safe presentation fallback:

```text
Read demo-assets/orientation-context.md.

Build a short orientation briefing. Separate facts from interpretation, identify the current source, explain why the older recording is not authoritative for the current format, and name what the prepared material cannot tell us.
```

Transition:

> The useful output is not only the summary. It is the summary plus the sources, dates, and known gaps.

### Act 2 — Turn the result into GitHub work

**Timebox:** 9 minutes

Use the destination and acceptance criteria already documented in the prepared Universe Explorer repository. Keep the default result as a draft. If the prepared repository does not provide a safe artifact path, use `demo-assets/project-kickoff-notes.md` and the fallback prompt below.

Use the checked-in task instructions to produce the prepared artifact, with these boundaries:

```text
Use the validated Universe Explorer result to create the repository's documented draft artifact.
Preserve source links, dates, uncertainty, and open questions.
Follow repository instructions and the reusable skill.
Do not publish, assign, merge, or change external systems.
```

Permission-safe fallback:

```text
Read demo-assets/project-kickoff-notes.md.

Extract:
- the problem and evidence,
- the decision that was actually made,
- the proposed owner and whether that owner confirmed,
- unresolved questions,
- the privacy boundary for a repository issue.

Draft a GitHub issue with:
- a concise title,
- problem statement,
- source links and dates,
- agreed outcome,
- observable acceptance criteria,
- owner status,
- open questions.

Do not publish it.
Do not invent owner consent.
Do not include private Support content or individual customer details.
```

Narration:

1. Show that the prepared task names the desired GitHub artifact and acceptance criteria.
2. Point out the explicit privacy boundary and approval stop.
3. Compare the draft to the validated sources and open questions.
4. Confirm that uncertainty was not converted into a claim or decision.
5. Confirm that acceptance criteria are observable and no external action occurred.

### Review the artifact

**Timebox:** 5 minutes

Primary review prompt:

```text
Review the draft against the prepared Universe Explorer task, its acceptance criteria, and the linked sources.

List:
1. unsupported or overstated claims,
2. missing or stale source evidence,
3. privacy or audience concerns,
4. unmet acceptance criteria,
5. decisions or external actions that still require human approval.

Do not edit or publish the draft yet.
```

Permission-safe fallback:

```text
Review the issue draft against demo-assets/project-kickoff-notes.md.

List:
1. unsupported or overstated claims,
2. privacy or audience concerns,
3. missing acceptance criteria,
4. unresolved questions presented as decisions,
5. anything that needs owner confirmation.

Do not edit or publish the draft yet.
```

Narration:

> Review is a separate mode of thinking from generation. The draft can be useful and still be wrong, too confident, or intended for the wrong audience.

If the prepared task stalls, switch to the saved Universe Explorer output. For the permission-safe fallback, open `demo-assets/example-issue-draft.md` and run only the fallback review prompt.

### Optional technical extension

**Timebox:** appendix only; do not include it in the default 45-minute run

Use the Ask → Plan → Agent → Review path in `demo-guide.md`. Do not wait for a long agent run. Switch to the completed branch at the documented cutoff.

### Demo close

**Timebox:** 2 minutes

Say:

> Copilot helped retrieve context, synthesize it, and produce a GitHub-shaped next step. The human work was selecting the outcome, checking the sources, preserving the privacy boundary, and deciding whether the result was ready to publish.

## Questions and close

### Slide 7 — Questions and close

Use the final slide for questions. Seed only if needed:

- When should I use Plan instead of Agent?
- Why can different Copilot surfaces return different answers?
- What makes a task appropriate for coding agent or automation?
- What evidence should I require before accepting generated work?
- How do MCPs and skills differ?
- What should never be placed in a prompt?

For availability, policy, privacy, retention, and model questions, use current official documentation and an explicit date. Avoid static promises.

## Appendix/reference talk tracks


These slides follow the close and are not part of the default 45-minute spoken sequence. Press `A` to jump to the appendix when a question benefits from a visual explanation.

### Appendix 1 — Appendix guide

Say:

> The main run is eight minutes of opening slides, 29 minutes of live demonstration, and eight minutes for questions and close.

> These remaining slides are reference material. I will use them only when a question benefits from a visual explanation.

### Appendix 2 — Multi-model Copilot

Say:

> Copilot is multi-model. Depending on the client, plan, and policy, you can directly select an enabled model from providers including OpenAI, Anthropic, and Google.

> Direct selection is useful when you know you want a particular model's behavior. Copilot Fusion is a different choice: it is a routing and orchestration system rather than one model.

> Fusion can use one model, cascade from an efficient model to a stronger model, or use a critique pattern where one model reviews another model's response. You choose Standard, High, or Max effort rather than managing every model transition yourself.

> Administrators control the models Fusion is allowed to use through model policies. Availability, billing, and multipliers still matter.

> Experimental local-model routing can choose between eligible on-device and cloud models in supported clients. Local inference does not make the whole session offline because Fusion still makes routing decisions in the cloud.

Avoid maintaining a static list of model versions. Explain model choice, routing, effort, policy, and evidence instead.

#### Sources for multi-model Copilot

- **Route and orchestrate models with GitHub Copilot Fusion — 28 October 2026**
  [Public changelog](https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion) · [Backing issue](https://github.com/abirismyname/github-changelog-reader/issues/1408) · [Concept documentation](https://docs.github.com/copilot/concepts/models/copilot-fusion)
- **GitHub Copilot Fusion supports selection of local models — 28 October 2026**
  [Public changelog](https://github.blog/changelog/2026-10-28-github-copilot-fusion-now-supports-selection-of-local-models) · [Backing issue](https://github.com/abirismyname/github-changelog-reader/issues/1416) · [Auto model selection documentation](https://docs.github.com/copilot/concepts/models/auto-model-selection)

### Appendix 3 — Autonomy modes

Say:

> More autonomy is not automatically better.

> Completion is useful when I know the change and want help typing it. Ask is useful for orientation. Plan is useful when the route is uncertain. Agent is useful after the desired outcome and boundaries are understood. Delegation or automation is useful for bounded work that can be checked later.

> As autonomy increases, scope, acceptance criteria, approval boundaries, and evidence become more important.

### Appendix 4 — Coding agents and workflows

Say:

> A coding agent is useful for a bounded task with a checkable finish line. It reads the issue and repository context, makes changes on a branch, runs tools and tests, and proposes the result in a pull request.

> The environment matters. A local sandbox still runs on your machine, but places operating-system restrictions around the files, network, and credentials available to agent-run tools. A cloud sandbox runs the whole session in an isolated environment hosted by GitHub and can be followed or steered from different Copilot clients.

> A GitHub Actions environment is another option for repository-scoped agent work. It uses the development environment configured for that repository and is the environment used by several GitHub.com agent entry points.

> Copilot code review is a separate review stage. It analyzes the pull request changes and suggests fixes, but it is not guaranteed to identify every issue. Validate its comments and supplement them with human review.

> An agent performs a bounded task. A workflow watches for a condition or coordinates repeatable steps. Agent Merge is a useful example: it can watch a pull request for selected blockers, work on failed Actions workflows or merge conflicts, and report its progress. In the Copilot app it can also address review comments. A person still reviews the result and owns the final merge.

Sources:

- [Working with agent sessions in the GitHub Copilot app](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/github-copilot-app/agent-sessions)
- [About cloud sandboxes for GitHub Copilot](https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes)
- [About local sandboxing for GitHub Copilot](https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes)
- [Using GitHub Copilot code review on GitHub](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-on-github/use-copilot-agents/copilot-code-review)
- [Getting pull requests ready to merge with Agent Merge](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-on-github/use-copilot-agents/get-pull-requests-ready-to-merge)

### Appendix 5 — MCPs

Say:

> MCP connects Copilot to a system where context or tools live.

> GitHub MCP provides repository and collaboration context. WorkIQ can provide Microsoft 365 context such as meetings, documents, email, and Teams. Slack MCP provides conversations and threads. Hubbers and documentation connections can help with ownership, internal terminology, and current guidance.

> MCP is the connection, not the answer. A result still needs source inspection. No result can mean missing permissions, a missing connection, or insufficient scope.

### Appendix 6 — Skills and customization

Say:

> A custom agent defines a purpose-specific role: its instructions, tools, boundaries, and expected output.

> Repository instructions apply shared conventions and constraints broadly within the repository. A skill captures a reusable method for a type of task.

> MCP provides connections and tools. A plugin can package tools, skills, agents, and instructions so the customization can be distributed and reused.

> In the live demo, all of these artifacts were prepared before the session. We inspected and used them; we did not create the agent live.

### Appendix 7 — What is new

Say:

> This is a dated snapshot, not a permanent feature list. The important pattern is that the unit of work is becoming larger than a single chat.

> Projects in the Copilot app can hold repositories, notes, designs, connected context, agents, and results together.

> Dynamic workflows can combine code-defined stages, one or more agents, structured results, and human checkpoints. Shared automations let teams own recurring repository workflows rather than tying them to one person's account.

> Sessions increasingly continue across VS Code, the Copilot app, CLI, GitHub.com, and mobile.

> Computer use expands the boundary to approved desktop applications that may not have an API or MCP. Local sandboxing creates explicit execution boundaries around filesystem, network, credentials, and tools.

Avoid implying universal availability. Point to the current feature matrix and changelog.

#### Sources for the dated snapshot

- **GitHub Copilot app, Universe releases — 28 October 2026**
  [Public changelog](https://github.blog/changelog/2026-10-28-github-copilot-app-universe-releases) · [Backing issue](https://github.com/abirismyname/github-changelog-reader/issues/1409)
- **Build shared workflows for your team with Copilot Automations — 28 October 2026**
  [Public changelog](https://github.blog/changelog/2026-10-28-build-shared-workflows-for-your-team-with-copilot-automations) · [Backing issue](https://github.com/abirismyname/github-changelog-reader/issues/1413)
- **Dynamic workflows in Copilot CLI and the Copilot app — 1 October 2026**
  [Public changelog](https://github.blog/changelog/2026-10-01-dynamic-workflows-in-copilot-cli-and-the-copilot-app) · [Backing issue](https://github.com/abirismyname/github-changelog-reader/issues/1340)
- **GitHub Copilot can now interact with desktop apps — 1 October 2026**
  [Public changelog](https://github.blog/changelog/2026-10-01-github-copilot-can-now-interact-with-desktop-apps) · [Backing issue](https://github.com/abirismyname/github-changelog-reader/issues/1333)
- **Local sandboxing for GitHub Copilot generally available — 7 October 2026**
  [Public changelog](https://github.blog/changelog/2026-10-07-local-sandboxing-for-github-copilot-now-generally-available) · [Backing issue](https://github.com/abirismyname/github-changelog-reader/issues/1353)

### Appendix 8 — Use cases

Select examples based on the room.

For a mixed audience, say:

> Copilot can help understand unfamiliar work, prepare for a meeting, turn a conversation into an issue, draft or review documentation, and identify the right owner or next step.

For a technical audience, add:

> It can also map a request path, implement a bounded change, investigate a failing workflow, review a pull request, or coordinate repeatable repository tasks.

### Appendix 9 — Trust and guardrails

Say:

> Copilot can accelerate discovery and execution. It does not transfer accountability.

> Use the least sensitive context needed. Open the sources behind important claims. Review commands and changes. Keep publication and production actions behind a human decision.

> Policy, legal, HR, security, access, and people decisions should be routed to the official system or accountable owner.
