console.log("main.js loaded");
// =========================
// Mobile Navigation
// =========================

const menuButton = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");

function closeMenu() {
    if (!navPanel || !menuButton) return;

    navPanel.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
}

if (menuButton && navPanel) {

    menuButton.addEventListener("click", (event) => {

        event.stopPropagation();

        navPanel.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            navPanel.classList.contains("open")
        );

    });

    document.addEventListener("click", (event) => {

        if (
            !navPanel.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {

            closeMenu();

        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", closeMenu);

    });

    window.addEventListener("resize", () => {

        if (window.innerWidth > 800)
            closeMenu();

    });

}


// =========================
// Back To Top
// =========================

const topButton = document.querySelector(".back-to-top");

if (topButton) {

    window.addEventListener("scroll", () => {

        topButton.classList.toggle(
            "visible",
            window.scrollY > 500
        );

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// =========================
// Gallery Lightbox
// =========================

const lightbox = document.querySelector(".lightbox");

if (lightbox) {

    document.querySelectorAll(".gallery-item").forEach(item => {

        item.addEventListener("click", () => {

            const img = item.querySelector("img");

            const caption = item.querySelector("span");

            if (!img) return;

            lightbox.querySelector("img").src = img.src;
            lightbox.querySelector("img").alt = img.alt;

            if (caption) {

                lightbox.querySelector("p").textContent =
                    caption.textContent.trim();

            }

            lightbox.showModal();

        });

    });

    const closeBtn = lightbox.querySelector(".lightbox-close");

    if (closeBtn) {

        closeBtn.addEventListener("click", () => {

            lightbox.close();

        });

    }

    lightbox.addEventListener("click", e => {

        if (e.target === lightbox) {

            lightbox.close();

        }

    });

}


// =========================
// Notice Board
// =========================

async function loadNoticeBoard() {

    const board = document.querySelector("#notice-board");

    if (!board)
        return;

    try {

        const response = await fetch("/api/notices");

        if (!response.ok)
            return;

        const notices = await response.json();

        board.innerHTML = notices.map(notice => `

            <div class="notice">

                <h3>${notice.title}</h3>

                <p>${notice.description}</p>

                <small>${notice.date}</small>

            </div>

        `).join("");

    }

    catch (err) {

        console.error(err);

    }

}

loadNoticeBoard();


// =========================
// Contact Forms
// =========================

document.querySelectorAll(".contact-form").forEach(form => {

    form.addEventListener("submit", async e => {

        e.preventDefault();

        const message = form.querySelector(".form-message");

        if (message) {

            message.style.color = "#555";
            message.textContent = "Sending...";

        }

        const data = Object.fromEntries(
            new FormData(form)
        );

        const payload = {

            type: window.location.pathname.includes("admission")
                ? "admission"
                : "contact",

            data

        };

        try {

            const response = await fetch("/api/submissions", {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(payload)

            });

            const result = await response.json();

            if (!response.ok)
                throw new Error(result.error);

            if (message) {

                message.style.color = "green";
                message.textContent = result.message;

            }

            form.reset();

        }

        catch (err) {

            if (message) {

                message.style.color = "red";
                message.textContent =
                    err.message || "Something went wrong.";

            }

        }

    });

});


// =========================
// Footer Year
// =========================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


// =========================
// Website Loader
// =========================

const loader = document.getElementById("loader");

if (loader) {

    function hideLoader() {

        if (!loader.classList.contains("loader-hide")) {

            loader.classList.add("loader-hide");

            setTimeout(() => {

                if (loader.parentNode) {

                    loader.remove();

                }

            }, 600);

        }

    }

    if (document.readyState === "complete") {

        hideLoader();

    } else {

        window.addEventListener("load", hideLoader);

        setTimeout(hideLoader, 2500);

    }

}
if (document.readyState === "complete") {

    hideLoader();

} else {

    window.addEventListener("load", hideLoader);

    setTimeout(hideLoader, 2500);

}