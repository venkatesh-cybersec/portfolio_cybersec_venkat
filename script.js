// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);
});

// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close menu after clicking

document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});

// ===============================
// Scroll To Top
// ===============================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    }

    else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// Typing Animation
// ===============================

new Typed(".typing", {

    strings: [

        "Cybersecurity Student",

        "Python Developer",

        "Flask Developer",

        "Ethical Hacking Learner",

        "Ethical Hacking Learner"

    ],

    typeSpeed: 80,

    backSpeed: 50,

    backDelay: 1500,

    loop: true

});

// ===============================
// AOS Animation
// ===============================

AOS.init({

    duration: 1000,

    once: true,

    offset: 100

});

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("#navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Particles JS
// ===============================

particlesJS("particles-js", {

    particles: {

        number: {

            value: 70,

            density: {

                enable: true,

                value_area: 800

            }

        },

        color: {

            value: "#00E5FF"

        },

        shape: {

            type: "circle"

        },

        opacity: {

            value: 0.5

        },

        size: {

            value: 3

        },

        line_linked: {

            enable: true,

            distance: 150,

            color: "#00E5FF",

            opacity: 0.4,

            width: 1

        },

        move: {

            enable: true,

            speed: 2

        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {

                enable: true,

                mode: "grab"

            },

            onclick: {

                enable: true,

                mode: "push"

            }

        }

    },

    retina_detect: true

});

// ===============================
// Contact Form
// ===============================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function () {
        contactForm.submit();
    });
}

// ===============================
// Smooth Fade Effect
// ===============================

document.body.style.opacity = "0";

window.addEventListener("load", () => {

    document.body.style.transition = "opacity 1s";

    document.body.style.opacity = "1";

});