gsap.from("#img1", {
    delay: 0.4,
    opacity: 0,
    duration: 1, 
    y: 60,
  });
  
  gsap.from("#img2", {
    delay: 0.4,
    opacity: 0,
    duration: 1, 
    x:20
  });

  gsap.from("#img3", {
    delay: 0.4,
    opacity: 0,
    duration: 1, 
    y: -60,
  });

  gsap.from("#page1>h1", {
    delay: 0.4,
    opacity: 0,
    duration: 1, 

  });

  gsap.from("#img2", {
    x:-60,     
    duration:2,
    trasition:"ease",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 85%",
        scrub: 1,
    }
})
gsap.to("#img1", {
  y:150,     
  duration:2,
  trasition:"ease",
  scrollTrigger:{
      trigger:"#page2",
      scroller:"body",
      start:"top 85%",
      scrub: 1,
  }
})
gsap.to("#img3", {
  y:-100,    
  duration:2,
  trasition:"ease",
  scrollTrigger:{
      trigger:"#page2",
      scroller:"body",
      start:"top 85%",
      scrub: 1,
  }
})
  
  // gsap.from("#page2 h5, #page2 h1, #page2 #about-us", {
  //   opacity: 0,
  //   y:60,
  //   duration:1.5,
  //   delay:0.5,
  //   scrollTrigger: {
      
  //     trigger: "#page2 h5", 
  //     scroller: "body", 
  //     start: "top 80%",
  //     end:"top 60%",
  //     scrub:true,
  //   }
  // });


gsap.to("#nav", {
  visibility: "hidden", 
  ease: "power2.in", 
 // y:-200,
  duration: 1,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 10%",
    scrub:true,
  }
});





  