const uno = document.querySelectorAll('.uno');
const dos = document.querySelectorAll('.dos');
const tres = document.querySelectorAll('.tres');
const quatro = document.querySelectorAll('.quatro');
const cinquo = document.querySelectorAll('.cinquo');
window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
        .repeat(-1)
        .staggerFrom(uno, 1, {top: 0, opacity: 0, ease: "power2.out"}, 1)
        .staggerFrom(uno, 0, {top: 0, opacity: 1, ease: "power2.out"}, 0,'+=3')
        .staggerFrom(dos, 1, {top: 0, opacity: 0, ease: "power2.out"}, 1)
        .staggerFrom(dos, 0, {top: 0, opacity: 0, ease: "power2.out"}, 0,'+=3')
        .staggerFrom(tres, 1, {top: 0, opacity: 0, ease: "power2.out"}, 1)
        .staggerFrom(tres, 0, {top: 0, opacity: 0, ease: "power2.out"}, 0,'+=3')
        .staggerFrom(quatro, 1, {top: 0, opacity: 0, ease: "power2.out"}, 1)
        .staggerFrom(quatro, 0, {top: 0, opacity: 0, ease: "power2.out"}, 0,'+=3')
        .staggerFrom(cinquo, 1, {top: 0, opacity: 0, ease: "power2.out"}, 1)
        .staggerFrom(cinquo, 0, {top: 0, opacity: 0, ease: "power2.out"}, 0,'+=3')
        
        
    
    TL.play();
    
})
