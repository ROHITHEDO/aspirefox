console.log("hey")

// function add(){

//     let val=$(".val p");
//     let last=val[val.length-1];
//     var text=last.innerText;
    
//     let secondlast=val[val.length-2];

//     console.log(val.length-2);

     
//     secondlast.append(" "+text);

//     last.remove();
    
// }

function add(){

    let val=$(".val p");
    let first=val[0];
    var text=first.innerText;

    let second=val[1];
    var text1=second.innerText;

   

     
    first.append(" "+ text1);

    second.remove();
    
}