// selecting elements using class name 

// let eles = document.getElementsByClassName('ele');
// console.log(eles[0]);

// console.log(document.getElementsByClassName('ele')[0])

// select elements using tag name 

// let eles = document.getElementsByTagName('p');
// console.log(eles[1]);

// console.log(document.getElementsByTagName('p')[1]);


// selecting elements using id 

// let ele = document.getElementById('para');

// console.log(ele);



// day 1 basics 


// console.log(document.getElementById('box').innerText);



// document.getElementById('box').innerHTML = "<h1>New Data for text</h1>";

// let d = document.getElementsByClassName('one')[0];

// d.style.backgroundColor = "red";
// d.style.height="500px";



function logSomething()
{
    // document.getElementById('box').innerHTML = "<h1>New Data for text</h1>";

    let d = document.getElementsByClassName('one')[0];

    d.style.backgroundColor = "red";
    d.style.height="500px";

}




document.getElementById('btn')
.addEventListener('click',logSomething);

