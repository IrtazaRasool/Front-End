function section1Animation() {
  var tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
    stagger: 0.15,
  });

  tl.from(".center-part1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.5,
  });

  tl.from(".center-part1 p", {
    x: -200,
    opacity: 0,
    duration: 0.4,
  });

  tl.from(".center-part1 button", {
    opacity: 0,
  });

  tl.from(
    ".center-part2 img",
    {
      opacity: 0,
      duration: 0.5,
    },
    "-=1"
    //for delay in timeline
  );

  gsap.from(".section1bottom", {
    y: 100,
    opacity: 0,
    delay: 0.7,
    stagger: 0.15,
    duration: 1,
    scrollTrigger: {
      scroller: "body",
      trigger: ".section1bottom",
      start: "top 70%",
    },
  });
}

function section2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 60%",
      end: "top -50%",
      scrub: 4,
    },
  });
  tl2.from(".services", {
    x: -100,
    opacity: 0,
    duration: 0.5,
  });

  tl2.from(
    ".elm.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "a"
  );
  tl2.from(
    ".elm.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 0.5,
    },
    "a"
  );

  tl2.from(
    ".elm.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "b"
  );
  tl2.from(
    ".elm.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 0.5,
    },
    "b"
  );
}

function section3Animation() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".wrapper",
      scroller: "body",
      start: "top 60%",
    },
  });

  tl3.from(".wrapper", {
    y: 200,
    opacity: 0,
    duration: 1,
  });
  tl3.from(".case-study", {
    x: -100,
    opacity: 0,
    duration: 0.5,
  });
}

function section4Animation() {
  var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".wrapper-black",
        scroller:"body",
        start:"top 80%"
    }
  });

  tl4.from(".wrapper-black", {
    y: 200,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
  });

  tl4.from(".part p, .part h4 ", {
    y: 200,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.2,
    ease: "sine.out",
  });
}

section1Animation();
section2Animation();
section3Animation();
section4Animation();
