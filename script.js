/* ===========================
   COUNTER ANIMATION
=========================== */

const counters = document.querySelectorAll(".info-card h3");

function animateCounter(counter) {
    const target = parseInt(counter.innerText);
    let count = 0;
    const speed = Math.max(1, target / 50);

    function update() {
        if (count < target) {
            count += speed;
            counter.innerText = Math.ceil(count) + "+";
            requestAnimationFrame(update);
        } else {
            counter.innerText = target + "+";
        }
    }

    update();
}

const aboutSection = document.querySelector(".about");

if (aboutSection && counters.length > 0) {

    const counterObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                counters.forEach(animateCounter);

                observer.disconnect();

            }

        });

    });

    counterObserver.observe(aboutSection);

}

/* ===========================
   SCROLL REVEAL
=========================== */

const hiddenElements = document.querySelectorAll(
    ".about,.experience,.skills,.projects,.education,.achievements,.contact"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    revealObserver.observe(el);

});

/* ===========================
   STICKY HEADER
=========================== */

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (header) {

        header.classList.toggle("scrolled", window.scrollY > 50);

    }

});

/* ===========================
   DARK MODE
=========================== */

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "light");

            themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';

        }

    });

}

/* ===========================
   MOBILE MENU
=========================== */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");

    });

    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            hamburger.classList.remove("active");
            navMenu.classList.remove("active");

        });

    });

}

/* ===========================
   TYPING EFFECT
=========================== */

const typing = document.getElementById("typing");

if (typing) {

    const roles = [
        "Sr. Sales Engineer",
        "Energy Efficiency Expert",
        "HVAC Specialist",
        "ESCO Consultant",
        "Industrial Automation Engineer"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const current = roles[roleIndex];

        if (!deleting) {

            typing.textContent = current.substring(0, charIndex++);

            if (charIndex > current.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;

            }

        } else {

            typing.textContent = current.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                roleIndex = (roleIndex + 1) % roles.length;

            }

        }

        setTimeout(typeEffect, deleting ? 40 : 80);

    }

    typeEffect();

}

/* ===========================
   SCROLL PROGRESS BAR
=========================== */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const winScroll = document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    progressBar.style.width = (winScroll / height) * 100 + "%";

});

/* ===========================
   CURRENT YEAR
=========================== */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/* ===========================
   EMAILJS
=========================== */

if (typeof emailjs !== "undefined") {

    emailjs.init("3zYM77TrJm-vhQINn");

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            emailjs.send(
                "service_8olan0b",
                "template_p1acovl",
                {
                    from_name: document.getElementById("name").value,
                    from_email: document.getElementById("email").value,
                    message: document.getElementById("message").value
                }
            ).then(() => {

                alert("Message sent successfully.");
                contactForm.reset();

            }).catch((err) => {

                console.error(err);
                alert("Failed to send message.");

            });

        });

    }

}
