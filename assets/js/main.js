document.addEventListener("DOMContentLoaded", function() {
     new SweetScroll({});
     particlesJS("particles-js", {
         particles: {
             number: {
                 value: 150,
                 density: {
                     enable: !0,
                     value_area: 800
                 }
             },
             color: {
                 value: "#ffffff"
             },
             shape: {
                 type: "polygon",
                 stroke: {
                     width: 0,
                     color: "#000000"
                 },
                 polygon: {
                     nb_sides: 5
                 },
                 image: {
                     src: "img/github.svg",
                     width: 100,
                     height: 100
                 }
             },
             opacity: {
                 value: .5,
                 random: !1,
                 anim: {
                     enable: !0,
                     speed: 0.2,
                     opacity_min: 0,
                     sync: !1
                 }
             },
             size: {
                 value: 3,
                 random: !0,
                 anim: {
                     enable: !1,
                     speed: 19.18081918081918,
                     size_min: .1,
                     sync: !1
                 }
             },
             line_linked: {
                 enable: !1,
                 distance: 150,
                 color: "#ffffff",
                 opacity: .4,
                 width: 1
             },
             move: {
                 enable: !0,
                 speed: 1,
                 direction: "none",
                 random: !0,
                 straight: !1,
                 out_mode: "out",
                 bounce: !1,
                 attract: {
                     enable: !1,
                     rotateX: 600,
                     rotateY: 1200
                 }
             },
             nb: 80
         },
         interactivity: {
             detect_on: "window",
             events: {
                 onhover: {
                     enable: !0,
                     mode: "bubble"
                 },
                 onclick: {
                     enable: !0,
                     mode: "push"
                 },
                 resize: !0
             },
             modes: {
                 grab: {
                     distance: 400,
                     line_linked: {
                         opacity: 1
                     }
                 },
                 bubble: {
                     distance: 245,
                     size: 2,
                     duration: 2,
                     opacity: 1,
                     speed: 3
                 },
                 repulse: {
                     distance: 200,
                     duration: .4
                 },
                 push: {
                     particles_nb: 4
                 },
                 remove: {
                     particles_nb: 2
                 }
             }
         },
         retina_detect: !0
     })
 }, !1);