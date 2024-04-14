



///////////////////////////////////////////////////////////////////////////

const tl1 = gsap.timeline()

tl1.to(".spoon1", {
  x:-50,
  duration:1,
  scrollTrigger:{
    scrub:1,
    // markers: true,
    trigger:".spoon1",
    scroller:"main",
    start:"20% top",

  }
})
tl1.to(".vg1", {
  x:30,
  duration:1,
  scrollTrigger:{
    scrub:1,
    // markers: true,
    trigger:".vg1",
    scroller:"main",
    start:"-40% top",

  }
},0)

tl1.to(".vg2",{
  x:20,
  duration:1,
  scrollTrigger:{
    scrub:1,
    // markers: true,
    trigger:".vg2",
    scroller:"main",
    start:"-125% top",

  }
},0)
tl1.to(".f1",{
  rotation:40,
  x:-10,
  duration:1,
  scrollTrigger:{
    scrub:1,
    // markers: true,
    trigger:".f1",
    scroller:"main",
    start:"-13% top",

  }
})
tl1.to(".f2",{
  rotation:-60,
  x:10,
  duration:1,
  scrollTrigger:{
    scrub:1,
    // markers: true,
    trigger:".f2",
    scroller:"main",
    start:"-200% top",

  }
})
tl1.to(".dots",{
  x:20,
  duration:1,
  scrollTrigger:{
    scrub:1,
    // markers: true,
    trigger:".dots",
    scroller:"main",
    start:"-430% top",

  }
})
tl1.to(".chop",{
  rotation: -1,
  x:-5,
  // duration:1,
  scrollTrigger:{
    scrub:1,
    // markers: true,
    trigger:".chop",
    scroller:"main",
    start:"-5% top",
    end:"155%"
    

  }
})
///////////page2///////
tl1.from(".chicken",{
  x:100,
  duration:1,
  rotation:30,
  scrollTrigger:{
    trigger:".page1",
    scroller:"main",
    // markers: true,
    start:"30% top",
    // end:"70%",
    scrub:1
  }
})
tl1.from(".sp2",{
  x:-60,
  duration:1,
  scrollTrigger:{
    trigger:".page1",
    scroller:"main",
    // markers: true,
    start:"8% top",
    // end:"bottom 10%",
    scrub:1
  }
})
tl1.from(".vg3",{
  x:-45,
  duration:1,
  scrollTrigger:{
    trigger:".page1",
    scroller:"main",
    // markers: true,
    start:"8% top",
    // end:"bottom 10%",
    scrub:1
  }
})
tl1.from(".sp1",{
  x:-40,
  duration:1,
  scrollTrigger:{
    trigger:".page1",
    scroller:"main",
    // markers: true,
    start:"8% top",
    
    scrub:1
  }
})
tl1.to(".f3,.f4,.f5",{
  rotation:60,
  duration:1,
  scrollTrigger:{
    trigger:".page1",
    scroller:"main",
    // markers: true,
    start:"36% top",
    // end:"bottom 10%",
    scrub:1
  }
})
tl1.from(".chop1",{
  rotation:100,
  x:30,
  duration:1,
  scrollTrigger:{
    trigger:".page1",
    scroller:"main",
    // markers: true,
    start:"36% top",
    // end:"bottom 10%",
    scrub:1
  }
})
tl1.from(".fork",{
  rotation:-120,
  x:100,
  
  duration:1,
  scrollTrigger:{
    trigger:".page1",
    scroller:"main",
    // markers: true,
    start:"36% top",
    // end:"bottom 10%",
    scrub:1
  }
})
tl1.to(".vg4",{
  x:160,
  
  duration:1,
  scrollTrigger:{
    trigger:".page1",
    scroller:"main",
    // markers: true,
    start:"89% top",
    // end:"bottom 10%",
    scrub:1,
  }
})
tl1.to(".sp3",{
  x:170,
  ease:"slow(0.7,0.7,false)",
  duration:1,
  scrollTrigger:{
    trigger:".page1",
    scroller:"main",
    // markers: true,
    start:"85% top",
    // end:"bottom 10%",
    scrub:1,
  }
})
///////////////////////////////

tl1.from(".vg4",{
  x:160,
  
  duration:1,
  scrollTrigger:{
    trigger:".page2",
    scroller:"main",
    //  markers: true,
    start:"45% top",
    
    scrub:1,
  }
})
tl1.from(".sp3",{
  x:170,
  
  duration:1,
  scrollTrigger:{
    trigger:".page2",
    scroller:"main",
    // markers: true,
    start:"46% top",
    scrub:1,
  }
})
tl1.from(".f3,.f4,.f5",{
  rotation:60,
  duration:1,
  scrollTrigger:{
    trigger:".page2",
    scroller:"main",
    // markers: true,
    start:"10% top",
    // end:"60%",
    scrub:1
  }
})
tl1.to(".page2DishContainer>div",{
  y:-110,
  stagger: 0.5,
  duration:1,
  scrollTrigger:{
    trigger:".page2",
    scroller:"main",
    // markers: true,
    start:"13% top",
    scrub:1
  }
})
//////////////page3/////////////
tl1.from(".sp4", {
  x:250,
  duration:1,
  scrollTrigger:{
    trigger:".page2",
    scroller:"main",
    // markers: true,
    scrub:1,
    start:"60%"

  }
})
tl1.to(".beer", {
  rotation:40,
  duration:1,
  scrollTrigger:{
    trigger:".page2",
    scroller:"main",
    // markers: true,
    scrub:1,
    start:"80%"

  }
})
tl1.to(".opener1", {
  x:-20,
  duration:1,
  scrollTrigger:{
    trigger:".page2",
    scroller:"main",
    // markers: true,
    scrub:1,
    start:"80%"

  }
})
tl1.to(".mug1", {
  y:-100,
  duration:1,
  scrollTrigger:{
    trigger:".page2",
    scroller:"main",
    // markers: true,
    scrub:1,
    start:"80%"

  }
})

