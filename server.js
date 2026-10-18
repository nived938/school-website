const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "ghsschemnad";
const SESSION_SECRET = process.env.SESSION_SECRET || "school_secret_key";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production"
        }
    })
);

// Serve public assets, but do not let Express choose an index file automatically.
app.use(express.static(path.join(__dirname, "public"), {
    index: false
}));

// Public homepage. Previously this route served dev_text.html, which is only a placeholder.
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Keep the existing /home URL working.
app.get("/home", (req, res) => {
    res.redirect("/");
});

// Login page
app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "admin", "lock.html"));
});

// Login API
app.post("/api/login", (req, res) => {
    const { username, password } = req.body;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        req.session.loggedIn = true;
        return res.json({
            success: true,
            redirect: "/admin/index.html"
        });
    }

    return res.status(401).json({
        success: false,
        message: "Invalid username or password"
    });
});

// Protect admin pages
function requireLogin(req, res, next) {
    if (req.session.loggedIn) {
        return next();
    }

    return res.redirect("/admin");
}

app.get("/admin/index.html", requireLogin, (req, res) => {
    res.sendFile(path.join(__dirname, "admin", "index.html"));
});

app.use("/admin", requireLogin, express.static(path.join(__dirname, "admin")));

app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
});

// 404 page
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
