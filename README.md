# VueCalendar Public Workspace

This workspace is generated from the private VueCalendar monorepo.

Included packages:
- @vuecalendar/core
- @vuecalendar/calendar-controls
- @vuecalendar/current-time
- @vuecalendar/event-modal
- @vuecalendar/event-recurrence
- @vuecalendar/events-service
- @vuecalendar/scroll-controller

Excluded premium packages:
- @vuecalendar/copy-event
- @vuecalendar/drag-to-calendar
- @vuecalendar/draw
- @vuecalendar/resize
- @vuecalendar/resource-scheduler
- @vuecalendar/zoom

Generated with:
`node ./scripts/sync-public-repo.mjs --target ../vue-calendar-public`
