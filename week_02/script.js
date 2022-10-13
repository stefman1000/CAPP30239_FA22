let num = 100; // integer 
let num1 = 200;

/* 
This is a block comment
*/

// function foo(){
//     console.log(num);
    
// };

//foo();

//console.log(num1);

let anonFun = function(){
    console.log("hello");
};

(function() {
    console.log("Hello")
})();

(() => console.log(100))();

let foo = () => console.log(num);

foo = () => console.log(num1);

let arr = ["foo", "bar", "zar", 123, ["car"]];

arr[1] = "barbar";  //Set item in array

//Add item to end of array
arr.push("par");

//Removing an item from the array (index, delete) i.e index to start deleting and how many to delete
arr.splice(2,1);
console.log(arr);

let newArr = ["cow", "turtle", "goat"];

for (let item of newArr){
    console.log(item);
};

for (let i in newArr){
    console.log(i + " " + newArr[i]);
};

arr.forEach((item,i) => console.log(i + " " + item));

//Objects (basically dictionaries from python)

let obj1 = {
    name: "Jill",
    age: 85,
    job: "Cactus Hunter",
};

//Accessing properties
console.log(obj1.name);
// OR
console.log(obj1["name"]);

//Set value
obj1.job = "Barrista";

//Loop through all properties
for (let key in obj1) {
    let value = obj1[key];
    console.log(`${key}: ${value}`);
};

//Regular for Loop
for (let i = 0; i < 10; i++){
    console.log(i);
};

let val = 80;

if (val > 80) {
    console.log("good")
} else if (val > 50) {
    console.log("okay")
} else {
    console.log("terrible")
}

let y = (val >= 80) ? console.log("good") : console.log("not good");

//Traversing the dom (document object model)
let newVar = document.getElementById("example");

newVar.innerHTML += "Hello World!"


