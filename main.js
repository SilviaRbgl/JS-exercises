console.log("Starting Javascript...");

//#region 1) Writing expressions with variables

// Exercise 1
let myName = "Silvia";
console.log("exercise 1 >>>", myName);

// Exercise 2
let myAge = 34;
console.log("exercise 2 >>>", myAge);

// Exercise 3
let juliaAge = 32;
let ageDiff = (myAge - juliaAge);
console.log("exercise 3 >>>", myAge, ageDiff);
//#endregion


//#region 2) Writing code with conditionals

// Exercise 4
if (myAge > 21) {
    console.log("exercise 4 >>>", "You are older than 21");
} else {
    console.log("exercise 4 >>>", "You are not older than 21");
}

// Exercise 5
if (myAge > juliaAge) {
    console.log("exercise 5 >>>", "Julia is younger than you");
} else if (myAge < juliaAge) {
    console.log("exercise 5 >>>", "Julia is older than you");
}  else  if (myAge == juliaAge) {
    console.log("exercise 5 >>>", "You have the same age as Julia");
}
//#endregion


//#region 3) JavaScript Array

// Exercise 6
let myClass = ["Heron", "Dickson", "Viktor", "Sebastian", "Jacopo", "Raul", "Silvia"]
    myClass.sort();
    console.log("exercise 6a >>>", myClass);
    console.log("exercise 6b >>>",  myClass[0]);
    console.log("exercise 6c >>>", myClass[6]);

for (let i = 0; i < myClass.length; i++) {
    console.log("exercise 6d >>>", myClass[i]);
    }

for (let i = 0; i < myClass.length; i++) {
    console.log("exercise 6e >>>", myClass[0]);  
}

for (let i = 0; i < myClass.length; i++) {
    console.log("exercise 6f >>>", myClass[6]);
}

// Exercise 7
let ageStudents = [39, 27, 34, 35, 28, 45, 25];
let i = 0;

while (i < ageStudents.length) {
    console.log("exercise 7a (while) >>>", ageStudents[i]);
    i++;
}

let b = 0
while (b < ageStudents.length) {
    if (ageStudents[b] % 2 === 0) {
        console.log("exercise 7b (while) >>>", ageStudents[b]);      
    }
   b++
}
 
for (let i = 0; i < ageStudents.length; i++) {
    console.log("exercise 7c (for) >>>", ageStudents[i]);
}

let c = 0
for (let c = 0; c < ageStudents.length; c++) {
    if (ageStudents[c] % 2 === 0) {
    console.log("exercise 7d (for) >>>", ageStudents[c]);
    }
    c++
}

// Exercise 8
// let arrayLowNumber = [23, 45, 2, 85, 33, 12];

// function lowNumber(array) {  
//     for (let i = 0; i < arrayLowNumber.length; i++) {
//         if (arrayLowNumber[i] < arrayLowNumber) {
//         }
//     }
// console.log("exercise 8 >>>", arrayLowNumber[i]); 
// }
// lowNumber(arrayLowNumber[i]);


// Exercise 9

// Exercise 10
let arrayOne = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
let index = 1;

function positionNumber(params) {
    for (let i = 0; i < arrayOne.length; i++) {
        if (index == arrayOne[1]);
    }
    console.log("exercise 10 >>>", arrayOne[1]);
}
positionNumber(arrayOne[1]);

// Exercise 11
let arrayTwo = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];


// Exercise 12 -> I dont see the comas, is thas allright?
let myColor = ["Red", "Green", "White", "Black"];
let allColors = [];
let separator = " , ";

for (let i = 0; i < myColor.length; i++) {
    allColors += myColor[i];
    if (i < myColor.length - 1) allColors += separator;
}

console.log("exercise12 >>>", allColors);

//#endregion


//#region 4) JavaScript String

//Exercise 13
function reverseNumber(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log("exercise13 >>>", Number(reverseNumber(32443)));

//Exercise 14
function alphabetOrder(abc) {
    return abc.split("").sort().join("");
}
console.log("exercise14 >>>", alphabetOrder("silvia"));

// Exercise 15
let mySentence = "prince of persia";
let words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

words.join(" ");
console.log("exercise15 >>>", words.join(" "));

// Exercise 16


//#endregion


//#region 5) DOM manipulation exercises

//Exercise 17

//Exercise 18

//#endregion


//#region 6) Extra exercises

// Exercise 19


// Exercise 20

// Exercise 21

// Exercise 22

// Exercise 23

// Exercise 24

// Exercise 25

// Exercise 26

// Exercise 27

// Exercise 28


//#endregion
