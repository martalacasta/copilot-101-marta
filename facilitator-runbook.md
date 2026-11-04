# Copilot at GitHub facilitator runbook

## Session promise

This is a 45-minute session for new Hubbers with basic GitHub familiarity. It has a short conceptual opening, a prepared end-to-end demonstration, and a concise Q&A/close. The presentation does not contain room-calibration questions; those are provided in [`session-script.md`](session-script.md).

> **Question → grounded context → GitHub action → review → next step**

## Run of show

| Time | Segment | Facilitator outcome |
| --- | --- | --- |
| 0:00–0:08 | Opening slides | Cover Copilot's evolution, the assistant/agent/platform frame, multi-model/multi-surface/multi-agent, the surface expansion, and the demo transition. |
| 0:08–0:12 | Ground in today's work | Select the SE agent and use WorkIQ, Slack, and GitHub context to prepare for the current Copilot 101 session. |
| 0:12–0:15 | Enter the project | Move from the grounded work question into the prepared Universe Explorer repository. |
| 0:15–0:19 | Prepared customization | Inspect repository instructions, the Universe Guide agent, the reusable skill, and connection documentation. |
| 0:19–0:22 | Plan | Agree on a bounded role-selector implementation plan and approval point. |
| 0:22–0:28 | Implement | Make and validate the scoped change locally, or switch to the completed checkpoint. |
| 0:28–0:32 | Visual review | Inspect the rendered result in a browser canvas and make one focused correction. |
| 0:32–0:35 | Code review | Continue in VS Code to inspect the diff, tests, sources, and remaining risks. |
| 0:35–0:37 | GitHub continuation | Show Actions evidence and delegate a bounded cloud follow-up without waiting. |
| 0:37–0:45 | Questions and resources | Answer useful questions, use appendix slides when helpful, or finish early. |

## Demo selection

Use the connected **SE agent → Universe Explorer** workflow as the default. Begin with the current Copilot 101 session as a normal workplace question, using permission-appropriate WorkIQ, Slack, and GitHub context. Then move into the prepared repository and show the complete day-to-day control loop: understand, inspect customization, plan, implement, visually review, inspect the diff, check Actions evidence, and delegate a bounded follow-up. Use the saved connected-context result, completed checkpoint, and screenshots as the first recovery paths.

| Room | Demo emphasis |
| --- | --- |
| Mostly nontechnical or mixed | Keep the complete story but spend less time in code; use the prepared checkpoint sooner and emphasize agents, sources, review, and boundaries |
| Highly technical | Show the full plan, implementation, canvas, VS Code, Actions, and cloud sequence |
| Experienced operational audience | Emphasize connected context, projects, workflows, Actions evidence, and asynchronous follow-up |
| Significant setup gaps | Use the saved connected-context result, completed checkpoint, screenshot, and pinned Actions run |

## Preparation checklist

### One week before

- Confirm session duration, audience size, and whether basic GitHub familiarity is expected.
- Confirm the presentation environment has the Copilot surfaces and connections you intend to show.
- Prepare the purpose-specific custom agent and verify its role, instructions, allowed tools, boundaries, and expected output.
- Prepare repository-level Copilot instructions, a reusable skill or equivalent workflow guidance, and documented plugin/MCP connections.
- Add comments or companion documentation explaining what each customization artifact does and where its responsibility stops.
- Decide which repository, issue, or prepared source is safe to screen-share.
- Create a purpose-built issue or repository if anything may be published.
- Request access to older recordings for facilitation reference, but treat the current written guidance as authoritative.

### One day before

- Rehearse the exact selected prompts with the current client.
- Open every prepared customization artifact and rehearse the order in which you will explain it.
- Confirm the pre-created custom agent can be selected and can access only the intended tools and context.
- Confirm every selected live step completes quickly enough.
- Open and authenticate required tabs and applications.
- Hide notifications and unrelated calendar, email, Slack, and document content.
- Prepare static excerpts, saved output, and completed branches.
- Confirm the Pages deck works online and from a local HTTP server.

### Fifteen minutes before

- Start the local fallback server if desired: `python3 -m http.server 8000`.
- Open the deck, participant guide, companion guide, and demo sources.
- Increase browser and terminal font size.
- Close unrelated windows and disable notifications.
- Test keyboard navigation and speaker notes with `N`.
- Test `A` for the appendix, `End` for the main close, and `Shift+End` for the final reference slide.
- Put a timer where only the facilitator can see it.
- Keep [`session-script.md`](session-script.md) open as the presenter talk track.

## Facilitation moves

- Ask who is in the room before selecting demos.
- Inspect the prepared agent and configuration; never create or configure the custom agent live.
- Explain the distinction: the agent defines a specialist role, repository instructions apply broad local rules, a skill captures a reusable method, MCP supplies connections/tools, and a plugin can package those artifacts.
- Narrate why a source or surface was selected.
- Open at least one source behind every important answer.
- Ask the room to identify fact, interpretation, gap, and next action.
- Keep drafts unpublished unless the destination is purpose-built and approved.
- Switch to the fallback after one live failure.
- End early when the outcomes are met.

## Avoid

- A long product-history or feature-inventory opening.
- Creating the custom agent, skill, plugin, MCP configuration, or repository instructions during the live session.
- Static model catalogs or claims that every feature is available to everyone.
- Debugging authentication, installation, networking, or access in front of the room.
- Waiting for a coding agent or long test suite to finish.
- Screen sharing unrelated workplace or personal context.
- Treating a confident answer, a passing test, or a green workflow as sufficient review.

## After the session

Record:

- audience mix and selected demos,
- questions participants brought,
- setup or permission friction,
- timing that ran long or short,
- prompts and fallbacks that worked,
- guidance that appeared stale.

Update only repeatable improvements in the core materials. Keep one-off cohort notes outside the living guide.
