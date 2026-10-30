# GitHub Copilot 101 session script

This is the facilitator talk track for the Pages deck. The presentation itself contains no audience-calibration questions.

## Session plan

| Time | Part | Outcome |
| --- | --- | --- |
| 0:00–0:05 | Opening and room calibration | Understand the audience without putting questions on the slides. |
| 0:05–0:35 | Part 1: Copilot fundamentals | Build shared vocabulary and explain how the pieces fit together. |
| 0:35–1:15 | Part 2: demonstration | Show connected context, validation, a GitHub artifact, and review. |
| 1:15–1:30 | Questions, resources, and buffer | Answer useful questions, cover setup pointers, or finish early. |

## Questions for the room

Ask these before or immediately after opening the deck. Use a show of hands, chat, or a quick verbal response.

1. Is GitHub new to you, familiar, or central to your role?
2. Is your work primarily technical, nontechnical, or mixed?
3. Which Copilot surfaces have you used: GitHub.com, an IDE, CLI, the Copilot app, coding agent, or none?
4. What is one real question or task you would like Copilot to help with this week?

Say:

> I am asking because Copilot is much broader than code completion. I will keep the foundations consistent, but I will emphasize examples that match the room.

Do not ask participants to share confidential, customer, security-sensitive, HR, legal, or personal information.

## Part 1: slide-by-slide talk track

### Slide 1 — GitHub Copilot 101

Say:

> This session has two parts. First, we will build a practical understanding of Copilot as it exists now—not only the code-completion product many people first encountered. Then we will use the concepts in a live workflow.

> The goal is not to memorize every feature. The goal is to know what kind of help to ask for, where the relevant context comes from, and what you still need to review yourself.

### Slide 2 — Learn the system, then use the system

Say:

> We will spend roughly 35 minutes on fundamentals and 40 minutes on a demonstration. I have kept time at the end for questions and setup guidance.

> If we meet the outcomes early, I will give you time back rather than adding more features.

### Slide 3 — Assistant + agent + platform

Say:

> I use three frames for Copilot.

> As an assistant, it helps in the foreground: complete this code, explain this repository, draft this text, or transform this content.

> As an agent, it can take multi-step action: inspect files, propose a plan, make edits, run tools, test the result, and iterate.

> As a platform, it connects models, context, tools, policies, extensions, and workflows. This is the frame that explains MCPs, skills, repository instructions, and automations.

> The level of autonomy changes. Accountability does not. We still own the goal, the review, and the final action.

### Slide 4 — From predicting code to coordinating work

Say:

> Copilot began with a narrow interaction: predict the next code.

> Chat added conversation. Model choice and customization expanded the platform. Agents moved into multi-step work. The current direction is coordinated workflows across repositories, connected tools, desktop applications, and repeatable processes.

> That changes the question we ask. Instead of only asking what code Copilot can generate, we ask what outcome it can help move forward safely.

### Slide 5 — Multi-model Copilot

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

### Slide 6 — Surfaces

Say:

> The best surface is normally where the work already has gravity and where you can review the result naturally.

> Use the IDE for a tight code-edit-run-test loop. Use GitHub.com when the work already lives in an issue, pull request, repository, or review. Use CLI when terminal commands, local files, GitHub, and connected tools need to work together. Use the Copilot app for longer sessions, multiple tasks, projects, delegation, and visual review. Mobile can help you steer or inspect work away from your desk.

> The screenshot shows the VS Code harness picker. It makes an important point: the IDE can be the place where you choose between local, cloud, and other agent harnesses rather than a single fixed execution mode.

> Sessions can increasingly move across clients, but do not assume every surface has identical tools, connections, permissions, or policy.

