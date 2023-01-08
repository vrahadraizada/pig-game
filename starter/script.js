"use strict";



/*
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
//------------------------------------------JAVASCRIPT FUNDAMENTAL
console.log("Hello world!");


//----- VALUE & VARIABLE
const js = "Hello Javascript";
console.log(js);

const firstName = "Vrahad";
const lastName = "Raizada";
console.log("My name is " + firstName + " " + lastName + "!");
console.log(`My name is ${firstName} ${lastName}!`);



//----- DATA TYPES
let age = 30; //number datatype
let yourName = "John Doe"; //string datatype
let isJavascriptBest = true; //boolean datatype
let mobileNumber; //undefined data types

console.log(
  typeof age,
  typeof yourName,
  typeof isJavascriptBest,
  typeof mobileNumber
); //typeof used to know type of variable



//----- LET, CONST & VAR KEYWORDS [const > let > var]
let profession = "teacher";
profession = "coder"; //we can re-assign the let variable

let yourProfession;
yourProfession = "doctor"; //we can assign the value after defining let variable

const birthYear = 1992;
// birthYear = 1993; //we cannot re-assign the const variable

//const myProfession; //we can only assign the value at the time of declaration

//diff betn var & let/const is- see notes



//ALERT() & PROMPT()
const personName = prompt("What is Your name, Man?");
const personNameUpper = personName.toUpperCase();
alert(`Hello ${personNameUpper}, How're you doing?`);

//Practice-1: Make 25 Characters Tweets Program
const tweets = prompt("Compose your tweets:");
const tSize = 25;
const tCount = tweets.length;

if (tCount > tSize) {
  alert(`Your tweets has exceeding ${tCount - tSize} characters!`);
  alert(tweets.slice(0, 25));
} else {
  alert(`Your tweets has ${tCount} characters.`);
  alert(tweets);
}

//Practice-2: Check elements present or not
const sibling = ["Vrahad", "Shrey", "Khushbu", "Simmi", "Sargam", "Suyash"];
const isSiblingPresent = prompt("What's your name?");

if (sibling.includes(isSiblingPresent)) {
  alert("🙏Welcome in our family");
} else {
  alert("🤚Come next time");
}



//----- OPERATORS
//Airthmatic operators [+, * , /, *, **, %]
const presentYear = 2022;
const ageVrahad = presentYear - 1992;
const ageShrey = presentYear - 1991;
console.log(ageVrahad, ageShrey);
console.log(ageVrahad * 2, ageShrey / 2, 11 * 3, 11 ** 3, 5 % 2);

//Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 6 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

//Comparision operators [>, <, ==, >=, <=, !=]
let y = 50;
console.log(x, y, x > y);
console.log(x, y, x <= y);
y *= 2;
console.log(x, y, x == y);



//----- CODING CHALLENGE:1
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;
console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log("Is Mark's BMI higher than John's: ", markHigherBMI);



//----- MULTIPLE LINE STRING
console.log(`String with \nmultiple \nline`);
console.log(`String with
multiple
line`);



//----- IF / ELSE sSTATEMENTS
const drivingAge = 18;
const sarahAge = 15;

if (sarahAge >= drivingAge) {
  console.log("Sarah can start driving 🚗");
} else {
  console.log(`Sarah is young 🥸 Wait another ${drivingAge - sarahAge}year!`);
}



//----- CODING CHALLENGE:2
if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}



//----- TYPE CONVERSION & TYPE COERCION
let n = 100;
console.log(n, typeof n);
n = "100"; //or String(100)
console.log(n, typeof n);
n = Number(n);
console.log(n, typeof n);
//we can convert the number into string & vice-versa

let txt = "abc";
console.log(txt, typeof txt);
txt = String(txt);
console.log(txt, typeof txt);
txt = Number(txt);
console.log(txt, typeof txt);
//we cannot convert the string-txt into number (result-NaN)

const inputYear = "1992"; //string number
const inputName = "Vrahad"; //string text
console.log(inputYear + 8); //stringNo. + number = concatenate (type-string)
console.log(inputName + 8); //stringTxt + number = concatenate (type-string)
console.log(inputYear - 2); //stringNo. - number = calculate (type-number)
console.log(inputName - 2); //stringTxt - number = NaN (type-number)
console.log(1992 + 8 - 50); //no. + no. - no. = calculate (type-number)

//Practice
console.log(10 + "5" * "2" - 3 + 10 + "10" - "2");



//----- TRUTHY & FALSY VALUES
//5 Falsy values: 0, "", undefined, NaN, null
//Except these values, every value is a truthy value

let checkBoolean = {}; //check falsy values

console.log(Boolean(checkBoolean));
if (checkBoolean) console.log("Hola💕");



//----- EQUALITY OPERATORS == or ===
let marks = 88;
console.log(marks == 88);
marks = "88";
console.log(marks == 88);
marks = 88;
console.log(marks === 88);
marks = "88";
console.log(marks === 88);

Promt()
const favNumber = Number(prompt("What's your favourite number? \n 3, 6, 9"));
console.log(favNumber, typeof favNumber);
let favNumber = 11;

if (favNumber === 3) {
  console.log("Yeah! 3 is a cool number!");
} else if (favNumber === 6) {
  console.log("Yeah! 6 is an amazing number!");
} else if (favNumber === 9) {
  console.log("Yeah! 9 is a fantastic number!");
} else {
  console.log("Value is not 3 or 6 or 9. Try Again");
}
if (favNumber !== 3) console.log("why not 3?");



//----- BOOLEAN LOGIC: OR, AND, NOT [||, &&, !]
const hasDrivingLicense = true;
const hasGoodVision = true;
const isTired = false;

if (hasDrivingLicense && hasGoodVision && !isTired) {
  console.log("You can drive 🛵!!!");
} else {
  console.log("You are not legible to drive 😡!!!");
}



//----- CODING CHALLENGE:3
const dolphinScore = (97 + 102 + 101) / 3;
const koalasScore = (109 + 105 + 96) / 3;
const minimumScore = 100;
console.log(dolphinScore, koalasScore);

if (dolphinScore > koalasScore && dolphinScore >= minimumScore) {
  console.log(`🐬Dolphin is winner🏆`);
} else if (koalasScore > dolphinScore && koalasScore >= minimumScore) {
  console.log(`🐨Koalas is winner🏆`);
} else if (
  dolphinScore == koalasScore &&
  dolphinScore >= minimumScore &&
  koalasScore >= minimumScore
) {
  console.log(`Match Draw !`);
} else {
  console.log("No one win !!!");
}



//----- SWITCH STATEMENT
const day = "friday";

switch (
  day // day === 'friday' (strict check)
) {
  case "monday":
    console.log("It's Monday. Go to office!");
    break;
  case "tuesday":
    console.log("It's Tuesday. Go to Temple!");
    break;
  case "wednesday":
    console.log("It's Wednesday. Go for a date!");
    break;
  case "thursday":
    console.log("It's Thurday. Go for a trip!");
    break;
  case "friday":
    console.log("It's Friday. Go to office!");
    break;
  case "saturday":
  case "sunday":
    console.log("It's Holiday. Take Rest!!");
    break;
  default:
    console.log("Invalid Input");
}



//----- TERNARY/CONDITIONAL OPERATOR
const userAge = 42;
userAge >= 18 ? console.log("Drink wine🍷") : console.log("Drink water💧");

const drink = userAge >= 18 ? "wine🍷" : "water💧";
console.log(drink);

console.log(`I like to drink ${userAge >= 18 ? "wine🍷" : "water💧"}`);



//----- CODING CHALLENGE:4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`Bill: ${bill}, Tip: ${tip}, Total: ${bill + tip}`);



//----- STRICT MODE ['use strict' in top]
let hasLicense;
const passTest = true;

if (passTest) hasLicense = true;
if (hasLicense) console.log("You can drive 🛺");



//----- FUNCTION
//example:1 (function declaration)
function logger(name, age) {
  console.log(`My name is ${name} & I'm ${age}-years old.`);
}
logger();
logger("Vrahad", 29);
logger("Shrey", 31);

//example:2 (function expression)
const fruitJuice = function (apples, oranges) {
  const juice = `Juice with ${apples}-apples🍎 and ${oranges}-oranges🍊`;
  return juice;
};

const orderJuice = fruitJuice(3, 1);
console.log(orderJuice);

//example:3 (arrow function)
const calcAge = (birthYear) => 2022 - birthYear;
const findAge = calcAge(1992);
console.log(findAge);

const high5 = () => console.log("👋");
document.body.addEventListener("click", high5);

const yearsLeftRetirement = (birthYear, userName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${userName} retires in ${retirement}years`;
};
console.log(yearsLeftRetirement(1990, "Manu"));
console.log(yearsLeftRetirement(1975, "Tapsee"));

//example:5 (function calling other function)
const cutPieces = (fruit) => 5 * fruit;

const fruitProcessor = function (pineapple, mango) {
  const pineapplepieces = cutPieces(pineapple);
  const mangopieces = cutPieces(mango);

  return `Juice with ${pineapplepieces} pieces of Pineapple & ${mangopieces} pieces of Mango`;
};

console.log(fruitProcessor(2, 3));
console.log(fruitProcessor(1, 2));

//example:6 (reviewing function)
const calAge = (birthYear) => 2023 - birthYear;

const yearsToRetirement = (birthYear, userName) => {
  const age = calAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${userName} retires in ${retirement}years`;
  } else {
    return `${userName} has already retired🎉`;
  }
};
console.log(yearsToRetirement(1990, "Manu"));
console.log(yearsToRetirement(1955, "Tapsee"));



//----- CODING CHALLENGE:5
const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const scoreDolphin = calcAvg(24, 23, 22);
const scoreKoalas = calcAvg(65, 54, 46);

function checkWinner(avgDolphin, avgKoalas) {
  if (avgDolphin >= 2 * avgKoalas) {
    console.log(`Dolphin won 🏆 (${avgDolphin} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphin) {
    console.log(`Koalas won 🏆 (${avgKoalas} vs ${avgDolphin})`);
  } else {
    console.log("No team wins...");
  }
}
checkWinner(scoreDolphin, scoreKoalas);



//----- ARRAYS
const cities = ["Mumbai", "Pune", "Bhopal", "Delhi", "Raipur", "Mysore"];
console.log(cities);
console.log(cities.length);
console.log(cities[0]);
console.log(cities[cities.length - 1]);
cities[5] = "Masuri";
console.log(cities);

//exercise
const calculateAge = (birthYear) => 2023 - birthYear;
const years = [1985, 1992, 1990, 1999, 2011, 2002, 1975, 1947];

const ages = [
  calculateAge(years[0]),
  calculateAge(years[1]),
  calculateAge(years[years.length - 1]),
];
console.log(ages);

//methods in array
const friends = ["Vrahad", "Steven", "John", "Peter", "Alex"];

friends.push("Krishna"); //add element to the last
friends.unshift("Ganesh"); //add element to the first

friends.pop(); //delete element from the last
friends.shift(); //delete element from the first
console.log(friends);

console.log(friends.indexOf("Peter"));
console.log(friends.indexOf("Krishna"));

console.log(friends.includes("Vrahad"));
console.log(friends.includes("Spider"));

// friends.unshift("Shrey");
if (friends.includes("Shrey")) console.log("You have a friend called Shrey");


//Practice: 'Who is paying' for the lunch randomly
const friends = ["Angela", "Ben", "Jenny", "Michael", "Chloe", "Vrahad"];

function whosPaying(...names) {
  const randomFriends = Math.trunc(Math.random() * names.length);
  console.log(`${names[randomFriends]} is going to buy lunch today!`);
}
whosPaying(...friends);


//Practice: store two fruits seperately
const fruits = ["🍐", "🍎", "🍎", "🍐", "🍎", "🍐", "🍐", "🍎", "🍐"];
const pears = [];
const apples = [];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "🍐") {
    pears.push(fruits[i]);
  } else {
    apples.unshift(fruits[i]);
  }
}
console.log(`Pears: ${pears}, Apples: ${apples}`);



//----- CODING CHALLENGE:6
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`Tips: ${tips}, Amounts: ${totals}`);



//----- OBJECTS
const user = {
  firstName: "Vrahad",
  lastName: "Raizada",
  age: 2022 - 1992,
  job: "programmer",
  friends: ["Peter", "Elon", "Mark"],
};
console.log(user);
console.log(user.job); //dot-notation
console.log(user["job"]); //bracket-notation

//add property: value
user.location = "Bangalore";
user["phone"] = 7000932977;
console.log(user);

//exercise
const getDetail = prompt(
  "What do you want to know about user? firstName, lastName, age, job, friends"
);
//console.log(user.getDetail); //wrong way! it'll not work
if (user[getDetail]) console.log(user[getDetail]);
else console.log("Wrong input!");

//challenge- "Vrahad has 3 friends, and his best friend is called Peter."
console.log(
  `${user.firstName} has ${user.friends.length} friends, and his best friend is called ${user.friends[0]}.`
);

//object methods
const peter = {
  fullName: "Peter Theil",
  location: "U.S.A",
  profession: "Businessmen",
  birthyear: 1980,
  friends: ["Elon", "Steve", "John", "Alex"],
  company: "Paypal",
  hasLicence: false,

  calcAge: function () {
    return 2022 - this.birthyear;
  },

  findAge: function () {
    this.age = 2023 - this.birthyear;
  },

  //challenge- Peter Theil is a 43 years old Businessmen, and he has a/no driver's license.
  getSummary: function () {
    return `${this.fullName} is a ${this.age}years old ${
      this.profession
    }, and he has ${this.hasLicence ? "a" : "no"} driving license.`;
  },
};
console.log(peter.calcAge());

peter.findAge();
console.log(peter.age);

console.log(peter.getSummary());



//----- CODING CHALLENGE:7
const steve = {
  fullName: "Steve Parker",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const elon = {
  fullName: "Elon Musk",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};
const steveBMI = steve.calcBMI();
const elonBMI = elon.calcBMI();

if (steveBMI > elonBMI) {
  console.log(
    `${steve.fullName}'s BMI(${steveBMI}) is higher than ${elon.fullName}'x BMI(${elonBMI})`
  );
} else if (steveBMI < elonBMI) {
  console.log(
    `${elon.fullName}'s BMI(${elonBMI}) is higher than ${steve.fullName}'x BMI(${steveBMI})`
  );
} else {
  console.log("Both has equal BMI");
}



//----- LOOP
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}

//looping array
const codingLanguages = ["Html", "Css", "Php", "Js", "C", "C++", "Java"];
for (let i = 0; i <= codingLanguages.length - 1; i++) {
  console.log(codingLanguages[i]);
}

//pushing array by loop
const yearList = [1992, 2002, 1995, 2022, 1980, 1975, 1999, 2000];
const ageList = [];

for (let i = 0; i <= yearList.length - 1; i++) {
  ageList.push(2023 - yearList[i]); // ageList[i] = 2023 - yearList[i];
}
console.log(ageList);

//continue & break statement
for (let i = 21; i <= 50; i++) {
  if (i % 2 != 0) continue; //break;
  console.log(i);
}

//example:2
const arrayList = ["India", "Js", 7, "Netflix", 420, true, "Vrahad", 99];
for (let i = 0; i <= arrayList.length - 1; i++) {
  if (typeof arrayList[i] !== "string") continue; //break;
  console.log(arrayList[i]);
}

//backward looping
const programmingList = ["Html", "Css", "Js", "C", "C++", "Java", "Ruby"];
for (let i = programmingList.length - 1; i >= 0; i--) {
  console.log(programmingList[i]);
}

//loops in loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--- Start Exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise-${exercise} Weight Lifting Rep ${rep} 🏋️‍♂️`);
  }
}



//----- WHILE LOOP
let i = 0;
while (i < programmingList.length) {
  console.log(`Programming Language: ${programmingList[i]}`);
  i++;
}

//exercise:2
let dice = Math.trunc(Math.random() * 6) + 1; // 0(inclusive) to 1(exclusive)
while (dice !== 6) {
  console.log(`Dice rolled: ${dice} 🎲`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log(`Loop is going to be end...`);
}



//----- CODING CHALLENGE:8
const billList = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const billTips = [];
const totalAmount = [];

function calculateTip(bill) {
  return (bill >= 50) & (bill <= 300) ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i <= billList.length - 1; i++) {
  billTips.push(calculateTip(billList[i]));
  totalAmount.push(billList[i] + billTips[i]);
}

console.log(`Bills: ${billList}, Tips: ${billTips}, Totals: ${totalAmount}`);

//calculate average of totals
function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) sum += arr[i];
  return sum / arr.length;
}
console.log(`Average Amounts is ${calculateAverage(totalAmount)}`);
*/

