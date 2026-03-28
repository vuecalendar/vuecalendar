# @vuecalendar/core

## 4.0.1

### Patch Changes

- Add pricing page, premium plugin badges, wider docs sidebar, and improved mobile navigation

## 4.0.0

### Minor Changes

- Add full-day fit sizing, restore zoom behavior in fit mode, and improve week view layout handling

## 3.0.0

### Minor Changes

- Add multi-day week spans, calendar visibility toggles, overlap improvements, and docs playground updates

## 2.1.0

### Minor Changes

- 8bee788: Improve the core calendar week view and plugin experience for the 2.1 release.

  - add a dedicated multi-day lane for events that span across days, including continuation markers for events that start before or end after the visible week
  - refine the reusable event modal flow and extract supporting core composables to keep the calendar components easier to understand
  - improve current-time positioning so it refreshes correctly after zoom and boundary changes
  - expand the copy-event and zoom plugin support in the docs and live playground
  - add docs polish such as a favicon, stronger starter examples, and better demo coverage for multi-day events

## 2.0.0

### Major Changes

- a5234b6: Refactor the @vuecalendar package structure and internal styling architecture.

  Breaking change:
  Package names were migrated from the old `@vuecalendar/*` scope to `@vuecalendar/*`.

  Why:
  This aligns the npm scope with the new `vuecalendar` organization and makes publishing consistent.

  How to update:
  Replace imports like `@vuecalendar/core` with `@vuecalendar/core` and update any related package references in your app, docs, or tooling configuration.

