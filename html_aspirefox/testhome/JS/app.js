const add = document.getElementById('btn');


add.addEventListener('click', getFun);


function getFun(){
    let takeInput = document.getElementById('input');

    let task = takeInput.value.trim();
    // console.log(task);
    let tasklist = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")): [];
    
    tasklist.unshift(task);
    // console.log(tasklist);
    localStorage.setItem("task", JSON.stringify(tasklist));
    // console.log(localStorage.getItem('nameList'));
}

const create_List=document.getElementById("create");
create_List.addEventListener('click',()=>{

if(document.getElementById("divList").innerHTML=="")
{
    createtable();
}

else{
 document.getElementById("divList").innerHTML="";
    //  make it empty,and then put 
 createtable();
}
});




function createtable(){
let arr= JSON.parse(localStorage.getItem("task"));
// for(let i in arr){
//     console.log(arr[i])
// }

const currentdiv=document.getElementById("divList");
const list=document.createElement('ul');
for(let i in arr){
    const li=document.createElement('li');
    li.innerText=arr[i];
    list.appendChild(li);
}
currentdiv.appendChild(list);



}