/* 
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
//------------------------------------------HOW JS WORKS BEHIND THE SCENE

//----- SCOPING IN PRACTICE
let number = 10;

function first() {
  const a = 1; //function scope
  let b = 2; //function scope
  var c = 3; //function scope
  number = 20;

  if (100) {
    const a = 10; // block scope
    let b = 20; // block scope
    var z = 30; //outer scope. outside is function so it is function scope
  }
  console.log(z);
}

console.log(number); //value is not reassigned
first();
console.log(number); //value is reassigned



//----- THIS KEYWORD IN PRACTICE
console.log(this); //refer to window

//in function, 'this' keyword refer to undefined
const ageCalculate = function () {
  console.log(this);
};
ageCalculate();

//in arrow function, 'this' keyword refer to window or parent scope
let x = 111; //change let to var, var creates variables on window
const ageCalc = () => {
  console.log(this);
  console.log(this.x);
};
ageCalc();

//in method, 'this' keyword refer to object
const vrahad = {
  birthyear: 1992,
  calcAge: function () {
    console.log(2025 - this.birthyear);
    console.log(this);
  },
};
vrahad.calcAge();

//'this' keyword refer to object but those who call it
const madam = {
  birthyear: 1980,
};
madam.calcAge = vrahad.calcAge;
madam.calcAge();

//in object, function inside method is function not method
const baby = {
  fullname: "Khushbu Yadav",
  age: 10,
  info: function () {
    console.log(`Person name is ${this.fullname}`);

    //problem:  'this' becomes undefined in function, so we can't access it
    function moreInfo() {
      console.log(this);
      // console.log(`Person age is ${this.age}`); //gives error
    }
    moreInfo();

    //solution:1  store 'this' in variable & use any function
    const that = this;
    function moreDetails() {
      console.log(that);
      console.log(`Person age is ${that.age}`);
    }
    moreDetails();

    //solution:2  use arrow function & use this keyword
    const moreDetail = () => {
      console.log(this);
      console.log(`Person age is ${this.age}`);
    };
    moreDetail();
  },
};
baby.info();



//----- PRIMITIVES VS OBJECTS IN PRACTICE
//primitives types
let age = 29;
let oldAge = age;
age = 30;
console.log(age);
console.log(oldAge);

//refrence types- Deep Copy
const me = {
  name: "Vrahad",
  age: 29,
};
const person = me; //Deep Copy
person.age = 45;
console.log(person);
console.log(me);

//refrence types- Shallow Copy
const you = {
  name: "mary",
  age: 22,
  friends: ["x", "y"],
};
const person2 = Object.assign({}, you); //Shallow Copy
person2.age = 72;
person2.friends.push("z");
console.log(person2);
console.log(you);
*/

