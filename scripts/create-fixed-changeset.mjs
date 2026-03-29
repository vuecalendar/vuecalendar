import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const [, , bumpType, ...summaryParts] = process.argv;

const allowedBumps = new Set(['patch', 'minor', 'major']);

if (!allowedBumps.has(bumpType)) {
    console.error('Usage: node ./scripts/create-fixed-changeset.mjs <patch|minor|major> "Summary text"');
    process.exit(1);
}

const summary = summaryParts.join(' ').trim();

if (!summary) {
    console.error('Please provide a release summary for the changeset.');
    process.exit(1);
}

function getPublishablePackages() {
    const packagesDir = resolve(process.cwd(), 'packages');

    return readdirSync(packagesDir, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((entry) => join(packagesDir, entry.name, 'package.json'))
        .map((packageJsonPath) => JSON.parse(readFileSync(packageJsonPath, 'utf8')))
        .filter((packageJson) => packageJson.name && packageJson.private !== true)
        .map((packageJson) => packageJson.name)
        .sort();
}

const changesetDir = resolve(process.cwd(), '.changeset');
const fileName = `${Date.now()}-fixed-release.md`;
const filePath = resolve(changesetDir, fileName);
const packageNames = getPublishablePackages();

if (packageNames.length === 0) {
    console.error('No publishable packages found in ./packages.');
    process.exit(1);
}

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

