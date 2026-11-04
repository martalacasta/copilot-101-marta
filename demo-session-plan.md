# Copilot 101 live demo plan

This is the facilitator script for a 45-minute Copilot 101 session for new Hubbers. It connects workplace context, a prepared repository, customization, implementation, canvas review, VS Code, GitHub Actions, and a cloud follow-up into one continuous story.

## Session promise

The session should feel like a realistic day of work:

> I understand what I need to do, gather trusted context, use a specialized agent, build and inspect a change, validate it through GitHub, and delegate a bounded follow-up.

The goal is not to show every Copilot feature. The goal is to show how the pieces connect around a useful outcome.

## Timing

| Time | Part | Outcome |
| --- | --- | --- |
| 0:00-0:08 | Copilot foundations | Establish shared vocabulary and the story of Copilot. |
| 0:08-0:12 | Find today's work | Use the Copilot app and connected workplace context. |
| 0:12-0:15 | Enter the project | Move from general context into a prepared repository. |
| 0:15-0:19 | Explain customization | Inspect instructions, the custom agent, the skill, and connected tools. |
| 0:19-0:22 | Plan the feature | Use the prepared agent and agree on a bounded implementation plan. |
| 0:22-0:28 | Implement locally | Let the agent make and validate the change in a local sandbox. |
| 0:28-0:32 | Review in canvas | Inspect the rendered result and make one focused correction. |
| 0:32-0:35 | Continue in VS Code | Review the code, diff, and tests in the IDE. |
| 0:35-0:37 | GitHub and cloud continuation | Show pipeline evidence and delegate a bounded cloud follow-up. |
| 0:37-0:45 | Questions | Use appendix slides only when they help answer a question. |

Protect the Q&A start time. If any live step runs long, use the documented cutoff rather than reducing questions.

## The continuous narrative

Use this sentence to connect every part:

> Copilot becomes more useful as we give it a clearer outcome, better context, an appropriate method, the right tools, and a safe place to work.

The demonstration follows this progression:

```text
Workplace question
  -> grounded context
  -> Copilot project
  -> repository instructions
  -> custom agent and skill
  -> approved plan
  -> local implementation
  -> canvas inspection
  -> VS Code review
  -> Actions evidence
  -> bounded cloud follow-up
```

## Before the session

### Presentation

- Open the condensed presentation at the cover slide.
- Keep appendix slides after the close, but do not navigate through them during the normal flow.
- Open the current Copilot feature matrix and official changelog in background tabs for questions.

### Copilot app

- Open a clean project containing only the prepared demo context.
- Confirm the WorkIQ connection is available if using live workplace context.
- Confirm GitHub and any other selected tools are authenticated.
- Hide unrelated projects, sessions, notifications, email, calendar, Slack, and customer information.

### Universe Explorer repository

- Begin from the documented demo-start checkpoint.
- Confirm role-based recommendations are present and the comparison feature is not.
- Confirm the baseline checks pass quickly.
- Open the repository instructions, Universe Guide agent, reusable skill, and connection guide.
- Open the completed fallback checkpoint in a separate prepared session or window.
- Open a pinned successful Actions run and a prepared pull request.
- Confirm the local preview starts quickly.

### Recovery assets

- Keep a permission-safe orientation context file ready.
- Keep the completed implementation ready.
- Keep a screenshot of the browser-canvas result ready.
- Keep saved test output and a successful workflow run ready.
- Switch to the fallback after one failure. Do not debug authentication, installation, networking, or product rollout in front of the room.

---

# Part 1: Copilot foundations

## 0:00-0:01 - Cover

### Say

> Copilot may be familiar to you as code completion, but that is only one interaction. Today I want to show how I use it as an assistant, an agent, and a platform that connects the systems where work already lives.

> We will spend only a few minutes on the foundations. Most of the session will be one continuous demonstration, followed by time for questions.

### Audience takeaway

This is a practical orientation, not a feature inventory.

## 0:01-0:03 - Where Copilot came from

Use the existing evolution slide.

### Say

