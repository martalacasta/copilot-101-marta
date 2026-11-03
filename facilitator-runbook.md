# Copilot at GitHub facilitator runbook

## Session promise

This is a 45-minute session for new Hubbers with basic GitHub familiarity. It has a short conceptual opening, a prepared end-to-end demonstration, and a concise Q&A/close. The presentation does not contain room-calibration questions; those are provided in [`session-script.md`](session-script.md).

> **Question → grounded context → GitHub action → review → next step**

## Run of show

| Time | Segment | Facilitator outcome |
| --- | --- | --- |
| 0:00–0:08 | Opening slides | Cover Copilot's evolution, the assistant/agent/platform frame, surfaces, and the evidence-visible control loop. |
| 0:08–0:09 | Demo transition | Leave the deck and open the prepared Universe Explorer repository. |
| 0:09–0:12 | Prepared customization | Inspect the pre-created custom agent, repository instructions, reusable skill, and connection documentation. |
| 0:12–0:21 | Universe Explorer task | Select the prepared agent, run the checked-in task, and validate sources, dates, and access gaps. |
| 0:21–0:30 | Draft artifact | Turn the validated result into the repository's documented draft artifact without publishing. |
| 0:30–0:35 | Review | Challenge claims, source quality, boundaries, and acceptance criteria. |
| 0:35–0:37 | Demo close | Reinforce what configuration controlled and which decisions remain human-owned. |
| 0:37–0:45 | Questions and resources | Answer useful questions, use appendix slides when helpful, or finish early. |

## Demo selection

Use the prepared **Universe Explorer** workflow as the default. The selected custom agent and supporting configuration must already exist: show how they are defined, select the agent, run the checked-in task, create the documented draft artifact, and review it. Use orientation and conversation-to-contribution only as permission-safe fallbacks. For a strongly technical room, use the repository control loop as an appendix-led follow-up rather than replacing the default 45-minute flow.

| Room | Demo emphasis |
| --- | --- |
| Mostly nontechnical or mixed | Standard Universe Explorer demo with extra narration of agent role, instructions, and sources |
| Highly technical | Standard demo; use Ask → Plan → Agent → Review only after the close if time is explicitly extended |
| Experienced operational audience | Standard demo; discuss workflows or automation from the appendix during Q&A |
| Significant setup gaps | Saved Universe Explorer output, then the permission-safe local fallbacks |

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
