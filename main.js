console.log("Starting Javascript...");

//#region 1) Writing expressions with variables
// Exercise 1
let myName = "Silvia";
console.log(myName);

// Exercise 2
let myAge = 34;
console.log(myAge);

// Exercise 3 --> "You should see your age and the age difference." I see only my age. Is this ok?
let juliaAge = 32;
let ageDiff = (myAge - juliaAge);
console.log("myAge", myAge)
console.log(ageDiff);
//#endregion


//#region 2) Writing code with conditionals

// Exercise 4
if (myAge > 21) {
    console.log("You are older than 21");
} else {
    console.log("You are not older than 21");
}

// Exercise 5
if (myAge > juliaAge) {
    console.log("Julia is younger than you");
} else if (myAge < juliaAge) {
    console.log("Julia is older than you");
}  else  if (myAge == juliaAge) {
    console.log("You have the same age as Julia");
}
//#endregion

//#region 3) JavaScript Array
// Exercise 6
let myClass = ["Dickson", "Heron", "Jacopo", "Raul", "Sebastian", "Silvia", "Viktor"]
console.log(myClass);
console.log("firstName >>>", myClass[0]);
console.log("lastName >>>", myClass[6]);

// Is there any form to put this together in one "for-loop" instead of three?
// Why "7" on Dickson instead of "1"??
for (let i = 0; i < myClass.length; i++) {
    console.log(myClass[0]);
    
}

for (let i = 0; i < myClass.length; i++) {
    console.log(myClass[6]);
}

for (let i = 0; i < myClass.length; i++) {
    console.log(myClass[i]);
}


// Exercise 7
let myClassAges = [30, 31, 32, 33, 34, 35, 36, 37]
let myClassEvenNumbers = []


for (let i = 0; i < myClassAges.length; i++) {
    if (myClassAges[i] > 34) {
        myClassEvenNumbers.push(myClassAges[i])
    }
    
}
console.log("evennumbers", myClassEvenNumbers)

// while (myClassAges) {
//     console.log(myClassAges);
//     if (myClassAges = myClassEvenNumbers) {
//         console.log(myClassEvenNumbers);
//     }
//     break;
// }

// How do I select the "let my ClassAges" insted the last one?
// for (let i = 0; i < myClassAges.length; i++) {
//     console.log(myClassAges[i]);
// }

const myAges = {
    all: [30, 31, 32, 33, 34, 35, 36, 37],
    even: [30, 32, 34, 36]
} 

for (let x in myAges) {
    console.log(x, myAges[x]);
}


// Exercise 8
// I think the parameter is not ok because of the color?
let randomNumbers = [4, 2, 9, 1, 6]
let lowestNumber = randomNumbers[0]

function lowNumb(numbers) {
    console.log(numbers)
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
        if (numbers[i] < lowestNumber) {
           console.log("dentro del if", numbers[i])
            lowestNumber = numbers[i] 
       }
        
    }
    console.log("lowestnumber", lowestNumber)
}
lowNumb(randomNumbers);
console.log("delete this")


// Exercise 9
// I think the parameter is not ok because of the color?
// >> A)
// let numbersRandom = [1, 3, 27, 72, 5]
// let biggestNumber = 72

// function bigNumb(numbersRandom) {
//     console.log(biggestNumber);
// }
// bigNumb(biggestNumber)

// >> B)
let biggestNumber = [1, 3, 27, 72, 5]

function bigNumb(biggestNumber) {
    console.log(72);
}
bigNumb(biggestNumber);

// Exercise 10


// Exercise 11


// Exercise 12

//#endregion

