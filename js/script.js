var tl = gsap.timeline();
tl.to("#glass2",{
    y:660,
    duration: 1.5,
    opacity: 0,
})

tl.from("h1",{
    x:15,
    duration:1
})

tl.from("p",{
    x:15,
    duration:1
})

gsap.to("#bordersss",{
    rotation: -360,
    ease: "power2.inOut",
    // yoyo:true,
    repeat: -1,
    duration:0.1,
    ease: "none",

})
gsap.to("#bordersss2",{
    rotation: 360,
    ease: "power.inOut",
    // yoyo:true,
    repeat: -1,
    duration:0.1,
    ease: "none",

})
gsap.to("#bordersss3",{
    rotation: 360,
    ease: "power.inOut",
    // yoyo:true,
    repeat: -1,
    duration:0.1,
    ease: "none",

})
gsap.to("#bordersss4",{
    rotation: 360,
    ease: "power.inOut",
    // yoyo:true,
    repeat: -1,
    duration:0.1,
    ease: "none",

})