/* 
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
//------------------------------------------ DS, MODERN OPERATORS & STRINGS

//----- DESTRUCTURING ARRAYS
const restaurant = {
  name: "KFC Point",
  location: "Tower 8, Marathalli, Bangalore",
  categories: ["Italian", "Chinese", "Vegetarian", "SeaFood"],
  starterMenu: ["Garlic-Bread", "Capcium-Salad", "Tomato Soup", "Pop Corn"],
  mainMenu: ["Pizza", "Coke", "Pasta", "Burger", "Chicken", "Rice Bowl"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//Destructuring array - Longcut
const num = [10, 20, [500, 600]];
const x = num[0];
const y = num[1];
const z = num[2];
console.log(x, y, z);

//Destructuring Array - Shortcut
const [i, j, k] = num;
console.log(i, j, k);

//Nested Destructuring
const [a, b, [c, d]] = num;
console.log(a, b, d);

//Skipping Variables While Destructuring Array
const [p, , [, q]] = num;
console.log(p, q);

//Default Values While Destructuring Array
// const [m, n, o] = [350, 450];
const [m = -1, n = -1, o = -1] = [350, 470]; //[350, 470, undefined]
console.log(m, n, o);

//Real Example Destructuring-I
let [, main, , secondary] = restaurant.categories;
console.log(`${main} , ${secondary}`);

//switching varaibles - Longcut
const temp = main;
main = secondary;
secondary = temp;
console.log(`${main} , ${secondary}`);

//switching varaibles - Shortcut
[main, secondary] = [secondary, main];
console.log(`${main} , ${secondary}`);

//Real Example Destructuring-II  [Order Food]
const [starter, mainCourse] = restaurant.order(11, 3);
console.log(starter, mainCourse);



//----- DESTRUCTURING OBJECTS
const hotel = {
  name: "Taj Hotel",
  location: "Tower 8, Colaba area, Mumbai",
  categories: ["Italian", "Chinese", "Vegetarian", "SeaFood"],
  starterMenu: ["Garlic-Bread", "Capcium-Salad", "Tomato Soup", "Pop Corn"],
  mainMenu: ["Pizza", "Coke", "Pasta", "Burger", "Chicken", "Rice Bowl"],

  openingHours: {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 },
    sun: { open: 10, close: 12 },
  },

  orderDelivery: function ({
    time = "15:00",
    address,
    starterIndex = 0,
    mainIndex = 0,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} & ${this.mainMenu[mainIndex]} will be deliverred soon at ${time} in ${address}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} & ${ing3} 😋`);
  },

  orderPizza: function (...ingredients) {
    console.log(`Here is your delicious Pizza with ${ingredients}`);
  },
};

//Destructuring object
const { name, openingHours, categories } = hotel;
console.log(name, openingHours, categories);

//Destructuring object with New Variables Names
const { name: hotelName, openingHours: hours, categories: tags } = hotel;
console.log(hotelName, hours, tags);

//Default Values While Destructuring Objects
const { menu = [], starterMenu: starters = [] } = hotel;
console.log(menu, starters);

//Mutating Variables
let s = 111;
let t = 999;
const obj = { s: 20, p: 77, e: 85, t: 10 };
({ s, t } = obj);
console.log(s, t);

//Nested Destructuring- Find hotel's open and close time on friday
const {
  fri: { open: ot, close: ct },
} = openingHours;
console.log(`${hotelName} on friday, open at ${ot} & close at ${ct}`);

//Real Example Destructuring  [Order Food in Given Address]
hotel.orderDelivery({
  time: "10:20",
  address: "C-Building, Marathalli, Bangalore",
  starterIndex: 2,
  mainIndex: 3,
});

hotel.orderDelivery({
  address: "Rose-31, Smart City, Anuppur",
  starterIndex: 1,
});



//----- SPREAD OPERATOR (...)
const arr = ["Maths", "Physics", "English"];
const badArr = ["Geography", "Biology", arr[0], arr[1], arr[2]];
console.log(badArr);
const newArr = ["Geography", "Biology", ...arr];
console.log(newArr);

//example
const newMenu = [...hotel.mainMenu, "Noodels", "Momos"];
console.log(newMenu);

//Shallow Copy Array
const newMenuCopy = [...newMenu];
console.log(newMenuCopy);

//Join 2 Array
const menuList = [...hotel.starterMenu, ...hotel.mainMenu];
console.log(menuList);

//Iterables: arrays, strings, maps, sets are iterable. Not Objects
const str = "Vrahad";
const letter = [...str, "", "R."];
console.log(letter);
console.log(str, ...str); //individual letter

//Real World Example
const ingredients = [
  prompt("Let's make Pasta! Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"),
];
// console.log(ingredients);

hotel.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
hotel.orderPasta(...ingredients);

//Shawllow copy objects
const newHotel = { ...hotel };
newHotel.name = "Oberoi Hotel";
console.log(newHotel);

const newHotelCopy = { ...newHotel, foundedIn: 1988 };
console.log(newHotelCopy);



//----- REST PATTERN & PARAMETERS
//on array
const languages = ["Hindi", "English", ...["Spanish", "French", "Japanese"]];
const [lang1, lang2, ...otherLang] = languages;
console.log(lang1, lang2, otherLang);

//on objects
const { thu, fri, ...weekends } = hotel.openingHours;
console.log(thu, fri, weekends);

//on functions
function add(...numbers) {
  console.log(numbers);
  let sum = 0;

  for (let i = 0; i <= numbers.length - 1; i++) {
    sum += numbers[i];
  }

  console.log(sum);
}
add(10, 20); //add(...[10, 20]);
add(45, 55, 75);
add(2, 4, 6, 8, 10);

const e = [100, 200, 700, 900, 300];
add(...e);

//real example
hotel.orderPizza("Cheese", "Chicken", "Onion");



//----- SHORT CIRCUITING (&& AND ||)
//In ||, it gives first truthy value & stop evaluating otherwise last value
console.log(33 || "Vrahad");
console.log(0 || "Vrahad");
console.log(0 || "");
console.log(undefined || 0 || "" || 100 || "Javascript");

const oyoHotel = {
  room: 11,
  guest: 7, //0
};
const guest1 = oyoHotel.guest || 10;
console.log(`Total guest visited today is ${guest1}`); //has problem

//In &&, it gives first falsy value & stop evaluating otherwise last value
console.log(33 && "Shrey");
console.log(0 && "Shrey");
console.log(0 && "");
console.log(undefined && 0 && "" && 100 && "Python");

const guest2 = oyoHotel.guest && 10;
console.log(`Total guest visited today is ${guest2}`); //has problem



//----- NULLISH COALESCING OPERATOR (??)
console.log(0 ?? "t");
console.log(undefined ?? null);

const guest3 = oyoHotel.guest ?? 10;
console.log(`Total guest visited today is ${guest3}`);
//In ??, it gives first truthy value & stop evaluating otherwise last value but nullish operator assumed undefined & null are falsy values not 0, "", NaN



//----- LOGICAL ASSIGNMENT OPERATORS
const hotelTaj = {
  owner: "Ratan Tata",
  founder: "Jamshed Tata",
};
hotelTaj.guests ||= 100; //hotelTaj.guest = hotelTaj.guests || 100;
console.log(hotelTaj);
hotelTaj.rooms &&= 100; //hotelTaj.guest = hotelTaj.guests && 100;
console.log(hotelTaj);
hotelTaj.waiters ??= 100; //hotelTaj.guest = hotelTaj.guests ?? 100;
console.log(hotelTaj);



//----- CODING CHALLENGES #1
const game = {
  team1: "Bengal Tigers",
  team1: "Chennai Heros",
  players: [
    [
      "Virat",
      "Rohit",
      "Suryakumar",
      "Rahul",
      "Hardik",
      "Dhoni",
      "Rishab",
      "Dinesh",
      "Jaspreet",
      "Youraj",
      "Harbhajan",
    ],
    [
      "Steve",
      "David",
      "Pat",
      "Aaron",
      "Glenn",
      "Mitchell",
      "Marcus",
      "Adam",
      "Mathew",
      "Alex",
      "Peter",
    ],
  ],
  score: "4:0",
  scored: ["Steve", "David", "Marcus", "Peter"],
  date: "Nov 9th 2025",
  odds: {
    team1: 2.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const [players1, players2] = game.players;
console.log(players1, players2);
//2.
const [gk, ...fieldPLayers] = players1;
console.log(gk, fieldPLayers);
//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4.
const players1Final = [...players1, "Sachin", "Kapil", "Sehbag"];
console.log(players1Final);
//5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
//6.
function printGoals(...players) {
  console.log(`Players: ${players}`);
  console.log(`${players.length} goals were scored.`);
}
printGoals(...game.scored);
//7.
team1 < team2 && console.log("Team1 is more likely to win");
team1 > team2 && console.log("Team2 is more likely to win");



//----- FOR-OF LOOP
const players = ["Saina", "Dhoni", "Yuvraj", "Ronaldo", "Mithali", "Messi"];
for (const playerName of players) console.log(playerName + "⚽");

const fastFoods = ["Pizza🍕", "Burger🍔", "Burrito🌯", "HotDog🌭", "Cake🥞"];

for (const item of fastFoods.entries()) {
  // console.log(items);
  console.log(`${item[0] + 1} - ${item[1]}`);
}
//or
for (const [i, el] of fastFoods.entries()) console.log(`${i + 1} - ${el}`);



//----- ENHANCED OBJECT LITERALS
const div = {
  a: 10,
  b: 5,

  divide() {
    return this.a / this.b;
  },
};

const es6Obj = {
  x: 10,
  y: "hello",

  // add: function() {}, //old ways of writing methods
  add() {
    let num = 0;
    num = this.x + 100;
    return num;
  },

  //div: {}, //old ways of writing obj
  div: div,
};

console.log(es6Obj.add()); //method working
console.log(es6Obj.div.divide()); //object working



//----- OPTIONAL CHAINING (?.)



//----- LOOPING OBJECTS: (object is not iterable)
const school = {
  name: "Kendriya Vidyalaya",
  students: 1200,
  teahers: 17,
  medium: "English",
  location: "Jamuna Colliery",
};

const schoolKeys = Object.keys(school);
console.log(schoolKeys);
const schoolValues = Object.values(school);
console.log(schoolValues);
const schoolEntries = Object.entries(school);
console.log(schoolEntries);

for (const item of schoolEntries) {
  // console.log(item);
  console.log(`${item[0]} ---------->> ${item[1]}`);
}

for (const [key, value] of schoolEntries) {
  console.log(`${key} -- ${value}`);
}



//----- CODING CHALLENGES #2
const game = {
  team1: "Bengal Tigers",
  team2: "Chennai Heros",
  players: [[], []],
  score: "4:0",
  scored: ["Steve", "David", "Marcus", "Peter"],
  date: "Nov 9th 2025",
  odds: {
    team1: 2.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player} `);
}
//2.
let avgerageOdds = 0;
const odds = Object.values(game.odds); // [2.33, 3.25, 6.5]

for (const odd of odds) avgerageOdds += odd;
avgerageOdds /= odds.length;
console.log(avgerageOdds);
//3.
for (const [team, value] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(` Odd of ${teamStr}:  ${value}`);
}
//4.
const scorers = {};
for(const [i, player] of game.scored.entries()){
  scorers[player] = i + 1;
}
console.log(scorers);



//----- SETS
const familySet = new Set(["Mom", "Papa", "Papa", "Bhai", "Papa", "Mom"]);
console.log(familySet);

const nameSet = new Set("Vrahad");
console.log(nameSet);
console.log(`The number of letter in "Vrahad" is : ${nameSet.size}`);

//Methods
console.log(familySet.size);
familySet.add("Bahen");
familySet.add("Bahen");
familySet.add("Me");
familySet.delete("Me");
// familySet.clear();
console.log(familySet);
console.log(familySet.has("Mom"));
console.log(familySet.has("Me"));

//Set Loop
for (const member of familySet) console.log(member + "👨‍👩‍👧‍👦");

//Practice:
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const uniqueStaff = new Set(staff);
console.log(uniqueStaff);



//----- MAPS
const bank = new Map();
bank.set("name", "Reserve Bank Of India (RBI)");
bank.set(1, "Mumbai, Maharashtra");
bank.set(2, "Kolkata, West-Bengal");
bank.set("categories", ["Deposit", "CashTransfer", "Withdrawal", "FD"]);
bank.set("open", 10);
bank.set("close", 17);
bank.set(true, "🏦 Bank is open now!");
bank.set(false, "🏦 Bank is closed!");

// bank.set([1, 2], 'test'); we can't get the value if u add array like this
const arrKey = [1, 2];
bank.set(arrKey, "test");
console.log(bank.get(arrKey));

console.log(bank);
console.log(bank.get("name"));
console.log(bank.get("close"));
console.log(bank.get(2));

//practice
const time = 9;
console.log(bank.get(time > bank.get("open") && time < bank.get("close")));

//Methods
console.log(bank.size);
console.log(bank.has("categories"));
bank.delete(arrKey);
// bank.clear();
console.log(bank);

//Map Loop
const question = new Map([
  ["question", "What is the best programming languages in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Python"],
  [4, "Javascript"],
  ["correct", 4],
  [true, "Correct 🎉"],
  [false, "Try again 😭"],
]);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`option:${key} ${value}`);
}
// const answer = Number(prompt("Your answer!"));
const answer = 4; //to reload window properly without prompt() disturbance
console.log(question.get(answer === question.get("correct")));



//----- CODING CHALLENGES #3
const gameEvents = new Map([
  [17, "♒ GOAL"],
  [36, "✳️ Substitution"],
  [47, "♒ GOAL"],
  [61, "✳️ Substitution"],
  [64, "🟨 Yellow Card"],
  [69, "🟥 Red Card"],
  [70, "✳️ Substitution"],
  [72, "✳️ Substitution"],
  [76, "♒ GOAL"],
  [80, "♒ GOAL"],
  [92, "🟨 Yellow Card"],
]);

//1.
const eventsArr = [...new Set(gameEvents.values())];
console.log(eventsArr);
//2.
gameEvents.delete(64);
console.log(gameEvents);
//3.
const gameTime = [...gameEvents.keys()];
const averageEventTime = gameTime[gameTime.length - 1] / gameEvents.size;
console.log(`An event happened, on average every ${averageEventTime} min`);
//4.
for (const [key, value] of gameEvents) {
  const str = key < 45 ? "FIRST" : "SECOND";
  console.log(`[${str} HALF] ${key} : ${value}`);
}



//----- WORKING WITH STRINGS
const airline = "TAP Air India";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[plane.length - 1]);

//methods.I
console.log(airline.length);
console.log("B119".length);

console.log(airline.indexOf("i"));
console.log(airline.lastIndexOf("i"));
console.log(airline.indexOf("Air")); //put extra matching letter
console.log(airline.indexOf("z"));

console.log(airline.slice(4)); //print 'Air India
console.log(airline.slice(4, 7)); //print 'Air'
console.log(airline.slice(-9)); //print 'Air India' using negative index
console.log(airline.slice(-9, -6)); //print 'Air' using negative index

//practice: print 'Indi' using slice() but without giving index no
console.log(airline.slice(airline.indexOf("I"), airline.indexOf("ia") + 1));

//practice: find middle seat. [B & E are middle seats in plane]
function checkMiddleSeat(seatNum) {
  let middleSeat = seatNum.slice(-1);
  if (middleSeat === "B" || middleSeat == "E") {
    console.log(`${seatNum}: You got the middle seat ✈️`);
  } else {
    console.log(`${seatNum}: You got the corner seat ✈️`);
  }
}
checkMiddleSeat("11B");
checkMiddleSeat("27A");
checkMiddleSeat("3E");


//methods.II
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log("  My name is Jonny   \n".trim());

//practice: make function which fix capitalisation in name. ex 'Vrahad'
function nameCapitalize(name) {
  const nameLower = name.toLowerCase();
  console.log(nameLower[0].toUpperCase() + nameLower.slice(1));
}
nameCapitalize("ShReY");
nameCapitalize("KhuSHBU");
nameCapitalize("vraHAD");

//practice: make function which normalized the emails
function emailNormalize(email) {
  const normalizedEmail = email.trim().toLowerCase();
  console.log(normalizedEmail);
}
emailNormalize("      SHREyraiZADa@gMail.Com  ");
emailNormalize(" KhushbuYadav@GMAIL.com  ");
emailNormalize("   vrahadraIZAdA@Gmail.COM \n");

//practice: replacing
const priceEuro = "288,79£"; //make it: 288.79$
const priceDollar = priceEuro.replace("£", "$").replace(",", ".");
console.log(priceDollar);

//practice: replacing multiple
const announcement =
  "All passengers come to boarding door 11. Boarding door 11!";
console.log(announcement.replace(/door/g, "gate")); //oldway
console.log(announcement.replaceAll("door", "gate")); //newway

//booleans methods
const newPlane = "Indigo A320neo";

console.log(newPlane.includes("A320"));
console.log(newPlane.includes("A420"));
console.log(newPlane.startsWith("Indigo"));
console.log(newPlane.startsWith("neo"));
console.log(newPlane.endsWith("neo"));
console.log(newPlane.endsWith("Indigo"));

if (newPlane.startsWith("Indigo") && newPlane.endsWith("neo")) {
  console.log("Part of the new Indigo family...");
}

//Practice: check baggage whether it contains Knife, Gun or not
function checkBaggage(items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed to board");
  } else {
    console.log("Welcome abroad ✈️✈️");
  }
}
checkBaggage("I have a Laptop, some Food & a Pocket Knife");
checkBaggage("Socks & Camera");
checkBaggage("Got some snacks and a Gun for protection");


//methods.III
//split: string to array
const strTxt1 = "My+name+is+Vrahad+Raizada".split("+");
console.log(strTxt1);

const strTxt2 = "Vrahad Raizada".split(" ");
console.log(strTxt2);

//join: array to string
const [firstName, lastName] = strTxt2;
const newName = ["Mr.", firstName, lastName].join(" ");
console.log(newName);

//practice: create function and capilatize each word.
function capitalizeNames(name) {
  const nameSplit = name.split(" ");
  const nameUpper = [];

  for (const n of nameSplit) {
    // let capName = n[0].toUpperCase() + n.slice(1);
    //or
    let capName = n.replace(n[0], n[0].toUpperCase());
    nameUpper.push(capName);
  }

  const correctName = nameUpper.join(" ");
  console.log("📝" + correctName);
}
capitalizeNames("jessica and smith davis");
capitalizeNames("vrahad raizada");
capitalizeNames("spiderman and batman");

//Padding
const paddingTxt = "I am Capable"; //length-12
console.log(paddingTxt.padStart(17, "*"));
console.log(paddingTxt.padEnd(19, "*"));
console.log(paddingTxt.padStart(16, "-").padEnd(20, "-"));

//practice: make function which mask last 4 digit of the credit card
function maskCreditCard(number) {
  const strNumber = number + ""; //String(number); //change num into str
  const last = strNumber.slice(-4); //last 4 digit

  //apply padding on starting remaining digit
  const maskCard = last.padStart(strNumber.length, "*");
  console.log(maskCard);
}
maskCreditCard(7800988845642211);
maskCreditCard("84185296");
maskCreditCard(656589884147);

//Repeat
const message = "Bad Weather⛈️... All departures are delayed!!! \n";
console.log(message.repeat(3));

//practice
function planesInLine(n) {
  console.log(`There are ${n} planes in a line ${"✈️".repeat(n)}`);
}
planesInLine(6);
planesInLine(3);
planesInLine(2);


//Practice: Clean String
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

//output Should Like This-
// ⛔ Delayed Departure from FAO to TXL (11h25m)
// ✅ Arrival from BRU to FAO (11h45m)
// ⛔ Delayed Arrival from HEL to FAO (12h05m)
// ✅ Departure from FAO to LIS (12h30m)

for (const flight of flights.split("+")) {
  let [type, from, to, time] = flight.split(";");
  type = type.replaceAll("_", " ").trim();
  from = from.slice(0, 3).toUpperCase();
  to = to.slice(0, 3).toUpperCase();
  time = time.replace(":", "h");
  let delayedSymbol = type.startsWith("Delayed") ? "⛔" : "✅";

  const output = `${delayedSymbol} ${type} from ${from} to ${to} (${time}m)`;
  console.log(output);
}



//----- CODING CHALLENGES #4
----------------------Input Data
underscore_case
 first_name
Some_Variable
  calculate_AGE
Delayed_departure
----------------------Output Data
underscoreCase     ✅
firstName          ✅✅
someVariable       ✅✅✅
calculateAge       ✅✅✅✅
delayedDeparture   ✅✅✅✅✅
--------------------------------

const convertBtn = document.querySelector(".convert");
const textBox = document.querySelector("textarea");

const strConverter = function () {
  const inputStr = textBox.value;
  const seperateRows = inputStr.split("\n");

  for (const [i, row] of seperateRows.entries()) {
    const [firstWord, secondWord] = row.toLowerCase().trim().split("_");
    const secondWordUpper = secondWord.replace(
      secondWord[0],
      secondWord[0].toUpperCase()
    );
    const finalStr = firstWord + secondWordUpper;
    const output = `${finalStr.padEnd(20)} ${"✅".repeat(i + 1)}`;
    console.log(output);
  }
};

convertBtn.addEventListener("click", strConverter);
*/

