// Generated pages: build, then every JSON-LD block parses and every local link/asset exists.
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { services } from './content.mjs';

execFileSync('node', ['build.mjs']);
const pages = ['index.html', ...services.map(s => `services/${s.slug}/index.html`)];
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
  assert.ok(blocks.length, `${page}: no JSON-LD`);
  for (const [, json] of blocks) assert.ok(JSON.parse(json)['@graph'].length, `${page}: empty @graph`);
  for (const [, url] of html.matchAll(/(?:href|src|poster|data-src)="(\/[^"#]*)/g)) {
    const file = url.endsWith('/') ? `.${url}index.html` : `.${url}`;
    assert.ok(existsSync(file), `${page}: broken local reference ${url}`);
  }
}
console.log(`pages ok (${pages.length})`);
