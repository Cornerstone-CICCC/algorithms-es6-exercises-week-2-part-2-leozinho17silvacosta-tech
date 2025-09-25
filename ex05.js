// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.

const numbers = [3, 5, 7, 10, 15];

const even = (numbers) => {

    return numbers % 2 === 0
}

console.log(numbers.some(even));