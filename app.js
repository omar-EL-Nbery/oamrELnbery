



gsap.from(".animated-heading", {
    opacity: 0, // Set final opacity to 1
    y: 500, // Move elements up
    duration: 1, // Animation duration
    delay: 1, // Delay before animation starts
    ease: "back", // Easing effect
    stagger: 0.1, 
  });

gsap.to(".animated-heading",{
    scrollTrigger :{
        scrub :-1
    },
    scale: 0.1
})

// gsap.to(".animated1", {
//     x: -400, // Move the element horizontally by 100 pixels
//     scrollTrigger: {
//         trigger: ".animated1", // Specify the trigger element
//         start: "top 1000px", // Start the animation when the top of the trigger element reaches the center of the viewport
//         end: "bottom center", // End the animation when the bottom of the trigger element reaches the center of the viewport
//         scrub: true // Smoothly progress the animation with the scroll
//     }
// });

// gsap.to(".animated2", {
//     y: -200, // Move the element horizontally by 100 pixels
//     scrollTrigger: {
//         trigger: ".animated1", // Specify the trigger element
//         start: "top center", // Start the animation when the top of the trigger element reaches the center of the viewport
//         end: "bottom center", // End the animation when the bottom of the trigger element reaches the center of the viewport
//         scrub: true // Smoothly progress the animation with the scroll
//     }
// });

// gsap.to(".animated3 ", {
//     x: 500, // Move the element horizontally by 100 pixels
//     scrollTrigger: {
//         trigger: ".animated1", // Specify the trigger element
//         start: "top center", // Start the animation when the top of the trigger element reaches the center of the viewport
//         end: "bottom center", // End the animation when the bottom of the trigger element reaches the center of the viewport
//         scrub: true // Smoothly progress the animation with the scroll
//     }
// });