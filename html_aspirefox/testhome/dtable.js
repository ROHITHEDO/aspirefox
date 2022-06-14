
console.log("hey");


$(function () {
    apicall();
    if (localStorage.length > 0) {
        if ($("#empTable").html() == '') {
            createtable();
            // if div is empty.create,  else make it empty and then create table.
        }
        else {
            $("#empTable").html('')
            createtable();
        }
    }
    
function apicall() {
    $.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001',
        function (responseTxt, statusTxt, xhr) {
            if (statusTxt == 'success') {
                let tempData = responseTxt;
                // console.log(tempData);


                if (localStorage.getItem('iamapi') == null) {
                    localStorage.setItem('iamapi', JSON.stringify(tempData));
                }

                if ($('#empTable').html() == "") {
                    createtable();
                }
                else {
                    $('#empTable').html("");
                    createtable();
                }

            }
            else {
                if (statusTxt == 'error') {
                    alert('Error: ' + xhr.status + ': ' + xhr.statusTxt);
                }
            }
        })
}

function createtable() {
    let tempdata = JSON.parse(localStorage.getItem('iamapi'));
    let rowLen = tempdata.length;
    let headerArr = Object.keys(tempdata[0])
    // koi bi obj ka keys ko acess karna in array form.

    let colLen = headerArr.length;
    const currdiv = document.getElementById("empTable")

    let table = document.createElement('table')
    
    table.setAttribute('class', 'table table-stripped');
    table.setAttribute('id','tableID');

    // thead
    const thead = document.createElement('thead');
    const trhead = document.createElement('tr');
    for (let i = 0; i < colLen; i++) {
        const th = document.createElement('th');
        th.setAttribute('scope', 'col');
        th.innerText = headerArr[i]; //array indexing.

        trhead.appendChild(th);
    }
    let th = document.createElement('th');
    th.innerText = "Edit"
    trhead.appendChild(th)

    let th1 = document.createElement('th');
    th1.innerText = "Delete"
    trhead.appendChild(th1)

    thead.appendChild(trhead);
    table.appendChild(thead);

    // tbody
    // const tbody = document.createElement('tbody');
    let tbody = $(`<tbody></tbody>`);
    for (let i = 0; i < rowLen; i++) {
        let tr =$(`<tr id="${tempdata[i].id}"></tr>`);
        // console.log(tr);
        for (let j = 0; j < colLen; j++) {
            // console.log(tempdata[i][headerArr[j]]);
            let td = $(`<td>${tempdata[i][headerArr[j]]}</td>`);

            // tempdata takes us to objects,headerarr takes us to diff keys in obj.
            tr.append(td)
        }
        
        
        let tdEdit = `<td><button id="editBtn">Edit</button></td>`;
        tr.append(tdEdit);
    

        let tdDelete = `<td><button id="deleteBtn">Delete</button></td>`
        tr.append(tdDelete);


        
        
        tbody.append(tr);
    }
   
    // console.log(tbody);
    
    
    currdiv.appendChild(table);
    

    $("#tableID").append(tbody);
}


$("#addBtn").click(() => {
    let tempdata = JSON.parse(localStorage.getItem("iamapi"));
    let headerArr = Object.keys(tempdata[0]);

    const form = $(`<form></form`);
    form.attr('class', 'row g-3');
    form.attr('id', 'inputForm')

    for (let i = 0; i < headerArr.length; i++) {

        if (headerArr[i] == 'id' || headerArr[i] == 'age') {
            continue;
        }
        else {

            let div = $(`<div></div>`);
            div.attr('class', 'col-md-4');

            let label = $(`<label></label>`);
            label.attr('class', 'form-label');
            label.text(`${headerArr[i]}`);

            const input = $(`<input></input>`);
            input.attr({
                id: `ip${i}`,
                class: `form-control`,
                // required: true,
                name: `${headerArr[i]}`

            });

            const p = $(`<p></p>`);
            p.attr('class', 'errMessage');

            div.append(label);
            div.append(input);
            div.append(p);

            if (headerArr[i] == `email`) {
                input.attr('type', 'email')
            }
            if (headerArr[i] == `dob`) {
                input.attr('type', 'date')
            }
            if (headerArr[i] == `salary`) {
                input.attr('type', 'number')
            }

            form.append(div);
        }

    }
    const div1 = $(`<div></div>`);
    div1.attr('class', 'row-md-4');
    const saveBtn1 = $('<input></input>');
    saveBtn1.attr({
        type: 'submit',
        value: 'save',
        id: 'saveBtn',
        class: 'btn btn-primary'
    })
    div1.append(saveBtn1)
    form.append(div1);



    if ($('#inputDataDiv').html() == "") {
        $('#inputDataDiv').append(form);
    } else {
        $('#inputDataDiv').html("");
        $('#inputDataDiv').append(form);
    }

    $('#inputForm').validate({
        rules: {
            imageUrl: {
                required: true,
                url: true
            },
            firstName: {
                required: true,
                minlength: 2
            },
            lastName: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            contactNumber: {
                required: true,
                length: 10,
                phoneUs: true
            },
            dob: {
                required: true
            },
            salary: {
                required: true,
                number: true,
            },
            address: {
                required: true
            }
        },
        messages: {
            imageUrl: {
                required: `please fill the url field`,
                url: `enter valid url`
            },
            firstName: {
                required: `please enter firstName`,
                minlength: `minimun length must be 2`
            },
            lastName: {
                required: `please enter lastName`,
                minlength: `minimun length must be 2`
            },
            email: {
                required: `please enter your email`,
                email: `email is not valid`
            },
            contactNumber: {
                required: `please enter 10 digit phone number`,
                phoneUs: `enter phone number i.e. 9999999999`
            },
            dob: {
                required: `please enter your date of birth`
            },
            salary: {
                required: `please enter your salary`,
                number: `please enter your salary in number format`,
            },
            address: {
                required: `please enter your address`
            }
        }
    });

})

// add input data to local storage
$("#saveBtn").click(() => {
    let data = JSON.parse(localStorage.getItem("iamapi"));
    let headerArr = Object.keys(data[0]);
    let newObj = {};
    newObj['id'] = 1 + parseInt(maxID());
    for (let i = 1; i < headerArr.length; i++) {

        if (i == 6) {
            newObj['age'] = calAge($(`#ip${i + 1}`).val());

        } else {
            if ($(`#ip${i}`).val() == '') {

                return;
            }
            else {
                newObj[headerArr[i]] = $(`#ip${i}`).val();
            }
        }

    }
    debugger
    // add newOBJ to local storage.
    // console.log(newObj);
    debugger
    data.unshift(newObj);
    localStorage.setItem('iamapi', JSON.stringify(data));

    // updating table
    if ($("#empTable").html() == '') {
        createtable();
    }
    else {
        $("#empTable").html('');
        createtable();
    }
})

//find maxId form local Storage
function maxID() {
    let currData = JSON.parse(localStorage.getItem('iamapi'));
    let maxid = 0;
    for (let i = 0; i < currData.length; i++) {
        if (maxid < currData[i].id) {
            maxid = currData[i].id;
        }
    }
    return maxid;
}

// Calculate age
function calAge(str) {

    let year = new Date(str).getFullYear();//1998 ,str is the they give
    let today = new Date().getFullYear(); //2022
    return today - year;//2022-1998=24
}

//set format
function setDateFormat(str) {
    let d = new Date(str);
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();

    if (month.toString().length == 1) {
        month = `0${month}`;
    }
    if (day.toString().length == 1) {
        month = `0${day}`;
    }
    return `${day}/${month}/${year}`;
}

function deleteRow(e){
    $('#modalDelete').modal('show');
    document.getElementById("delRow").addEventListener('click', function(){
        // debugger
        let delId = e.parentElement.id;
        let tempArr = JSON.parse(localStorage.getItem('data'));
        for(let i=0;i<tempArr.length;i++){
            if(delId == tempArr[i].id){
                tempArr.splice(i,1);       
            }
        }
        localStorage.setItem('data', JSON.stringify(tempArr));
        if(document.getElementById("divTable").innerHTML == ""){
            createTable();
        }else{
            document.getElementById("divTable").innerHTML = "";
            createTable();
        }
        $('#modalDelete').modal('hide');
    })
   
}


});






