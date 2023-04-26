
const play = document.querySelectorAll('.lienplay');
const titreSpans = document.querySelectorAll('.titresecondaire span');
const phrase = document.querySelectorAll('.souspagephrase');
const app = document.querySelectorAll('.lienapp');
const btn2 = document.querySelectorAll('.btnn');
window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
        .staggerFrom(titreSpans, 1, {top: -200, opacity: 0, ease: "power2.out"}, 0.5)
        .staggerFrom(phrase, 1, {top: -200, opacity: 0, ease: "power2.out"}, 1)
        .staggerFrom(app, 1, {top: 200, opacity: 0, ease: "power2.out"}, 3)
        .staggerFrom(play, 1, {top: -200, opacity: 0, ease: "power2.out"}, 3)
        .from(btn2, {opacity: 0, x: -50, duration: 1})
    TL.play();
})
