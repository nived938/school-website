# GHSS Paravanadukkam School Website

A responsive school information website for Government Higher Secondary School (GHSS) Paravanadukkam / GHSS Chemnad. It is built with static HTML, CSS and JavaScript, served by a small Node.js and Express application.

## Features

- The root URL `/` intentionally serves `public/dev_text.html` (the development placeholder).
- School information pages are available through their individual URLs.
- Admin login routes and session-based access control.
- Static assets and a custom not-found page.

## Tech stack

- Node.js
- Express 5
- express-session
- bcrypt (declared as a dependency for password-related functionality)
- HTML, CSS and browser JavaScript

## Run locally

1. Install a supported Node.js LTS release.
2. Clone this repository and open its folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Set the required environment variables before starting the server. Use `.env.example` as a reference, then set `USER`, `PASSWORD`, and `SESSION_SECRET` in your shell or environment manager. The application does not load `.env` files automatically.
5. Start the server:

   ```bash
   npm start
   ```

6. Open [http://localhost:3000](http://localhost:3000).

The server uses Render's `PORT` environment variable when present and defaults to port `3000` locally. Startup fails if `USER`, `PASSWORD`, or `SESSION_SECRET` is missing.

## Project structure

```text
school-website/
├── admin/                 # Admin pages and assets
├── public/
│   ├── dev_text.html      # Page served at /
│   ├── index.html         # Main school homepage file
│   ├── about.html
│   ├── academics.html
│   ├── achievements.html
│   ├── facilities.html
│   ├── teachers.html
│   ├── gallery.html
│   ├── contact.html
│   ├── css/
│   ├── js/
│   └── images/
├── server.js
├── .env.example           # Safe environment-variable template
├── .gitignore
├── package.json
└── package-lock.json
```

## Routes

- `/` serves `public/dev_text.html` by design.
- `/home` redirects to `/`.
- `/about.html`, `/academics.html`, `/facilities.html`, `/achievements.html`, `/teachers.html`, `/gallery.html` and `/contact.html` serve the corresponding public pages.
- `/admin` opens the admin login page.
- `/logout` ends the admin session.
- Unknown routes return `public/404.html`.

## Deploy on Render

In the Render Dashboard, open the **GHSS-Chemnad** web service and add these environment variables under **Environment**:

- `USER` — your custom admin username
- `PASSWORD` — your strong, unique admin password
- `SESSION_SECRET` — a long, random secret used to sign sessions

Do not use the example placeholder values. Save the environment changes and deploy the latest commit. Render provides `PORT` automatically.

## Security notes

- Never commit your real `.env` file or secrets to GitHub. The `.gitignore` excludes `.env` files while allowing `.env.example`.
- Do not put admin credentials in HTML or browser JavaScript; browser-delivered code can be inspected by visitors. The login comparison happens on the server.
- If any real password was previously committed or exposed, change it now; deleting it from the current file does not erase it from Git history.
- Use a unique password and a long random `SESSION_SECRET`. The app refuses to start if required secrets are missing.
- Production session cookies use `httpOnly`, `sameSite: "lax"`, and `secure` when `NODE_ENV=production`.

## Development

Edit the HTML pages in `public/`, shared styles in `public/css/`, browser scripts in `public/js/`, and server routes in `server.js`. Keep public website content separate from protected admin content.
