let taskForm = document.querySelector("#task-form");



taskForm.addEventListener("submit", function() {
    let taskinput = document.querySelector("#input-item");
    let task = taskinput.value.trim();

    // first we put in the tasklist and then put into local storage.


    //get task
    let tasklist = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : [];
    // u want in object form or else let it be empty
    tasklist.unshift(task);

    //set to local storage
    localStorage.setItem("task", JSON.stringify(tasklist));

});


console.log(localStorage);
const createList = document.getElementById('createList');
createList.addEventListener('click', ()=>{
    if(document.getElementById('divList').innerHTML == ""){
        create_List();
    }else{
        document.getElementById('divList').innerHTML = "";
        create_List();
    }
})

function create_List(){
    let arr = JSON.parse(localStorage.getItem('task'));
    // for(let i of arr){
    //     console.log(i);
    // }

    const currDiv = document.getElementById('divList');
    const list = document.createElement('ul');
    for(let i in arr){
        const li = document.createElement('li');
        li.innerText = arr[i];
        list.appendChild(li);
    }
    currDiv.appendChild(list);
}