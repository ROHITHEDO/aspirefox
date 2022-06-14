var column;
var row;

function submit() {
    // debugger;

    console.log(column);
    console.log(row);
}



// ...................................creating table ...............................

function createHeader() {
    // debugger;
    column = document.getElementById("columns").value;
    row = document.getElementById("rows").value;

    if (column < 0 || column > 10) {
        document.getElementById('colError').style.display = 'block';
        document.getElementById('colError').innerText = `${column} is not between 1-10`;
        document.getElementById('colError').style.color = 'red';
        return;

    }
    else
        document.getElementById('colError').style.display = 'none';


    if (row < 0 || row > 10) {
        document.getElementById('rowError').style.display = 'block';
        document.getElementById('rowError').innerText = `${row} is not between 1-10`;
        document.getElementById('rowError').style.color = 'blue';
        return;

    }
    else
        document.getElementById('rowError').style.display = 'none';


    for (let i = 1; i <= column; i++)
    {
        var userInput = document.createElement("input");
        var getInput = userInput.value;

        userInput.setAttribute('id', 'heading' + i);
        userInput.setAttribute('class', 'demo');
        userInput.setAttribute('placeholder', 'heading' + i)

        var userTable = document.getElementById("dtable");
        userTable.appendChild(userInput);
      
        userInput.style.border = "1px solid black";


    }


}



function createTable() {

    var headervalue = document.getElementsByClassName('demo');
    // it returns an array of tags with classname=demo
    let uniqHeaders = new Set()

    for (let i = 0; i < column; i++) 
    {
        uniqHeaders.add(headervalue[i].value.trim());

    }

    // set will have only unique elements.


    if (uniqHeaders.size < column)
    {
        document.getElementById('headerErr').innerText = 'Duplication ERROR'
        document.getElementById('headerErr').style.display = 'block'
        document.getElementById('headerErr').style.color = 'red'

        return
    }
    else
        document.getElementById('headerErr').style.display = 'none'

    document.getElementById('ct').style.display = 'block'




    let table = document.createElement("table");
    table.classList.add("table");
    table.classList.add("table-bordered");
    // adding class dynamically with the help of js

    let tHeaderTag = document.createElement("thead");
    let tBodyTag = document.createElement("tbody");

    for (let tableRow = 0; tableRow <= row; tableRow++) 
    {
        let tabRow = document.createElement("tr");

        for (let tabCol = 1; tabCol <= column; tabCol++)
        // no. of cols = entries in each row
        {
            // when its the first row.
            if (tableRow == 0) 
            {

                let tHeader = document.createElement("th");
                tHeader.innerHTML = document.getElementById("heading" + tabCol).value;
                // heading 1, heading 2 , heading 3......
                tabRow.appendChild(tHeader);
                tHeaderTag.appendChild(tabRow);
                // throwing all elements of tabRow into varible called theader.
                table.appendChild(tHeaderTag)
            }
            else {
                let tData = document.createElement("td");



                tData.innerHTML = "lorem ipsum";
                tabRow.appendChild(tData);
                tBodyTag.appendChild(tabRow);
            }
        }
        table.appendChild(tBodyTag)
        // entire bodytag is once for all sent into table.

    }
    document.getElementById("table-data").appendChild(table);

    //    demo is the user ka input class
    //    this is how you remove each header element without refreshing.

    if (document.getElementsByClassName('demo').length > 0) {
        let va = document.getElementsByClassName('demo').length;
        // length of headings......is taken into variable called va.
        for (let i = 0; i < va; i++)
            // of- gives every element   in-gives index
            document.getElementsByClassName('demo')[0].remove()
        // 0 everytime first element gets deleted.
    }

}
