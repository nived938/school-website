# GHSS Paravanadukkam School Website

A responsive school information website for Government Higher Secondary School (GHSS) Paravanadukkam / GHSS Chemnad. It is built with static HTML, CSS and JavaScript, served by a small Node.js and Express application.

## Features

- School homepage and navigation
- About, academics, facilities, achievements, teachers and gallery pages
- Contact page
- Static assets served from `public/`
- Admin login routes and session-based access control
- Custom not-found page

## Tech stack

- Node.js
- Express 5
- express-session
- bcrypt (declared as a dependency for password-related functionality)
- HTML, CSS and browser JavaScript

## Run locally

1. Install a current supported Node.js LTS release.
2. Clone the repository and open its folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000).

The server uses Render's `PORT` environment variable when present and defaults to port `3000` locally.

## Project structure

```text
school-website/
├── admin/                 # Admin pages and assets
├── public/
│   ├── index.html         # Public homepage
│   ├── about.html
│   ├── academics.html
│   ├── achievements.html
│   ├── facilities.html
│   ├── teachers.html
│   ├── gallery.html
│   ├── contact.html
│   ├── css/               # Stylesheets
│   ├── js/                # Browser scripts
│   └── images/            # Images and logo
├── server.js              # Express routes and static file server
├── package.json
└── package-lock.json
```

## Routes

- `/` serves the public homepage (`public/index.html`).
- `/home` serves the homepage directly.
- `/about.html`, `/academics.html`, `/facilities.html`, `/achievements.html`, `/teachers.html`, `/gallery.html` and `/contact.html` serve the corresponding public pages.
- `/admin` opens the admin login page.
- `/logout` ends the admin session.
- Unknown routes return `public/404.html`.

## Deploy on Render

Create a **Web Service** connected to this GitHub repository.

- **Runtime:** Node
- **Build command:** `npm install`
- **Start command:** `npm start`
- **Branch:** `main`

Render provides the `PORT` environment variable automatically. After pushing changes to the connected branch, wait for the deployment to finish, then test the homepage and the individual page routes.

## Security notes

Before using the admin area publicly, configure credentials and the session secret through Render environment variables and read them in `server.js`. Do not commit real passwords, API keys, or production session secrets to Git. Use HTTPS in production and review session-cookie settings for the deployment environment.

## Development

Edit the HTML pages in `public/`, shared styles in `public/css/`, browser scripts in `public/js/`, and server routes in `server.js`. Keep public website content separate from protected admin content.
