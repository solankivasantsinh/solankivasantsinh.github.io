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

});

hiddenElements.forEach(el => {

    if (el) {

        el.classList.add("hidden");

        observer2.observe(el);

    }

});

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
