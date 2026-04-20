# VueCalendar Public Workspace

This workspace is generated from the private VueCalendar monorepo.

Included packages:
- @vuecalendar/calendar-controls
- @vuecalendar/core
- @vuecalendar/current-time
- @vuecalendar/event-recurrence
- @vuecalendar/events-service
- @vuecalendar/scroll-controller

Excluded premium packages:
- @vuecalendar-premium/copy-event
- @vuecalendar-premium/drag-to-calendar
- @vuecalendar-premium/draw
- @vuecalendar-premium/event-modal
- @vuecalendar-premium/resize
- @vuecalendar-premium/resource-scheduler
- @vuecalendar-premium/zoom

Generated with:
`node ./scripts/sync-public-repo.mjs --target ../vue-calendar-public`
