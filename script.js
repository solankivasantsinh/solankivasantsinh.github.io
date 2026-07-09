const counters = document.querySelectorAll(".info-card h3");

const animateCounter = (counter) => {

    const target = parseInt(counter.innerText);

    let count = 0;

    const speed = target / 50;

    const update = () => {

        if(count < target){

            count += speed;

            counter.innerText = Math.ceil(count) + "+";

            requestAnimationFrame(update);

        }else{

            counter.innerText = target + "+";

        }

    }

    update();

}

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

counters.forEach(counter=>{

animateCounter(counter);

});

observer.disconnect();

}

})

})

const aboutSection = document.querySelector(".about");

if (aboutSection) {
    observer.observe(aboutSection);
}
const hiddenElements = document.querySelectorAll(
".about,.experience,.skills,.projects,.education,.achievements,.contact"
);

const observer2 = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});


hiddenElements.forEach(el => {

    if (el) {

        el.classList.add("hidden");

        observer2.observe(el);

    }

});

window.addEventListener("scroll",()=>{
const header=document.querySelector(".header");

header.classList.toggle("scrolled",window.scrollY>50);

});
/* ===========================
   DARK MODE
=========================== */

const themeToggle = document.getElementById("theme-toggle");

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
/* ===========================
   MOBILE MENU
=========================== */

const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{

hamburger.classList.toggle("active");

navMenu.classList.toggle("active");

});

document.querySelectorAll(".nav-menu a").forEach(link=>{

link.addEventListener("click",()=>{

hamburger.classList.remove("active");

navMenu.classList.remove("active");

});

});
/* ===========================
   TYPING EFFECT
=========================== */

const roles=[
"Sr. Sales Engineer",
"Energy Efficiency Expert",
"HVAC Specialist",
"ESCO Consultant",
"Industrial Automation Engineer"
];

let roleIndex=0;
let charIndex=0;

const typing = document.getElementById("typing");

if (typing) {
    typeRole();
}
function typeRole(){

if(charIndex<roles[roleIndex].length){

typing.innerHTML+=roles[roleIndex].charAt(charIndex);

charIndex++;

setTimeout(typeRole,80);

}
else{

setTimeout(deleteRole,1500);

}

}

function deleteRole(){

if(charIndex>0){

typing.innerHTML=roles[roleIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(deleteRole,40);

}
else{

roleIndex++;

if(roleIndex>=roles.length){

roleIndex=0;

}

setTimeout(typeRole,300);

}

}

typeRole();
/* ===========================
   SCROLL PROGRESS BAR
=========================== */

window.addEventListener("scroll", () => {

    const winScroll = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    document.getElementById("progress-bar").style.width = scrolled + "%";

});

/* ===========================
   LOADER
=========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 800);

    }

});
                                           
/* ===========================
   EMAILJS CONTACT FORM
=========================== */

emailjs.init("3zYM77TrJm-vhQINn");

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const submitBtn = this.querySelector("button[type='submit']");
        submitBtn.disabled = true;
        submitBtn.innerHTML = "Sending...";

        emailjs.send(
            "service_8olan0b",
            "template_p1acovl",
            {
                from_name: document.getElementById("name").value,
                from_email: document.getElementById("email").value,
                message: document.getElementById("message").value
            }
        )
        .then(() => {

            alert("✅ Thank you! Your message has been sent successfully.");

            this.reset();

        })
        .catch((error) => {

            console.error(error);

            alert("❌ Failed to send message. Please try again.");

        })
        .finally(() => {

            submitBtn.disabled = false;
            submitBtn.innerHTML = "Send Message";

        });

    });

}
