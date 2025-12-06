// GSAP Animations

gsap.registerPlugin(ScrollTrigger);

// Reveal elements on scroll
gsap.utils.toArray('.gsap-reveal').forEach(function (elem) {
    ScrollTrigger.create({
        trigger: elem,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: function () {
            gsap.fromTo(elem,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
            );
        }
    });
});

// Staggered reveal for grid items (Skills, Projects)
gsap.utils.toArray('.skills-grid, .project-grid').forEach((grid) => {
    gsap.from(grid.children, {
        scrollTrigger: {
            trigger: grid,
            start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2, // Delay between each item
        ease: "back.out(1.7)"
    });
});

// Hero text parallax
gsap.to(".hero-content", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    y: 200,
    opacity: 0
});