> Copilot began by helping predict the next line of code. Chat expanded that into explanation and transformation. Model choice and richer context made it more adaptable. Agents added the ability to plan, edit, run tools, and verify. The current direction is coordinated work across repositories, applications, connected systems, and repeatable workflows.

> The important change is the size of the outcome. We have moved from asking, "What code can it suggest?" toward asking, "What useful outcome can it help move forward safely?"

Do not enumerate releases or model versions.

### Transition

> That evolution gives us three useful ways to think about Copilot.

## 0:03-0:05 - Assistant + agent + platform

Use the existing slide with these three definitions.

### Say

> As an assistant, Copilot helps me think, explain, draft, transform, or complete something while I remain in the foreground.

> As an agent, it can work through a bounded task: inspect context, propose a plan, edit files, run tools, test the result, and iterate.

> As a platform, it connects models, context, tools, instructions, skills, policies, agents, and workflows.

> The autonomy changes. Accountability does not. I still define the outcome, inspect the evidence, and decide what is ready.

### Transition

> Those capabilities are available through several surfaces, and the best surface changes as the work changes.

## 0:05-0:07 - One Copilot, different surfaces

Use the existing surfaces slide.

### Say

> I use the Copilot app for longer-running sessions, projects, delegation, and visual review. I use VS Code when reviewing or editing code is the natural activity. GitHub.com is where issues, pull requests, Actions, and collaboration already live. The CLI is useful when the terminal and local tools are central.

> These are not completely separate copilots. They are different surfaces around related context and work. They may have different tools and permissions, so I choose the surface where the context is strongest and the result is easiest to review.

### Transition

> Regardless of the surface, I use the same control loop.

## 0:07-0:08 - Practical control loop

Use the existing "Start with a real question" slide.

### Say

> Start with the real question. Retrieve the smallest useful context. Inspect the sources. Agree on the plan when the route is uncertain. Let the agent act within clear boundaries. Verify the result, and keep consequential actions behind a human decision.

> Let us use that loop on the work I need to do today.

Leave the slides and enter the Copilot app.

---

# Part 2: End-to-end demonstration

## 0:08-0:12 - Find today's work

### Surface

Copilot app with WorkIQ and other permission-appropriate connected context.

### Purpose

Introduce the Copilot app through a real onboarding question rather than a product tour.

### Say before prompting

> I am starting without a repository. My first problem is not coding. It is understanding what I am expected to do today and which sources are current.

### Prompt

```text
Find today's Copilot 101 orientation session.

Tell me:
- who the audience is,
- what outcome I am expected to deliver,
- what material or earlier recording is relevant,
- what has changed since the earlier session,
- what I should prepare before presenting.

Link the sources, show their dates, and separate sourced facts from your interpretation.
Tell me what you could not verify.
```

### While Copilot works, say

> The important behavior is not merely producing a summary. I want Copilot to choose relevant connected sources, preserve links and dates, and state what it could not verify.

### When the answer appears

Open one source. Point out:

- one sourced fact;
- one interpretation;
- one access or information gap;
- the date and owner of the current source;
- why the older recording is useful context but not necessarily the current curriculum.

### Say

> Before I use an answer, I want to understand where it came from. A confident answer without inspectable evidence is not the finish line.

### Cutoff and fallback

At minute 11, stop waiting. If live connected search is slow or unsafe, open the prepared orientation context and say:

> The connection is not the learning objective, so I am switching to the permission-safe fallback. The same review principle applies.

## 0:12-0:15 - Move into the Copilot project

### Surface

Prepared Copilot app project containing the Universe Explorer repository, brief, release sources, and demo assets.

### Say

> Now the outcome has become clearer: I want to help new Hubbers understand selected Universe announcements and how they apply to different roles.

> I have a project prepared around that outcome. It brings together the repository, the design brief, source material, specialized agents, and related sessions. The project gives the work continuity without placing everything into one enormous prompt.

### Prompt

```text
Review this project and repository.

Explain:
- what the site currently does,
- how its information is sourced,
- how it is deployed,
- which checks protect it,
- how the existing role-based recommendations work,
- where comparison state and UI should be added,
- what you still need to know before changing anything.

Do not edit files yet. Cite the relevant repository files.
```

### Point out

