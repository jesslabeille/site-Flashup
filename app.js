const titre = document.querySelector('.titre');

new Typewriter(titre,{
    delay: 50,
})
    .typeString('L’application pour découvrir')
    .pauseFor(1500)
    .typeString(' le <span style="color:white;">monde</span> et ses <span style="color:white;">habitants</span>')
    .start()


const sp = document.querySelectorAll('.phrase');
const iphone = document.querySelectorAll('.iphone');
const btn = document.querySelectorAll('.btn');
window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
        .from(iphone,{opacity: -2, x: 150, duration: 4})
        .addPause(">",gsap.delayedCall,[1,()=>TL.play()])
        .from(btn, {opacity: 0, x: -50, duration: 1})
        .from(sp,{opacity: 0, y: -50, duration: 1},'-=1')

    TL.play();
})
window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
        .addPause(">",gsap.delayedCall,[3,()=>TL.play()])
        .from(sp,{opacity: 0, y: -50, duration: 1})

    TL.play();
})
const ratio =.6
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
const handleIntersect = function (entries,observer) {
    entries.forEach(function (entry){
        if(entry.intersectionRatio>ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }

    })
}
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal2').forEach(function(r){
    observer.observe(r)
})
const titreSpans = document.querySelectorAll('.scroll-bottom');
const phrase = document.querySelectorAll('.scroll-top');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
        
        
        .fromTo(titreSpans, 15, {
        y: 200
    }, {
        y: 0,
        repeat: -1,
    })
    .fromTo(phrase, 15, {
        y: 0
    }, {
        y: 200,
        repeat: -1,
    },'-=15');
        

    TL.play();
})