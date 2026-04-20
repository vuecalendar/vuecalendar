# @vuecalendar/core

## 1.0.11

### Patch Changes

- Fix: added onBeforeRender

## 1.0.10

### Patch Changes

- Fix: do not fire range-update on initial load

## 1.0.9

### Patch Changes

- Fix month view height and bundle core styles automatically

## 1.0.8

### Patch Changes

- Describe the premium fix

## 1.0.7

### Patch Changes

- Fix month view so the calendar grid stretches to the available height instead of leaving empty space below shorter months.
- Rename remaining `ht-*` calendar class hooks in core source to `vuecalendar-*` for a consistent public class surface.
- Bundle core styles directly into the built package so `@vuecalendar/core` works without a separate theme import.
- Keep calendar theming override-friendly through exported tokens and stable `vuecalendar-*` selectors.

## 1.0.0

### Minor Changes

-

## 0.0.1

### Major Changes

- 8bee788: Improve the core calendar week view and plugin experience for the 2.1 release.
  - Add pricing page, premium plugin badges, wider docs sidebar, and improved mobile navigation
  - Add multi-day week spans, calendar visibility toggles, overlap improvements, and docs playground updates
  - Add full-day fit sizing, restore zoom behavior in fit mode, and improve week view layout handling
  - add a dedicated multi-day lane for events that span across days, including continuation markers for events that start before or end after the visible week
  - refine the reusable event modal flow and extract supporting core composables to keep the calendar components easier to understand
  - improve current-time positioning so it refreshes correctly after zoom and boundary changes
  - expand the copy-event and zoom plugin support in the docs and live playground
  - add docs polish such as a favicon, stronger starter examples, and better demo coverage for multi-day events
  - Fix double time notations on calendar
