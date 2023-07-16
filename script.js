//Landing page-----------------------------------------------------------------------------------------------------------------------------------

gsap.registerPlugin(ScrollToPlugin);

gsap.to(window, {
  duration: 4,
  scrollTo: {
    y: ".second",
    offsetY: 50,
    autoKill: true
  },
  delay: 4
});



const animatedText = document.querySelectorAll('.down-to-up');

const timeline = gsap.timeline();

timeline.set(animatedText, { y: '100%', opacity: 0 });

timeline.to(animatedText, { y: '0%', opacity: 1, duration: 1 })
  .to(animatedText, { y: '-100%', opacity: 0, duration: 1, delay: 2 });


  const counterElement = document.querySelector(".count");

    gsap.to(counterElement, {
      duration: 3.10,
      innerHTML: 100,
      roundProps: "innerHTML",
      onUpdate: function () {
        counterElement.textContent = counterElement.innerHTML;
      }
    });






// Homepage ------------------------------------------------------------------------------------------------------------------------------------
    



const homepage = document.querySelectorAll('.second-part-animation');


homepage.forEach(container => {
  gsap.fromTo(
    container,
    { opacity: 0, y: 200 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: container,
        start: 'top 50%', 
        end: '+=60',
        scrub: true
      }
    }
  );
});



// picsfirst ------------------------------------------------------------------------------------------------------------------------------------



const imageFirst = document.querySelectorAll('.secx12');


imageFirst.forEach(container => {
  gsap.fromTo(
    container,
    { opacity: 0, x: -100 },
    {
      opacity: 1,
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: container,
        start: 'top 75%', 
        end: '+=10',
        scrub: true
      }
    }
  );
});

const firstAnother = document.querySelectorAll('.secx1');


firstAnother.forEach(container => {
  gsap.fromTo(
    container,
    { opacity: 0, y: -100 },
    {
      opacity: 1,
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: container,
        start: 'top 50%', 
        end: '+=10',
        scrub: true
      }
    }
  );
});




// pics ------------------------------------------------------------------------------------------------------------------------------------------



const picsDoor = document.querySelectorAll('.Timeless');


picsDoor.forEach(container => {
  gsap.fromTo(
    container,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: container,
        start: 'top 60%', 
        end: '+=100',
        scrub: true
      }
    }
  );
});





// pics1-----------------------------------------------------------------------------------------------------------------------------------------






const imageContainers = document.querySelectorAll('.pic');


imageContainers.forEach(container => {
  gsap.fromTo(
    container,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: container,
        start: 'top 80%', 
        end: '+=100',
        scrub: true
      }
    }
  );
});






// footer----------------------------------------------------------------------------------------------------------------------------------------






const imageContainersFooter = document.querySelectorAll('.footer-anim');


imageContainersFooter.forEach(container => {
  gsap.fromTo(
    container,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 255,
      scrollTrigger: {
        trigger: container,
        start: 'top 90%', 
        end: '+=10',
        scrub: true
      }
    }
  );
});



const imageContainersFooterEarly = document.querySelectorAll('.footer-anim-early');


imageContainersFooterEarly.forEach(container => {
  gsap.fromTo(
    container,
    { opacity: 0, y: 0 },
    {
      opacity: 1,
      y: 110,
      duration: 250,
      scrollTrigger: {
        trigger: container,
        start: 'top 60%', 
        end: '+=100',
        scrub: true
      }
    }
  );
});




