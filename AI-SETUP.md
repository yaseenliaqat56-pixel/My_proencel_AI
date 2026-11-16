# Connecting the AI assistant

The user interface is present, but live AI responses are not connected yet.

## Required before enabling live AI
1. Choose an AI provider and create an API key.
2. Create a server-side endpoint (for example, a Cloudflare Worker or another trusted backend).
3. Store the provider key as a server-side secret, never in `index.html`, browser JavaScript, or a public repository.
4. Have the endpoint validate requests, apply rate limits, and return only the assistant response needed by the app.
5. Connect the Assistant screen to that endpoint and test success, errors, and network failures.

## Current status
- Frontend: included
- Local notes/planner: included
- Installable PWA shell: included
- Live AI backend: not configured
- Production deployment and end-to-end testing: not yet completed

No credentials are included in this repository.
