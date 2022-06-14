let id='';
selectdata();
editdata();


function managedata(){
    
    document.getElementById("msg").innerHTML="";
    let name=document.getElementById("name").value;

    if(name==""){
        document.getElementById("msg").innerHTML="please enter your name";

    }else
    
    {
       
        if(id=="")
        {   
        //   user is here to add, ad id is empty,he is creating  a new one
            var arr=JSON.parse(localStorage.getItem('crud'));
            // to check wthher the data you are searchuing is ther in local storage ornot
            if(arr==null)
            {
                let data=[name];
                localStorage.setItem('crud',JSON.stringify(data));
                // now the data will be in inserted in array form.

                // if rohith is not ther in localstorage then keeo him with you.
            }
        
        else 
        {
            // second time when i put
            arr.push(name);
            localStorage.setItem('crud',JSON.stringify(arr));
            // show the entier array in the local storage.

        }
        
        
        } 
        
        
}
}

// populate the data-automatically add data into list or table
function selectdata(){
  
    var arr=JSON.parse(localStorage.getItem('crud'));
    // wther data is ther or not
    if(arr!=null){
        let html='';
        let sno=1;
       
        for(let i=0;i<arr.length;i++)
        {
			html=html+`<tr><td>${sno}</td>  <td>${arr[i]}</td>  <td><a href="javascript:void(0)" onclick="editData('${i}')">Edit</a>&nbsp;<a href="javascript:void(0)" onclick=deletedata('${i}')>Delete</a>  </td> </tr>`;
            // arr[k]is the array index
            sno++;

        }
		document.getElementById('root').innerHTML=html;
        // u r just iterating  array(in local storage) and sending it to div element in html
    }
}

function editdata(rid){
    var arr=JSON.parse(localStorage.getItem('crud'));
    document.getElementById("name").value=arr[rid];

}


// while delting a record u need id
function deletedata(rid){
    // arr is being seated in local storqage with key as crud

    var arr=JSON.parse(localStorage.getItem('crud'));
    arr.splice(rid,1);
    localStorage.setItem('crud',JSON.stringify(arr)); 
    // updating 
    selectdata();
    // displaying
}