/*
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
//------------------------------------------ A CLOSURE LOOK AT FUNCTIONS

//----- DEFAULT PARAMETERS
const bookings = [];

const createBooking = function (
  flightNum = 1,
  numPassengers = 1,
  ticketCost = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    ticketCost,
  };

  // console.log(booking);
  bookings.push(booking);
};
createBooking();
createBooking("A320");
createBooking("B117", 3);
createBooking("A320", 2, 350);
createBooking("C009", undefined, 2599);

console.log(bookings);



//----- HOW PASSING ARGUMENTS WORKS: PRIMITIVE VS REFERENCE
const flight = "LM009";
const passenger = {
  name: "Vrahad Raizada",
  passport: 78796565433,
};

const checkIn = function (flightNumber, passengerDetails) {
  flightNumber = "LM121"; //prImitive value
  passengerDetails.name = "Mr." + passengerDetails.name; //reference value

  if (passengerDetails.passport === 78796565433) {
    console.log(`${passengerDetails.name}, CheckIn ✈️`);
  } else {
    console.log("Wrong Passport! 🚨");
  }
};

checkIn(flight, passenger);
console.log(flight, passenger.name);



//----- FUNCTIONS ACCEPTING CALLBACK FUNCTIONS
function oneWord(str) {
  return str.replaceAll(" ", "").toLowerCase();
}

function upperFirstWord(str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
}

//high order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}()`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);



//----- FUNCTIONS RETURNING FUNCTIONS
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
greet("Namaste")("Vrahad");
//or
const greetHello = greet("Hello");
greetHello("Shrey");
greetHello("Peter");

//change it in fad arrow function
const greetx = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetx("Hey")("Sarah");



//----- THE CALL METHOD, APPLY METHOD & BIND METHOD
const indigo = {
  airline: "Indigo",
  iatacode: "LH",
  bookings: [],

  booked(flightNum, name) {
    console.log(
      `${name} booked a ticket on ${this.airline} ${this.iatacode}${flightNum}`
    );
    this.bookings.push({
      passenger: `${name}, flight: ${this.iatacode}${flightNum}`,
    });
  },
};

indigo.booked(117, "Vrahad Raizada");
console.log(indigo);

const spicejet = {
  airline: "Spicejet",
  iatacode: "CA",
  bookings: [],
};

//store method in a variable so that we don't have to call it again n again
const booked = indigo.booked;

//Call Method
booked.call(spicejet, 111, "Sarah Smith");
console.log(spicejet);

booked.call(indigo, 999, "Peter White");
console.log(indigo);

const airAsia = {
  airline: "Airasia",
  iatacode: "TS",
  bookings: [],
};

booked.call(airAsia, 223, "John Smith");
console.log(airAsia);

//Apply Method
booked.apply(airAsia, [401, "John Cena"]); //apply() is an old one
booked.call(airAsia, ...[233, "Elon Musk"]); //use call() with es6 features
console.log(airAsia);

//Bind Method
const bookedSJ = indigo.booked.bind(spicejet);
bookedSJ(288, "Angel Jasmin");

const bookedSJ556 = indigo.booked.bind(spicejet, 556);
bookedSJ556("Angel Priya");

//Another Example: Bind() with addEventListener
indigo.planes = 300;
indigo.buyPlanes = function () {
  this.planes++;
  console.log(this);
  console.log(`New Plane: ${this.planes}`);
};
//when you call method using eventListener, 'this' keyword in object point towards the html element (of given class), not on object. solution is bind()
document
  .querySelector(".buy")
  .addEventListener("click", indigo.buyPlanes.bind(indigo));

//Another Example: Bind() with Finction
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT = addTaxRate(0.25);
console.log(addVAT(100));
console.log(addVAT(80));

//re-function this function with bind()
const addTax = (rate, value) => value + value * rate;
const addVAT2 = addTax.bind(null, 0.25);
console.log(addVAT2(100));
console.log(addVAT2(80));



//----- CODING CHALLENGES #1
const poll = {
  question: "What is your favourite hollywood movie?",
  options: ["0: Matrix", "1: Interstellar", "2: Avenger", "3: Inception"],
  answers: new Array(4).fill(0), //[0, 0, 0, 0]

  //1.1  Get Answer
  registerNewAnswer() {
    const ans = Number(prompt(`${this.question}\n${this.options.join("\n")}`));

    //1.2 Register Answer
    typeof ans === "number" && ans < this.answers.length && this.answers[ans]++;
    //4.
    this.displayResults();
    this.displayResults("string");
  },

  //3.
  displayResults(type = 'array') {
    if (type === "array") {
      console.log(this.answers);
    } else if(type === 'string') {
      console.log(`Poll results are: ${this.answers.join(', ')}`);
    }
  },
};
//2
const pollBtn = document.querySelector(".poll");
pollBtn.addEventListener("click", poll.registerNewAnswer.bind(poll));
//bonus
const defaultAnswer = [5, 2, 3];
poll.displayResults.call({answers: defaultAnswer}, 'string');



//----- IIFE: IMMEDIATELY INVOKED FUNCTION EXPRESSION
(function () {
  console.log("This () will never run again!");
})();

(() => console.log("This () will also never run again!"))();



//----- CLOSURES
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();


//Closures Example-1
let f;

const g = function () {
  const a = 25;
  f = () => console.log(a * 2);
};

const h = function () {
  const b = 700;
  f = () => console.log(b * 2);
};

h();
f(); //value of f() is depend on whom you calling just before f(): g() or h()

g();
f();


//Closures Example-2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are all boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, 1000 * wait);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(150, 3);



//----- CODING CHALLENGES #2
(function () {
  const header = document.querySelector("h1");
  header.style.color = 'green';

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

*/

