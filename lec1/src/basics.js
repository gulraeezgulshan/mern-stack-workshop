//console.log("Hello Aptech");

//Defining and using functions

//Method 1
function myFunction1() {
  console.log("This is a function1");
}

const myFunction2 = function () {
  console.log("This is a function2");
};

myFunction1();
myFunction2();

//Function with params

function myFunction3(param1, param2 = "Clifton") {
  console.log(param1, param2);
}

myFunction3("Aptech", "Korangi");

//Default Parameters
myFunction3("Aptech");

//Rest Parameters

myFunction3("Aptech", "a", "b", "c", "d");

//... = spreading operator

function myFunction4(param1, param2, ...extraParams) {
  console.log(param1);
  console.log(param2);
  console.log(extraParams);
}

myFunction4("a", "b", "c", "d", "e", "f", "g");

// Function that returns result

function myFunction5(fname, lname) {
  return fname + " " + lname;
}

console.log(myFunction5("Gulraiz", "Gulshan"));

//Function as an arguement of function

function mainFunction(nameFunction) {
  return "Hello" + nameFunction();
}

//console.log(mainFunction("Gulraiz"));

console.log(
  mainFunction(function () {
    return "Gulraiz";
  })
);

//Chaining function calls

function myFunc(namefunc) {
  return "Hello" + namefunc();
}

//Declaring Function
function printName(nameFunc, printFunc) {
  printFunc(myFunc(nameFunc));
}

const printName2 = (nameFunc, printFunc) => printFunc(myFunc(nameFunc));

//Calling Function
//printName("Gulraiz", "100"); //Semantically Wrong

printName(function () {
  return "Aptech";
}, console.log);

//console.log(console.log);
//console.log(printName);

//Using Fat Arrow/Arrow function (Lamda)
// =>

/* function myFunc(namefunc) {
  return "Hello" + namefunc();
} */

//Name = myFunc
//Arguement = namefunc
//Return = "Hello" + namefunc();

//Re-writing function using fat arrow

/* const myFunc = (namefunc) => {
  "Hello" + namefunc();
}; */

function add(a, b) {
  return a + b;
}

//Equivalent to C# Anonymous Func
const add2 = (a, b) => a + b;

//Difference between let, const, var

//ES6 + recommends not to use VAR
//loosely typed

//var => functional scope
//let/const = > block scope

/* let a = 5;
const b = 5;
var c = 5;

a = 10;
b = 10; //Erratic
c = 10; */

function messageFunc(name, weather) {
  let message = "Hello " + name; //Hello Aptech

  if (weather == "Sunny") {
    let message = "It is nice weather";
    console.log(message);
  } else {
    let message = "It is not nice weather today";
    console.log(message);
  }

  console.log(message);
}

/* function messageFunc(name, weather) {
  var message = "Hello " + name; //Hello Aptech

  if (weather == "Sunny") {
    var message = "It is nice weather";
    console.log(message);
  } else {
    var message = "It is not nice weather today";
    console.log(message);
  }
  console.log(message);
}
 */
messageFunc("Aptech", "Sunny");

//Identity vs equivality operator

//if(a==5)
//if(a===5)

//== (Equality Operator)
//=== (identity operator)

let a = 5;
let b = "5";

console.log(a == b); //Not a strict check, type was ignored
console.log(a === b);
console.log(a == Number(b));
console.log(String(a) == b);
console.log(String(a) === b);

//Arrays

//Decalring array using object
let myArray = new Array();

myArray[0] = "Aptech";
myArray[1] = 100;
myArray[2] = 50.5;

console.log(myArray);

//Declaring array using literal
let myArray2 = ["Aptech", 100, 50.5];
console.log(myArray2);

myArray2[1] = 200;
console.log(myArray2);

//Populating Array
//Iterating Array

//VS Code Snippet

for (let index = 0; index < myArray2.length; index++) {
  //Concatenation
  //console.log("Index: " + index + ", Value: " + myArray2[index]);
  console.log(`Index: ${index}, Value: ${myArray2[index]}`);
}

console.log("------");

//myArray2.forEach("Hello");
/* 
myArray2.forEach(function (value, index) {
  console.log(index, value);
});
 */

/* function abc(v, i) {
  console.log(i, v);
}

const abc = (v, i) => console.log(i, v);
 */
myArray2.forEach(function (v, i) {
  console.log(i, v);
});

myArray2.forEach((v, i) => console.log(i, v));

//Using Spread Operator

// ... spread operator

/* const array1 = [100, "Aptech", "25.25", 36.25];
const array2 = [...array1, "ABC", "85"];
//const array2 = [100, "Aptech", "25.25", 36.25, "ABC", "85"];
const array3 = ["ABC", "85", ...array1];
console.log(array1);
console.log(array2);
console.log(array3); */

let array10 = [100, "Aptech", true];

function printValue(numValue, stringValue, boolValue) {
  console.log(numValue, stringValue, boolValue);
}

//printValue(array10[0], array10[1], array10[2]);
printValue(...array10);

//Arrays of objects

let obj1 = {
  name: "Aptech",
  location: "Korangi",
  Type: "IT",
  sample: 250,
};

let products = [
  { name: "Computer", price: 10000, stock: 20 },
  { name: "DVR", price: 10000, stock: 15 },
  { name: "Fan", price: 10000, stock: 4 },
  { name: "Mobile", price: 10000, stock: 12 },
];

//Filter objects

//products.filter((item) => console.log(item));

//Chaining of function

const total = products
  .filter((item) => item.stock > 10)
  .reduce((prev, item) => prev + item.price, 0);

const filteredP = products.filter((item) => item.stock > 10);
console.log(filteredP);

//Reduce Objects

const summ = products.reduce((prev, curr) => prev + curr.price, 0);
const summ2 = filteredP.reduce((prev, curr) => prev + curr.price, 0);
console.log(summ);
console.log(summ2);
