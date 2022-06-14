console.log("hey");



$( function() {
    $("#tableID").DataTable();
  } );

getData();
function getData(){
    $.get("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001",
    function(data,status)
    {
        if(status=="success")
        localStorage.setItem("iamapi",JSON.stringify(data));
        
    });
    createtable();
   
}

function createtable()
{
    let tempdata=JSON.parse(localStorage.getItem('iamapi'));
    let rowLen=tempdata.length;
    let headerArr=Object.keys(tempdata[0])


    let colLen=headerArr.length;

    const currdiv=$("#empTable");

    let table=$("#tableID")

    // thead

    const thead=$(`<thead></thead>`);


    const trhead=$(`<tr></tr>`);
    
    for(let i=0;i<colLen;i++){

        let th=$(`<th></th>`);

        // $("th").attr('scope','col');
        th.text(headerArr[i]);

        trhead.append(th);
    }
    thead.append(trhead);
    table.append(thead);
    
    // tbody

    const tbody=$('<tbody></tbody>');
    tbody.attr('id','tbody1');

    for(let i=0;i<rowLen;i++){
        const tr=$(`<tr></tr>`);
        tr.attr('id',`${tempdata[i].id}`)
        
        
        for(let j=0;j<colLen;j++){
            let td=$(`<td></td>`);
            
            td.html(tempdata[i][headerArr[j]]);
            
            
            tr.append(td)
        }
        tbody.append(tr);
        table.append(tbody);
    }
    
    
}
$( function() 
{
    $("#tbody1").sortable();
});