/*
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
//------------------------------------------ OOP WITH JS

//----- CONSTRUCTOR FUNCTION WITH NEW OPERATOR
const Person = function (firstName, birthYear) {
  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const vrahad = new Person("Vrahad", 1992);
console.log(vrahad);

const sarah = new Person("Sarah", 1999);
console.log(sarah);

//PROTOTYPES
Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};
vrahad.calcAge();
sarah.calcAge();

Person.prototype.species = "Homo Sapiens";
console.log(vrahad.species);
console.log(sarah.species);


//check prototype
console.log(Person.prototype);
console.log(vrahad.__proto__);
console.log(sarah.__proto__);
console.log(vrahad.__proto__.__proto__);

console.log(sarah.hasOwnProperty("firstName"));
console.log(sarah.hasOwnProperty("calcAge"));



//----- CODING CHALLENGE #1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at: ${this.speed}km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at: ${this.speed}km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

console.log(bmw);
bmw.accelerate();
bmw.accelerate();
bmw.brake();

console.log(mercedes);
mercedes.brake();
mercedes.accelerate();
mercedes.brake();



//----- CLASS
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //(instance methods) | method will be added to prototype
  calcAge() {
    console.log(`Age: ${2025 - this.birthYear}`);
  }

  greet() {
    console.log(`Hey, ${this.firstName}`);
  }
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);
jessica.calcAge();
jessica.greet();



//----- GETTER & SETTER
//Example-1
const account = {
  owner: "Vrahad",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).join();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
//calling get methods
console.log(account.latest);
//calling set methods
account.latest = 50; //don't call it like: account.latest(50);
console.log(account.movements);


//Example-2
const PersonX = class {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get greetMsg() {
    console.log(this);
    return `Hello👋 ${this.name}! How are you doing? `;
  }
  
  //static method- 'this' keyword refer to class. (not refer in instance ())
  static hey() {
    console.log(this);
  }
};

const alex = new PersonX("Alex White");
console.log(alex.greetMsg);

PersonX.hey();



//----- OBJECT.CREATE
const personY = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
}

//old way initialising properties
const steven = Object.create(personY);
steven.name = "Steven White"
steven.birthYear = 2001;
console.log(steven);
steven.calcAge();

//new way initialising properties
const sarah = Object.create(personY);
sarah.init("Sarah Doe", 1990);
console.log(sarah);
sarah.calcAge();



//----- CODING CHALLENGE #2
class Bike {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed){
    this.speed = speed * 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is running at ${this.speedUS} mile/hr`);
  }
  brake() {
    this.speed -= 15;
    console.log(`${this.make} is running at ${this.speedUS} mile/hr`);
  }
}

const ducati = new Bike("Ducati", 120);
console.log(ducati);
ducati.accelerate();
ducati.accelerate();
ducati.brake();

ducati.speedUS = 100;
console.log(ducati);



//----- INHERITANCE BETWEEN CONTRUCTOR FUNCTIONS
const Teacher = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Teacher.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};


const Student = function (firstName, birthYear, course) {
  Teacher.call(this, firstName, birthYear); //for inherit properties
  this.course = course;
};
Student.prototype = Object.create(Teacher.prototype); //for access method

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};


const mike = new Student("Mike", 2002, "Computer-Science");
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);



//----- CODING CHALLENGE #3
const SportsCar = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

SportsCar.prototype.accelerate = function() {
  this.speed += 10;
  console.log(`${this.make} is going at: ${this.speed}km/h`);
}

SportsCar.prototype.brake = function() {
  this.speed -= 5;
  console.log(`${this.make} is going at: ${this.speed}km/h`);
}


const ElectricCar = function (make, speed, charge) {
  SportsCar.call(this, make, speed);
  this.charge = charge;
};

ElectricCar.prototype = Object.create(SportsCar.prototype);

ElectricCar.prototype.chargeBattery = function(chargeTo){
  this.charge = chargeTo;
}

//method overwite: (polymorphism)
ElectricCar.prototype.accelerate = function() {
  this.speed += 20;
  this.charge--;
  console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`);
}


const tesla = new ElectricCar("Tesla", 120, 23);
tesla.chargeBattery(90);
tesla.accelerate();
tesla.accelerate();
tesla.brake();
console.log(tesla);



//----- INHERITANCE BETWEEN ES6 CLASSES
class TeacherCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2025 - this.birthYear);
  }
}

class StudentCl extends TeacherCl {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear); //always need to happen first
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  }
  
  //method overwrite
  calcAge() {
    console.log(`${this.firstName}, your age is ${2025 - this.birthYear}`);
  }
}

const john = new StudentCl("John", 1989, "Bio-Tech");
john.introduce();
john.calcAge();



//----- INHERITANCE BETWEEN OBJECT.CREATE
const teacherObj = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const studentObj = Object.create(teacherObj);
studentObj.init = function (firstName, birthYear, course) {
  teacherObj.init.call(this, firstName, birthYear, course);
  this.course = course;
};
studentObj.introduce = function () {
  console.log(`My name is ${this.firstName} & I study ${this.course}`);
};
//method overwrite
studentObj.calcAge = function () {
  console.log(`Hi ${this.firstName}, your age is ${2025 - this.birthYear}`);
};

const jay = Object.create(studentObj);
jay.init("Jay", 1992, "Chemical-Engineering");
console.log(jay);
jay.introduce();
jay.calcAge();



//----- ANOTHER CLASS EXAMPLE WITH ENCAPSULATION & CHAINING
class Account {
  locale = navigator.language; //public field
  #movements = []; //private field
  #pin; //private field

  constructor(owner, currency, pin) {
    this.owner = owner; //public property
    this.currency = currency; //public property
    this.#pin = pin; //private property
    // this.locale = navigator.language;

    console.log(`Thanks ${this.owner}, for opening an account!`);
  }

  //public methods
  deposit(val) {
    this.#movements.push(val);
    return this; //for chaining
  }
  withdraw(val) {
    this.deposit(-val);
    return this; //for chaining
  }

  balanceHistory() {
    return this.#movements;
  }

  requestLoan(val) {
    if (this.#approveLoan()) {
      this.deposit(val);
      console.log("Loan Approved!");
      return this; //for chaining
    }
  }
  //private methods
  #approveLoan() {
    return true;
  }
}

const acc1 = new Account("Vrahad", "Dollar", 1111);

acc1.deposit(350);
acc1.withdraw(150);

acc1.requestLoan(1000);
console.log(acc1);

//chaining methods.
acc1.deposit(650).deposit(1275).requestLoan(15000).withdraw(5500);
console.log(acc1.balanceHistory());



//----- CODING CHALLENGE #4
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at: ${this.speed}km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at: ${this.speed}km/h`);
    return this;
  }
}

class ELectricCarCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge; //redefining private property
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`Battery Charged: ${this.#charge}%`);
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at: ${this.speed}km/h, with a charge of ${
        this.#charge}%`
    );
    return this;
  }
}

const revolt = new ELectricCarCl("Revolt", 80, 77);
console.log(revolt);
revolt.chargeBattery(80).accelerate().accelerate().accelerate().brake();

*/

