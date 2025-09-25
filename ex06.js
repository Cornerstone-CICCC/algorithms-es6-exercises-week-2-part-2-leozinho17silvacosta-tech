// Every Exercise
// Instructions: Create an array of at least five numbers. Write code to check if every number in the array is positive.

const numbers = [4, -8, 14, -29, 31];

const value = numbers.every((num) => num >= 0 ? true : false)

console.log(value);
