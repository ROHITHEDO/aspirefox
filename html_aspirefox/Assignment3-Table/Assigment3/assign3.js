console.log("hey");
const input = document.getElementById("searchbar");

let api = document.getElementById("api");
let emptable = document.getElementById("emptable");
// let addbtn = document.getElementById("addbtn")
// this is by default modal property
let onsubmit = document.getElementById("onsubmit")

// api.addEventListener("click",function apicall(){

window.addEventListener('load', () => {
    if (localStorage.length > 0) {
        createtable(JSON.parse(localStorage.getItem('iamapi')));
        //    make table with these items.

    } else {
        apicall();
    }
})

function mySearch(){

    var input, filter, table, tr, td, i, txtValue; //defined
    input = document.getElementById("searchbar");
    filter = input.value;
    console.log(filter)
    table = document.getElementById("emptable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) 
    {
        td = tr[i].getElementsByTagName("td");
        // row ka td,we need to define this way.,acessing td and then iterating it.

        for(let j=0; j<td.length;j++)
        {
            if (td[j])
            {
                txtValue = td[j].innerText.toLowerCase();
                if (txtValue.indexOf(filter) > -1) 
                {
                    tr[i].style.display = "";
                    break;
                } 
                else 
                {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}




function settitle(str){
    let newstr="";
    for(let i=0;i<str.length;i++){
        if(i==0){
            newstr+=str[i].toUpperCase();
        }else{
            if(str[i]==str[i].toUpperCase())
            {
                newstr+=" " + str[i];
            }
            else{
                newstr+=str[i]
            }
        }
    }
    return newstr;

}


function apicall() {
    console.log('inside apifunc');

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001', true);

    xhr.onload = () => {
        if (xhr.status == 200) {
            console.log('in onload section');
            let data = JSON.parse(xhr.responseText);
            

            console.log(data);
            // debugger
            localStorage.setItem("iamapi", JSON.stringify(data));
            
            createtable(data);
        }
    }
    xhr.send();
}


function createtable(data) {
    // table = document.getElementById("emptable");
    console.log('in create table');
    rows = data.length;
    colLen = Object.keys(data[0]).length;
    // data hai array of objects
    colName = Object.keys(data[0]);
    // only 1st col ka names
    // you just know the names,you have not yet inserted in the table.


    // for the first row in a table
    let tr = document.createElement('tr');
    for (let i = 0; i < colLen; i++) {
        let th = document.createElement('th');
        th.innerHTML = settitle(colName[i]);
        // it keeps adding names to the columns.
        tr.appendChild(th);
    }
    let th = document.createElement('th');
    th.innerText = "Edit"
    tr.appendChild(th)

    let th1 = document.createElement('th');
    th1.innerText = "Delete"
    tr.appendChild(th1)


    emptable.appendChild(tr);
    // console.log(emptable)



    for (let i = 0; i < rows; i++) {
        // work is to iterate rows
        eachandeveryobj = data[i];
        //obj is accesed (keys and values)
        // makes space while row is iterating
        let tr = document.createElement('tr');


        // this for loop to add mulitple data(populate).
        // data is filled in the form of cols.
        for (let j = 0; j < colLen; j++)
        {   
            td = document.createElement('td');

            if(colName[j]==='imageUrl')
            {
            let img=document.createElement('img');
            img.setAttribute('src',Object.values(eachandeveryobj)[j]);
            // what properties should image have.
            td.appendChild(img);
            }
            else
            {
            td.innerText = Object.values(eachandeveryobj)[j];
            // normally what value was ther before.
            }
            // inside the table you need only values
            tr.appendChild(td);



        }
        td = document.createElement('td');
        tr.appendChild(td)

        let btn = document.createElement('button');
        btn.innerText = "Edit";
        btn.setAttribute("class", "btn btn-secondary editclass");
        btn.setAttribute('data-bs-toggle','modal')
        btn.setAttribute('data-bs-target','#editModal')
        td.appendChild(btn);

        //adding event listner to edit button
        

        td = document.createElement('td');
        tr.appendChild(td)

        let delbtn = document.createElement('button')
        delbtn.innerText = "Delete";
        delbtn.setAttribute("class", "btn btn-danger deleterow");
        // data-bs-toggle="modal" data-bs-target="#exampleModal"
        delbtn.setAttribute("data-bs-toggle","modal")
        delbtn.setAttribute("data-bs-target","#myModal")
        // this is how u link

        
        // delbtn.style.backgroundColor="#ECE5C7"


        td.appendChild(delbtn);


        emptable.appendChild(tr);
    }
    edit()
    deletedata();
}

// add wala submit submit
modalform.onsubmit = (e) => {
    // e.preventDefault();
    let modelform = document.getElementById("modelform");
    let newObj = {}
    localData = JSON.parse(localStorage.getItem('iamapi'))[0];
    colName = Object.keys(localData)

    // new values that were added in the modal form
    colName.shift();
    // removes the first element ,here it is ID as we dont take input of it
    newObj['id'] = maxID() + 1;


    for (let i = 0; i < modalform.elements.length - 2; i++) {
        newObj[colName[i]] = modalform.elements[i].value;
        // throwing the elments of the modalform to our new object
    }

    localData.unshift(newObj);


    // COMES ON THE TOP
    localStorage.setItem('iamapi', JSON.stringify(localData))
    // now it gets addded to the localstorage
    emptable.innerHTML = '';
    createtable(localData);

}

function maxID() {
    let max = 0;
    localData = JSON.parse(localStorage.getItem("iamapi"))
    for (let i of localData) {

        if (i.id > max)
            max = i.id;
            // i.id= object(i).ka(id).

    }
    return max;

}


function edit()
{
    let editclass = document.getElementsByClassName('editclass');
    // ther are so many edit btns                                           
    for (let i of editclass) 
    {
        i.addEventListener("click", function() 
        {
            const currDiv = document.getElementById('editField');
            const editForm = document.createElement('form');
            editForm.setAttribute('class', 'row g-3')

            let tempid = this.parentElement.parentElement.firstChild.innerText;
            let tempData = JSON.parse(localStorage.getItem('iamapi'));
            let headArr = Object.keys(tempData[0]);

            for(let i=0;i<tempData.length;i++){
                if(tempid == tempData[i].id)
                {
                    for(let j=0;j<headArr.length;j++)
                    // every key element will take its place
                    {
                        if(j==0)
                        // coz we are acessing id and that should be disabled.
                        // dynamically crreating evrything function is hit
                        {
                            const div = document.createElement('div');
                            div.setAttribute('class', 'col-md-4');

                            const label = document.createElement('label');
                            label.setAttribute('for', `ip${j}`);
                            label.setAttribute('class', 'form-label');
                            label.innerText = settitle(headArr[j]);

                            const input = document.createElement('input');
                            input.setAttribute('id',`ip${j}`);
                            input.setAttribute('class', 'form-control');
                            // input feild will be 100%.

                            input.setAttribute('disabled', '')

                            input.value = tempData[i][headArr[j]];

                            input.setAttribute('required', '');

                            div.appendChild(label);
                            div.appendChild(input);
                            editForm.appendChild(div);
                        }else{
                            const div = document.createElement('div');
                            div.setAttribute('class', 'col-md-4');

                            const label = document.createElement('label');
                            label.setAttribute('for', `ip${j}`);
                            label.setAttribute('class', 'form-label');
                            label.innerText = settitle(headArr[j]);

                            const input = document.createElement('input');
                            input.setAttribute('id',`ip${j}`);
                            input.setAttribute('class', 'form-control');
                            input.value = tempData[i][headArr[j]];
                            
                            input.setAttribute('required', '');

                            div.appendChild(label);
                            div.appendChild(input);
                            editForm.appendChild(div);
                        }
                    }
                }
            }
            // doing this so that it does make duplication
            if(currDiv.innerHTML==""){
                currDiv.appendChild(editForm);

            }else{
                currDiv.innerHTML="";
                currDiv.appendChild(editForm);

            }
            
            // what should happen after clicking save changes button in the modal
            document.getElementById('editbtn').addEventListener('click', ()=>
            { 
        
                let newData = JSON.parse(localStorage.getItem('iamapi'))
                let newObj = {};

            for(let i=0;i<headArr.length;i++)
            {
                if(document.getElementById(`ip${i}`).value == ""){
                    alert('field is empty');
                    
                    return;
                }else{
                  
                    newObj[headArr[i]] = document.getElementById(`ip${i}`).value;
                }
            }
            for(let i=0;i<newData.length;i++)
            {
                if(newObj.id == tempData[i].id)
                {
                    newData[i] = newObj;
                    console.log(newData);
                  
                    localStorage.setItem('iamapi',JSON.stringify(newData));
                    
                
                    if(document.getElementById('emptable').innerHTML == ""){
                        createtable(JSON.parse(localStorage.getItem('iamapi')));
                    }else{
                        document.getElementById('emptable').innerHTML = "";
                        createtable(JSON.parse(localStorage.getItem('iamapi')));
                    }
                }
            }
            })
        })
    }
}


function deletedata() {
    

let deleterow = document.getElementsByClassName('deleterow');
    for (let i of deleterow) 
   
    {
        i.addEventListener("click", function() 
        {
          let idd= this.parentElement.parentElement.firstChild.innerText                      
          console.log(idd)


            let deletemodal=document.getElementById("deletemodal")
            // deletemodal is the id of the button in the modal
            deletemodal.addEventListener("click",()=>
            {

              let iamapi=  JSON.parse(localStorage.getItem('iamapi'))
            //strings to objs=arrays, now iamapi is the string

              for(let i in iamapi){
                  if(Number(idd)===Number(iamapi[i].id)){
                    iamapi.splice(i,1);
                    // remove that item from array.
                    break
                  }
                }
              localStorage.setItem('iamapi',JSON.stringify(iamapi))
            //   upadting the localstorage with new array items.
              emptable.innerHTML = '';
            //   old table gets deleted.

              createtable(iamapi)
            //   new table is createed with new items
                // if (!i.classList.contains("deleterow")) 
                // {
                //     return;
                // }
                // // console.log(i.target);
                // const btn = i;
                btn.closest("tr").remove();
            }
            )
  
            
        });
    }

}
