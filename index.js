
var options = {
    animate: true,
    patternWidth: 100,
    patternHeight: 100,
    grainOpacity: 0.03,
    grainDensity: 1,
    grainWidth: 1,
    grainHeight: 1
};


grained('#container',options);


gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
};

requestAnimationFrame(raf);

gsap.to("iframe", {
    scrollTrigger: {
        trigger: "#content",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1
    },
    scale: 2,
    rotation: 90,
    opacity: .5
});

gsap.from("#about", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1
    },
    opacity: 0,
    skewY: -4,
    y: 5
});

gsap.from("#projects", {
    scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1
    },
    opacity: 0,
    skewY: -4,
    y: 5
});

gsap.from("#inspiration", {
    scrollTrigger: {
        trigger: "#inspiration",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1
    },
    opacity: 0,
    skewY: -4,
    y: 5
});

gsap.from("#tools", {
    scrollTrigger: {
        trigger: "#tools",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1
    },
    opacity: 0,
    skewY: -4,
    y: 5
});

gsap.from("#mission", {
    scrollTrigger: {
        trigger: "#mission",
        start: "top 80%",
        end: "bottom 50%",
        scrub: 1
    },
    opacity: 0,
    skewY: -2,
    y: 5
});

gsap.timeline().from(".intro--text1", {
    opacity: 0,
    x: -100,
    duration: 1,
    delay: 1.5
}).to(".intro--text1", {
    opacity: 0,
    x: 100,
    duration: .5
}).from(".intro--text2", {
    opacity: 0,
    x: -100,
    duration: 1
}).to(".intro--text2", {
    opacity: 0,
    x: 100,
    duration: .5
}).from(".intro--text3", {
    opacity: 0,
    x: -100,
    duration: 1
}).to(".intro--text3", {
    opacity: 0,
    x: 100,
    duration: .5
}).from("#title, #footer, #content, iframe", {
    opacity: 0,
    duration: 1,
    y: 100
});

const items = document.querySelectorAll(".item");
items.forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "top 30%",
            scrub: 1
        },
        opacity: .05
    })
})




const cursor = document.querySelector('.cursor');

const animateit = function (e) {
      const span = this.querySelector('span');
      const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,

      move = 25,
      xMove = x / width * (move * 2) - move,
      yMove = y / height * (move * 2) - move;

      span.style.transform = `translate(${xMove}px, ${yMove}px)`;

      if (e.type === 'mouseleave') span.style.transform = '';
};

const editCursor = e => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
};

window.addEventListener('mousemove', editCursor);

const links = document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        gsap.to(".cursor", {
            duration: .25,
            transformOrigin: "center center",
            scale: 2
        })
    });

    link.addEventListener("mouseleave", () => {
        gsap.to(".cursor", {
            duration: .25,
            transformOrigin: "center center",
            scale: .5
        })
    });
    
})
