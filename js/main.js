var t = 2.5
var logoEase = Power2.easeOut
var logoEase2 = Sine.easeOut

function start(){
   var tl = new TimelineMax()
   tl
   .to("#left-c", t, {opacity: 1, ease: logoEase}, "sync")
   .to("#gradient-left-c", t, {x: -270, y: -270, ease: logoEase}, "sync")
   .to("#right-c", t, { opacity: 1, ease: logoEase }, "sync2-=1.5")
   .to("#gradient-right-c", t, { x: 270, y: -270, opacity: 1, ease: logoEase }, "sync2-=1.5")
   .to("#logo-copy", 3, {opacity: 1, ease: logoEase}, "sync3-=1.5")
   .to("#logo-copy-gradient", 3, {y: 300, ease: logoEase}, "sync3-=1.5")

   gsap.delayedCall(4.2, end)
}

function end(){
   gsap.set("#logo-copy-gradient", {rotation: 180, x: 0, y: 0})
   var tl = new TimelineMax()
   tl.to("#gradient-left-c", t, {x: 0, y: 0, ease: logoEase2}, "sync")
   .to("#left-c", t, {opacity: 0, ease: logoEase2}, "sync")
   .to("#gradient-right-c", t, {x: 0, y: 0, ease: logoEase2}, "sync")
   .to("#right-c", t, { opacity: 0, ease: logoEase2 }, "sync")
   .to("#logo-copy-gradient", 2, {y: 300, ease: logoEase2}, "sync")
   .to("#logo-copy", 2, { opacity: 0, ease: logoEase2, onComplete: clearProps}, "sync")
}

function clearProps(){
   gsap.set("#gradient-left-c, #gradient-right-c, #logo-copy-gradient", {clearProps: "transform", onComplete: checkProps})
}

function checkProps(){
   var val = gsap.getProperty("#gradient-left-c", "x")
   if(val === 0) {
      gsap.delayedCall(.5, init)
   }
}

function init(){
   gsap.set("#logo", {xPercent: -50, yPercent: -50})
   gsap.set("#end-gradient", {x: -100, y: -300, opacity: 0})
   gsap.set("#left-c, #right-c, #logo-copy", {transformOrigin: "center center", opacity: 0, onComplete: start})

}

init()