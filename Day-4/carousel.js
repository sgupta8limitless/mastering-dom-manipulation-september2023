
let currentSlide  = 1;


function goToSlide(slideNumber)
{
    document.getElementById("carousel").style.transition="1s";
    document.getElementById("carousel").style.marginLeft = -(slideNumber)*100+"%";
}


document.getElementById("next")
.addEventListener("click",function(){

    currentSlide++;
    console.log(currentSlide);
    goToSlide(currentSlide);
   

  

    if(currentSlide>4)
    {
        setTimeout(function(){
            document.getElementById("carousel").style.transition="0s";
            document.getElementById("carousel").style.marginLeft = "-100%";
            currentSlide=1;
        },1000)

    }


})

document.getElementById("prev")
.addEventListener("click",function(){

    currentSlide--;
    console.log(currentSlide);
    goToSlide(currentSlide);

    if(currentSlide==0)
    {
        setTimeout(function(){
            document.getElementById("carousel").style.transition="0s";
            document.getElementById("carousel").style.marginLeft = "-400%";
            currentSlide=4;
        },1000)

    }
    

})



setInterval(function(){

    currentSlide++;
    goToSlide(currentSlide);
    
   

    if(currentSlide>4)
    {
        setTimeout(function(){
            document.getElementById("carousel").style.transition="0s";
            document.getElementById("carousel").style.marginLeft = "-100%";
            currentSlide=1;
        },1000)

    }

},3000)

