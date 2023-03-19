let circle = document.querySelector("#circle")

window.addEventListener('mousemove',(e)=>{
  // e.pageX => give x and y coorfinates of mouse

  let x = e.pageX;
  let y = e.pageY;

 //adding delay effect 
  setTimeout(()=>{
    circle.style.top = y + 'px';  
    circle.style.left = x + 'px';  
  },100)
  
})

$('#down #text h3').textillate({
    autoStart:false,
    in:{
        effect:'fadeInUp',
        delay:10
    },
    //run when this animation donw
   callback:function(){
         gsap.fromTo('#down #text img',{
            opacity:0,
            y:-70,
            duration:2,
            ease:'Expo.easeInOut',
            yoyo:true
         },{
            opacity:1,
            y:-10
         })
   }
})

$('#hero h1').textillate({
    in:{
        effect:'fadeInUp',
        // callback:function(){
        //     $('#hero h1').textillate('out')
        // }
    },
    loop:true,
    out:{
        effect:'fadeOutRight'
    }
})

let tel = gsap.timeline()

gsap.to(".fader",{
    //it only tells animation kab shuru hoga
    scrollTrigger:{
        trigger: '#down',
       
        // pahle top element ka top , dusra top sreen ka top
        start:'top 5%',
        // ye sab action perform ho sakta hai mere animation me
        toggleActions:'play pause resume reverse'
    },
    opacity:0,
    y: -100,
    stagger : .3, //matlab baari baari ho
    duration : 2,
    onComplete:function(){
        $('#down #text h3').textillate('start')
    }
})
