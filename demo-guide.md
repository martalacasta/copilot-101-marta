# Copilot at GitHub demo guide

Use this guide with the Pages deck. Prepare every path, then deliver only the two that best fit the room.

## Recommended default

1. **Orientation itself** — connected workplace context, source inspection, and explicit access gaps.
2. **Conversation to contribution** — a short, deterministic local source becomes a reviewed GitHub issue draft.

For a highly technical room, replace the second path with the repository control-loop demo. Do not run all paths.

## Demo A: orientation itself

**Timebox:** 12 minutes
**Purpose:** Show connected context and responsible source inspection using a question everyone shares.

### Live prompt

```text
Find today's GitHub Orientation session. What is its purpose, what should I prepare, and what connected meeting, document, Slack, and GitHub context would help me participate?

Link the sources. Separate sourced facts from your interpretation. For important claims, show the source and date. Tell me what you could not access, where sources conflict, and what still needs a human answer.
```

### Run of show

| Time | Move |
| --- | --- |
| 0:00-1:00 | Explain the shared question and show the available connections without troubleshooting them. |
| 1:00-5:00 | Run the prompt. Narrate which systems are searched and why. |
| 5:00-8:00 | Open the meeting and at least one linked source. Check date, organizer, ownership, and whether the curriculum is current. |
| 8:00-10:00 | Ask the room to identify one retrieved fact, one Copilot interpretation, and one gap. |
| 10:00-12:00 | Produce one visible next step: open a preparation resource or capture a follow-up question. |

### Recovery

- If connected search is slow, returns unrelated personal content, or exposes an unsafe screen-share boundary, stop and use [`demo-assets/orientation-context.md`](demo-assets/orientation-context.md).
- If one connection is missing, name the gap and continue with the sources that are available.
- Do not debug authentication, installation, or permissions live.
- Do not imply that a missing result means the information does not exist.

## Demo B: conversation to contribution

**Timebox:** 12 minutes
**Purpose:** Show a fast cross-tool workflow that ends in a durable GitHub artifact without publishing it.

Open [`demo-assets/project-kickoff-notes.md`](demo-assets/project-kickoff-notes.md) so the audience can see the source.

### Draft prompt

```text
Read demo-assets/project-kickoff-notes.md.

Extract:
- the problem and evidence,
- the decision that was actually made,
- the proposed owner and whether they confirmed,
- unresolved questions,
- the privacy boundary for a repository issue.

Then draft a GitHub issue with:
- a concise title,
- problem statement,
- source links and dates,
- agreed outcome,
- observable acceptance criteria,
- open questions.

Do not publish it. Do not invent owner consent or include private discussion that does not belong in the repository.
```

### Review prompt

```text
Review the issue draft against demo-assets/project-kickoff-notes.md.

List:
1. unsupported or overstated claims,
2. privacy or audience concerns,
3. missing acceptance criteria,
4. unresolved questions that were accidentally presented as decisions,
5. anything that needs owner confirmation.

Do not edit the draft yet.
```

### What to point out

- The source is short and permission-safe, so generation should complete quickly.
- The draft must distinguish a proposed owner from an agreed owner.
- Moving a conversation into GitHub changes its audience and durability.
- Human review happens before publication, not after.

### Recovery

If generation stalls, open [`demo-assets/example-issue-draft.md`](demo-assets/example-issue-draft.md), compare it to the notes, and run only the review prompt.

## Demo C: technical control loop

**Timebox:** 12 minutes
**Purpose:** Show orientation, plan approval, bounded implementation, verification, and review.

Use a tiny disposable CLI repository where a report command returns JSON by default. The task adds an opt-in CSV format without changing the default or public API.

### Ask — 2 minutes

```text
I'm a new contributor. Explain the command flow for reports, identify the tests that protect it, and recommend the safest files for adding another output format. Cite files and relevant symbols. Do not edit anything.
```

### Plan — 2 minutes

```text
Plan the smallest change that adds --format csv to the report command.

Acceptance criteria:
- JSON remains the default and its output does not change.
- Existing programmatic APIs remain compatible.
- Add no new dependency.
- CSV follows RFC 4180 quoting for commas, double quotes, CR/LF, and embedded newlines.
- Cover delimiter, quote, newline, empty-value, and Unicode cases.
- Run targeted tests first, then the smallest broader check justified by the change.
- End with changed files, verification evidence, and remaining risks.

Inspect what you need and wait for my approval before editing.
```

Approval:

```text
Approved. Keep the implementation scoped to that plan.
```

### Agent — 5 minutes

```text
Implement the approved plan. Run the targeted tests first, then the smallest broader check that covers the changed behavior. If a check fails, diagnose the cause before editing again. When done, summarize changed files, verification evidence, and remaining risks.
```

### Review — 2 minutes

```text
Review only the current diff for correctness, RFC 4180 edge cases, backward compatibility, and security. Rank findings by severity, cite file and line, and explain the user-visible impact. Do not edit yet. If there are no high-confidence findings, say so and name the residual risks.
```

### Technical demo preparation

- Keep a clean `demo-start` branch and a completed `demo-finished` branch.
- Confirm baseline and targeted tests pass in under 10 seconds.
- Seed commas, double quotes, CR/LF, embedded newlines, empty values, and Unicode.
- Keep the completed diff and saved test output open in a second terminal.
- If implementation is not complete at minute nine, switch to `demo-finished`.
- After one environment or network failure, use the prepared result. Do not debug live.

## Optional advanced path: failing Actions

Use a saved failing run and pinned commit. Ask Copilot to identify the first relevant failure, trace it to the repository, explain confidence, and propose the smallest fix and validation. A green rerun is evidence, not proof that the requirement is correct.

## Universal demo checklist

Before the session:

- Authenticate and open every required surface.
- Hide notifications and unrelated tabs.
- Increase terminal and browser text size.
- Confirm screen sharing cannot reveal unrelated email, calendar, Slack, or documents.
- Rehearse every selected prompt with the current client.
- Keep static source excerpts, expected output, and a completed branch ready.
- Use a purpose-built repository if you intend to publish anything.

During the session:

- Narrate source choice, approval boundaries, and verification—not every generated sentence.
- Ask what is fact, interpretation, gap, and next action.
- Stop before publishing, merging, sending, or changing production.
- Switch to the fallback after one failure.

## Seeded questions

- When should I stay in Ask or Plan instead of using Agent?
- What makes a task suitable for a coding agent?
- What evidence should I require before accepting generated work?
- Why can two Copilot surfaces return different answers?
- What does a missing search result actually tell me?
- How do I keep private discussion out of a durable GitHub artifact?
- Which connection would be most useful for my role?

For feature availability, policy, privacy, retention, and model questions, avoid static promises. Use the current feature matrix, responsible-use documentation, organization policy, and an explicit date.
