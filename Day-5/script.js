// window 

// window.alert("Hello");

// let name = prompt("Enter your name");
// console.log(name);

// let st = confirm("Do you want to continue");
// console.log(st);


// document.getElementById("btn")
// .addEventListener("click",function(){

//     // window.location.reload();
//     // window.location = "https://www.google.com";
//     // window.location="../Day-4/carousel.html"
//     // window.location.

// })


// function scrollToSection(idvalue)
// {
//     document.getElementById(idvalue).scrollIntoView({behavior:'smooth'});
// }


// document.getElementById("section2-link")
// .addEventListener("click",function(){

//     document.getElementById("section2").scrollIntoView({behavior:'smooth'});

// })


// document.getElementById("section3-link")
// .addEventListener("click",()=>{

//     document.getElementById("section3").scrollIntoView({behavior:'smooth'});

// })


window.addEventListener("scroll",function(){

    // header color change logic based on scroll 
   if(window.scrollY>=200)
   {
        document.getElementById("header").style.backgroundColor="White";
   }
   else 
   {
    document.getElementById("header").style.backgroundColor="gray";
   }

//    btt button display based on scrol 

   if(window.scrollY>=500)
   {
        document.getElementById("btt").style.display="flex";
   }
   else 
   {
        document.getElementById("btt").style.display="none";
   }




})

document.getElementById("cs").addEventListener("click",function(){

    window.scrollTo({top:1000,behavior:"smooth"})

})

document.getElementById("btt")
.addEventListener("click",function(){
    window.scrollTo({top:0,behavior:"smooth"})
})