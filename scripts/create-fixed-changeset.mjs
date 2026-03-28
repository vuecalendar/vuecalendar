import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const [, , bumpType, ...summaryParts] = process.argv;

const allowedBumps = new Set(['patch', 'minor', 'major']);
const packageNames = [
    '@vuecalendar/calendar-controls',
    '@vuecalendar/copy-event',
    '@vuecalendar/core',
    '@vuecalendar/current-time',
    '@vuecalendar/drag-to-calendar',
    '@vuecalendar/event-modal',
    '@vuecalendar/event-recurrence',
    '@vuecalendar/events-service',
    '@vuecalendar/resource-scheduler',
    '@vuecalendar/shared',
    '@vuecalendar/zoom',
];

if (!allowedBumps.has(bumpType)) {
    console.error('Usage: node ./scripts/create-fixed-changeset.mjs <patch|minor|major> "Summary text"');
    process.exit(1);
}

const summary = summaryParts.join(' ').trim();

if (!summary) {
    console.error('Please provide a release summary for the changeset.');
    process.exit(1);
}

const changesetDir = resolve(process.cwd(), '.changeset');
const fileName = `${Date.now()}-fixed-release.md`;
const filePath = resolve(changesetDir, fileName);
const frontmatter = packageNames
    .map((packageName) => `"${packageName}": ${bumpType}`)
    .join('\n');

mkdirSync(changesetDir, { recursive: true });
writeFileSync(
    filePath,
    `---\n${frontmatter}\n---\n\n${summary}\n`,
    'utf8',
);

console.log(`Created changeset: .changeset/${fileName}`);

