// Fade in various elements of pages
gsap.from(".fade", {stagger: 1, opacity: 0, duration:4});

// Show preview of project
$(document).ready(function() {
  TweenMax.set("#preview", { width: 0 });
  var preview = document.querySelector("#preview")
  var t1 = new TimelineLite();

  $(document)
    .on("mouseenter touchstart", ".page", function(evt) {
      t1 = new TimelineLite();
      t1.to($("#preview"), 1, {
        width: preview.offsetHeight,
        ease: Expo.ease
      });
    })
    .on("mouseleave touchend", ".page", function(evt) {
      t1.to($("#preview"), .5, {
        width: 0,
        ease: Expo.ease
      });
    });
});



$(".page1").mouseenter(function() {
    $("#about--text").css({ "visibility": "visible", "width": "600px" });
    $("#preview").css({ "background-image": ''});
});
$(".page2").mouseenter(function() {
    $("#preview").css({ "background-image": 'url("../images/tenzies.jpg")'});
    $("#about--text").css({ "visibility": "hidden" });
});
$(".page3").mouseenter(function() {
    $("#preview").css({ "background-image": 'url("../images/blackJack.jpg")'});
    $("#about--text").css({ "visibility": "hidden" });
});
$(".page4").mouseenter(function() {
    $("#preview").css({ "background-image": 'url("../images/quiz.jpg")'});
    $("#about--text").css({ "visibility": "hidden" });
});
$(".page5").mouseenter(function() {
    $("#preview").css({ "background-image": 'url("../images/theFishNet.jpg")'});
    $("#about--text").css({ "visibility": "hidden" });
});
$(".page6").mouseenter(function() {
    $("#preview").css({ "background-image": 'url("../images/ArtGallery.jpg")'});
    $("#about--text").css({ "visibility": "hidden" });
});

// Animtaion for page intro
function fadeOut() {

  TweenMax.to(".myBtn", 1, {
       y: -100,
       opacity: 0
  });

  TweenMax.to(".screen", 2, {
       y: -400,
       opacity: 0,
       ease: Power2.easeInOut,
       delay: 2
  });

  TweenMax.from(".overlay", 2, {
       ease: Power2.easeInOut
  });

  TweenMax.to(".overlay", 2, {
       delay: 2.6,
       top: "-110%",
       ease: Expo.easeInOut
  });

  TweenMax.to(".overlay-2", 2, {
       delay: 3,
       top: "-110%",
       ease: Expo.easeInOut
  });

  TweenMax.from(".content", 2, {
       delay: 3.2,
       opacity: 0,
       ease: Power2.easeInOut
  });

  TweenMax.to(".content", 2, {
       opacity: 1,
       y: -300,
       delay: 3.2,
       ease: Power2.easeInOut
  });

  }