Source: [GitHub Copilot in VS Code Universe releases — 28 October 2026](https://github.blog/changelog/2026-10-28-github-copilot-in-vs-code-universe-releases) · [Backing issue](https://github.com/abirismyname/github-changelog-reader/issues/1414)

### Slide 7 — Autonomy modes

Say:

> More autonomy is not automatically better.

> Completion is useful when I know the change and want help typing it. Ask is useful for orientation. Plan is useful when the route is uncertain. Agent is useful after the desired outcome and boundaries are understood. Delegation or automation is useful for bounded work that can be checked later.

> As autonomy increases, scope, acceptance criteria, approval boundaries, and evidence become more important.

### Slide 8 — Coding agents and workflows

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

### Slide 9 — MCPs

Say:

> MCP connects Copilot to a system where context or tools live.

> GitHub MCP provides repository and collaboration context. WorkIQ can provide Microsoft 365 context such as meetings, documents, email, and Teams. Slack MCP provides conversations and threads. Hubbers and documentation connections can help with ownership, internal terminology, and current guidance.

> MCP is the connection, not the answer. A result still needs source inspection. No result can mean missing permissions, a missing connection, or insufficient scope.

### Slide 10 — Skills and customization

Say:

> A skill is a reusable method for a type of work.

> An MCP might retrieve a meeting and related documents. A meeting-preparation skill tells Copilot how to turn that context into a useful briefing.

> Repository instructions capture local commands and conventions. Prompt files preserve a recurring request shape. Workflows and automations are useful when the process is stable enough to repeat.

### Slide 11 — How to work with Copilot

Say:

> Start with the real question, not the name of a feature.

> Retrieve the smallest useful context. Turn it into an observable action. Keep the evidence visible: sources, checks, or a diff. Then make a deliberate decision to publish, delegate, ask a human, or stop.

> A useful prompt is a lightweight contract. State the scope, observable outcome, important boundaries, verification evidence, and any approval point.

Example:

> Inspect the report command and its tests. Plan the smallest change that adds CSV output while preserving the JSON default and public API. Add no dependency. Wait for approval before editing. Verify with targeted tests and summarize remaining risk.

> I will repeat this loop during the demonstration.

### Slide 12 — What is new

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

### Slide 13 — Use cases

Select examples based on the room.

For a mixed audience, say:

> Copilot can help understand unfamiliar work, prepare for a meeting, turn a conversation into an issue, draft or review documentation, and identify the right owner or next step.

For a technical audience, add:

> It can also map a request path, implement a bounded change, investigate a failing workflow, review a pull request, or coordinate repeatable repository tasks.

### Slide 14 — Trust and guardrails

Say:

> Copilot can accelerate discovery and execution. It does not transfer accountability.

> Use the least sensitive context needed. Open the sources behind important claims. Review commands and changes. Keep publication and production actions behind a human decision.

> Policy, legal, HR, security, access, and people decisions should be routed to the official system or accountable owner.

## Part 2: demo plan

The demo has two acts. The first demonstrates connected context and source validation. The second turns a permission-safe source into a GitHub artifact and reviews it.

### Demo setup

Before the session:

- Open the Copilot app or CLI and authenticate.
- Confirm GitHub, WorkIQ, and Slack connections are available if you intend to show them.
- Open the participant overview, companion guide, and this repository.
- Open the three fallback files under `demo-assets/`.
- Hide notifications and unrelated workplace content.
- Use a purpose-built repository if you plan to publish anything.
- Keep the issue draft unpublished during the default demo.

### Slide 15 — Demo

Say:

> We have covered the pieces separately. I will now leave the deck and connect them in a live workflow.

> The detailed prompts, checkpoints, approval boundaries, and fallback paths are in this facilitator script and the demo guide, rather than on the presentation slide.

### Act 1 — Find and validate context

**Timebox:** 12 minutes

Use:

```text
Find today's GitHub Orientation session.

Explain:
- its purpose,
- what I should prepare,
- the most relevant connected meeting, document, Slack, and GitHub context.

Link the sources and show their dates.
Separate sourced facts from your interpretation.
Name missing access, conflicting information, and anything that still needs a human answer.
```

Narration:

1. Point out which connected tools Copilot selects.
2. Open the calendar event or meeting source.
3. Open one linked document or GitHub source.
4. Check date, author or organizer, and whether it reflects the current curriculum.
5. Identify one fact, one interpretation, and one gap.

If the live search is unsafe or unavailable, open `demo-assets/orientation-context.md` and use:

```text
Read demo-assets/orientation-context.md.

Build a short orientation briefing. Separate facts from interpretation, identify the current source, explain why the older recording is not authoritative for the current format, and name what the prepared material cannot tell us.
```

Transition:

> The useful output is not only the summary. It is the summary plus the sources, dates, and known gaps.

### Act 2 — Turn context into GitHub work

**Timebox:** 15 minutes

Open `demo-assets/project-kickoff-notes.md` and show the source before prompting.

Use:

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

1. Show that the prompt names the desired GitHub artifact.
2. Point out the explicit privacy boundary and approval stop.
3. Compare the draft to the decision and open questions in the source.
4. Confirm that the proposed owner was not converted into an assigned individual.
5. Confirm that acceptance criteria are observable.

### Review the artifact

**Timebox:** 8 minutes

Use:

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

If generation stalls, open `demo-assets/example-issue-draft.md` and run only the review prompt.

### Optional technical extension

**Timebox:** up to 10 additional minutes, only for a strongly technical room

Use the Ask → Plan → Agent → Review path in `demo-guide.md`. Do not wait for a long agent run. Switch to the completed branch at the documented cutoff.

### Demo close

Say:

> Copilot helped retrieve context, synthesize it, and produce a GitHub-shaped next step. The human work was selecting the outcome, checking the sources, preserving the privacy boundary, and deciding whether the result was ready to publish.

## Questions and close

Use the final slide for questions. Seed only if needed:

- When should I use Plan instead of Agent?
- Why can different Copilot surfaces return different answers?
- What makes a task appropriate for coding agent or automation?
- What evidence should I require before accepting generated work?
- How do MCPs and skills differ?
- What should never be placed in a prompt?

For availability, policy, privacy, retention, and model questions, use current official documentation and an explicit date. Avoid static promises.
