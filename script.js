 var crsr=document.querySelector("#cursor")
 var blr=document.querySelector("#cursor-blur")
 

 document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+ "px"
    crsr.style.top=dets.y+"px"
    blr.style.left=dets.x-200 + "px"
    blr.style.top=dets.y-200+ "px"
 })
 





gsap.to("#navbar",{
    backgroundColor:"#000",
    duration:0.5,
    height:"90px",
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }

})
gsap