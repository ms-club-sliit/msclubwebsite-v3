# Contributing to MS Club Website v3

Thanks for taking the time to contribute. This guide covers the workflow that matters most for working on this repository.

## Before You Start

- Use Node.js 18 or newer.
- Install dependencies with npm.
- Start from the latest `main` branch unless a maintainer tells you otherwise.

## Local Setup

```bash
git clone <repository-url>
cd msclubwebsite-v3
npm install
npm run dev
```

The app runs at `http://localhost:3000` by default.

## Working on Changes

- Create a new branch for your work.
- Keep each branch focused on one feature, fix, or content update.
- Follow the existing folder structure under `src/` when adding pages, components, or data.
- Keep code changes small and easy to review.
- Add or update any content, assets, or data needed for the change.

## Verification

Before opening a pull request, make sure the app still builds and the affected pages work as expected.

```bash
npm run build
npm run lint
```

If your change affects a specific page or flow, open it locally and check the behavior manually with `npm run dev`.

## Pull Request Checklist

- The branch is up to date with `main`.
- The change is described clearly in the pull request.
- Any visual changes include screenshots or a short screen recording.
- Build verification passes.
- The scope stays focused on the intended change.

## Good Contribution Habits

- Reuse existing components and data patterns where possible.
- Keep naming consistent with the current codebase.
- Update documentation when the behavior or setup changes.
- Avoid unrelated refactors in the same pull request.