- repository structure;
- local release dataset;
- official source links;
- existing tests;
- validation and Pages workflows;
- the existing role-based recommendations;
- the missing announcement-comparison feature.

### Say

> I am using Ask behavior first. Before delegating work, I want the agent to demonstrate that it understands the system and the boundary of the task.

## 0:15-0:19 - Explain how customization fits together

Do not create any customization live. Open the prepared artifacts and explain only the most useful parts.

### Repository instructions

Open the repository instructions.

### Say

> Repository instructions describe how work should be done throughout this repository: its architecture, commands, conventions, accessibility requirements, testing expectations, and approval boundaries.

> They apply broadly. They are not a persona and they are not tied to only one prompt.

Highlight:

- purpose and audience;
- important files;
- validation commands;
- source requirements;
- privacy and deployment boundaries.

### Custom agent

Open the prepared Universe Guide agent.

### Say

> A custom agent is more specialized. It defines the role Copilot should take for this type of work, the instructions it should follow, the tools it may use, and the boundaries around its output.

> This agent is optimized for explaining current GitHub capabilities to new Hubbers. It preserves dates and official sources, distinguishes release status, protects accessibility, and stops before deployment or merge.

Highlight:

- name and description;
- responsibilities;
- available tools;
- required evidence;
- explicit prohibitions.

Do not read the entire file.

### Skill

Open the prepared release-research skill.

### Say

> A skill captures a reusable method. This one explains how to research an announcement, record its source and status, translate it for this audience, update the dataset, and validate the result.

> The agent gives Copilot a specialized role. The skill gives it a repeatable method.

### MCP and plugins

Open the short connection guide.

### Say

> MCP provides connections to systems where context or actions live. WorkIQ can retrieve permission-appropriate Microsoft 365 context. GitHub tools can inspect repositories, pull requests, Actions, and releases. Slack can provide conversation context when it is connected and appropriate.

> A plugin can package capabilities such as tools, skills, agents, and instructions so they can be installed and managed together.

Use this summary:

| Mechanism | Simple explanation |
| --- | --- |
| Repository instructions | How work should be done here |
| Custom agent | Who Copilot is for this task and where it must stop |
| Skill | A reusable method for doing a type of work |
| MCP | A connection to external context or actions |
| Plugin | A package that can distribute related capabilities |

### Transition

> Now I will select the prepared Universe Guide agent and give it another bounded feature to implement.

## 0:19-0:22 - Plan the comparison feature

### Surface

Copilot app, Universe Guide agent, Plan mode.

### Prompt

```text
Add a comparison mode to the Universe Explorer.

Allow users to select up to two announcements and compare them side by side.

Requirements:
- use only the prepared local release data;
- add an accessible Compare control to each announcement;
- show date, availability status, practical outcome, relevant audiences, summary, and official source;
- prevent more than two announcements from being selected and explain the limit;
- allow either selection to be removed and provide a clear-all action;
- make differences understandable without relying only on color;
- preserve the existing visual design;
- support keyboard navigation and visible focus;
- keep the content understandable when JavaScript is unavailable;
- preserve the existing role-based recommendations;
- add focused tests for selection, the two-item limit, removal, clear-all, and empty states;
- do not change deployment configuration;
- do not publish, merge, or deploy.

Inspect what you need, propose the smallest implementation plan, and wait for my approval before editing.
```

### While the plan is generated, say

> Plan mode is useful because the desired outcome is clear, but the safest implementation route still needs agreement. The acceptance criteria also give us something observable to review later.

### Inspect the plan

Check that it:

- names the expected files;
- preserves existing role recommendations;
- enforces the two-announcement limit;
- preserves the no-JavaScript path;
- includes focused tests;
- does not change pipelines or deployment;
- contains a validation step.

### Optional editor canvas

If time and reliability allow, open the plan in an editor canvas.

### Say

> A canvas can be a shared working artifact. I can inspect and refine the plan directly rather than treating generated text as immutable.

Add or emphasize:

```text
The experience must remain understandable when JavaScript is unavailable.
```

Approve the plan:

```text
Approved. Keep the implementation scoped to this plan and stop before any publication or deployment action.
```

