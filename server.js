const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();
const PORT = 3000;

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "ghsschemnad";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: "school_secret_key",
        resave: false,
        saveUninitialized: false
    })
);

// IMPORTANT
// Disable automatic index.html
app.use(express.static(path.join(__dirname, "public"), {
    index: false
}));

// Home page
app.get("/", (req, res) => {
    console.log("ROOT ROUTE");
    res.sendFile(path.join(__dirname, "public", "dev_text.html"));
});

// Website
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Login page
app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "admin", "lock.html"));
});

// Login API
app.post("/api/login", (req, res) => {

    const { username, password } = req.body;

    if (
        username === ADMIN_USERNAME &&
        password === ADMIN_PASSWORD
    ) {

        req.session.loggedIn = true;

        return res.json({
            success: true,
            redirect: "/admin/index.html"
        });

    }

    res.json({
        success: false
    });

});

// Protect admin
function requireLogin(req, res, next) {

    if (req.session.loggedIn)
        return next();

    res.redirect("/admin");

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

// 404 Page
app.use((req, res) => {
    res.status(404).sendFile(
        path.join(__dirname, "public", "404.html")
    );
});

app.listen(PORT, () => {

    console.log(`Running on http://localhost:${PORT}`);

});

