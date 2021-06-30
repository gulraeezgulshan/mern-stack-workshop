/**************** * 1) Using Map Function*************/

//Arrays of object
const people = [
  { name: "ali", age: 20, position: "programmer" },
  { name: "babar", age: 25, position: "accountant" },
  { name: "sana", age: 18, position: "designer" },
  { name: "junaid", age: 21, position: "developer" },
  { name: "saba", age: 35, position: "trainer" },
];

//console.log(people);

//const ages = people.map(() => {});
//console.log(ages);
/* const ages = people.map((p) => {
  console.log(p);
}); */

// const ages = people.map((p) => {
//   console.log(p.age);
// });

/* const ages = people.map((p) => {
  console.log(p.age * 2);
}); */

/* const getAges = (p) => console.log(p.age * 2);

const ages = people.map(getAges); */

//[] = Array
//{} = Object

/* const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    newAge: item.age + 10,
  };
});

console.log(newPeople);
 */
/************ * 2) Using Set Function ( Unique Values) ***********/

const menu = [
  { name: "eggs", category: "breakfast" },
  { name: "tea", category: "breakfast" },
  { name: "tikka", category: "dinner" },
  { name: "pasta", category: "lunch" },
  { name: "biryani", category: "lunch" },
  { name: "milk", category: "breakfast" },
];

/* const cat = menu.map((item) => item.category);
console.log(cat); */

const cat_unique = new Set(menu.map((item) => item.category));
//console.log(cat_unique);

//const cat_unique_arr = [...new Set(menu.map((item) => item.category))];
/* const cat_unique_arr = [...cat_unique];
console.log(cat_unique_arr); */

const cat_unique_arr = ["All", ...cat_unique];
//console.log(cat_unique_arr);

/************ * 2) Dynamic Object Keys ***********/

const person = { name: "Gulraiz" };

//Accessing value from object
//console.log(person.name); //Dot Operator
//console.log(person["name"]); //Square bracket notation

let appState = "loading";
let category = "urgent";

const app = {
  appState: "true",
  [appState]: "false", //Dynamic key allocation
  [category]: 0,
  abc: true,
};

//console.log(app);

/************ * 3) Array Destructing ***********/

const fruits = ["banana", "apple", "orange", "mango"];
/* 
const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];
const fruit4 = fruits[3];
 */
//console.log(fruit1, fruit2, fruit3, fruit4);

//The same can be achieved using Array destructing

//Syntax for Array Destructuring
//const [] = fruits;

//const [fruit1, fruit2, fruit3, fruit4] = fruits;
//console.log(fruit1, fruit2, fruit3, fruit4);

const [fruit1, , fruit2, fruit3] = fruits;
//console.log(fruit1, fruit2, fruit3);

/************ * 4) Object Destructing ***********/

const p = {
  first: "ali",
  last: "hassan",
  city: "karachi",
  siblings: {
    brother: "husnain",
    sister: "sana",
  },
};

//console.log(p.first);
//console.log(p.siblings.brother);

//Object Destructor

//Syntax for object destructuring
//const {} = p

//const { first, last } = p;
/* const { last, first } = p;
console.log(first, last); */

//Aliasing
const { last: l, first: f } = p;
//console.log(f, l);

//Difference b/w parameter & Arguement

/* function printFullName(person) {
  console.log(person.first, person.last);
} */

const p1 = {
  first: "ali",
  last: "hassan",
  city: "karachi",
  siblings: {
    brother: "husnain",
    sister: "sana",
  },
};

//Declaration
function printFullName({ first, city }) {
  console.log(first, city);
}

//Calling
//printFullName(p1);

/************ * 4) Spread Operator ***********/

const n = "gulraiz";

//console.log(n);
//console.log([...n]);

const group1 = ["aliyan", "farhan", "chris"];
const group2 = ["jack", "bob", "peter"];

//const main = [...group1, ...group2];
//const main = [...group2, ...group1];
//const main = [...group2, ...group2];
//const main = [group1, group2];

//console.log([group1, group2]);
//console.log([...group1, ...group2]);

const a = [...group1, ...group2];
//console.log(friends);

//Changes in content of b will be reflected in a also if we don't use ... operator
//const b = a;
//b[0] = "arbaz";

//Original array's content does not change if we use spread operator
const b = [...a];
b[0] = "arbaz";

//console.log(a);
//console.log(b);

//Using spread operator on objects

const q = { name: "albert", age: 30, city: "karachi" };
const m = { ...q, country: "pakistan" };
const o = { ...q, name: "shabana", country: "pakistan" };

//console.log(q);
//console.log(m);
//console.log(o);

/************ * 4) Rest Operator ***********/

const countries = ["pakistan", "india", "china", "russia", "iran"];

/* const [first, second] = countries;
console.log(first, second); */

/* const [first, second, ...rest] = countries;
console.log(first, second, rest); */

/* const [first, ...rest] = countries;
console.log(first, rest); */

//Using rest operator in objects

const car = {
  name: "swift",
  make: "suzuki",
  model: 2016,
  type: "hatch-back",
  color: "gray",
};

/* const { name, make, ...rest } = car;
console.log(name, make, rest); */

const { type, color, ...rest } = car;
console.log(type, color, rest);
