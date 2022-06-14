// function generate(){
//     var mynum=Math.random() *(10-1)+1;
//     // document.getElementById("p1").innerHTML=mynum;
//     document.getElementById("p2").innerHTML=Math.floor(mynum);
// }

function getrndno(min,max)
{
    // return Math.floor(Math.random() * (max-min)) +min;
    return Math.floor(Math.random()*(max-min))+min;
}

const inputval=document.getElementById("inputval");
let count=0;

function add(){
    localStorage.setItem=(`name${count}`,inputval.value);
    console.log(localStorage)
    count++;
}
