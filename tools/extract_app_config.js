#!/usr/bin/env node
/* ============================================================================
   extract_app_config.js
   ----------------------------------------------------------------------------
   Dumps the APP_CONFIG object literal from script.js as JSON on stdout.

   Why this exists
   ---------------
   The static language pages (/en/, /fa/, /it/) must contain the real page
   text in the HTML source, not only after JavaScript runs. All of that text
   lives inside APP_CONFIG (i18n strings, FAQ, videos, courses) in script.js,
   so the static-page generator needs machine-readable access to it.

   The script does NOT execute script.js. It locates the `var APP_CONFIG = {`
   literal, walks it with a string/comment-aware brace matcher, and evaluates
   only that literal. No DOM, no globals, no side effects.

   Usage:
     node tools/extract_app_config.js            > app-config.json
     node tools/extract_app_config.js script.js  > app-config.json
   ============================================================================ */
'use strict';

const fs = require('fs');
const path = require('path');

const file = process.argv[2] || path.join(__dirname, '..', 'script.js');
const src = fs.readFileSync(file, 'utf8');

const start = src.search(/var\s+APP_CONFIG\s*=\s*\{/);
if (start === -1) {
  console.error('extract_app_config: could not find "var APP_CONFIG = {" in ' + file);
  process.exit(1);
}
const open = src.indexOf('{', start);

/* --- walk the object literal, skipping strings, template literals, comments --- */
let depth = 0;
let i = open;
let quote = null;      // ' " or `
let inLine = false, inBlock = false;

for (; i < src.length; i++) {
  const ch = src[i];
  const next = src[i + 1];

  if (inLine) { if (ch === '\n') inLine = false; continue; }
  if (inBlock) { if (ch === '*' && next === '/') { inBlock = false; i++; } continue; }

  if (quote) {
    if (ch === '\\') { i++; continue; }        // escaped char
    if (ch === quote) quote = null;
    continue;
  }

  if (ch === '/' && next === '/') { inLine = true; i++; continue; }
  if (ch === '/' && next === '*') { inBlock = true; i++; continue; }
  if (ch === '"' || ch === "'" || ch === '`') { quote = ch; continue; }

  if (ch === '{') depth++;
  else if (ch === '}') {
    depth--;
    if (depth === 0) break;                   // closing brace of APP_CONFIG
  }
}

if (depth !== 0) {
  console.error('extract_app_config: unbalanced braces — the APP_CONFIG literal looks broken.');
  process.exit(1);
}

const literal = src.slice(open, i + 1);

let config;
try {
  /* The literal contains only data (strings, numbers, arrays, objects). */
  config = new Function('return (' + literal + ');')();
} catch (err) {
  console.error('extract_app_config: failed to evaluate APP_CONFIG — ' + err.message);
  process.exit(1);
}

process.stdout.write(JSON.stringify(config, null, 2));
