import { readFileSync, existsSync } from "node:fs";
import assert from "node:assert/strict";

const html = readFileSync("index.html", "utf8");
const manifest = JSON.parse(readFileSync("manifest.webmanifest", "utf8"));
const sw = readFileSync("sw.js", "utf8");

for (const file of ["index.html", "manifest.webmanifest", "sw.js", "icon.svg"]) {
  assert.ok(existsSync(file), `Missing required app file: ${file}`);
}
assert.equal(manifest.name, "My Personal AI");
assert.ok(html.includes("My Personal AI") || html.includes("MY PERSONAL AI"));
assert.ok(html.includes('id="langBtn"'), "Language toggle is missing");
assert.ok(html.includes('data-view="assistant"'), "Assistant screen entry is missing");
assert.ok(html.includes('data-view="planner"'), "Planner screen entry is missing");
assert.ok(html.includes('data-view="wardrobe"'), "Wardrobe screen entry is missing");
assert.ok(html.includes('data-view="notes"'), "Notes screen entry is missing");
assert.ok(html.includes("localStorage"), "Local persistence is missing");
assert.ok(sw.includes("addAll"), "Offline app-shell caching is missing");
assert.ok(!/sk-[A-Za-z0-9]{20,}/.test(html), "A likely secret API key was found in the frontend");
console.log("My Personal AI smoke checks passed.");
