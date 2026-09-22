# 🔎 Change Investigation Report

**Target**: `job-portal-ui/src/components/Footer.jsx` (full file)
**Investigation Date**: 2026-09-17
**Repository**: https://github.com/BrunoYTanaka/claude-course.git
**Branch**: skills

---

## 📋 Investigation Summary

| Detail                  | Value                                             |
| ------------------------ | -------------------------------------------------- |
| File(s) Analyzed         | `job-portal-ui/src/components/Footer.jsx`         |
| Lines Investigated       | entire file (188 lines)                           |
| Total Commits on File    | 5 (on current branch history) + 1 superseded commit off-branch |
| Unique Authors           | 1 person, 2 git identities (see note below)       |
| File Age (First Commit)  | 2026-09-10                                        |
| Last Modified            | 2026-09-14 by Bruno Yoichi Tanaka                 |

**Note on identities**: All commits are authored by the same person under two different git identities: `Bruno Y. Tanaka <brunoyoichi@hotmail.com>` (initial commit) and `Bruno Yoichi Tanaka <37604496+BrunoYTanaka@users.noreply.github.com>` (all subsequent PRs, likely the GitHub web/no-reply identity used when merging PRs). Four of the five commits also credit `Claude Sonnet 5 <noreply@anthropic.com>` or `claude[bot]` as co-author, indicating these tooltip fixes were generated via Claude Code sessions.

---

## 👥 Author Breakdown

| # | Author                  | Email                                             | Commits | Lines Owned  | First Contribution | Last Contribution |
| - | ------------------------ | -------------------------------------------------- | ------- | ------------ | ------------------- | ------------------- |
| 1 | Bruno Y. Tanaka          | brunoyoichi@hotmail.com                           | 1       | 160 (85%)    | 2026-09-10          | 2026-09-10          |
| 2 | Bruno Yoichi Tanaka      | 37604496+BrunoYTanaka@users.noreply.github.com    | 4       | 28 (15%)     | 2026-09-11          | 2026-09-14          |

**Primary Owner**: Bruno Y. Tanaka / Bruno Yoichi Tanaka (same person; 100% of the file, combined across identities) — the bulk of lines (85%) trace to the initial scaffold commit, with the remaining 15% from four incremental tooltip-wiring fixes.
**Most Recent Contributor**: Bruno Yoichi Tanaka, 2026-09-14 (commit `3a972ad`)
**CODEOWNERS**: Not configured

---

## 📅 Change Timeline

### `3a972ad` — 2026-09-14 15:39:13 -0400

