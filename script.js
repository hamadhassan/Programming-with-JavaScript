console.log("hello world")
//Functons
function addName(mesg){
    console.log("Hello",mesg);
}function sum(a,b){
    console.log(a+b);
}
sum(20,30);
addName("Ali");
//Arrays
var train=["wheat","salt","maaz","cotton"];
console.log(train[3])
//Objects
var table ={
    leg:4,color:"brown",price:400
}
console.log(table);
table.wood="special";
console.log(table);
//Arrays are objects
var fruits=[];
fruits.push("apple");
fruits.push('banana');
console.log(fruits)
fruits.pop();
console.log(fruits)

var array=[];
function arrayBuilder(one,two,three){
    array.push(one);
    array.push(two);
    array.push(three);
}
arrayBuilder(1,2,3);
arrayBuilder(4,5,6);
console.log(array);

