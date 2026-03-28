# Changesets

This repository uses Changesets for versioning and npm publishing.

Typical flow:

1. Run `npm run changeset`
2. Describe the packages affected and choose the version bump
3. Merge the generated changeset into `main`
4. GitHub Actions opens or updates the release PR
5. Merging that release PR publishes the packages to npm

The docs package is intentionally ignored because it is not published.
