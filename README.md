# VueCalendar

<p align="center">
  A modern Vue 3 calendar toolkit with week, day, month, list, and resource views.
</p>

<p align="center">
  Lightweight, dependency-conscious, plugin-friendly, and built for real scheduling interfaces.
</p>

<p align="center">
  <a href="https://www.npmjs.com/search?q=%40vuecalendar"><img alt="npm scope" src="https://img.shields.io/badge/npm-%40vuecalendar-CB3837?style=for-the-badge&logo=npm"></a>
  <img alt="Vue 3" src="https://img.shields.io/badge/Vue-3.x-42B883?style=for-the-badge&logo=vuedotjs&logoColor=white">
  <img alt="License MIT" src="https://img.shields.io/badge/license-MIT-111827?style=for-the-badge">
</p>

---

## Why VueCalendar?

VueCalendar is a modular calendar workspace for Vue 3 apps that need more than a basic date grid. The public repo includes the core calendar package plus a focused set of plugins for controls, event services, recurrence, current-time indicators, and scroll behavior.

It is a great fit for:

- Internal planning tools
- Booking and scheduling interfaces
- Team calendars
- Operations dashboards
- Resource-based timeline views

## Highlights

- Multiple built-in views: `day`, `week`, `month`, `list`, and `resource`
- Vue 3-first API with installable components and named exports
- No external UI framework dependency in `@vuecalendar/core`
- Plugin system for imperative control and feature extensions
- Async event loading with `fetchEvents`
- Drag, resize, draw, zoom, and scroll APIs in the core calendar instance
- Locale-aware labels and date formatting
- Color-coded calendars and optional sidebar visibility controls

## Packages

This repository is a public workspace extracted from the private VueCalendar monorepo.

### Core

- `@vuecalendar/core`
  The main Vue 3 calendar package. Exposes the main `VueCalendar` component, standalone view components, shared utilities, and the plugin definition API.

### Official plugins

- `@vuecalendar/calendar-controls`
  Imperative date/view/range control without needing a component ref.
- `@vuecalendar/current-time`
  Live "now" indicator for day and week views.
- `@vuecalendar/event-recurrence`
  Recurring event expansion with RRULE-style configuration.
- `@vuecalendar/events-service`
  Add, update, remove, and inspect calendar events through a clean API.
- `@vuecalendar/scroll-controller`
  Set an initial scroll position and scroll programmatically in day/week views.

### Premium packages not included here

- `@vuecalendar-premium/copy-event`
- `@vuecalendar-premium/drag-to-calendar`
- `@vuecalendar-premium/draw`
- `@vuecalendar-premium/event-modal`
- `@vuecalendar-premium/resize`
- `@vuecalendar-premium/resource-scheduler`
- `@vuecalendar-premium/zoom`

## Installation

Install the core package first:

```bash
npm install vue @vuecalendar/core
```

Add plugins as needed:

```bash
npm install @vuecalendar/events-service @vuecalendar/current-time @vuecalendar/scroll-controller
```

If you use recurrence support:

```bash
npm install @vuecalendar/event-recurrence moment
```

## Quick Start

```vue
<script setup>
import { VueCalendar, calendars } from '@vuecalendar/core'
import { createEventsServicePlugin } from '@vuecalendar/events-service'
import { createCurrentTimePlugin } from '@vuecalendar/current-time'
import { createScrollControllerPlugin } from '@vuecalendar/scroll-controller'

const eventsService = createEventsServicePlugin()
const currentTime = createCurrentTimePlugin()
const scrollController = createScrollControllerPlugin({ initialScroll: '08:00' })

async function fetchEvents({ start, end }) {
  return [
    {
      id: 1,
      title: 'Team standup',
      calendarId: 'office',
      start: `${start} 09:00`,
      end: `${start} 09:30`,
    },
    {
      id: 2,
      title: 'Client call',
      calendarId: 'logistics',
      start: `${start} 13:00`,
      end: `${start} 14:00`,
    },
  ]
}
</script>

<template>
  <VueCalendar
    :calendars="calendars"
    initial-view="week"
    initial-date="2026-04-05"
    :grid-step="30"
    :plugins="[eventsService, currentTime, scrollController]"
    :fetch-events="fetchEvents"
  />
</template>
```

## Core Component API

`VueCalendar` supports a practical set of props for building scheduling UIs:

- `calendars`
- `initialView`
- `initialDate`
- `nDays`
- `resources`
- `locale`
- `workdayStart`
- `workdayEnd`
- `dayBoundaries`
- `gridHeight`
- `eventWidth`
- `gridStep`
- `labels`
- `plugins`
- `fetchEvents`
- `beforeRender`
- `onRender`
- `beforeEventUpdate`

The main component emits:

- `range-update`
- `event-click`
- `event-dblclick`
- `event-update`
- `slot-click`

## Plugin Examples

### Events service

```js
import { createEventsServicePlugin } from '@vuecalendar/events-service'

const eventsService = createEventsServicePlugin()

eventsService.add({
  id: 10,
  title: 'Planning session',
  calendarId: 'office',
  start: '2026-04-05 10:00',
  end: '2026-04-05 11:00',
})
```

### Calendar controls

```js
import { createCalendarControlsPlugin } from '@vuecalendar/calendar-controls'

const controls = createCalendarControlsPlugin()

controls.setDate('2026-04-12')
controls.setView('month')
```

### Recurring events

```js
import { createEventRecurrencePlugin } from '@vuecalendar/event-recurrence'

const recurrence = createEventRecurrencePlugin()

recurrence.add({
  id: 'standup',
  title: 'Daily Standup',
  calendarId: 'office',
  start: '2026-04-06 09:00',
  end: '2026-04-06 09:30',
  recurrence: {
    freq: 'WEEKLY',
    byDay: ['MO', 'TU', 'WE', 'TH', 'FR'],
    until: '2026-12-31',
  },
})
```

## What the Core Package Exports

`@vuecalendar/core` includes:

- `VueCalendar`
- `VueCalendarWeekView`
- `VueCalendarMonthView`
- `VueCalendarListView`
- `VueCalendarResourceView`
- `VueCalendarEvent`
- `VueEventModal`
- `calendars`
- `definePlugin`
- date and time helpers powered by `temporal-polyfill`
- formatting helpers and color utilities

## Local Development

This repo uses npm workspaces.

```bash
npm install
```

Build the core package:

```bash
npm run build:core
```

Release workflow helpers:

```bash
npm run changeset
npm run version-packages
npm run release
```

## Repository Notes

- This workspace is generated from the private VueCalendar monorepo
- The public repo contains the open packages only
- Package publishing is configured for the public npm registry

## License

MIT
