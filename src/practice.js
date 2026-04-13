// Variables
let learnername = "Piyush";
const learnerage = 20;

// Arrow Function
const checkEvenOdd = (n) => {
  return n % 2 === 0 ? "Even" : "Odd";
};

// Condition
console.log(checkEvenOdd(5));

// Loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Array + map
const A = ["React", "Node", "Mongo"];
A.map((skill) => console.log(skill));

// Object
const studentProfile = {
  name: "Piyush",
  age: 20,
  course: "MERN",
};

// Filter
const number = [10, 25, 30, 15];
const filtereed = number.filter((n) => n > 18);
console.log(filtereed);