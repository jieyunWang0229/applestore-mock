//Pin page 1
const tlIntro = gsap.timeline ({
    scrollTrigger :{
        trigger: ".first-page",
        start: "0%",
        end: "100%",
        pin:true,
        pinSpacing: false
        
    }
})

//Page 2 

const secondPage = gsap.timeline ({
    scrollTrigger :{
        trigger: ".second-page",
        start: "-30%",
        end: "50%",
        scrub:true
        
    }
})

secondPage.fromTo(".highlight",{ color:"rgba(255,255,255, 0.4" }, { color:"rgba(255,255,255, 1", stagger: 1 });

const secondPageRemove = gsap.timeline ({
    scrollTrigger :{
        trigger: ".second-page",
        start: "-20%",
        end: "70%",

        
    }
})

secondPage.to(".highlight",{ color:"rgba(255,255,255, 0.4" , stagger: 1 });

//page 3

const thirdPage = gsap.timeline ({
    scrollTrigger :{
        trigger: ".third-page",
        start: "-20%",
        end: "0%",
        scrub:true
        
    }
});

thirdPage.fromTo(".largephone",{ x:"0%"}, { x:"-20%"} );
thirdPage.fromTo(".smallphone",{ x:"10%"}, { x:"30%"},"<" );
thirdPage.fromTo(".product-des-left",{ x:"50%", opacity :0}, { x:"-50%", opacity :1},"<"  );
thirdPage.fromTo(".product-des-right",{ x:"-50%",opacity :0}, { x:"50%", opacity :1},"<"  );

const thirdPageRemove = gsap.timeline ({
    scrollTrigger :{
        trigger: ".third-page",
        start: "30%",
        end: "80%",
        scrub:true
        
    }
});

thirdPageRemove.fromTo(".largephone",{ x:"-20%"}, { x:"0%"} );
thirdPageRemove.fromTo(".smallphone",{ x:"30%"}, { x:"10%"},"<" );
thirdPageRemove.fromTo(".product-des-left",{ x:"-50%", opacity :1}, { x:"0%", opacity :1},"<");
thirdPageRemove.fromTo(".product-des-right",{ x:"50%", opacity :1}, { x:"0%", opacity :1},"<");



//page 4

const buttons = document.querySelectorAll("input");

const checklabe = function (){
    const labels = document.querySelectorAll("label");
    labels.forEach( label => {
        if(label.nextElementSibling.checked){
             gsap.set(label, { border: "3px solid rgb(48,86,245)" });
        }else{
            gsap.set(label, { border: "2px solid rgb(154, 152, 152)" });

        }
    });
} 

const highlightext = function(color){
    const tags = document.querySelectorAll(".color-tag");
    tags.forEach(tag =>{
        if(tag.innerHTML == color){
            gsap.set(tag, { color: "black" });
        }else{
            gsap.set(tag, { color: "darkgrey" });
        }
    });
}

const changegallery= function(color){
    const gallery = document.querySelector('.imagecontainer');
    const chosenitem = gallery.querySelector(`#${color}`);
    const distance = chosenitem.offsetLeft;
    gsap.to(gallery, { x: -distance });
}

let index = 2;
const changeDetailRight = function(color){
    const right = document.querySelector('.detail-right');
    const pic = right.querySelector(`.${color}`);
    gsap.to(pic, { zIndex: index });
    index ++;
}

buttons.forEach(button => {
     
    button.addEventListener("click", (event)=>{ 
       const colorchosen = event.target.value;
       checklabe();
       highlightext(colorchosen);
       changegallery(colorchosen);
       changeDetailRight(colorchosen);
   });
   
});



//page 5

const fifthPage = gsap.timeline ({
    scrollTrigger :{
        trigger: ".fifth-page",
        start: "0%",
        end: "110%",
        scrub:true,
        pin:true
        
    }
})

fifthPage.fromTo(
    ".product-video", 
    { currentTime: 0 },
    { currentTime: 3, duration: 1 });

fifthPage.fromTo(
    ".product-info-container h3", 
    { opacity: 0 },
    { opacity: 1, stagger:0.2, duration: 0.5 }, "<");


//page 6
const sixthPage = gsap.timeline ({
    scrollTrigger :{
        trigger: ".sixth-page",
        start: "-20%",
        end: "50%",
        scrub:true,
        pin:true
        
    }
})

sixthPage.fromTo(
    ".photo-title", 
    { y: "5%" },
    { y: "-150%" });

sixthPage.fromTo(
    ".photo-subtitle", 
    { y: "5%" },
    { y: "-180%" }, "<");

sixthPage.fromTo(
    ".portrait-container", 
    { y: "5%" },
    { y: "-50%" }, "<");

sixthPage.fromTo(
    ".phone-video", 
    { y: "5%" },
    { y: "-50%" }, "<");