/*
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
//------------------------------------------ WORKING WITH ARRAYS

//----- SIMPLE ARRAY METHODS
let cars = ["BMW", "Audi", "Honda", "Tata", "Maruti"];

cars.push("Mercedes"); //insert elements from the last [return- arr length]
cars.unshift("Ford"); //insert elements from the first [return- arr length]
cars.pop(); //remove elements from the last [return- deleted element]
cars.shift(); //remove elements from the first [return- deleted element]
console.log(cars);
console.log(`Number of cars: ${cars.length}`); //find length

//Slice Methods-
let bikes = ["KTM", "Hero", "Ducati", "Yamaha", "Bajaj", "Tvs"];

console.log(bikes.slice(2)); //Ducati to last     //bikes.slice(2, 6)
console.log(bikes.slice(2, 5)); //Ducati to Bajaj
console.log(bikes.slice(-4)); //Ducati to last    //bikes.slice(-4, 6)
console.log(bikes.slice(-4, -1)); //Ducati to Bajaj
console.log(bikes.slice(2, -1)); //Ducati to Bajaj

const x = bikes.slice(); //for full elements  &  [used to shallow copy]
const y = [...bikes]; //shallow copy
console.log(x, y);



//Splice Methods-
let numbers = [100, 200, 300, 400, 500, 600, 700, 800];

numbers.splice(-1); //remove
console.log(numbers);
numbers.splice(1, 2); //remove multiple el.
console.log(numbers);
numbers.splice(2, 1, 5000); //remove & add
console.log(numbers);
numbers.splice(-2, 0, 6000); //add
console.log(numbers);
numbers.splice(1, 0, 200, 300); //add multiple el.
console.log(numbers);

//Reverse Method-
numbers.reverse();
console.log(numbers);

//Concat Method-
const arr1 = ["a", "b", "c"];
const arr2 = ["x", "y", "z"];
console.log(arr2.concat(arr1));
console.log([...arr2, ...arr1]); //both methods are same

//Join Method-
console.log(arr1.join(" + ")); //arr to str

//At Method-
const ranks = ["first", "second", "third", "fourth", "fifth"];
console.log(ranks[0]);
console.log(ranks.at(0));
console.log("VRAHAD".at(2)); //at() on string

//3ways: to get last elements-
console.log(ranks[ranks.length - 1]);
console.log(ranks.slice(-1)[0]);
console.log(ranks.at(-1));



//----- FOREACH(): LOOP ARRAY
const years = [1985, 2001, 1999, 1992, 2010, 2008, 2005, 1994];

for (const y of years) {
  if (y >= 1997) console.log(`Gen-Z: ${y}`);
  else console.log(`Millenial: ${y}`);
}
for (const [i, y] of years.entries()) {
  if (y >= 1997) console.log(`${i + 1} Gen-Z: ${y}`);
  else console.log(`${i + 1} Millenial: ${y}`);
}

const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];

transactions.forEach((tr) => {
  if (tr > 0) console.log(`Deposite: ${tr}`);
  else console.log(`Withdrawal: ${Math.abs(tr)}`);
});
transactions.forEach((tr, i) => {
  if (tr > 0) console.log(`Transaction:${i + 1} Deposite: ${tr}`);
  else console.log(`Transaction:${i + 1} Withdrawal: ${Math.abs(tr)}`);
});
//We cannot use break & continue in forEach().



//----- FOREACH(): MAPS & SETS
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
  ["INR", "Indian rupees"],
]);
currencies.forEach((value, key) => console.log(`${key} : ${value}`));

const currenciesUnique = new Set(["USD", "EUR", "EUR", "INR", "USD"]);
currenciesUnique.forEach((value) => console.log(value));



//----- CODING CHALLENGE #1
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (juliaDog, kateDog) {
  const juliaActualDog = juliaDog.slice();
  juliaActualDog.splice(0, 1);
  juliaActualDog.splice(-2);

  const totalDogs = juliaActualDog.concat(kateDog);
  totalDogs.forEach((dog, i) => {
    if (dog >= 3) {
      console.log(`Dog no ${i + 1} is an adult, & is ${dog} years old`);
    } else {
      console.log(`Dog no ${i + 1} is still a puppy🐶`);
    }
  });
};
checkDogs(dogsJulia, dogsKate);



//----- MAP METHOD, FILTER METHOD & REDUCE METHOD
//Map()
const movementsUSD = [200, 450, -400, 3000, -650, -130, 70, 1300];
const usdToRupee = 82.2;
const movementsINR = movementsUSD.map((mov) => mov * usdToRupee);
console.log(movementsINR);

//more practice
const movementsHistory = movementsUSD.map((mov, i) => {
  const amt = Math.abs(mov);
  return `Trans ${i + 1}: ${mov > 0 ? "Deposited" : "Withdrew"} ${amt}$`;
});
console.log(movementsHistory);


//Filter()
const deposits = movementsUSD.filter((mov) => mov > 0);
console.log(deposits);

const withdrawals = movementsUSD.filter((mov) => mov < 0);
console.log(withdrawals);


//Reduce()
const balance = movementsUSD.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

//more practice
const movs = [...movementsUSD];
const max = movs.reduce((acc, cur) => (cur > acc ? cur : acc), movs[0]);
console.log(max);

const min = movs.reduce((acc, cur) => (cur < acc ? cur : acc), movs.at(0));
console.log(min);



//----- CODING CHALLENGE #2
const juliaDogsAges = [5, 2, 4, 1, 15, 8, 3];
const kateDogsAges = [16, 6, 10, 5, 6, 1, 4];

const calcAvgHumanAges = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
  const adults = humanAges.filter((age) => age >= 18);
  return adults.reduce((acc, age, _, arr) => acc + age / arr.length, 0);
};
const avgAge1 = calcAvgHumanAges(juliaDogsAges);
const avgAge2 = calcAvgHumanAges(kateDogsAges);
console.log(avgAge1, avgAge2);



//----- CHAINING METHODS-
const transactionsUSD = [200, 450, -400, 3000, -650, -130, 70, 1300];
const usdToRs = 82.2;
const totalDepositINR = transactionsUSD
  .filter((val) => val > 0)
  .map((val) => val * usdToRs)
  .reduce((acc, val) => acc + val, 0);

console.log(`Total Deposits: ${totalDepositINR}Rs`);



//----- CODING CHALLENGE #3
const juliaDogsAges = [5, 2, 4, 1, 15, 8, 3];
const kateDogsAges = [16, 6, 10, 5, 6, 1, 4];

const calcAvgHumanAges = (ages) =>
  ages
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);

const avgAge1 = calcAvgHumanAges(juliaDogsAges);
const avgAge2 = calcAvgHumanAges(kateDogsAges);
console.log(avgAge1, avgAge2);



//----- THE FIND METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);

//Ex-2
const accounts = [
  { owner: "Vrahad Raizada", bank: "HDFC" },
  { owner: "Elon Musk", bank: "American Bank" },
  { owner: "Peter White", bank: "SBI" },
  { owner: "Vikram Kumar", bank: "Axis" },
  { owner: "Ashok Gupta", bank: "UCO" },
];
const accountPeter = accounts.find((acc) => acc.owner === "Peter White");
console.log(accountPeter);



//----- FLAT & FLATMAP
const arr1 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr1.flat());

const arr2 = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arr2.flat(2));

//Ex-2
const accounts = [
  { owner: "Vrahad Raizada", bank: "HDFC", movements: [200, -150, 350] },
  { owner: "Elon Musk", bank: "American Bank", movements: [50, 80, -30] },
  { owner: "Peter White", bank: "SBI", movements: [700, 650, 350] },
  { owner: "Vikram Kumar", bank: "Axis", movements: [600, -150, -350] },
  { owner: "Ashok Gupta", bank: "UCO", movements: [200, -150, 35, 500] },
];
// const overalTransactions = accounts.map((cur) => cur.movements).flat();
const overalTransactions = accounts.flatMap((cur) => cur.movements);
console.log(overalTransactions);



//----- SORTING ARRAYS
//string
const founders = ["Elon", "Bill", "Mark", "Jack", "Vrahad", "Naval"];
founders.sort();
console.log(founders);

//sort numbers in ascending
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.sort((firstCV, secondCV) => firstCV - secondCV);
console.log(movements);

//sort numbers in descending
movements.sort((firstCV, secondCV) => secondCV - firstCV);
console.log(movements);



//----- MORE WAYS CREATING & FILLINF ARRAYS
const arr1 = [11, 12, 13, 14, 15, 16, 17];
console.log(arr1);

const arr2 = new Array(11, 12, 13, 14, 15, 16, 17);
console.log(arr2);

const arr3 = Array.from({ length: 7 }, () => 11);
console.log(arr3);

const arr4 = Array.from({ length: 7 }, (_, i) => i + 11);
console.log(arr4);

//practice- print 100element in array with random dices
const diceRolls = Array.from({ length: 100 }, function () {
  return Math.trunc(Math.random() * 6) + 1;
});
console.log(diceRolls);



//----- ARRAY METHODS PRACTICE
const accounts = [
  { owner: "Vrahad Raizada", bank: "HDFC", movements: [200, -150, 350] },
  { owner: "Elon Musk", bank: "American Bank", movements: [50, 80, -30] },
  { owner: "Peter White", bank: "SBI", movements: [700, 650, 350] },
  { owner: "Vikram Kumar", bank: "Axis", movements: [600, -150, -350] },
  { owner: "Ashok Gupta", bank: "UCO", movements: [200, -150, 35, 500] },
];
//1. Find Total Deposits Amount Of All Bank's Accounts
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, dep) => sum + dep, 0);
console.log(`Total Deposits Amount in Bank: ${bankDepositSum}`);

//2. Find Total Number of Deposits in Bank atleast 250
const numDeposits250 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, cur) => (cur >= 250 ? ++acc : acc), 0);
console.log(`Number of Deposits atleast 250: ${numDeposits250}`);

//3. Find Total Deposits & Total Withdrawal Amount with creating object
const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(`⬆️Deposits: ${deposits}, ⬇️Withdrawals: ${withdrawals}`);

//4. Create a Function to Convert any String into TitleCase
function convertTitleCase(text) {
  const exceptions = ["a", "is", "am", "are", "but", "the", "an", "and"];
  const capilatize = (str) => str.replace(str[0], str[0].toUpperCase());

  const titleCase = text
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capilatize(word)))
    .join(" ");

  console.log(titleCase);
}
convertTitleCase("this is a nice title");
convertTitleCase("my name IS vrahad RAizada AND I Am 30 years old");
convertTitleCase("this is THE LONG title but not too long");
convertTitleCase("An apple WITH vinegar keeps you healthy");



//----- CODING CHALLENGE #4
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
//1.
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);
//2.
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
const dogSarahEat = dogSarah.curFood > dogSarah.recFood ? "much" : "little";
console.log(`Sarah's dog is eating too ${dogSarahEat}`);
//3.
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);
//4.
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);
//5.
console.log(dogs.some((dog) => dog.curFood === dog.recFood));
//6.
function checkEatingOkay(dog) {
  return dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 0.1;
}
console.log(dogs.some(checkEatingOkay));
//7.
const dogEatingOkay = dogs.filter(checkEatingOkay);
console.log(dogEatingOkay);
//8.
const dogsSorted = [...dogs].sort((a, b) => a.recFood - b.recFood)
console.log(dogsSorted);

*/
