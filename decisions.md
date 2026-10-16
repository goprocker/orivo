# Project Decisions

This file records meaningful code and architecture decisions. Add an entry immediately after each relevant change. Preserve earlier entries so contributors can understand how the project evolved.

## 2026-10-16 — Establish a project decision log

### What changed

Added `decisions.md` as the repository's ongoing record of meaningful implementation decisions.

### Why this approach

A repository-local Markdown log keeps reasoning beside the code, makes changes reviewable, and requires no external service. Each entry records the change, its rationale, and the rejected alternatives at the time the change is made.

### Why this method over alternatives

Markdown was chosen over comments, commit messages alone, or an external tracker. Comments should explain code rather than project history, commit messages can be squashed or unavailable, and external trackers may not be accessible to every contributor. A single chronological file is lightweight and easy to search.

## 2026-10-16 — Use one pull request per task

### What changed

Updated contributor guidance to require a separate branch, commit, push, and pull request for every task. Each pull request must describe additions in detail and include verification evidence.

### Why this approach

Task-scoped pull requests keep reviews focused, make changes easier to trace or revert, and preserve a clear record of what each task delivered.

### Why this method over alternatives

Separate pull requests were chosen over batching unrelated tasks into one branch or pushing directly to the default branch. Batching obscures ownership and complicates rollback; direct pushes bypass review and provide less context.

## 2026-10-16 — Establish `main` and `preprod` branches

### What changed

Connected the project to `goprocker/orivo`, bootstrapped `main` with a minimal README, and created `preprod` for review-ready work. Updated contributor guidance to name both branch roles.

### Why this approach

An initialized `main` branch provides a stable pull request target. `preprod` holds changes for review before they enter the default branch.

### Why this method over alternatives

A persistent `preprod` branch was chosen because the repository owner requested it. Direct work on `main` would bypass review, while creating only short-lived branches would not provide the requested shared pre-production integration branch.

## 2026-10-16 — Protect `main` and align `preprod`

### What changed

Fast-forwarded `preprod` to the merged `main` commit. Added an active GitHub ruleset that blocks deletion and force pushes on `main` and requires changes to enter through pull requests. Expanded the README with the current branch workflow.

### Why this approach

The ruleset enforces the repository's documented review process instead of relying on contributor memory. Keeping `preprod` aligned after a merge prevents later work from starting on an outdated base.

### Why this method over alternatives

A repository ruleset was chosen over informal guidance or legacy branch protection because one policy can enforce pull requests, deletion protection, and non-fast-forward protection together. Required approvals were left at zero while the repository has one active maintainer; mandatory approval would block routine merges without adding an independent reviewer.
