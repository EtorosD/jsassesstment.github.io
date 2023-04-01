console.log ("Hello World")

let Person = {

    Firstname: "First Name: David",
    Lastname:  "Last Name: Sorote",
    Age: "30",
    Hobbies: [
        "Playing Videogames",
        "Reading Books",
        "Watching Movies"
    ],
    workAddress:"Toril Davao City"
}


let David = ("David Sorote is 30 years of age")

let myHobbies = ("My hobbies are: playing videogames, reading books and watching movies")

let Married = ("The value of isMarried is:")

let isMarried = true

console.log(Person.Firstname);
console.log(Person.Lastname);
console.log(Person.Age);
console.log(Person.Hobbies);
console.log(Person.workAddress);
console.log(David);
console.log(myHobbies);
console.log(Married);
console.log(isMarried);
    


// Exercise 2

let a = 25;
let b = 35;
console.log(a += b);
console.log(a -= b);
console.log(a *= b);
console.log(a /= b);
console.log(a <= b);
console.log(a >= b);
console.log(a !== b);

// Exercise 3


// Exercise 4



function checkOddOrEven(number) {
    if (isNaN(number)) {
      console.log("Unexpected input: " + number);
    } else if (typeof number === "string") {
      console.log("Unexpected input: " + number);
    } else if (number === null || number === undefined) {
      console.log("Unexpected input: " + number);
    } else if (number % 2 === 0) {
      console.log(number + " is even.");
    } else {
      console.log(number + " is odd.");
    }
  }
  
  checkOddOrEven(5);
  checkOddOrEven(10);
  checkOddOrEven("8");
  checkOddOrEven("20");
  checkOddOrEven("seven");
  checkOddOrEven("Fifteen");
  checkOddOrEven(true);
  checkOddOrEven(null);
  checkOddOrEven(undefined);
  checkOddOrEven(NaN);

  // Exercise 5 

  for (let i = 20; i >= 0; i--) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

  // Exercise 6
  
  while (true) {
    let number = prompt("Give me a number:");

    if (number < 50) {
        console.log("The number entered is less than 50. Terminating loop.");
        break;
    }
  
    if (number % 10 === 0) {
      console.log("The number entered is divisible by 10. Skipping number.");
      continue;
    }
  
    if (number % 5 === 0) {
      console.log("The number entered is divisible by 5. Displaying number: ");
    }
  
    
    console.log(number);
  }