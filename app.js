let burger =document.querySelector(".toogle-menu");
let navLinks = document.querySelector("nav ul")
burger.addEventListener("click",function(){
burger.children[0].classList.toggle("click0");
burger.children[1].classList.toggle("click1");
burger.children[2].classList.toggle("click2");
navLinks.classList.toggle('nav-open')
})
//skills animation
let skillsSection = document.querySelector('.skills');
let progres = document.querySelectorAll('.prog span');


window.addEventListener('scroll' , function(){
    if(window.scrollY>= skillsSection.offsetTop-200){
        progres.forEach(function(e){
            e.style.width =e.dataset.width;
        })
    }
})
//function number ++
let static= document.querySelector('.static');
let num = document.querySelectorAll(".static ul li h5");

let countNum = function( num){
 let goal =num.dataset.goal;
 let f = setInterval(()=>{
    num.textContent++;
    if(num.textContent===goal){
        clearInterval(f)
    }
 },2000/goal)
}


let work =false;
window.addEventListener('scroll' ,function(){
    if(window.scrollY>=static.offsetTop){
 if(!work){num.forEach((e)=> countNum(e));}
 work= true;
    }
});



