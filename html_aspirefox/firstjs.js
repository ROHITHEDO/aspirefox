


// function myfunction() {
//     document.getElementById("demo").innerHTML = "paragraph changed";
// }

// // document.getElementById("wow").innerHTML=5+5;
// // document.write(50*50);

// // window.alert(10+10);

// // console.log("Heythere");

// let x, y, z;
// x = 5;
// y = 5;
// z = x + y;
// //document.getElementById("wow").innerHTML="the value of z is: "+z;
// document.getElementById("wow").style.fontSize = "50px"

// x = 10;
// y = 20;
// z = x + y;
// // document.write(z);
// document.getElementById("wow").innerHTML = "the value of z is: " + z;


// const const1 = 10;
// const const2 = 40;
// let o = const1 + const2;
// document.getElementById("roh").innerHTML = "the value of zzzzzzzzzzzzzzzzz is: " + o;


// // const cars={type:"fiat",model:"500",blueor:"red"};
// // cars.blueor="white";
// // cars.owner="rohith"
// // // displaying the objects
// // document.getElementById("abc").innerHTML="car owner is: " + cars.owner;

// const car = { type: "Fiat", model: "500", blueor: "white" };

// // Change a property:
// car.blueor = "red";

// // Add a property:
// car.owner = "Johnson";

// // Display the property:
// document.getElementById("abc").innerHTML = "Car owner is " + car.owner;


// let p1 = "bro";
// let blue = "ther"
// document.getElementById("def").innerHTML = p1 + blue;

// function displaydate() {
//     document.getElementById('date').innerHTML = Date();
// }


// let a = 90;
// let b = [56, 34]
// // console.log(typeof a);


// let text = "5";
// document.getElementsByClassName("aman")[0].innerHTML = text.padStart(5, "x");

// let t = "Helloworld";
// document.getElementById("charcode").innerHTML = t.charCodeAt(0);

// let s = "abc,def,ghi";
// document.getElementById("split").innerHTML = s.split(",")[0];
// // this will return the first element of the entire variable contents.

// // let i="please come and visit my place";
// // document.getElementById("indexof").innerHTML=i.indexOf("lease");
// // returns index of first character only

// let i = 10;
// // console.log(i);




// let e = "The rain in SPAIN stays mainly in the plain";
// document.getElementById("spain").innerHTML = e.match(/ain/gi)
// // gi is case insensitive form.

// let temp = `       He's often called as "jhonny"    `
// document.getElementById("templates").innerHTML = temp
// // you just want to display whats written on your temp.

// // let nu=2;
// // let hold="";

// // while(nu!=Infinity){
// //     nu=nu*nu;
// //     hold=hold+nu+ "<br>" ;

// // }
// // document.getElementById("num").innerHTML=hold;

// let n = Number.MAX_VALUE;
// document.getElementById("num").innerHTML = n;

// const fruits = ["banana", "orange", "apple", "mango"];
// let flen = fruits.length;
// let tt = "";

// for (let i = 0; i < flen; i++) {
//     tt += "<li>" + fruits[i];
// }

// document.getElementById("for").innerHTML = tt;

// // const fruit=["banana","apple","kiwi","mango"];
// // document.getElementById("tostring").innerHTML=fruit.toString();

// const fruit = ["banana", "apple", "kiwi", "mango"];
// document.getElementById("tostring").innerHTML = fruit.join("*");

// const items = ["banana", "apple", "kiwi", "mango"];
// document.getElementById("shift").innerHTML = items;
// items.shift()
// document.getElementById("shift1").innerHTML = items;

// // const things=["cook","kitch","rooms","beds"];
// // document.getElementById("splice").innerHTML="orignal :<br>"+ things;

// // let removed=things.splice(2,0,"phone","phone");
// // document.getElementById("splice").innerHTML=things;

// // document.getElementById("splice").innerHTML=removed;

// const things = ["Banana", "Orange", "Apple", "Mango"];

// document.getElementById("splice").innerHTML = "Original Array: <br> " + things;

// let removed = things.splice(2, 0, "Lemon", "Kiwi");

// document.getElementById("splice1").innerHTML = "New Array:<br>" + things;
// document.getElementById("splice2").innerHTML = "Removed Items:<br> " + removed;

// // ///////////////////////////////////////

// const ss = ["cook", "kitch", "rooms", "beds"];
// document.getElementById("slice").innerHTML = "orignal :<br>" + ss;

// const slicing = ss.slice(1);
// document.getElementById("slice1").innerHTML = "after silcing :<br>" + slicing;

