# Copilot at GitHub facilitator runbook

## Session promise

This is a 90-minute session for new Hubbers with basic GitHub familiarity. It has two explicit parts: Copilot fundamentals, followed by an end-to-end demonstration. The presentation does not contain room-calibration questions; those are provided in [`session-script.md`](session-script.md).

> **Question → grounded context → GitHub action → review → next step**

## Run of show

| Time | Segment | Facilitator outcome |
| --- | --- | --- |
| 0:00–0:05 | Opening and room calibration | Ask the separate facilitator questions and understand the room. |
| 0:05–0:35 | Copilot fundamentals | What Copilot is, what is new, surfaces, autonomy, MCPs, skills, working patterns, use cases, and guardrails. |
| 0:35–0:47 | Demo act 1 | Find connected context and validate sources, dates, and access gaps. |
| 0:47–1:02 | Demo act 2 | Turn a permission-safe source into a GitHub issue draft. |
| 1:02–1:10 | Demo review | Challenge unsupported claims, privacy boundaries, ownership, and acceptance criteria. |
| 1:10–1:15 | Demo close | Reinforce the control loop and human accountability. |
| 1:15–1:30 | Questions and resources | Answer useful questions, cover setup pointers, or finish early. |

## Demo selection

Use **orientation itself** as the connected-context opener. Follow it with the prepared conversation-to-contribution example. For a strongly technical room, use the repository control loop as an optional extension rather than replacing the fundamentals section.

| Room | Demo emphasis |
| --- | --- |
| Mostly nontechnical or mixed | Connected context and conversation to contribution |
| Highly technical | Standard demo plus the short Ask → Plan → Agent → Review extension |
| Experienced operational audience | Use an Actions or incident example for the optional extension |
| Significant setup gaps | Use both prepared local fallbacks |

## Preparation checklist

### One week before

- Confirm session duration, audience size, and whether basic GitHub familiarity is expected.
- Confirm the presentation environment has the Copilot surfaces and connections you intend to show.
- Decide which repository, issue, or prepared source is safe to screen-share.
- Create a purpose-built issue or repository if anything may be published.
- Request access to older recordings for facilitation reference, but treat the current written guidance as authoritative.

### One day before

- Rehearse the exact selected prompts with the current client.
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
- Put a timer where only the facilitator can see it.
- Keep [`session-script.md`](session-script.md) open as the presenter talk track.

## Facilitation moves

- Ask who is in the room before selecting demos.
- Narrate why a source or surface was selected.
- Open at least one source behind every important answer.
- Ask the room to identify fact, interpretation, gap, and next action.
- Keep drafts unpublished unless the destination is purpose-built and approved.
- Switch to the fallback after one live failure.
- End early when the outcomes are met.

## Avoid

- A long product-history or feature-inventory opening.
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
