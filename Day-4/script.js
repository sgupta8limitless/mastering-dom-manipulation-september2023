
// let timer = null;

// document.getElementById("start-btn")
// .addEventListener("click",function(){

//   timer  = setTimeout(function(){
//         console.log("Some task");
//     },5000)


// })


// document.getElementById("stop-btn")
// .addEventListener("click",function(){

//     clearTimeout(timer);

// })

let count=1;
let t = setInterval(function(){
    if(count===5)
    {
        clearInterval(t);
    }
    console.log("Some task");
    count++;
    
},3000)


// clearInterval()