// //////////////////////

// const yo = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("sort").innerHTML = "before sort:<br>" + yo;

// const donesorting = yo.reverse();
// document.getElementById("sort1").innerHTML = "after sort:<br>" + donesorting;

// // //////////////
// const points = [40, 100, 1, 5, 25, 10];
// document.getElementById("point").innerHTML = points;

// points.sort(
//     function (a, b) {
//         return a - b
//     }
// );
// document.getElementById("point1").innerHTML = points;


// const wo = [40, 100, 1, 5, 25, 10];
// wo.sort(function (a, b) { return a - b });
// document.getElementById("acc").innerHTML = wo[0];

// // max no 
// const wa = [40, 100, 1, 5, 25, 10];
// document.getElementById("max").innerHTML = wa;
// document.getElementById("max1").innerHTML = myarray(wa);

// function myarray(arr) {
//     return Math.max.apply(null, arr)
// }

// // sorting objects
// const ob = [{ type: "volvo", year: 2010 },
// { type: "bmw", year: 2017 },
// { type: "audi", year: 2005 }
// ]
// // sorting with respective of year
// ob.sort(function (a, b) {
//     return a.year - b.year;
// });
// document.getElementById("obb").innerHTML = ob[0].type + " " + ob[0].year + "<br>" +
//     ob[1].year + " " + ob[1].type + "<br>" +
//     ob[2].type + " " + ob[2].year;


// let xd = 15 - 6;
// // debugger;
// document.getElementById("dee").innerHTML = xd;

// // objects
// const person = {
//     firstname: "rohith",
//     lastname: "kumar",
//     fullname: function () {
//         return this.firstname + " " + this.lastname;
//     }

// };
// document.getElementById("name").innerHTML = person.fullname();
// // fullname as function 




// /* in get fullname(){
//     return this.fullname + "" + this.lastname;
// }}
// =person.fullname;
// }
// ACCESS FULLNAME AS A PROPERTY
// */

// // create 2 objects
// const myfat = new people("j", "d", 50, "blue");
// const mymot = new people("s", "r", 40, "red");

// // obj constructor
// function people(first, last, age, eye) {
//     this.a = first;
//     this.b = last;
//     this.c = age;
//     this.d = eye;
// }
// document.getElementById("objfunc").innerHTML =
//     "My father is " + myfat.c + ". My mother is " + mymot.c + ".";


// const nameofaperson = "rohiththegreat";
// let textv = "";
// // xx is a pointer that takes values from nameofaperson and puts into textv
// for (let xx of nameofaperson) {
//     textv += xx + "<br>"
// }
// // xx is moving continuosly moving from here to there shifting variables
// document.getElementById("string").innerHTML = textv;


// let yy = "";
// for (let ii of [1, 2, 3, 4, 5, 6, 7]) {
//     yy += ii + "<br>";
// }
// document.getElementById("array").innerHTML = yy;

// const fruitss = new Map([
//     ["apple", 500],
//     ["banana", 200],
//     ["chikku", 400]

// ]);
// //document.getElementById("map").innerHTML=fruitss.get(apples);

// // let textt = "";
// // fruits.forEach (function(value, key) {
// //   text += key + ' = ' + value + "<br>"
// // })

// // iteration means take pointer that is x
// let veg = "";
// for (const x of fruitss.keys()) {
//     veg += x + "<br>";
// }


// // create object
// const apples = {
//     name: 'Apples'
// };
// const banana = {
//     name: 'banana'
// };
// // const oramgeeeeeeeeeee={
// //       name:oramgeeeeeeeeeee
// // };

// // create a map
// //const fruitsss=new Map();

// // add new elements to the  map
// // fruitsss.set(apples,500).
// // fruitsss.set(banana,400);
// // fruitsss.set(chikku,200);
// // object.defineProperty(person,"language",{
// // value:"NO"
// // })

// const per = {
//     firstname: "rohith",
//     lastname: "kumar"
// };
// Object.defineProperty(person, "fullname", {

// })

// var person1 = {
//     firstname: "baba",
//     lastname: "rara",
//     age: 10
// };

// // putting object into localstorage ('key',value) ('person',json.stringfy(person1));
// // person gives name(key) to entire storage
// localStorage.setItem('person', JSON.stringify(person1));
// // objectO(key,value)

// // console.log(JSON.stringify(person1));
// // print values thats enough

