// QUESTION 1

let x = 3;

let y = 5;

let newNum = 2 * x + y;

let newLength = (x - 1) / 2;

let newObject = newNum * newLength;

alert(newObject);

let a = 3;

let b = 4;

let c = 7;

let newDoors = 5 * c - 2 * a;

let newTime = a * b + 1 * b;

let newTree = newDoors / newTime;

let newAdvent = a * c - 2 * b;

let newChristmas = newTree * newAdvent;

alert(newChristmas);


// QUESTION 2

function square(num) {
alert (num*num);
}

square(50);


// QUESTION 3

let randomFacts = [
  'The Earth is the third planet from the Sun',
  'A group of Cows is called a Herd',
  'Bananas are berries, but Strawberries are not',
  'Honey never spoils',
  'The Great wall of China is visible from space',
  'Octopuses have three hearts',
  'Penguins only live in the Southern hemisphere',
  'The Eiffel tower can be about 15 cm taller in the Summer',
  'A day on Venus is longer than a year on Venus',
  'The Antarctic Blue Whale is the biggest animal in the World',
];

let newAlert = Math.floor(Math.random() * 9);
alert(randomFacts[newAlert]);