### Cutoff

At minute 22, approve a reasonable plan. Do not spend demo time optimizing wording.

## 0:22-0:28 - Implement in a local sandbox

### Surface

Copilot app using the prepared local repository and local sandbox.

### Say

> This work benefits from immediate access to the local repository and a fast preview loop, so I am keeping it local. The sandbox provides explicit boundaries around the files, network, credentials, and tools available to agent-run commands.

### Prompt

```text
Implement the approved plan.

Run the focused checks first. If they pass, run the smallest broader validation justified by the change.

When finished, report:
- files changed,
- acceptance criteria satisfied,
- commands and results,
- remaining risks.
```

### Narrate selectively

Do not narrate every tool call. Point out:

- the agent reads repository instructions;
- it uses the prepared skill or data format;
- permission requests show the execution boundary;
- it edits only the planned files;
- it runs targeted checks;
- it reports evidence and residual risk.

### Say when tests pass

> A passing test is useful evidence, but it does not tell us whether the page looks right, communicates clearly, or works well for a person. We need another review surface.

### Cutoff and fallback

At minute 27:

- If implementation is complete, continue normally.
- If it is still running, switch to the completed checkpoint.
- If one command or environment action fails, use saved output.

Say:

> I am switching to the prepared result so we can review the outcome rather than debug the environment.

## 0:28-0:32 - Review the result in a browser canvas

### Surface

Browser canvas beside the Copilot conversation.

### Say

> Conversation is effective for reasoning and instructions, but a visual result needs a visual review surface. I will open the running application in a browser canvas while keeping the surrounding session context.

Open the preview, select two announcements for comparison, remove one, and select another.

### Prompt

```text
Review the Universe Explorer currently open in the browser canvas against the approved requirements.

Test:
- selecting one and then two announcements;
- the maximum-selection message;
- removing either announcement and clearing the comparison;
- keyboard-only navigation;
- visible focus;
- default and empty states;
- narrow-screen layout;
- whether differences remain understandable without relying only on color;
- whether date, availability status, practical outcome, relevant audiences, summary, and official source remain visible;
- whether existing role-based recommendations still work.

Separate:
1. functional defects,
2. accessibility concerns,
3. visual improvements,
4. subjective design preferences.

Do not edit yet. Recommend only the smallest high-confidence correction suitable for this demo.
```

### Say while reviewing

> I have asked Copilot to separate defects from preferences. That helps prevent a subjective redesign from being presented as a required correction.

Select one high-confidence correction.

### Follow-up prompt

```text
Implement the highest-confidence correction.

Keep the change narrowly scoped, run the relevant checks, and refresh the browser canvas so we can compare the result.
```

### Say after refresh

> The canvas made the outcome inspectable. The agent proposed a correction, but I chose whether it was justified before allowing another edit.

### Fallback

If the preview cannot open, use the prepared screenshot. Run the same review prompt against the expected result, or explain the prepared review findings.

## 0:32-0:35 - Continue in VS Code

### Surface

VS Code with the same repository.

### Say

> The work has changed again. I no longer need workplace discovery or broad project orchestration. I need to inspect code, tests, and the diff, so VS Code is now the natural surface.

Show:

- the changed files;
- the comparison selection and rendering logic;
- one focused test;
- the custom agent or agent selector;
- the source links preserved in data;
- the final diff.

### Optional prompt

```text
Review only the current diff.

Check:
- whether the implementation matches the approved plan,
- keyboard and no-JavaScript behavior,
- unsupported product claims,
- unnecessary complexity,
- missing focused tests.

Do not edit. Report only high-confidence findings and remaining risks.
```

### Say

> Moving between surfaces does not remove the need to rebuild context. Repository instructions, the branch, the diff, and the approved plan help preserve continuity.

Avoid making another substantial change in VS Code.

## 0:35-0:37 - GitHub Actions and cloud continuation

### GitHub Actions

Open the prepared pull request or pinned workflow run.

### Say

> When the change moves into GitHub, the repository pipeline gives the team repeatable evidence. The checks validate the HTML, JavaScript behavior, release-data structure, links, and selected accessibility requirements.