// // gettting data from localstorage  back in form of object.
// var obj = JSON.parse(localStorage.getItem("person"));
// // grttting item with ref of key,and then converting it to parse(string to obj)

// // debugger;
// var fg = 10




// function myf(a, b) {
//     return a * b;
// }
// document.getElementById("mul").innerHTML = myf(10, 7);

// // expresssion is storeed in a variable
// const xzx = function (a, b) {
//     return a * b;
// }
// document.getElementById("mult").innerHTML = xzx(10, 8);


// function hi(x, y = 3) {
//     return x * y;
// }

// document.getElementById("muk").innerHTML = hi(8);


// class Car {
//     constructor(name) {
//         this.name = name;
//     }
//     static hello() {
//         return "hello!";

//     }
// }
// let mycar = new Car("ford");
// // this is the name.


// document.getElementById("rac").innerHTML = Car.hello();





// setTimeout(fc, 2000);
// // fc is the function and 2000  milliseconds.

// function fc() {
//     document.getElementById("set").innerHTML = 'aspirefox';
// }

// var woo = {
//     firstname: "singh is",
//     lastname: "king",
//     age: 30
// };

// // sets a key value pair.
// localStorage.setItem('iamthekey', JSON.stringify(woo));

// // console.log(JSON.stringify(woo));
// // prints the object in form of strings

// // how to get back data in form of strings,so we covert into objects using var
// var gettingback = JSON.parse(localStorage.getItem("iamthekey"))
// // u fetch  by givning key


// sessionStorage.setItem('ii', JSON.stringify(woo));

// document.getElementById("bb").style.color = "blue";
// document.getElementById("bb").style.fontFamily = "Arial";
// document.getElementById("bb").style.fontSize = "larger";



// document.getElementById("hhh").addEventListener('click',
//     function (e) {
//         let variable;
//         console.log("you have clicked the heading");
//         variable = e.target;

//         console.log(variable);


//     })


// function hide() {
//     // let btn=document.getElementById('btn');
//     // let para=document.getElementById('para');

//     if (para.style.display != 'none') {
//         para.style.display = 'none';
//     }
//     else {
//         para.style.display = 'block';
//     }

//     let para = document.getElementById('para');

//     para.addEventListener('mouseover', function run() {
//         console.log('mouse inside')
//     });

//     para.addEventListener('mouseout', function run() {
//         console.log('mouse now went out')
//     });


// }

// function mOver(obj) {
//     obj.innerHTML = "thank you"
// }
// function mOut(obj) {
//     obj.innerHTML = "mouse over me"
// }

// window.addEventListener("resize", function () {
//     document.getElementById("resize").innerHTML = Math.random();
// });

// const para = document.createElement("p");
// const node = document.createTextNode("this is the new line");
// para.appendChild(node);
// // both are not seen yet

// const element = document.getElementById("div1").appendChild(para);
// // appendind new ele to existing ele

// document.getElementById("urlcurrent").innerHTML = window.location.href;

// function myconfi() {
//     var text;
//     if (confirm("press a button!")) {

//         text = "you pressed ok";
//     }
//     else {
//         text = "you pressed cancel";
//     }
//     document.getElementById("myconfi").innerHTML = txt;

// }
// // by default confirmation they req ok. if not ok pressed then say u canceled


// function mypro() {
//     let text5 = "";
//     let person5 = prompt("pleasse enter you name here", "rohith")
//     if (person5 = "" || person5 == null) {
//         text = "user cancelled the prompt"

//     } else {
//         text = "hello" + person5 + "how are you today?"
//     }
//     document.getElementById("mypro").innerHTML = text;
// }

// var seconds = 0;
// function start() 
// {
//     setInterval(function() 
//     {
//         document.getElementById("op").innerHTML = seconds + "seconds";
//         // 0seconds,1seconds,.......
//         seconds++;
//     }, 1000);
// }

// let yourbutton = document.getElementById("yourbutton")

// let content = document.getElementById("content")

// // fetch is for new browsers,   ajax for old-> progress option is there.30%over and completing
// // fetch then n catch[arry handling is best]  , ajax- try catch
// // function getdata() {
// //     url = "https://cat-fact.herokuapp.com/facts";
// //     fetch(url).then(
// //         (response) => 
// //         {
// //         return response.json();
// //         }
// //         )
// //         .then((data) => {
// //         // console.log(data);
        
// //         data.forEach(value => {
// //             console.log(value.text);
// //         });
// //         // data is variable,value is obj.,obj.text
// //     })
// // }

