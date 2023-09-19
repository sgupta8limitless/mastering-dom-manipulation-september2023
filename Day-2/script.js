let products = [
    {
        name:"Samsung M51",
        price:23000
    },
    {
        name:"Ihone 14",
        price:85000
    },
    {
        name:"Samsung S23 Ultra",
        price:90000
    },
    {
        name:"Xiaomi X12",
        price:60000
    }
]


for(let i=0;i<products.length;i++)
{
    
    let pro = document.createElement("div"); //<div></div>
    pro.classList.add("product"); //<div class="product"></div>

    let pname = document.createElement("h2");
    pname.innerText=products[i].name;

    let pprice = document.createElement("h3");
    pprice.innerText=products[i].price;

    let btn = document.createElement("button");
    btn.innerText="Buy";

    btn.addEventListener("click",function (){
        console.log(products[i]);
    })

    pro.appendChild(pname);
    pro.appendChild(pprice);
    pro.appendChild(btn);

    document.getElementById('parent').appendChild(pro);

   


}

