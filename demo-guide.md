# GitHub Copilot 101 demo guide

**Presenter:** Marta La Casta<br>
**Session:** Tuesday, 25 August 2026<br>
**Feature snapshot:** 18 August 2026
**Demo allocation:** 12 minutes total: 1 minute setup plus 11 minutes live

## Demo objective

Show a visible control loop rather than a coding magic trick:

1. **Ask** to orient safely.
2. **Plan** to agree on scope and constraints.
3. **Agent** to implement and verify.
4. **Review** to challenge the result before accepting it.

Use a tiny, disposable CLI repository with fast tests. The repository should have a report command that returns JSON by default. The change adds a CSV format without changing the default or public API.

## Preparation checklist

- Clone or generate the disposable repository locally.
- Confirm the baseline test command passes in under 10 seconds.
- Confirm the report command emits JSON.
- Prepare one fixture with commas, double quotes, a newline, an empty value, and a Unicode value.
- Keep a clean `demo-start` branch and a completed `demo-finished` branch.
- Record a 60-90 second backup showing the final diff and tests.
- Increase terminal font size and hide notifications.
- Authenticate and open the repository before the session.
- Keep the completed diff available in a second terminal tab.
- Rehearse the prompts with the current client and model, but do not depend on identical wording in the response.

## Exact run of show

### 0:00-1:00 - Set the story

Say:

> We are new contributors in a small CLI repository. Reports already return JSON. We want CSV as an opt-in format without changing the default, adding a dependency, or breaking the API. Watch the control points: orientation, plan approval, verification, and review.

Show the baseline command and one passing test run. Do not explain the repository manually; let the first prompt do that work.

### 1:00-3:00 - Ask

Use:

```text
I'm a new contributor. Explain the command flow for reports, identify the tests that protect it, and recommend the safest files for adding another output format. Cite files and relevant symbols. Do not edit anything.
```

What to point out:

- The prompt gives a role and a bounded question.
- "Cite files and relevant symbols" makes the answer inspectable.
- "Do not edit anything" keeps this step at Ask-level autonomy.
- Correct any wrong assumption before moving on.

If the answer is too broad, use:

```text
Narrow this to the report command's argument parsing, serialization boundary, and existing tests. Give me no more than five bullets, each with a file path.
```

### 3:00-5:00 - Plan

Use:

```text
Plan the smallest change that adds `--format csv` to the report command.

Acceptance criteria:
- JSON remains the default and its output does not change.
- Existing programmatic APIs remain compatible.
- Add no new dependency.
- CSV follows RFC 4180 quoting for commas, double quotes, CR/LF, and embedded newlines.
- Cover delimiter, quote, newline, empty-value, and Unicode cases.
- Run the targeted tests first, then the smallest broader check justified by the change.
- End with changed files, verification evidence, and remaining risks.

Inspect what you need, ask only if blocked, and wait for my approval before editing.
```

What to point out:

- Acceptance criteria define both the new behavior and preserved behavior.
- Edge cases give tests a useful target.
- The agent must stop at an approval boundary.
- Edit the plan if it introduces unrelated refactoring or a dependency.

Approval phrase:

```text
Approved. Keep the implementation scoped to that plan.
```

### 5:00-10:00 - Agent

Use:

```text
Implement the approved plan. Run the targeted tests first, then the smallest broader check that covers the changed behavior. If a check fails, diagnose the cause before editing again. When done, summarize changed files, verification evidence, and remaining risks.
```

Narrate only meaningful transitions:

- Which files the agent chooses and why.
- Each command before it runs.
- Whether tests are exercising observable behavior rather than implementation details.
- Any divergence from the approved plan.
- The evidence in the final summary.

If the implementation starts expanding scope, interrupt with:

```text
Pause. Compare the current changes to the approved plan. Revert only your out-of-scope changes, preserve existing user work, and continue with the smallest compatible implementation.
```

If a test fails, ask:

```text
Explain the failure in one paragraph. Is it a product defect, a test defect, or an environment issue? Cite the evidence and propose the smallest next action. Do not edit yet.
```

### 10:00-12:00 - Review

Use:

```text
Review only the current diff for correctness, RFC 4180 edge cases, backward compatibility, and security. Rank findings by severity, cite file and line, and explain the user-visible impact. Do not edit yet. If there are no high-confidence findings, say so and name the residual risks.
```

What to point out:

- Review is a separate mode of thinking from generation.
- Ranked, cited findings are easier to validate.
- "Do not edit yet" preserves the decision boundary.
- A clean review is not proof; inspect the diff and test evidence yourself.

Close with:

> Copilot proposed the route and performed the work. We supplied the contract, approved the plan, watched the evidence, and made the final judgment.

## Failure-proofing

### Timebox rules

- If orientation takes more than 2 minutes, show the prepared answer and continue.
- If planning takes more than 2 minutes, paste the prepared plan and approve it.
- If implementation is not complete at minute 9, switch to `demo-finished`.
- If the environment or network fails once, switch immediately to the recording or completed branch.
- Never debug authentication, installation, networking, or model availability live.

### Prepared fallback sequence

1. Show the clean baseline on `demo-start`.
2. Read the exact Ask and Plan prompts from this guide.
3. Switch to `demo-finished`.
4. Show the diff, targeted test output, and one report command in CSV mode.
5. Run the Review prompt against the prepared diff, or show the recorded review.

The learning objective survives even if generation is prerecorded because the audience still sees scope, approval, evidence, and human review.

### Common demo risks

| Risk | Prevention | Recovery |
| --- | --- | --- |
| Slow or unavailable model | Rehearse and have a recording | Switch after one failed attempt |
| Dependency install delay | Use no dependencies and commit fixtures | Use prepared branch |
| Long test suite | Keep targeted tests under 10 seconds | Show saved output, run one focused test |
| Agent rewrites too much | Require smallest change and plan approval | Pause and rescope |
| Terminal too dense | Increase font, clear output between phases | Narrate only key evidence |
| CSV edge-case debate | Seed exact RFC 4180 cases | Open the relevant fixture and test |

## Alternative demo ideas

### New contributor orientation

Ask Copilot to map one request path, identify tests, and list safe first changes with citations. This is the lowest-risk substitute and reinforces Ask-level autonomy.

### Pull request review relay

Have Copilot summarize a small prepared pull request, request a focused review, validate one finding manually, and draft a follow-up prompt for the author.

### Issue-to-PR cloud delegation

Use a pre-generated cloud agent result. Show the issue acceptance criteria, session log, isolated branch, checks, and pull request review. Do not wait for cloud execution during the session.

### GitHub.com issue or discussion summary

Ask Copilot to summarize a short issue thread into decisions, unresolved questions, and next actions with links back to comments.

### Customization before and after

Run the same repository question without instructions, add a small `.github/copilot-instructions.md`, and repeat it. Compare specificity and adherence rather than claiming deterministic output.

## Seeded Q&A

- When should I use Plan instead of Agent?
- What makes a task a good fit for Copilot cloud agent?
- What evidence should I require before accepting generated code?
- How do repository instructions differ from a one-off prompt?
- How should I handle a confident answer that cites the wrong file?
- What should never be included in a prompt?
- How do organization policy and content exclusion affect available context?
- Should I ask Copilot to review code it generated?
- How do I keep agent work from expanding beyond scope?
- Which features are available to me right now?

For availability, privacy, retention, policy, and model questions, avoid absolutes. Use the current feature matrix, responsible-use documentation, organization policy, and the feature snapshot date.

## Sources

- [New Hubber Copilot 101](https://github.com/github/onboarding/blob/main/new-hubbers/week-1/copilot-101.md)
- [Reference Copilot 101 deck](https://andreagriffiths11.github.io/copilot-101-deck/)
- [GitHub Copilot features](https://docs.github.com/en/enterprise-cloud@latest/copilot/get-started/features)
- [Using GitHub Copilot Chat in your IDE](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/chat-with-copilot/chat-in-ide)
- [Responsible use of GitHub Copilot Chat](https://docs.github.com/en/enterprise-cloud@latest/copilot/responsible-use/chat)
- [GitHub Copilot feature matrix](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/copilot-feature-matrix)
- [GitHub Copilot changelog](https://github.blog/changelog/label/copilot/)
- [Agent Plugins 1.0 in VS Code, Copilot CLI, and the Copilot app](https://github.blog/changelog/2026-08-12-agent-plugins-1-0-in-vs-code-copilot-cli-and-the-copilot-app)
- [Copilot code review effort levels are generally available](https://github.blog/changelog/2026-08-07-copilot-code-review-effort-levels-are-generally-available)
- [GitHub Trust Center](https://github.com/trust-center)
