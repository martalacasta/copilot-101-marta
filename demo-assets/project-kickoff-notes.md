# Project Atlas kickoff notes

This is fictional, permission-safe material for the Copilot 101 demonstration.

**Meeting date:** 24 October 2026  
**Participants:** Priya (Product), Sam (Engineering), Lee (Support), Morgan (Design)

## Context

Support receives repeated questions because the deployment status shown in the customer portal can lag behind the internal deployment system. In the last four weeks, Support recorded 18 tickets where customers believed a completed deployment was still running.

Source links:

- Support ticket summary: `https://example.invalid/support/atlas-status-summary` — updated 23 October 2026
- Portal status documentation: `https://example.invalid/docs/portal-status` — updated 14 July 2026
- Deployment events API: `https://example.invalid/repos/atlas/deployment-events` — updated 22 October 2026

## Discussion

- Engineering believes the portal reads a cache that can be up to 15 minutes old.
- Product wants customers to see a clear timestamp and a link to more detail.
- Design suggested changing the status color, but the group did not agree because color alone would not explain freshness.
- Support asked for a short internal response template. That request belongs in the private Support workspace, not the public product repository.

## Decision

The group agreed to investigate displaying the **last updated timestamp** beside deployment status and to document the expected refresh window.

The group did **not** approve a color change or a new real-time backend.

## Ownership

Sam said the Atlas engineering team could investigate the portal change. Sam did not assign a specific engineer or confirm a delivery date.

Priya will confirm whether the customer-facing wording needs Product or Legal review.

## Open questions

1. Is the 15-minute cache window guaranteed or only typical?
2. Which repository owns the portal status component?
3. Is the timestamp already available in the current API response?
4. What accessibility requirements apply to the new status detail?
5. Should the documentation state an exact refresh time or a range?

## Privacy boundary

The GitHub issue may include the aggregate count of 18 tickets and the product behavior. It must not include customer names, ticket contents, the private Support response template, or individual customer details.
