# Show deployment status freshness in the customer portal

## Problem

Customers can see a deployment status that is older than the state in the internal deployment system. Support recorded 18 related tickets during the four weeks ending 23 October 2026.

Sources:

- [Support ticket summary](https://example.invalid/support/atlas-status-summary), updated 23 October 2026
- [Portal status documentation](https://example.invalid/docs/portal-status), updated 14 July 2026
- [Deployment events API](https://example.invalid/repos/atlas/deployment-events), updated 22 October 2026

## Agreed outcome

Investigate displaying the last-updated timestamp beside deployment status and document the expected refresh window.

The kickoff did not approve a color change or a new real-time backend.

## Proposed owner

Atlas engineering team. A specific engineer and delivery date still need confirmation.

## Acceptance criteria

- Confirm which repository owns the portal status component.
- Confirm whether the current API exposes the timestamp required by the portal.
- Display a human-readable last-updated timestamp beside deployment status.
- Ensure the status detail meets the applicable accessibility requirements.
- Document the expected refresh behavior using wording approved by Product and, if required, Legal.
- Add tests for timestamp rendering and missing timestamp behavior.

## Open questions

- Is the 15-minute cache window guaranteed or only typical?
- Should documentation state an exact refresh time or a range?
- Who is the confirmed engineering owner?
- Does the customer-facing wording require Legal review?

## Privacy note

Do not add customer names, ticket contents, individual customer details, or the private Support response template to this issue.
