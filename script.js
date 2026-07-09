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

observer.observe(document.querySelector(".about"));
