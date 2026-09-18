# AGENTS.md — RodaRoad Form v2

## Project Overview

Digital route diary for truck drivers. Records all activity during a workday and generates PDFs.

**Target users:** Self-employed drivers and fleet companies in the EU.

## Tech Stack

- **Frontend:** Vanilla HTML/CSS/JavaScript (ES Modules, no build tools)
- **Backend:** Node.js (to be defined)
- **Database:** PostgreSQL (to be defined)
- **Storage:** Cloudflare R2 + IndexedDB for offline
- **Payments:** Polar (Merchant of Record)
- **Hosting:** Cloudflare Pages (frontend)
- **Languages:** Spanish, Catalan, English (all EU later)

## Project Structure

```
rodaroadform-v1/
├── index.html          # Main app entry point
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Entry point JS
├── img/                # Images and icons
├── docs/               # Documentation
└── AGENTS.md           # This file
```

## Code Conventions

- **Language:** Code comments and variable names in English
- **IDs and classes:** Always in English (e.g., `driver`, `vehicle`, `trip`)
- **Naming:** camelCase for variables/functions, kebab-case for CSS classes
- **HTML:** Use semantic tags (`section`, `h2`, `label`, `input`)
- **CSS:** Use CSS custom properties (variables) defined in `:root`
- **JavaScript:** ES Modules (`import`/`export`), `"type": "module"` in package.json

## Learning Goal

**This project is for learning.** The user is learning to code. The AI's role is to guide, not to write code.

**AI rules:**
- **NEVER write code directly.** Only explain what to do and how.
- **Give step-by-step instructions.** One small step at a time.
- **Wait for user to code.** Do not continue until the user confirms.
- **Explain concepts when relevant.** Help the user understand, not just copy.
- **If the user is stuck**, give hints, not solutions.
- **If the user asks**, provide code examples to learn from.

**User rules:**
- Code yourself. The AI guides.
- Ask questions if stuck.
- Test each step before moving on.

## Development Rules

1. **NO big code blocks.** Work step by step.
2. **Explain before coding.** Tell what we'll do, why, and how to verify.
3. **User tests each step.** Only continue after confirmation.
4. **English for all identifiers.** No Spanish/Catalan in IDs, classes, or variable names.

## Git Conventions

- Commit messages in English
- Format: `type: short description`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`
- Example: `feat: add driver section HTML`

## Current Phase

**Phase 0 — Environment Setup** ✅
- [x] Project structure
- [x] Basic HTML file
- [x] Server local (Live Server)
- [x] Git initialized
- [x] GitHub repository

**Next:** Phase 1 — HTML Form Structure
