# Testing and release checklist

## Automated checks
The GitHub Actions workflow runs `node tests/smoke.mjs` on every push to `main`. It checks that the app shell, manifest, service worker, dashboard sections, bilingual toggle and local persistence are present, and scans the frontend for a common API-key pattern.

## Manual checks still required after deployment
- Open the deployed site on Android Chrome and confirm the dashboard loads.
- Switch English/Urdu and confirm the labels update.
- Add a planner task, reload, and confirm it remains.
- Save a note and wardrobe note, reload, and confirm they remain.
- Test offline reload after the first successful visit.
- Confirm the browser offers installation and test the installed app.
- Test on a second browser/device and clear site data to confirm expected first-run behavior.

## Not yet complete
A passing source smoke test is not a substitute for browser-based end-to-end testing. Live AI is also not connected; it needs a protected backend and provider credentials.
