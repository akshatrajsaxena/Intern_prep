// alert("Hello World");
// console.log("Hello World");
// document.write("This is the writting text");
// console.warn("Warning!!")
// console.error("Error!!")
var num = 10;
var num1 = 20;
// console.log(num+num1);

var strr = 'This is a string';
var str = "This is also String";
// console.log(strr + "\n" + str);

//Objects
var marks = { Akshat: 100, Rohan: 200, Shubham: 300 };
// console.log(marks);

//Booleans
var a = true;
var b = false;
// console.log(a,b);

//Undefined
var und;
// console.log(und);

var arr = [1, 2, 3, "Nuh uh", 5, 6, 7, 8, 9];

function avg(a, b) {
    return (a + b) / 2;
}
c = avg(4, 6);
// console.log(c);

// var name = prompt("What is your name?");
// var num = prompt("What is your favorite number? ");

// console.log("Hello " + name + "!");
// console.log(num + "?! That's my favorite number too!");

// console.log("Name is a " + typeof name);
// console.log("Num is a " + typeof num);

//loops are same as it is in Java and C++

var arrr = [32, 44, 13, 55, 532, 12, 1]

// arrr.forEach(function(element){
//     console.log(element)
// })

let j = 0;
//let is block scoped and var is function scoped. Let is used in loops and var is used in functions and global scope.
// const ac = 0;
// while (j < arrr.length) {
//     console.log(arrr[j]);
//     j++;
// }
let myLovelyString = "Harry is a good boy good good";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))
// console.log(myLovelyString.slice(1,3))
// d = myLovelyString.replace("Harry", "Rohan");

// console.log(d + "\n" + myLovelyString);

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

//DOM Manipulation
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName('container');
console.log(elemClass);
elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
tn = document.getElementsByTagName('div');
console.log(tn);
let createdElement = document.createElement('p');
createdElement.innerText = "This is a created paragraph";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a new created paragraph";
tn[0].replaceChild(createdElement2, createdElement);

// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel); 


//Events in JavaScript
// function clicked() {
//     console.log("The button was clicked");
// }
// window.onload = function () {
//     console.log("The document was loaded");
// }  
// firstContainer.addEventListener('click', function () {
//     document.querySelectorAll('.container')[1].innerHTML = " We have clicked"
//     console.log("Clicked thorugh Mousepad");
// })
// firstContainer.addEventListener('mouseover', function () {
//     console.log("Move over Mousepad");
// })
// firstContainer.addEventListener('mouseout', function () {
//     console.log("Move out Mousepad");
// })
// firstContainer.addEventListener('mouseup', function () {
//     console.log("Mouse up Mousepad");
// })

//SetTimeout and SetInterval

// login =() => {
//     document.querySelectorAll('.container')[1].innerHTML = "SetTimeout Activated";
//     console.log("Logged in");
// }
// setTimeout(login, 10000);
// clr = setInterval(login, 2000);
//use clearInterval(clr) to stop the setInterval 
 
// JavaScript Local Storage
// localStorage.setItem('name', 'Akshat');
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();

//JSON
obj = {name: "Akshat", length: 1, a: {this: "that"}}
jso = JSON.stringify(obj);
console.log(jso);
console.log(typeof jso);
parsed = JSON.parse(`{"name":"Akshat","length":1,"a":{"this":"tha\\t"}}`);
console.log(parsed);