- **Author**: Bruno Yoichi Tanaka <37604496+BrunoYTanaka@users.noreply.github.com>
- **Message**: fix: add hover tooltip to Contact Us footer link (#10)
- **Body**: Co-authored-by: claude[bot] <41898282+claude[bot]@users.noreply.github.com>
- **Ticket References**: #10
- **Lines Changed**: +9 / -7
- **What Changed**:
  > Wired the existing `Tooltip` component into the "Contact Us" `Link` in the footer bottom bar, matching the pattern already established for Privacy Policy, Terms of Service, and Cookie Policy. This was the final link in the bottom-bar group to receive tooltip behavior.

### `6f63f9b` — 2026-09-14 19:29:38 +0000 *(superseded, not on current branch tip)*

- **Author**: claude[bot] <41898282+claude[bot]@users.noreply.github.com>
- **Message**: fix: add hover tooltip to Contact Us footer link
- **Body**: Co-authored-by: Bruno Yoichi Tanaka <37604496+BrunoYTanaka@users.noreply.github.com>
- **Ticket References**: None found in this commit's own message (see #10 in the commit that replaced it)
- **Lines Changed**: +9 / -7 (identical diff to `3a972ad`)
- **What Changed**:
  > An earlier/parallel commit on a different branch making the same Contact Us tooltip change. `git log --graph` shows it as a sibling of `3a972ad` rather than an ancestor — most likely the original PR branch commit that was superseded by a rebase, squash, or re-push before merging as `3a972ad` (#10). Included here for completeness since it touches the same lines but is not reachable from the current branch tip.

### `8e35b22` — 2026-09-11 08:39:04 -0400

- **Author**: Bruno Yoichi Tanaka <37604496+BrunoYTanaka@users.noreply.github.com>
- **Message**: fix: show tooltip text on footer Privacy Policy hover (#5) (#7)
- **Body**: The Privacy Policy link in the footer had no tooltip logic — just a decorative empty hover-glow div, so nothing displayed on hover. Wire the existing Tooltip component into the Privacy Policy link, matching the pattern already used for Cookie Policy (#3). Includes `Claude-Session` link and `Co-authored-by: Claude Sonnet 5 <noreply@anthropic.com>`.
- **Ticket References**: #5, #7
- **Lines Changed**: +6 / -4
- **What Changed**:
  > Bug fix — wrapped the Privacy Policy link with `<Tooltip>` so hovering it actually shows explanatory text, reusing the Tooltip component introduced in #3.

### `208625f` — 2026-09-11 08:34:48 -0400

- **Author**: Bruno Yoichi Tanaka <37604496+BrunoYTanaka@users.noreply.github.com>
- **Message**: fix: show tooltip text on footer Terms of Service hover (#4) (#6)
- **Body**: The Terms of Service link in the footer had no tooltip logic — hovering it showed nothing (issue #4). Wire it into the existing Tooltip component, matching the Cookie Policy link fixed in #3. Includes `Claude-Session` link and `Co-authored-by: Claude Sonnet 5 <noreply@anthropic.com>`.
- **Ticket References**: #4, #6
- **Lines Changed**: +6 / -4
- **What Changed**:
  > Bug fix — same pattern as above, applied to the Terms of Service link.

### `8ef08c2` — 2026-09-11 08:14:01 -0400

- **Author**: Bruno Yoichi Tanaka <37604496+BrunoYTanaka@users.noreply.github.com>
- **Message**: fix: show tooltip text on footer Cookie Policy hover (#3)
- **Body**: The Cookie Policy link in the footer had no tooltip logic at all — just a decorative empty hover-glow div, so nothing displayed on hover (issue #2). Add a reusable Tooltip component styled to match the site's dark footer palette and wire it into the Cookie Policy link only. Includes `Claude-Session` link and `Co-authored-by: Claude Sonnet 5 <noreply@anthropic.com>`.
- **Ticket References**: #3 (subject), #2 (referenced in body as the underlying issue)
- **Lines Changed**: +7 / -4
- **What Changed**:
  > First tooltip fix and the origin of the `Tooltip` component itself (also adds the `import { Tooltip } from "./Tooltip"` on line 2). Established the pattern the three later commits (#4/#6, #5/#7, #10) replicated for the other footer links.

### `e4d356b` — 2026-09-10 08:25:43 -0400

- **Author**: Bruno Y. Tanaka <brunoyoichi@hotmail.com>
- **Message**: Initial commit: estrutura de módulos do curso
- **Body**: —
- **Ticket References**: None found
- **Lines Changed**: +179 / -0 (full file creation)
- **What Changed**:
  > Original creation of `Footer.jsx` as part of the initial course/module scaffold commit — includes the full footer layout: brand block, social links, "For Job Seekers"/"For Employers" columns, and the bottom bar with (at this point tooltip-less) legal links and copyright.

---

## 🔬 Line-by-Line Blame (Current State) — Blame Blocks

| Lines     | Author               | Date       | Commit Message                                                      |
| --------- | ---------------------- | ---------- | ---------------------------------------------------------------------- |
| 1         | Bruno Y. Tanaka        | 2026-09-10 | Initial commit: estrutura de módulos do curso                        |
| 2         | Bruno Yoichi Tanaka    | 2026-09-11 | fix: show tooltip text on footer Cookie Policy hover (#3)             |
| 3–144     | Bruno Y. Tanaka        | 2026-09-10 | Initial commit: estrutura de módulos do curso                        |
| 145–150   | Bruno Yoichi Tanaka    | 2026-09-11 | fix: show tooltip text on footer Privacy Policy hover (#5) (#7)       |
| 151–156   | Bruno Yoichi Tanaka    | 2026-09-11 | fix: show tooltip text on footer Terms of Service hover (#4) (#6)     |
| 157–162   | Bruno Yoichi Tanaka    | 2026-09-11 | fix: show tooltip text on footer Cookie Policy hover (#3)             |
| 163–171   | Bruno Yoichi Tanaka    | 2026-09-14 | fix: add hover tooltip to Contact Us footer link (#10)                |
| 172–188   | Bruno Y. Tanaka        | 2026-09-10 | Initial commit: estrutura de módulos do curso                        |

This shows the four bottom-bar links (Privacy Policy, Terms of Service, Cookie Policy, Contact Us — lines 144–172) were incrementally retrofitted with `Tooltip` wrappers one at a time across two days, while everything else in the file (brand block, social icons, footer columns, copyright bar) is untouched since the initial scaffold.

---

## 🎫 Linked Tickets & References

| Ticket ID | Commit    | Author              | Date       | Commit Subject                                                      |
| --------- | --------- | --------------------- | ---------- | ---------------------------------------------------------------------- |
| #2        | 8ef08c2   | Bruno Yoichi Tanaka   | 2026-09-11 | fix: show tooltip text on footer Cookie Policy hover (#3) *(body ref)* |
| #3        | 8ef08c2   | Bruno Yoichi Tanaka   | 2026-09-11 | fix: show tooltip text on footer Cookie Policy hover (#3)             |
| #4        | 208625f   | Bruno Yoichi Tanaka   | 2026-09-11 | fix: show tooltip text on footer Terms of Service hover (#4) (#6)     |
| #5        | 8e35b22   | Bruno Yoichi Tanaka   | 2026-09-11 | fix: show tooltip text on footer Privacy Policy hover (#5) (#7)       |
| #6        | 208625f   | Bruno Yoichi Tanaka   | 2026-09-11 | fix: show tooltip text on footer Terms of Service hover (#4) (#6)     |
| #7        | 8e35b22   | Bruno Yoichi Tanaka   | 2026-09-11 | fix: show tooltip text on footer Privacy Policy hover (#5) (#7)       |
| #10       | 3a972ad   | Bruno Yoichi Tanaka   | 2026-09-14 | fix: add hover tooltip to Contact Us footer link (#10)                |

All four tooltip fixes are fully traceable to GitHub issues/PRs: each footer link got its own tracked bug report (#2/#3, #4, #5, and presumably an issue for #10) before being fixed, and each fix commit also carries a `Claude-Session` link, so the underlying Claude Code sessions are recoverable too.

---

## 💡 Insights

- **Churn Assessment**: Low-to-moderate churn concentrated in a short burst. 4 of 5 commits landed within a 4-day window (2026-09-10 to 2026-09-14), all fixing the same class of bug (missing tooltip wiring) one link at a time rather than in a single batched change. No changes since 2026-09-14 (3 days as of this report).
- **Bus Factor**: 1 — every commit traces back to a single person (Bruno Tanaka), just split across two git identities (personal email vs. GitHub no-reply). No other contributors have touched this file. This is a bus-factor risk in a team context, though expected for a solo/course project.
- **Stale Code Risk**: Not stale — last touched 3 days ago. The file is small and actively maintained; no indication of abandonment.
- **Review Gaps**: None — every fix commit references at least one GitHub issue/PR number, and the tooltip-related commits additionally embed a `Claude-Session` link for full audit-trail traceability. The only commit without a ticket reference is the initial scaffold commit (`e4d356b`), which is expected for a project's first commit. The off-branch commit `6f63f9b` also lacks its own ticket reference, but it's an exact duplicate of `3a972ad` (#10) and was not merged into the branch history used by `main`.
- **Pattern worth noting**: The four tooltip fixes (#3, #4/#6, #5/#7, #10) are a textbook incremental-rollout pattern — the Cookie Policy fix (#3) established the reusable `Tooltip` component, and each subsequent commit just wired it into one more link. If a fifth link is ever added to the footer's bottom bar, it will very likely need the same one-line `Tooltip` wrap treatment.
