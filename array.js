// arrays

// adding element

const number = [3, 4];

number.push(5, 6);

// Beginers

number.unshift(1, 2);

number.splice(2, 2, "avinash");

// finding element

console.log(number.indexOf(2));
console.log("\n");
console.log(number);

console.log(number.lastIndexOf("avinash"));

// Reference Type

// Removing element

const a = [1, 2, 3, 4, 5, 6];

const pop = a.pop();

console.log(a);

// emptying an array

let n = [1, 2, 3, 4, 5, 6, 7];
let another = n;

another = [];

console.log(another);

// iterate Array

const numbers = [3, 8, 7, 1, 5];

// Using a for...of loop
for (let number1 of numbers) {
  console.log(number1);
}

// Using the forEach method correctly
numbers.forEach((number1) => console.log(number1));

// Join Array

const joined=numbers.join('*');
console.log(joined);
console.log('\n');

// sort 

numbers.sort()
console.log(numbers);
console.log('\n');

// reverse 

numbers.reverse()
console.log(numbers);
console.log('\n');

// filters

const filterd=numbers.filter(n=>n>=0);
console.log(filterd);


// Map Method