> A green workflow is evidence that these checks passed. It is not proof that every requirement, product claim, or design decision is correct.

Do not wait for a new workflow run. Use the prepared result.

### Cloud follow-up

Show or start this bounded task:

```text
Continue this work in a cloud sandbox.

Review the current branch for accessibility and narrow-screen behavior.
Make only high-confidence fixes that remain within the approved scope.
Run the relevant checks and prepare the result for pull request review.

Do not merge, deploy, modify repository settings, or expand the feature.
```

### Say

> This follow-up is bounded, asynchronous, and independently reviewable, which makes it a better fit for a cloud session. I do not need to wait for it during this meeting. Its durable output should be a branch or pull request that a person can review.

> The important difference is not that cloud is always better. Local was useful for immediate visual iteration. Cloud is useful for a contained follow-up that can continue independently.

Stop the demo. Do not wait for completion.

---

# Demo close

## 0:37 - Return to the closing slide

### Say

> We began with a workplace question rather than a repository. Copilot retrieved connected context and showed its sources. A project carried that outcome into a prepared repository. Instructions explained how work should be done. A custom agent provided a specialized role and boundaries. A skill supplied a repeatable method. Connected tools provided context and actions.

> The agent planned and implemented a bounded change locally. A canvas made the result visible. VS Code made the code and diff easy to inspect. GitHub Actions provided repeatable evidence. A cloud sandbox allowed a contained follow-up to continue without blocking this session.

> The common pattern was not a particular feature. It was: define the outcome, provide the right context, select the appropriate surface, keep evidence visible, and preserve human control over consequential actions.

Use this final line:

> Start tomorrow with one real question and one source you can inspect.

Begin Q&A.

---

# Q&A guidance

Use appendix slides only in response to relevant questions.

| Question | Appendix material |
| --- | --- |
| Which model should I use? | Multi-model Copilot and Fusion |
| When should I use Plan or Agent? | Autonomy modes |
| Where does agent work run? | Local sandbox, cloud sandbox, and Actions |
| What is the difference between MCP, skills, and agents? | MCP and customization slides |
| Can Copilot keep a pull request moving? | Agents, workflows, code review, and Agent Merge |
| What shipped recently? | Dated "What is new" slide and official changelog |
| How should I handle sensitive information? | Trust and guardrails |

For availability, billing, rollout, policy, privacy, or retention questions:

1. State that the answer depends on current plan, client, policy, and rollout.
2. Use an explicit date.
3. Open the current official documentation.
4. Avoid promising availability based only on the demo environment.

Useful sources:

- [GitHub Copilot feature matrix](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/copilot-feature-matrix)
- [GitHub Copilot changelog](https://github.blog/changelog/label/copilot/)
- [GitHub Copilot app Universe releases](https://github.blog/changelog/2026-10-28-github-copilot-app-universe-releases)
- [GitHub Copilot in VS Code Universe releases](https://github.blog/changelog/2026-10-28-github-copilot-in-vs-code-universe-releases)
- [Route and orchestrate models with GitHub Copilot Fusion](https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion)

---

# Presenter guardrails

- Never show unrelated workplace, customer, HR, legal, security, or personal context.
- Do not debug authentication or permissions live.
- Do not create the custom agent, skill, instructions, or pipelines live.
- Do not build the complete website live.
- Do not wait for a long agent or workflow run.
- Do not merge, deploy, publish, send, or change repository settings during the default demo.
- Do not treat generated text, passing tests, a canvas preview, or a green workflow as sufficient on its own.
- After one failure, use the prepared fallback.
- Protect the Q&A start time.

# Rehearsal success criteria

The demonstration is ready when:

- the opening slides consistently finish within eight minutes;
- connected-context discovery completes or switches to fallback within four minutes;
- repository explanation finishes within three minutes;
- customization explanation finishes within four minutes;
- the plan is approved by minute 22;
- implementation or fallback is ready by minute 28;
- canvas review and correction finish by minute 32;
- VS Code review finishes by minute 35;
- the Actions and cloud explanation stops by minute 37;
- no screen exposes unrelated or sensitive information;
- every consequential action remains behind an explicit human decision.
