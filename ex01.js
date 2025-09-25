// Sort Exercise
// Instructions: Create an array of at least five numbers in random order. Write the code to sort this array in ascending order.


const randomNumbers = [1, 37, 51, 23, 4];

function comparatorNumber (a, b) {
if (a > b) return 1;
if (a < b) return -1;
return 0

}

randomNumbers.sort(comparatorNumber);
console.log(randomNumbers)




