
const titreSpans = document.querySelectorAll('.titresecondaire span');
const phrase = document.querySelectorAll('.souspagephrase');
const btn2 = document.querySelectorAll('.btnn');

const sort = document.querySelectorAll('.Titresortie');
window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
        .staggerFrom(titreSpans, 1, {top: -200, opacity: 0, ease: "power2.out"}, 0.5)
        .staggerFrom(phrase, 1, {top: -200, opacity: 0, ease: "power2.out"}, 1)
        .staggerFrom(btn2, 1, {top: -200, opacity: 0, ease: "power2.out"}, 0.5)
    

    TL.play();
})


const titresp = document.querySelector('.titresp');

new Typewriter(titresp,{
    delay: 50,
})
    .typeString("Marre de toujours squatter les mêmes endroits?? ")
    .pauseFor(500)
    .typeString("Fais nous confiance !" )
    
    .start()
const ratio =.9999
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
const handleIntersect = function (entries,observer) {
    entries.forEach(function (entry){
        setTimeout(()=>{
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)

        }, 10000)
        if(entry.intersectionRatio>ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }

    })
}
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function(r){
    observer.observe(r)
})
document.querySelectorAll('.reveal2').forEach(function(r){
    observer.observe(r)
})
document.querySelectorAll('.reveal3').forEach(function(r){
    observer.observe(r)
})
document.querySelectorAll('.reveal4').forEach(function(r){
    observer.observe(r)
})