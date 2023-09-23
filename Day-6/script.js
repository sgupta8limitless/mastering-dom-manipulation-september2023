let students = [

    {name:"Bhimrao",city:"Hubli",age:25,totalMarks:345},
    {name:"Ganesh",city:"Hyderabad",age:22,totalMarks:200},
    {name:"Aqib",city:"Baramulla",age:21,totalMarks:300},
    {name:"Navin",city:"London",age:27,totalMarks:289},
    {name:"Shiva",city:"Andhra Pradesh",age:19,totalMarks:350},
    {name:"Utpal",city:"Ahemadabad",age:22,totalMarks:278},
    {name:"Nanda",city:"Vizag",age:28,totalMarks:345},
    {name:"Justin",city:"Hubli",age:25,totalMarks:345},
    {name:"Dale",city:"Hyderabad",age:22,totalMarks:200},
    {name:"Shane",city:"Baramulla",age:21,totalMarks:300},
    {name:"Abraham",city:"London",age:27,totalMarks:289},
    {name:"Shahrukh",city:"Andhra Pradesh",age:19,totalMarks:350},
    {name:"Hritik",city:"Ahemadabad",age:22,totalMarks:278},
    {name:"Saif",city:"Vizag",age:28,totalMarks:345},
    {name:"Thor",city:"Hubli",age:25,totalMarks:345},
    {name:"Ironman",city:"Hyderabad",age:22,totalMarks:200},
    {name:"Captain America",city:"London",age:27,totalMarks:289},
    {name:"Hawkeye",city:"Andhra Pradesh",age:19,totalMarks:350},
    {name:"Hulk",city:"Ahemadabad",age:22,totalMarks:278},
    {name:"Black Widow",city:"Vizag",age:28,totalMarks:345},
    {name:"Subhashini",city:"Vizag",age:28,totalMarks:345},
    {name:"Shane",city:"Melbourne",age:21,totalMarks:300},
    {name:"Abraham",city:"Pretoria",age:27,totalMarks:289},
    {name:"Subhashini",city:"Vizag",age:28,totalMarks:345},
    {name:"Shane",city:"Melbourne",age:21,totalMarks:300},
    {name:"Abraham",city:"Pretoria",age:27,totalMarks:289},
    

]

let filterStudents = students;

let noOfPages = Math.ceil(students.length/8);
let currentPage=1;

// logic for generating 
for(let i=1;i<=noOfPages;i++)
{
    let btn=document.createElement("button");
    btn.innerText=i;

    btn.addEventListener("click",function(){
        currentPage=i;
        paginate(currentPage);
    })

    document.getElementById("nums").appendChild(btn);
}


document.getElementById("next")
.addEventListener("click",function(){

    if(currentPage<noOfPages)
    {
        currentPage++;
        paginate(currentPage);
    }
   

})

document.getElementById("prev")
.addEventListener("click",function(){

    if(currentPage>1)
    {
        currentPage--;
        paginate(currentPage);
    }
   

})


document.getElementById("search")
.addEventListener("keyup",function(){

    let val = document.getElementById("search").value ;

    filterStudents = students.filter(function(student){
        return student.name.includes(val);
    })

    currentPage=1;
    paginate(1);
   

})



// initial call 
paginate(1);


function paginate(pageNumber)
{

    let startIndex = (pageNumber-1)*8;
    let endIndex = startIndex+8;
    let paginatedData = filterStudents.slice(startIndex,endIndex);

    document.getElementById("info").innerText=currentPage+" of "+noOfPages;

    document.getElementById("tbody").innerHTML="";

    for(let i=0;i<paginatedData.length;i++)
    {
        let row =  document.createElement("tr");

        let noTd = document.createElement("td");
        noTd.innerText=startIndex+i+1;

        let nameTd=document.createElement("td");
        nameTd.innerText=paginatedData[i].name;

        let ageTd=document.createElement("td");
        ageTd.innerText=paginatedData[i].age;

        let cityTd=document.createElement("td");
        cityTd.innerText=paginatedData[i].city;

        let tmTd=document.createElement("td");
        tmTd.innerText=paginatedData[i].totalMarks;

        // row.appendChild(noTd);
        // row.appendChild(nameTd);
        // row.appendChild(ageTd);
        // row.appendChild(cityTd);
        // row.appendChild(tmTd);

        row.append(noTd,nameTd,ageTd,cityTd,tmTd);
        

        document.getElementById("tbody").appendChild(row);
    }

}