// function getdata()
// {
//     let xhr=new XMLHttpRequest();
//     xhr.open('GET',"https://cat-fact.herokuapp.com/facts",true)
//     xhr.send()
//     xhr.onload=()=>
//     {
//         if(xhr.status==200)
//         {
//             let data=xhr.responseText;
//             let data4=JSON.parse(data)
//             console.log(data4)

//             data4.forEach(values=>
//                 console.log(values.text)
//             )
//         }
//     }

// }

// yourbutton.addEventListener('click', getdata);


// let bt=document.querySelector('#text-btn');
// bt.addEventListener('click',function(){
//     // create ajax req
//     let xhr=new XMLHttpRequest();

//     // what op to perform
//     // true, i wanna do this req in async way.
//     xhr.open('GET','roh_intro.txt',true);

    

//     // now lets process the req
//     // what to do when the response is ready
//     xhr.onload=()=>
//     {
//         if(xhr.status==200)
//         {
//             // now catch hold of data
//             let data=xhr.responseText;
//             document.getElementById("rohpara").innerText=data;
//             // console.log(data);
//         }
//     }
//     // send the request
//     xhr.send();

// })





// let jsonbtn=document.querySelector('#json-btn');
// jsonbtn.addEventListener('click',function(){
// // if you click a button then something is happening
//     let xhr= new XMLHttpRequest;
    
//     xhr.open('GET','first.json',true);

//     xhr.send();

//      xhr.onload=()=>{
//         if(xhr.status==200){
//             // sucefull meaning data is present
//             let data=xhr.responseText;
//             let data1=JSON.parse(data);
//             // as data was in string, we converted into object
            
//             // data1=document.querySelector('#print');
//             // document.getElementById("#print").innerHTML=data1;
//             console.log(data1);
//         }
//     }
// });

// let apibtn=document.querySelector('#api-btn');
// apibtn.addEventListener('click',function(){

//     let xhr=new XMLHttpRequest();
//     xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);
//     xhr.send();
//     xhr.onload=()=>
//     {
//         if(xhr.status==200)
//         {
//             let data=xhr.responseText;
//             // response will come only if then status is successful.
//             let users=JSON.parse(data);
//             console.log(users);


//             users.forEach(value => 
//             {
//                 console.log(value.email);
//             });

//             // value=obj,obj.email,users=variable.
//         }
//     }
// });


// const uno= () =>{
//     return "iam one";
// }

// // const dos= () =>{
// //     setTimeout(()=>{
// //         return "iam two";
// //     },1000)
// // }

// const dos= () =>
//     {
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             resolve("iam two");
//         },2000)
//     })

//     }


// const tres= () =>{
//     return "iam three"
// }

// const callMe=async() =>{
//     let val1=uno();
//     console.log(val1);
//     let val2=await dos();
//     console.log(val2);
//     // meaning until v2 doesnt get over, no operations below it wil execute
//     // this function will wait for it to complete.

//     let val3=tres();
//     console.log(val3);
// }

// callMe();

// // function isEven(ele){
// //     // if(ele%2===0){
// //     // return true;}
// //     // return false

// //     return ele%2===0;
// // }
// // console.log(isEven(5))


// var isEven = (ele)=> 
// {
  
//     return ele%2===0;
// }
// console.log(isEven(6))

// // var result=[2,4,6,9].every(isEven)
// // console.log(result)

// var result=[2,4,6,9].every((e)=>(e%2===0))
// console.log(result)





let textbtn=document.querySelector('#text-btn');
textbtn.addEventListener('click',
function(){
    // create ajax req
    let xhr=new XMLHttpRequest();

    // what op to perform
    // true, i wanna do this req in async way.
    xhr.open('PATCH','https://jsonplaceholder.typicode.com/posts/1',true);

    

    // now lets process the req
    // what to do when the response is ready
    xhr.onload=()=>
    {
        if(xhr.status==200)
        {
            // now catch hold of data
            let data=xhr.responseText;
            document.getElementById("rohpara").innerText=data;
            // console.log(data);
        }
    }
    // send the request
    var aman=
        {
            
            title: 'gtgttttttgtgtgtgttttgt',
            body:'',
            id:10,
            // userId:52
            
        };
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    var data=JSON.stringify(aman);
    xhr.send(data);

    // what response comes from server after posting data comes and prints in the console
    

})

let clicktoadd=document.getElementById("clicktoadd");
clicktoadd.addEventListener('click',()=>{
    localStorage.setItem('student',dd.value);
    
})


