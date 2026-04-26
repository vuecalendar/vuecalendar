# @vuecalendar/current-time

## 1.0.15

### Patch Changes

- Fix: added start, end date to event modal on draw and drag
- Updated dependencies
  - @vuecalendar/core@1.0.15

## 1.0.14

### Patch Changes

- Fix: added start, end date to event modal on draw and drag
- Updated dependencies
  - @vuecalendar/core@1.0.11

## 1.0.13

### Patch Changes

- Fix: revert
- Updated dependencies
  - @vuecalendar/core@1.0.10

## 1.0.12

### Patch Changes

- Fix: added onBeforeRender
- Updated dependencies
  - @vuecalendar/core@1.0.12

## 1.0.11

### Patch Changes

- Fix: added onBeforeRender
- Updated dependencies
  - @vuecalendar/core@1.0.11

## 1.0.10

### Patch Changes

- Fix: do not fire range-update on initial load
- Updated dependencies
  - @vuecalendar/core@1.0.10

## 1.0.9

### Patch Changes

- Fix month view height and bundle core styles automatically
- Updated dependencies
  - @vuecalendar/core@1.0.9

## 1.0.8

### Patch Changes

- Describe the premium fix
- Updated dependencies
  - @vuecalendar/core@1.0.8

## 1.0.7

### Patch Changes

- fixes
- Updated dependencies
  - @vuecalendar/core@1.0.7

## 1.0.6

### Patch Changes

- Fix registry
- Fix registry
- Fix registry
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @vuecalendar/core@1.0.6

## 1.0.5

### Patch Changes

- Fix registry
- Updated dependencies
  - @vuecalendar/core@1.0.5

## 1.0.4

### Patch Changes

- Fix registry 2
- Fix registry 3
- Fix registry 3
- Fix registry 4
- Fix registry 4
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @vuecalendar/core@1.0.4

## 1.0.3

### Patch Changes

- Fix registry
- Updated dependencies
  - @vuecalendar/core@1.0.3

## 1.0.2

### Patch Changes

- Describe the premium fix
- Updated dependencies
  - @vuecalendar/core@1.0.2

## 1.0.1

### Patch Changes

- Fix double time notations on calendar
- Updated dependencies
  - @vuecalendar/core@1.0.1

## 4.0.1

### Patch Changes

- Add pricing page, premium plugin badges, wider docs sidebar, and improved mobile navigation
- Updated dependencies
  - @vuecalendar/shared@4.0.1

## 4.0.0

### Minor Changes

- Add full-day fit sizing, restore zoom behavior in fit mode, and improve week view layout handling

### Patch Changes

- Updated dependencies
  - @vuecalendar/shared@4.0.0

## 3.0.0

### Minor Changes

- Add multi-day week spans, calendar visibility toggles, overlap improvements, and docs playground updates

### Patch Changes

- Updated dependencies
  - @vuecalendar/shared@3.0.0

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

### Patch Changes

- Updated dependencies [a5234b6]
  - @vuecalendar/shared@2.0.0
